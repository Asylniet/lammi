import { API_URL } from "@/lib/const";

export type PaymentInfo = {
  status: "new" | "old",
  invoice_id: number,
  sum: number,
  description: string,
  account_id: number,
  public_id: string,
}

export async function getPaymentInfo(id: string): Promise<PaymentInfo> {
  try {
    const res = await fetch(`${API_URL}/pay/${id}`)
    if(!res.ok) throw new Error("Failed to fetch payment info")
    return res.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
}