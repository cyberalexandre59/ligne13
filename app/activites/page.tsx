import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"

export default function ActivitesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Toutes nos activités</h1>
          <p className="text-xl text-[#e4c9e5] max-w-2xl">
            Découvrez l'ensemble de nos services pour vous inspirer, vous coacher et vous exprimer.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-[#330c59]">Nos domaines d'expertise</h2>

            {[
              {
                title: "Inspirer vos collaborateurs",
                description:
                  "Ateliers de sensibilisation pour transformer la culture de votre entreprise et favoriser l'équité.",
                link: "/inspirer",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Coaching en leadership féminin",
                description:
                  "Programmes personnalisés pour développer votre potentiel de leader et affirmer votre place.",
                link: "/coacher",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Expression par l'écriture",
                description: "Ateliers d'écriture thérapeutique et créative pour libérer votre voix intérieure.",
                link: "/ecrire",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-[#330c59]">{activity.title}</h3>
                  <p className="text-[#330c59]/70 mb-6">{activity.description}</p>
                  <Link href={activity.link}>
                    <Button className="bg-[#f9a8c9] text-[#330c59] hover:bg-[#ffeb5b] px-6 py-3 rounded-none inline-flex items-center">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Pourquoi choisir La Ligne 13 ?</h2>
            <div className="bg-[#f9a8c9]/10 p-8 rounded-lg">
              <ul className="list-disc list-inside text-[#330c59] space-y-4">
                <li>Une approche holistique du développement personnel et professionnel</li>
                <li>Des programmes sur mesure adaptés à vos besoins spécifiques</li>
                <li>Une équipe d'experts passionnés et expérimentés</li>
                <li>Un suivi personnalisé pour garantir des résultats durables</li>
                <li>Une communauté bienveillante et solidaire</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Prêt à commencer votre parcours ?</h2>
            <p className="text-lg text-[#330c59]/70 mb-8">
              Que vous souhaitiez inspirer vos équipes, développer votre leadership ou explorer votre créativité, nous
              avons le programme qu'il vous faut. Contactez-nous pour discuter de vos objectifs et trouver la solution
              la plus adaptée à vos besoins.
            </p>
            <div className="text-center">
              <Link href="/contacts">
              <Button className="bg-[#330c59] text-white hover:bg-[#f9a8c9] hover:text-[#330c59] px-8 py-4 text-lg rounded-none">
                Nous contacter
              </Button>
            </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

