
import Link from "next/link";

export const metadata = {
  title: "Sobre mim | Meu Portfólio",
  description:
    "Conheça um pouco sobre minha trajetória em Análise e Desenvolvimento de Sistemas.",
};

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#F7F0E6] text-[#49335F]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold text-[#7651A8]">
          Portfólio
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-[#7651A8] hover:text-[#49335F]">
            Início
          </Link>
          <Link href="/projetos" className="text-[#7651A8] hover:text-[#49335F]">
            Projetos
          </Link>
          <Link href="/sobre" className="font-semibold text-[#7651A8]">
            Sobre mim
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
       
        <h1 className="text-4xl font-bold md:text-4xl">
          Um pouco sobre mim
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#66596F]">
          <p>
            Sou estudante de Tecnologia em Análise e Desenvolvimento de Sistemas (ADS) no
            Instituto Federal do Ceará (IFCE). Estou construindo minha jornada na área de
            tecnologia, aprendendo sobre programação, desenvolvimento de sistemas e novas ferramentas.
            
            </p>

            <p>
            Além da programação, gosto de explorar a área de design, criar artes e pensar em formas
            de deixar os projetos mais bonitos e organizados. Estou sempre buscando aprender coisas
            novas, desenvolver minhas habilidades e colocar meus conhecimentos em prática por meio
            de atividades e projetos.
          </p>
           <p>
            Tenho interesse em aprender novas ferramentas, desenvolver
            minhas habilidades em programação e transformar ideias em
            soluções por meio da tecnologia.
          </p>
        </div>

        
      </section>

       <footer className="border-t border-[#E5D9EC] px-6 py-6 text-center text-sm text-[#766B7D]">
        © Brincando/aprendendo com Next.js e Tailwind CSS
      </footer>
    </main>
  );
}
