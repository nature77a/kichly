// ==========================================
// Supabase connection settings
// Used by every page (homepage, product page, checkout, dashboard)
// ==========================================

const SUPABASE_URL = "https://treedxtwfwxzklksrmni.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_LAbUNMSO0mEHHE7FLlXtqw_K0bZ8ZRj";

// Creates one shared client instance. Requires the Supabase JS library
// to already be loaded via <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// which every page includes before this file.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
