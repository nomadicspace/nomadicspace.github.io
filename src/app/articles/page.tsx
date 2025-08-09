import Image from "next/image";
import React from "react";
import SearchBar from "../components/SearchBar";
import articles from "../data/articles.json";
import Link from "next/link";
import { Article } from "../../../types/types";
import path from "path";
import fs from "fs";

async function getArticles(): Promise<Article[]> {
  const filePath = path.join(process.cwd(), '/src/app/data', 'articles.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

const Articles = async () => {
    const articles = await getArticles();
    return (
        <>
            <div className="container-fluid header bg-white p-0">
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
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    {articles.map((article) => ( 
                     <div className="testimonial-item bg-light rounded p-1 mb-3" key={article.slug}>
                        <div className="bg-white border rounded p-4">
                            <h3>{article.title}</h3>
                            <span>{article.excerpt} <Link href={`/articles/${article.slug}`} className="text-blue-500 underline">Read more</Link>
                            </span>
                            <div className="d-flex align-items-center mt-3">
                                <Image className="img-fluid flex-shrink-0 rounded" src="/img/testimonial-1.jpg" width={45} height={45} alt="" />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">{article.author}</h6>
                                    <small>{article.category}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Articles;
