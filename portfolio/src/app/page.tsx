
import Link from "next/link";

export const metadata = {
  title: "Início | Meu Portfólio",
  description:
    "Portfólio pessoal de uma estudante do curso de Análise e Desenvolvimento de Sistemas.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F0E6] text-[#49335F]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-xl font-bold text-[#7651A8]"> Portfólio </p>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="font-semibold text-[#7651A8] transition hover:text-[#49335F]"> Início </Link>
          <Link href="/projetos"className="text-[#7651A8] transition hover:text-[#49335F]"> Projetos </Link>
          <Link href="/sobre"className="text-[#7651A8] transition hover:text-[#49335F]"
          > Sobre mim </Link>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-16">
        <p className="mb-4 font-semibold tracking-wide text-[#8B6AB5]"> SEJA BEM-VINDA(O) AO MEU PORTFÓLIO </p>

        <h1 className="max-w-7xl text-7xl font-bold leading-tight md:text-4xl">
          Sou estudante do curso Tecnólogo em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação,
          Ciência e Tecnologia do Estado do Ceará - IFCE
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66596F]">
          Construindo minha trajetória na tecnologia, aprendendo
          programação, desenvolvendo novas habilidades e transformando conhecimentos em projetos.
        </p>

        
      </section>

      <footer className="border-t border-[#E5D9EC] px-6 py-6 text-center text-sm text-[#766B7D]">
        © Brincando/aprendendo com Next.js e Tailwind CSS
      </footer>
    </main>
  );
}
