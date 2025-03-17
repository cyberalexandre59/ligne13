// pages/admin/posts.tsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import './styles.css';

interface Post {
    id: number;
    title: string;
}

const AdminPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch("/api/check-auth");
            const data = await res.json();
            if (!res.ok || !data.authenticated) {
                router.push("/admin/login");
            }
        };
        checkAuth();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/api/posts");
            const data: Post[] = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const deletePost = async (id: number) => {
        const res = await fetch(`/api/posts/delete/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    };

    return (
        <div className="admin-container">
            <header>
                <h1>Gestion des Posts - Admin</h1>
            </header>

            <div className="admin-actions">
                <Link href="/admin/posts/create">
                    <button className="create-post-btn">Créer un nouveau post</button>
                </Link>
            </div>

            <table className="posts-table">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <Link href={`/admin/posts/edit/${post.id}`}>
                                        <button className="edit-btn">Éditer</button>
                                    </Link>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deletePost(post.id)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2}>Aucun post trouvé</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPosts;
