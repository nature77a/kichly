const SUPABASE_URL = "https://treedxtwfwxkzlksrmni.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_LAbUNMSO0mEHHE7FLlXtqw_K0bZ8ZRj";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Converts a plain username into the internal fake-email format used for login,
// so the person only ever sees/types a username, never an email.
function usernameToEmail(username) {
  return username.trim().toLowerCase() + "@kitchly-admin.local";
}

// Redirects to login if there's no active session. Call this at the top of
// every protected dashboard page.
async function requireAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = "login.html";
    return null;
  }
  return session;
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}
