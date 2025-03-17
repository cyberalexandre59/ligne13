import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch("/api/check-auth");
            const data = await res.json();
            if (!data.authenticated) {
                router.push("/login");
            } else {
                setIsAuthenticated(true);
            }
        };
        checkAuth();
    }, []);

    if (!isAuthenticated) return <p>Chargement...</p>;

    return <h1>Bienvenue dans l'admin</h1>;
};

export default AdminPage;
