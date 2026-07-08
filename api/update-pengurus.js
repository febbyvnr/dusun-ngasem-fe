import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
        console.log(req.body);
      const { id, nama, jabatan, notelp, foto } = req.body;
      const { data, error } = await supabase
        .from("pengurus")
        .update({nama, jabatan, notelp, foto})
        .eq("id", id)
        .select();
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}