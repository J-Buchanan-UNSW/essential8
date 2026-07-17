import { createContext, useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { getCurrentUser } from "aws-amplify/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function refreshUser() {
        try {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshUser();

        const unsubscribe = Hub.listen("auth", ({ payload }) => {
            switch (payload.event) {
                case "signedIn":
                    refreshUser();
                    break;

                case "signedOut":
                    setUser(null);
                    break;

                default:
                    break;
            }
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: !!user,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}