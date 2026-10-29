
import Link from "next/link";

export const metadata = {
  title: "Projetos | Meu Portfólio",
  description: "Conheça os projetos desenvolvidos durante minha trajetória em Análise e Desenvolvimento de Sistemas.",
};

export default function Projetos() {
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
          <Link href="/projetos" className="font-semibold text-[#7651A8]">
            Projetos
          </Link>
          <Link href="/sobre" className="text-[#7651A8] hover:text-[#49335F]">
            Sobre mim
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold md:text-4xl">
          Meus projetos
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#66596F]">
          Aqui apresentarei projetos desenvolvidos durante minha formação
          em Análise e Desenvolvimento de Sistemas, colocando em prática
          meus conhecimentos em programação.
        </p>

        <div className="mt-10 rounded-2xl border border-[#E5D9EC] bg-[#FCF9F4] p-8">
          <h2 className="text-2xl font-bold text-[#7651A8]">
            Em construção
          </h2>
          <p className="mt-3 leading-7 text-[#66596F]">
            Em breve, esta página contará com projetos, atividades e
            experiências da minha jornada na tecnologia.
          </p>
        </div>

             </section>

      <footer className="border-t border-[#E5D9EC] px-6 py-6 text-center text-sm text-[#766B7D]">
        © Brincando/aprendendo com Next.js e Tailwind CSS
      </footer>
    </main>
  );
}
