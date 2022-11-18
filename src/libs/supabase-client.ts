import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = import.meta.env.VITE_REACT_APP_SUPABASE_URL
const supabaseAnonKey: string = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
