import {navItems} from "@/lib/navItem";
import Link from "next/link";
import {MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from "@heroicons/react/24/outline";

const Header = () => {
    return (
        <header className="flex items-center justify-between py-8 px-28">
            <h1 className="font-semibold text-[#280274]">Products</h1>
            <nav>
                {navItems?.map((nav) => (
                    <Link href={nav.href} className="mx-6 p-2 text-[#8c919a]">
                        <span>{nav.title}</span>
                    </Link>
                ))}
            </nav>
            <div className="flex items-center">
                <div className="p-3"><MagnifyingGlassIcon className="h-5 w-5 text-[#8c919a]" /></div>
                <div className="p-3"><ShoppingBagIcon className="h-5 w-5 text-[#8c919a]" /></div>
                <div className="p-3"><UserIcon className="h-5 w-5 text-[#8c919a]"/></div>
            </div>
        </header>
    )
}

export default Header;