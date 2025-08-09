import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import React from "react";
import articles from "../../data/articles.json";
import { Article } from "../../../../types/types";
import path from "path";
import fs from "fs";

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

async function getArticles(): Promise<Article[]> {
    const filePath = path.join(process.cwd(), '/src/app/data', 'articles.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

const ArticleDetailPage = async ({ params }: ArticlePageProps) => {
    const { slug } = await params;
    const articles = await getArticles();
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return <div className="p-8">Article not found</div>;
    }
    return <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
                <h1 className="display-5 animated fadeIn mb-4">Sharing Knowledge</h1>
                <nav aria-label="breadcrumb animated fadeIn">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-body active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
            <div className="col-md-6 animated fadeIn">
                <Image className="img-fluid" src="/img/header.jpg" alt="" width={1000} height={700} />
            </div>
            <SearchBar />

        </div>
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <h2 className="mb-3">{article.title}</h2>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        {article.content.map((item, idx) => (
            <div className="container-xxl py-5" key={idx}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <Image className="img-fluid w-100" src={item.image} width={486} height={486} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">#{idx + 1} {item.subtitle}</h1>
                            <p className="mb-4">{item.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
};

export default ArticleDetailPage;
