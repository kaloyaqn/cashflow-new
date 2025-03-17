import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
}

const supabase = createClient();

export async function getTransactions(params) {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
        throw new Error('No authenticated user');
    }

    const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", session.user.id);
    
    if(error) {
        throw new Error(error)
    }

    return data;
}