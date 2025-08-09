"use client";
import React from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://rhcheqphcylyudutlzbz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoY2hlcXBoY3lseXVkdXRsemJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NjA4NzgsImV4cCI6MjA3MDIzNjg3OH0.1Yl193CdffvvxTuQ9bBOTNdz8_U6owH4w87zT_CL3yY"
);

const SearchBar = () => {
    const [form, setForm] = useState({
        email: "",
        phone: "",
        service: "",
        location: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("contact_requests")
            .insert([form]);

        if (error) {
            alert("Gagal mengirim data: " + error.message);
        } else {
            alert("Berhasil terkirim!");
            setForm({ email: "", phone: "", service: "", location: "" });
        }
    };
    return (
        <div
            className="container-fluid bg-primary mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ padding: '35px' }}
        >
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <input
                                        type="text"
                                        className="form-control border-0 py-3"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    <input
                                        type="number"
                                        className="form-control border-0 py-3"
                                        placeholder="No Telepon"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select border-0 py-3" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} required>
                                        <option value="" disabled>
                                            Pilih Layanan
                                        </option>
                                        <option value="Kitchen Set">Kitchen Set</option>
                                        <option value="Desain Interior">Interior Desain</option>
                                        <option value="Desain Logo">Desain Logo</option>
                                        <option value="Desain Maket">Desain Maket</option>
                                        <option value="Desain 2D 3D">Desain 2D 3D</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select border-0 py-3" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required>
                                        <option value="" disabled>
                                            Location
                                        </option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Tangerang">Tangerang</option>
                                        <option value="Jawa Barat">Jawa Barat</option>
                                        <option value="Jawa Tengah">Jawa Tengah</option>
                                        <option value="Jawa Timur">Jawa Timur</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-dark border-0 w-100 py-3">Hubungi Kami</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
