
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhgiorceculwhapsubbq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZ2lvcmNlY3Vsd2hhcHN1YmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MTQzMzQsImV4cCI6MjAxNDM5MDMzNH0.Br1BNG84GcmJ205mT5Z98WzbmPms6isO57laqHQ5g8A'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;