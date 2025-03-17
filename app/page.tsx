import Link from "next/link"
import Image from "next/image"
import { Calendar, Linkedin, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen font-light">
      {/* Ligne décorative */}
      <div className="fixed top-0 left-0 w-1 h-full bg-[#f9a8c9] z-10"></div>
      <div className="fixed top-0 left-[13px] w-[2px] h-full bg-[#ffeb5b] opacity-30 z-10"></div>

      {/* Header avec fond blanc */}
      <header className="bg-white py-6 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="relative z-20">
                <h1 className="text-4xl font-bold tracking-tight text-[#330c59]">
                <Image src="/images/logo.png" alt="La Ligne 13 Logo" width={100} height={100} className="inline-block mr-[15px]" />
                <span className="text-[#f9a8c9]">La</span> <span className="text-[#f9a8c9]">Ligne</span> <span className="text-[#ffeb5b]">13</span>
                </h1>
            </div>

            <div className="flex items-center space-x-6">
              <nav className="hidden lg:block">
                <ul className="flex gap-10">
                  {["Inspirer", "Coacher", "Ecrire"].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="text-[#330c59] hover:text-[#f9a8c9] transition-colors relative group"
                      >
                        {item}
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#f9a8c9] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link href="/blog">
                <Button className=" text-[#330c59] hover:bg-[#ffeb5b] px-4 py-2 rounded-none">Blog</Button>
              </Link>
            </div>

            <button className="lg:hidden z-20 text-[#330c59]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero section avec baseline - fond violet */}
        <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-[#330c59] text-[#ffeb5b]">
          <div className="container mx-auto relative z-20">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Chaque chemin commence par une ligne
              </h2>
                <div className="flex items-center">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8"></h2></div>

              <p className="text-[#e4c9e5] text-xl md:text-2xl max-w-2xl mb-12">De quoi avez-vous besoin ?</p>

              <div className="grid gap-4 md:grid-cols-3 max-w-3xl">
                {[
                  {
                    title: "Inspirer mes collaborateurs",
                    href: "/inspirer",
                    color: "border-[#f9a8c9]",
                  },
                  {
                    title: "Me faire coacher",
                    href: "/coacher",
                    color: "border-[#ffeb5b]",
                  },
                  {
                    title: "M'exprimer par l'écriture",
                    href: "/ecrire",
                    color: "border-[#e4c9e5]",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`border-l-4 ${item.color} pl-4 py-2 text-[#e4c9e5] hover:text-[#ffeb5b] transition-colors group flex items-center`}
                  >
                    <span className="mr-2">{item.title}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Cercle décoratif */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border-2 border-[#f9a8c9] opacity-20"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full border border-[#e4c9e5] opacity-10"></div>
        </section>

        {/* Notre promesse - fond blanc */}
        <section className="py-20 px-4 relative bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 inline-block relative text-[#330c59]">
              Notre promesse
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#f9a8c9]"></span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Bouger les mentalités",
                  description:
                    "Dans la tech et ailleurs, nous transformons les cultures d'entreprise pour plus d'équité.",
                },
                {
                  title: "Démocratiser le coaching",
                  description: "Rendre le coaching accessible à toutes et tous pour développer chaque potentiel.",
                },
                {
                  title: "Bâtir une société équilibrée",
                  description: "Contribuer à créer un monde professionnel où chacun peut s'épanouir pleinement.",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f9a8c9]/10 to-white rounded-lg transform transition-transform duration-300 group-hover:scale-105"></div>
                  <div className="relative z-10 p-6 border border-[#e4c9e5]/30 rounded-lg shadow-lg">
                    <span className="text-[#f9a8c9] text-5xl font-light opacity-50 absolute -top-4 left-4">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 relative z-10 text-[#330c59]">{item.title}</h3>
                    <p className="text-[#330c59]/70 relative z-10">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nos activités - alternance de sections */}
        <section id="activities" className="relative">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-12 inline-block relative text-[#330c59]">
              Nos activités
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#f9a8c9]"></span>
            </h2>
          </div>

          {/* Activité 1 - fond violet */}
          <div id="inspire" className="bg-[#330c59] py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="w-20 h-1 bg-[#f9a8c9] mb-6"></div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#ffeb5b]">Sensibilisation en entreprise</h3>
                  <p className="text-[#e4c9e5] mb-6">
                    Changez la mentalité sur l'équité homme-femme au sein de votre entreprise grâce à nos ateliers
                    spécialement conçus pour les RH, managers et équipes DEI.
                  </p>
                  <Link href="/inspirer">
                    <Button className="bg-transparent hover:bg-[#f9a8c9] text-[#f9a8c9] hover:text-[#330c59] border border-[#f9a8c9] rounded-none px-6 group">
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/egalite-homme-femme.jpg"
                    alt="Sensibilisation en entreprise"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Activité 2 - fond blanc */}
          <div id="coach" className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="w-20 h-1 bg-[#f9a8c9] mb-6"></div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#330c59]">Coaching en leadership féminin</h3>
                  <p className="text-[#330c59]/70 mb-6">
                    Développez votre leadership authentique et affirmez votre place dans le monde professionnel grâce à
                    nos programmes de coaching individuels et collectifs.
                  </p>
                  <Link href="/coacher">
                    <Button className="bg-transparent hover:bg-[#f9a8c9] text-[#330c59] hover:text-white border border-[#f9a8c9] rounded-none px-6 group">
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/leadership-feminin.jpg"
                    alt="Coaching en leadership féminin"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Activité 3 - fond violet clair */}
          <div id="write" className="bg-[#e2d0e2] py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="w-20 h-1 bg-[#f9a8c9] mb-6"></div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#330c59]">Expression par l'écriture</h3>
                  <p className="text-[#330c59]/70 mb-6">
                    Vous souhaitez vous exprimer, mais n'osez pas franchir la porte d'une coach ? Déposer ? Libérer le
                    trop plein ? Nos ateliers d'écriture sont faits pour vous.
                  </p>
                  <Link href="/ecrire">
                    <Button className="bg-transparent hover:bg-[#f9a8c9] text-[#330c59] hover:text-white border border-[#f9a8c9] rounded-none px-6 group">
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/ecriture.jpg"
                    alt="Expression par l'écriture"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Nouvelle activité pour le blog */}
          <div id="blog" className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="w-20 h-1 bg-[#f9a8c9] mb-6"></div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#330c59]">Notre Blog</h3>
                  <p className="text-[#330c59]/70 mb-6">
                    Découvrez nos articles sur le leadership, l'inclusion et le développement personnel.
                  </p>
                  <Link href="/blog">
                    <Button className="bg-transparent hover:bg-[#f9a8c9] text-[#330c59] hover:text-white border border-[#f9a8c9] rounded-none px-6 group">
                      <span>Lire nos articles</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/blog.jpg"
                    alt="Blog La Ligne 13"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 text-center">
            <Link href="/activites">
              <Button className="bg-[#f9a8c9] text-white hover:bg-[#330c59] px-8 py-6 text-lg rounded-none">
                Toutes nos activités
              </Button>
            </Link>
          </div>
        </section>

        {/* Coaching - fond violet */}
        <section id="coaching" className="py-20 px-4 relative bg-[#330c59]">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-[#f9a8c9]"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-[#f9a8c9]"></div>

              <div className="bg-[#420e73] p-10 md:p-16 text-center relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-[#ffeb5b]">Je souhaite me faire coacher</h2>
                <p className="text-[#e4c9e5] mb-10 max-w-2xl mx-auto">
                  Prenez rendez-vous pour un coaching individuel ou découvrez nos programmes de coaching de groupe
                  adaptés à vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/coacher">
                    <Button className="bg-[#f9a8c9] text-[#330c59] hover:bg-[#ffeb5b] px-8 py-5 rounded-none">
                      <Calendar className="mr-2 h-5 w-5" />
                      Prendre rendez-vous
                    </Button>
                  </Link>
                  <Link href="/coacher">
                    <Button className="bg-transparent border border-[#f9a8c9] text-[#ffeb5b] hover:bg-[#420e73] px-8 py-5 rounded-none">
                      Nos programmes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cibles - fond blanc */}
        <section className="py-20 px-4 relative bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 inline-block relative text-[#330c59]">
              Nos cibles
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#f9a8c9]"></span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ateliers de sensibilisation",
                  audience: "RH, Managers, RSE, DEI (Diversité et Inclusion)",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  title: "Coachings en leadership féminin",
                  audience: "Les femmes",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                },
                {
                  title: "Ateliers de coaching via l'écriture",
                  audience: "Les femmes et hommes de 20 à 99 ans !",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-[#f9a8c9] pl-6 py-4">
                  <div className="text-[#f9a8c9] mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#330c59]">{item.title}</h3>
                  <p className="text-[#330c59]/70">{item.audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-4 bg-[#330c59] text-[#ffeb5b]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-[#f9a8c9]">La</span> Ligne <span className="text-[#f9a8c9]">13</span>
              </h3>
              <p className="text-[#e4c9e5] mb-6">
                Coaching, leadership et expression pour transformer votre parcours professionnel et personnel.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Informations à savoir</h4>
              <ul className="space-y-4">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/audrey-rebout9144b7162/",
                    icon: <Linkedin className="h-5 w-5" />,
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/la_ligne_13.coaching/",
                    icon: <Instagram className="h-5 w-5" />,
                  },
                  {
                    name: "Site Notion",
                    url: "https://overjoyed-pick-c86.notion.site/La-Ligne-13176a4f83bf498050abc6d63ce3be039a?pvs=74",
                    icon: <ExternalLink className="h-5 w-5" />,
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#e4c9e5] hover:text-[#ffeb5b] transition-colors group"
                    >
                      <span className="flex items-center justify-center w-8 h-8 mr-3 border border-[#f9a8c9] group-hover:bg-[#f9a8c9] group-hover:text-[#330c59] transition-colors">
                        {item.icon}
                      </span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#420e73] text-center">
            <p className="text-[#e4c9e5] text-sm">© {new Date().getFullYear()} La Ligne 13. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

