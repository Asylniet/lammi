import { API_URL } from "@/lib/const";

export type ClientCount = {
  clients_count: number;
}

export async function getClientCount(): Promise<ClientCount[]> {
  try {
    const res = await fetch(`${API_URL}/clients_count`, { next: { revalidate: 3600 } })
    return res.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
}