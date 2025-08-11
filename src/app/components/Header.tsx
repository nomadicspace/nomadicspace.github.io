import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    breadcrumb: BreadcrumbItem[];
    imageSrc?: string;
}

const Header = ({ title, breadcrumb, imageSrc = "/img/header.jpg" }: PageHeaderProps) => {
    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">{title}</h1>
                    <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb text-uppercase">
                            {breadcrumb.map((item, idx) => (
                                <li key={idx} className={`breadcrumb-item ${!item.href ? "text-body active" : ""}`} aria-current={!item.href ? "page" : undefined}>
                                    {item.href ? (
                                        <Link href={item.href}>{item.label}</Link>
                                    ) : (
                                        item.label
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <Image className="img-fluid" src={imageSrc} alt={title} width={1000} height={700} />
                </div>
            </div>
        </div>
    );
};

export default Header;
