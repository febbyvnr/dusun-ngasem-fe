import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { data, error } = await supabase
            .from("umkm")
            .select("*")
            .order("id", { ascending: true });
        if (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
        return res.status(200).json(data);
    }
    if (req.method === "POST") {
        const {
            nama,
            foto,
            notelp,
            alamat,
            deskripsi,
        } = req.body;
        const { data, error } = await supabase
            .from("umkm")
            .insert([
                {
                    nama,
                    foto,
                    notelp,
                    alamat,
                    deskripsi,
                },
            ])
            .select();
        if (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
        return res.status(200).json(data);
    }
    if (req.method === "PUT") {
        const {
            id,
            nama,
            foto,
            notelp,
            alamat,
            deskripsi,
        } = req.body;
        const { data, error } = await supabase
            .from("umkm")
            .update({
                nama,
                foto,
                notelp,
                alamat,
                deskripsi,
            })
            .eq("id", id)
            .select();
        if (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
        return res.status(200).json(data);
    }
    return res.status(405).json({
        message: "Method not allowed",
    });
}