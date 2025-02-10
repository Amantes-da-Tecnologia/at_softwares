export default function Navbar() {
    return (
            <header>
                <nav className="mt-5 md:hidden">
                    <h2 className="text-center font-bold">AT Software</h2>
                </nav>

                <nav className="hidden md:flex w-full mt-5">
                    <div className="flex justify-between items-center px-8 w-full">
                        <h1 className="font-bold text-xl">AT Software</h1>
                        <ul className="flex gap-5 text-sm">
                        <li>Quem Somos</li>
                        <li>Serviços</li>
                        <li>Contato</li>
                        </ul>
                    </div>
                </nav>
            </header>
    );
}