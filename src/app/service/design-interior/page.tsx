import Header from "@/app/components/Header";
import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import React from "react";

const DesignInteriorPage = () => {
    return (
        <>
            <Header title="Design Interior" breadcrumb={[
                {label: "Home", href: "/"},
                {label: "Service", href: "/design-interior"},
                {label: "Design Interior"},
            ]} />

            <SearchBar />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <Image className="img-fluid w-100" src="/img/design-interior-classic.jpg" width={486} height={486} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">Renovasi Rumah Apartement #1</h1>
                            <p className="mb-4">Desain interior sangat berfokus pada kenyamanan dan kegunaan ruang, sekaligus memperhatikan aspek estetika agar ruang terlihat menarik.</p>
                            <p className="mb-4">Desain interior merupakan proses perencanaan dan pengaturan elemen-elemen ruang dalam sebuah bangunan untuk menciptakan suasana yang fungsional, estetis, dan nyaman. Ini melibatkan berbagai aspek, seperti pemilihan warna, furnitur, pencahayaan, bahan, tata letak, hingga elemen dekoratif lainnya, yang semuanya bekerja bersama untuk mencapai tujuan desain yang diinginkan.</p>
                            <p className="mb-4">Design interior meliputi:</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Analisis ruang: Memahami kebutuhan dan keinginan penghuni, serta fungsi ruang tersebut.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Perencanaa ruang:  Mengatur elemen-elemen seperti furnitur dan dekorasi agar ruang terasa efisien dan nyaman.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Pemilihan gaya: Menentukan gaya desain (misalnya, modern, minimalis, klasik, industri, dll.) yang cocok dengan karakter ruang dan penghuninya.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Perencanaa material:  Memilih bahan-bahan yang sesuai dengan desain dan anggaran, baik untuk lantai, dinding, langit-langit, maupun furnitur.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Pencahayaan: Menentukan jenis pencahayaan yang tepat untuk menciptakan atmosfer yang sesuai, baik itu pencahayaan umum, aksen, atau tugas.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Dekorasi dan aksesori: Menambah elemen-elemen kecil seperti lukisan, tanaman, karpet, dan aksesori lainnya untuk memperkaya desain.</p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DesignInteriorPage;
