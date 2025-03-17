import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Transactions() {
    const supabase = createClient();
    
    const { data: { session } } = await supabase.auth.getSession();

    const { data: transactions, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", session.user.id);
    
    if (error) {
        console.error('Error fetching transactions:', error);
        return <div>Error loading transactions</div>;
    }

    return (
        <>
            <h2>Tranzakcii</h2>
            <ul>
                {transactions?.map((tx) => (
                    <li key={tx.id}>
                        {tx.amount}
                    </li>
                ))}
            </ul>
        </>
    )
}