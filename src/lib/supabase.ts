import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ttgcrbqtiaubeuwjkbml.supabase.co"
const supabaseKey = "sb_publishable_HUF9f5GGaUeRZE7v0-yR6Q_3S617byG"

export const supabase = createClient(supabaseUrl, supabaseKey)