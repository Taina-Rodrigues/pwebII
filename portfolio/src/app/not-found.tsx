
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F7F0E6] px-6 text-center text-[#49335F]">
      <p className="text-7xl font-bold text-[#7651A8]">404</p>

      <h1 className="mt-4 text-3xl font-bold">
        Página não encontrada
      </h1>

      <p className="mt-4 max-w-md text-lg leading-7 text-[#66596F]">
        Ops! A página que você está procurando não existe ou foi movida.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-[#7651A8] px-6 py-3 font-semibold text-white transition hover:bg-[#62408F]"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
