import { SideBar } from "./sidebar";

export default function Home() {
  return (
    <div className="bg-gray-900 flex h-screen overflow-hidden">
      <SideBar />
      <main className="flex-1 p-8 overflow-auto text-zinc-50 mx-72">
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-8">
          <h1 className="font-bold text-xl mb-4">Sobre Mim</h1>
          <p className="text-base text-gray-400">
            Olá, meu nome é Igor, sou um desenvolvedor front-end dedicado, com
            ampla experiência em tecnologias como NodeJS e ReactJS.
          </p>
        </div>
      </main>
    </div>
  );
}
