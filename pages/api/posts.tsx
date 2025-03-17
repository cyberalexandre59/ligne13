import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AdminPosts = () => {
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch("/api/check-auth");
            if (!res.ok) {
                router.push("/admin/login");
            }
        };
        checkAuth();
    }, []);

    // Récupérer les posts
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/api/posts");
            const data = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Admin - Gestion des Posts</h1>
            {/* Liste des posts ici */}
        </div>
    );
};

export default AdminPosts;
