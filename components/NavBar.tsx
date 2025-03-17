import Link from "next/link"
import Image from "next/image"
import { Calendar, Linkedin, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavBar() {
  return (
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
              <Button className="text-[#330c59] hover:bg-[#ffeb5b] px-4 py-2 rounded-none">Blog</Button>
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
  )
}