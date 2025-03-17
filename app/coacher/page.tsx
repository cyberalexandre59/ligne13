import Link from "next/link"
import { ArrowLeft, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"

export default function CoacherPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Coaching en leadership féminin</h1>
          <p className="text-xl text-[#e4c9e5] max-w-2xl">
            Développez votre potentiel de leader et affirmez votre place dans le monde professionnel grâce à nos
            programmes de coaching personnalisés.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Nos programmes de coaching</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Coaching individuel",
                  description:
                    "Sessions personnalisées pour répondre à vos défis spécifiques et atteindre vos objectifs de carrière.",
                  icon: <Target className="h-10 w-10 text-[#f9a8c9]" />,
                },
                {
                  title: "Coaching de groupe",
                  description:
                    "Ateliers interactifs pour développer vos compétences de leadership au sein d'un groupe de pairs.",
                  icon: <Users className="h-10 w-10 text-[#f9a8c9]" />,
                },
                {
                  title: "Programme intensif",
                  description:
                    "Un parcours complet combinant sessions individuelles et de groupe pour une transformation rapide.",
                  icon: <Zap className="h-10 w-10 text-[#f9a8c9]" />,
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
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Notre méthodologie</h2>
            <div className="bg-[#f9a8c9]/10 p-8 rounded-lg">
              <p className="text-lg text-[#330c59] mb-6">
                Notre approche de coaching est basée sur l'empowerment et l'authenticité. Nous vous aidons à :
              </p>
              <ul className="list-disc list-inside text-[#330c59] space-y-2">
                <li>Identifier et surmonter les obstacles internes et externes</li>
                <li>Développer une confiance en soi inébranlable</li>
                <li>Affiner votre style de leadership authentique</li>
                <li>Maîtriser l'art de la communication assertive</li>
                <li>Créer un réseau de soutien solide</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Témoignages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Le coaching avec La Ligne 13 a été un véritable tournant dans ma carrière. J'ai gagné en confiance et en clarté sur mes objectifs professionnels.",
                  author: "Sophie M., Directrice Marketing",
                },
                {
                  quote:
                    "Les sessions de groupe ont été une révélation. Partager avec d'autres femmes leaders m'a permis de me sentir moins seule et plus déterminée.",
                  author: "Laure B., Entrepreneure",
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
                Commencer mon parcours de coaching
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

