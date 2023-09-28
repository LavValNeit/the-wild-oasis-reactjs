import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zmuwlblbhkkdbuwclase.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdXdsYmxiaGtrZGJ1d2NsYXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MDcwOTIsImV4cCI6MjAwODk4MzA5Mn0.XvdUZ9V0vjW1Z1wybm8x-j2LIwMlrudlwVrW1QxobtI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
