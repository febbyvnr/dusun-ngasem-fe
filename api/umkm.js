import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, nama, foto, notelp, alamat } = req.body;
    const { data, error } = await supabase
      .from('umkm')
      .upsert({ 
        id: id || 1,
        nama, 
        foto, 
        notelp, 
        alamat 
      })
      .select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}