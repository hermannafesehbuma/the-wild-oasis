import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://scovsvzkqbepszvswidl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjb3ZzdnprcWJlcHN6dnN3aWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NDk2NjgsImV4cCI6MjA0NDUyNTY2OH0.Jsx7JUyKA2ikxcdCW1In343iWpXEbMdeRQFoGPNgcXs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
