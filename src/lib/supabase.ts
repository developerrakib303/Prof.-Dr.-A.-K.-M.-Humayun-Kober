import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kssikhjbvbgmflxcduje.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzc2lraGpidmJnbWZseGNkdWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NzM5MDYsImV4cCI6MjA3NzM0OTkwNn0.MJTMs1PDlg7sOPscz0fIukBCiSxgVzkxUmhaJnF9JEU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
