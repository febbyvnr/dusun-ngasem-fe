import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { data, error } = await supabase
        .from("pengurus")
        .select("id, nama, jabatan")
        .eq("jabatan", "Pak Dukuh");

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