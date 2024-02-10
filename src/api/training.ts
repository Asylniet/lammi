import { API_URL } from "@/lib/const"

export type Training = {
  id: number,
  name: string,
}

export const getTrainings = async (): Promise<Training[]> => {
  try {
    const res = await fetch(`${API_URL}/trainings`, { cache: 'no-store' })
    return res.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
}

interface BookTrainingParams {
  trainingId: number,
  phone: string,
}

export const bookTraining = async ({ phone, trainingId }: BookTrainingParams) => {
  try {
    const res = await fetch(`${API_URL}/book_training`, {
      method: "POST",
      body: JSON.stringify({
        phone_number: phone,
        training_id: trainingId,
      }),
    })
    return res.json()
  } catch (error) {
    throw error;
  }
}