import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-[#222222] text-gray-200 p-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-serif text-3xl font-bold text-gray-100 mb-4 md:mb-0">Sibtain&apos;s Portfolio</h1>                <nav>
                    <ul className="list-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <li>
                            <Link href="/" className="text-gray-200 text-lg hover:text-[#504f4d] font-serif">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-200 text-lg hover:text-[#504f4d] font-serif">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/project" className="text-gray-200 text-lg hover:text-[#504f4d] font-serif">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-200 text-lg hover:text-[#504f4d] font-serif">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}