
const navigation = [
    { name: 'Profil', href: '#', current: true },
    { name: 'Entreprise', href: '#', current: false },
    { name: 'Projets', href: '#', current: false },
    { name: 'Veille', href: '#', current: false },
    { name: 'Compétences', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

export const Home = ()=>{
    return (
        <>
            <div className="flex items-center justify-center h-screen flex-col font-main">
                <div className="flex flex-col">
                    <h1 className="text-7xl text-center">LOUIS GURITA</h1>
                    <div className="flex justify-start items-start">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className='mx-2 pr-2 py-2 rounded-md text-sm font-medium hover:line-through'
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>


        </>
    )
}