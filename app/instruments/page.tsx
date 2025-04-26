import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Instruments() {
  const supabase = await createClient(cookies());
  const { data: instruments } = await supabase.from("instruments").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}