export function SideBar() {
  return (
    <div className="flex flex-col h-full w-64 bg-gray-900 text-white border border-gray-600 inset-y-0 left-0">
      <div className="flex-1 border-b border-gray-600">
        <div className="p-5 text-white/50">Início</div>
        <ul>
          <li className="p-4 hover:bg-gray-700">Sobre mim</li>
          <li className="p-4 hover:bg-gray-700">Projetos</li>
          <li className="p-4 hover:bg-gray-700">Tecnologias e Ferramentas</li>
          <li className="p-4 hover:bg-gray-700">Livro de Visitas</li>
          <li className="p-4 hover:bg-gray-700">Blog</li>
        </ul>
        <div className="p-4 text-white/50">Redes sociais</div>
        <ul>
          <li className="p-4 hover:bg-gray-700">GitHub</li>
          <li className="p-4 hover:bg-gray-700">LinkedIn</li>
          <li className="p-4 hover:bg-gray-700">Twitter</li>
        </ul>
      </div>
      <div>
        <p className="p-4 hover:bg-gray-700">Escutando agora no Spotify</p>
      </div>
    </div>
  );
}
