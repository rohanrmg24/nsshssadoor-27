import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface AdminContextType {
  isAdmin: boolean;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType>({ isAdmin: false, isLoading: true });

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          console.log('Checking admin status for user:', user.id);
          
          // First try to get the existing profile
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('is_admin')
            .eq('id', user.id)
            .maybeSingle();

          if (profileError) {
            console.error('Error fetching profile:', profileError);
            throw profileError;
          }

          // If no profile exists, create one
          if (!profile) {
            console.log('No profile found, creating new profile');
            const { data: newProfile, error: insertError } = await supabase
              .from('profiles')
              .insert([
                { 
                  id: user.id,
                  username: user.email,
                  is_admin: false
                }
              ])
              .select('is_admin')
              .single();

            if (insertError) {
              console.error('Error creating profile:', insertError);
              throw insertError;
            }

            setIsAdmin(newProfile?.is_admin || false);
          } else {
            console.log('Profile found:', profile);
            setIsAdmin(profile.is_admin || false);
          }
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        toast({
          title: "Error",
          description: "Failed to check admin status",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkAdminStatus();
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [toast]);

  return (
    <AdminContext.Provider value={{ isAdmin, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};