import Link from "next/link"
import { ArrowLeft, Pen, Book, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"


export default function EcrirePage() {
  return (
    <div className="min-h-screen bg-white">
{/* Ajoutez la NavBar ici */}
      <NavBar />

      <header className="bg-[#330c59] text-white py-20 px-4">
        <div className="container mx-auto">
          <Link
            href="/"
            className="text-[#ffeb5b] hover:text-[#f9a8c9] transition-colors inline-flex items-center mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expression par l'écriture</h1>
          <p className="text-xl text-[#e4c9e5] max-w-2xl">
            Libérez votre voix intérieure et explorez votre créativité à travers nos ateliers d'écriture thérapeutique
            et créative.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Nos ateliers d'écriture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Écriture thérapeutique",
                  description: "Utilisez l'écriture comme outil de guérison et de développement personnel.",
                  icon: <Heart className="h-10 w-10 text-[#f9a8c9]" />,
                },
                {
                  title: "Écriture créative",
                  description: "Explorez votre imagination et développez vos compétences narratives.",
                  icon: <Pen className="h-10 w-10 text-[#f9a8c9]" />,
                },
                {
                  title: "Journal intime guidé",
                  description: "Apprenez à tenir un journal pour la réflexion personnelle et la croissance.",
                  icon: <Book className="h-10 w-10 text-[#f9a8c9]" />,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-[#e4c9e5]">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#330c59]">{item.title}</h3>
                  <p className="text-[#330c59]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Pourquoi l'écriture ?</h2>
            <div className="bg-[#f9a8c9]/10 p-8 rounded-lg">
              <p className="text-lg text-[#330c59] mb-6">
                L'écriture est un puissant outil de développement personnel et professionnel. Elle vous permet de :
              </p>
              <ul className="list-disc list-inside text-[#330c59] space-y-2">
                <li>Clarifier vos pensées et émotions</li>
                <li>Réduire le stress et l'anxiété</li>
                <li>Stimuler votre créativité</li>
                <li>Améliorer votre confiance en vous</li>
                <li>Développer votre capacité d'introspection</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Témoignages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Les ateliers d'écriture de La Ligne 13 m'ont aidée à surmonter un blocage créatif que j'avais depuis des années. C'est libérateur !",
                  author: "Émilie R., Écrivaine en herbe",
                },
                {
                  quote:
                    "J'ai découvert une nouvelle façon de me comprendre à travers l'écriture thérapeutique. C'est devenu une partie essentielle de ma routine de bien-être.",
                  author: "Marc L., Entrepreneur",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-[#e4c9e5]">
                  <p className="text-[#330c59] italic mb-4">"{item.quote}"</p>
                  <p className="text-[#f9a8c9] font-semibold">- {item.author}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link href="/contacts">
            <Button className="bg-[#f9a8c9] text-[#330c59] hover:bg-[#ffeb5b] px-8 py-4 text-lg rounded-none">
              S'inscrire à un atelier d'écriture
            </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

