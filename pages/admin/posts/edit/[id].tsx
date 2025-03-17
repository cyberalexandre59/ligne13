// pages/admin/posts/edit/[id].tsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import './edit.css';

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`/api/posts/${id}`);
            const data = await res.json();
            setTitle(data.title);
            setContent(data.content);
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`/api/posts/edit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
            router.push("/admin/posts");
        } else {
            alert("Erreur lors de l'édition du post");
        }
    };

    return (
        <div>
            <h1>Editer le post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default EditPost;
