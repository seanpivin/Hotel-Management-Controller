import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qmzzwmbuvvcvrvbaaabp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtenp3bWJ1dnZjdnJ2YmFhYWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4Njg2NTUsImV4cCI6MjAyNDQ0NDY1NX0.oVvdiG7CjC73Vk82lo55sN3SATTBvZ0obmQnaIJJcQM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
