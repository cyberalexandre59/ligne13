import Link from "next/link"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-[#e4c9e5] max-w-2xl">
            Nous serions ravis de vous entendre. Pour toute question ou demande, n'hésitez pas à nous contacter.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Envoyez-nous un email</h2>
          <Link href="mailto:audrey.rebout@laligne13.fr">
            <Button className="bg-[#f9a8c9] text-[#330c59] hover:bg-[#ffeb5b] px-8 py-4 text-lg rounded-none inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              audrey.rebout@laligne13.fr
            </Button>
          </Link>
        </div>

        <div className="container mx-auto text-center mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#330c59]">ou</h2>
        </div>

        <div className="container mx-auto text-center mt-8">
          <h2 className="text-3xl font-bold mb-8 text-[#330c59]">Appelez-nous</h2>
          <p className="text-xl text-[#330c59] mb-4">Nous sommes disponibles du lundi au vendredi de 9h à 18h.</p>
          <p className="text-xl text-[#330c59] mb-8">
            <Phone className="inline-block mr-2 h-5 w-5" />
            +33 1 23 45 67 89
          </p>
        </div>
      </main>
    </div>
  )
}

