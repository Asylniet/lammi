import { API_URL } from "@/lib/const";

export type Branch = {
  id: number,
  name: string,
}

export const getBranches = async (): Promise<Branch[]> => {
  try {
    const res = await fetch(`${API_URL}/branches`)
    return res.json()
  } catch (error) {
    throw error;
  }
}