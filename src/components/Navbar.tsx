import Link from "next/link";
import Container from "./Container";

const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
            <Container>
                <nav className="flex items-center justify-between py-3">
                    <Link href="/" className="font-semibold tracking-tight text-white">
                        Pon<span className="text-white/50">.dev</span>
                    </Link>

                    <div className="flex gap-4 text-sm text-white/80">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} className="hover:text-white">
                                {l.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
}
