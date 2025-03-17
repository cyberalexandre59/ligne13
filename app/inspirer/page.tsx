import Link from "next/link"
import { ArrowLeft, Users, Lightbulb, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"


export default function InspirerPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspirer vos collaborateurs</h1>
          <p className="text-xl text-[#e4c9e5] max-w-2xl">
            Transformez la culture de votre entreprise et favorisez l'équité grâce à nos ateliers de sensibilisation sur
            mesure.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Nos ateliers de sensibilisation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Équité et inclusion",
                  description: "Comprendre et promouvoir l'équité et l'inclusion dans votre organisation.",
                  icon: <Users className="h-10 w-10 text-[#f9a8c9]" />,
                },
                {
                  title: "Leadership inclusif",
                  description: "Développer des compétences de leadership qui favorisent un environnement inclusif.",
                  icon: <Lightbulb className="h-10 w-10 text-[#f9a8c9]" />,
                },
                {
                  title: "Gestion de la diversité",
                  description: "Stratégies pour gérer et tirer parti de la diversité dans votre équipe.",
                  icon: <TrendingUp className="h-10 w-10 text-[#f9a8c9]" />,
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
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Notre approche</h2>
            <div className="bg-[#f9a8c9]/10 p-8 rounded-lg">
              <p className="text-lg text-[#330c59] mb-6">
                Nos ateliers sont conçus pour être interactifs, engageants et adaptés à votre contexte d'entreprise.
                Nous utilisons une combinaison de présentations, d'exercices pratiques et de discussions de groupe pour
                assurer un apprentissage efficace et durable.
              </p>
              <ul className="list-disc list-inside text-[#330c59] space-y-2">
                <li>Sessions personnalisées selon vos besoins</li>
                <li>Animateurs expérimentés et passionnés</li>
                <li>Outils pratiques à mettre en œuvre immédiatement</li>
                <li>Suivi post-atelier pour un impact à long terme</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Témoignages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Les ateliers de La Ligne 13 ont vraiment ouvert les yeux de notre équipe sur l'importance de l'inclusion. Nous avons vu des changements positifs presque immédiatement.",
                  author: "Marie D., DRH",
                },
                {
                  quote:
                    "J'ai apprécié l'approche pratique et les outils concrets que nous avons reçus. Cela a rendu le processus de changement beaucoup plus tangible et réalisable.",
                  author: "Thomas L., Manager",
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
                Réserver un atelier
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

