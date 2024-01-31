/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Projets', href: '#' },
    { name: 'Entreprise', href: '#' },
    { name: 'Compétences', href: '#' },
    { name: 'Formations', href: '#' },
    { name: 'Veille', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function Navigation() {
    return (
        <header className="bg-blue-400">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-10 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                                alt=""
                            />
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:bg-indigo-500 transition p-3 rounded">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
