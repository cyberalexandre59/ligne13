"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar"

{/* Ajoutez la NavBar ici */}
      <NavBar />

// Définir le type pour les articles de blog
interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); // État pour stocker les articles
  const [loading, setLoading] = useState<boolean>(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  useEffect(() => {
    let isMounted = true; // flag pour savoir si le composant est toujours monté

    async function fetchPosts() {
      try {
        const res = await fetch("http://localhost:3000/api/posts");
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          const formattedPosts = data.map((post: BlogPost) => ({
            ...post,
            slug: post.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
          }));
          setBlogPosts(formattedPosts);
        }
      } catch (err) {
        if (isMounted) {
          setError("Impossible de récupérer les articles.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      isMounted = false; // Mettre isMounted à false quand le composant est démonté
    };
  }, []);


  if (loading) {
    return <div>Chargement des articles...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#330c59] text-white py-20 px-4">
        <div className="container mx-auto">
          <Link
            href="/"
            className="text-[#ffeb5b] hover:text-[#f9a8c9] transition-colors inline-flex items-center mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog La Ligne 13</h1>
          <p className="text-xl text-[#e4c9e5] max-w-2xl">
            Découvrez nos articles sur le leadership, l'inclusion et le développement personnel.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#e4c9e5]">
                <Image
                  src="/placeholder.svg" // Utiliser une image de placeholder par défaut
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-[#f9a8c9] mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-2 text-[#330c59]">{post.title}</h2>
                  <p className="text-[#330c59]/70 mb-4">{post.content.substring(0, 150)}...</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="bg-transparent hover:bg-[#f9a8c9] text-[#330c59] hover:text-white border border-[#f9a8c9] rounded-none px-4 py-2">
                      Lire l'article
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
