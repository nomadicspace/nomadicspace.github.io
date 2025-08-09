'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname.startsWith(href);
    const isServiceSection = pathname.startsWith('/service');
    
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <Link href="/" className="navbar-brand d-flex align-items-center text-center">
                <div className="icon p-2 me-2">
                    <Image className="img-fluid" src="/img/logo-web.png" alt="Icon" width={30} height={30} />
                </div>
                <h1 className="m-0 text-primary">Nomadic Space</h1>
            </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <Link href="/" className="nav-item nav-link"> Home </Link>
                    <div className="nav-item dropdown">
                        <Link
                            href="#"
                            className={`nav-link dropdown-toggle ${isServiceSection ? 'active' : ''}`}
                            data-bs-toggle="dropdown"
                        >
                            Layanan Kami
                        </Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link href="/service/kitchen-set" className={`dropdown-item ${isActive('/service/kitchen-set') ? 'active' : ''}`}>Kitchen Set</Link>
                            <Link href="/service/design-interior" className={`dropdown-item ${isActive('/service/design-interior') ? 'active' : ''}`}>
                                Design Interior
                            </Link>
                            <Link href="/service/design-maket" className={`dropdown-item ${isActive('/service/design-maket') ? 'active' : ''}`}>
                                Pembuatan Maket
                            </Link>
                            <Link href="/service/custom-furniture" className={`dropdown-item ${isActive('/service/custom-furniture') ? 'active' : ''}`}>
                                Custom Furniture
                            </Link>
                            <Link href="/service/renovasi-rumah" className={`dropdown-item ${isActive('/service/renovasi-rumah') ? 'active' : ''}`}>
                                Renovasi Rumah/Apartment
                            </Link>
                            <Link href="/service/logo-design" className={`dropdown-item ${isActive('/service/logo-design') ? 'active' : ''}`}>
                                Desain Logo
                            </Link>
                            <Link href="/service/sketch-2d-3d" className={`dropdown-item ${isActive('/service/sketch-2d-3d') ? 'active' : ''}`}>
                                Desain 2D dan 3D
                            </Link>
                        </div>
                    </div>
                    <Link href="/about" className="nav-item nav-link"> About </Link>
                    <Link href="/articles" className="nav-item nav-link"> Sharing Knowledge </Link>
                </div>
                <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Appointment</a>
            </div>
        </nav>
    );
};

export default Navbar;
