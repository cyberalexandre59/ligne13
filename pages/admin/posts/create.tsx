// pages/admin/posts/create.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import './create.css'

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/posts/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
            router.push("/admin/posts");
        } else {
            alert("Erreur lors de la création du post");
        }
    };

    return (
        <div>
            <h1>Créer un nouveau post</h1>
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
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default CreatePost;
