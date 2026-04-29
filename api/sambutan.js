import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data: sambutan, error: err1 } = await supabase
        .from('sambutan')
        .select('text')
        .eq('id', 1)
        .single();

      const { data: pengurus, error: err2 } = await supabase
        .from('pengurus')
        .select('nama, jabatan')
        .eq('jabatan', 'Pak Dukuh')
        .single();

      if (err1 || err2) {
        return res.status(500).json({ error: err1?.message || err2?.message });
      }

      return res.status(200).json({
        text: sambutan.text,
        nama: pengurus.nama,
        jabatan: pengurus.jabatan
      });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  if (req.method === 'POST') {
    const { video, text } = req.body;
    const { data, error } = await supabase
      .from('sambutan')
      .update({ video, text })
      .eq('id', 1)
      .select();
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Data dengan ID 1 tidak ditemukan" });
    }
    return res.status(200).json(data);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}