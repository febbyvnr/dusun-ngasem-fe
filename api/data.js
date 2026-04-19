import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data: umkm } = await supabase.from('umkm').select('*');
    const { data: sambutan } = await supabase.from('sambutan').select('*').single();

    return res.status(200).json({ umkm, sambutan });
  }
}