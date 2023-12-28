import { API_URL } from "@/lib/const";

export type Service = {
  id: number,
  name: string,
}

export const getServices = async (branchId: number): Promise<Service[]> => {
  try {
    const res = await fetch(`${API_URL}/services/${branchId}`)
    return res.json()
  } catch (error) {
    throw error;
  }
}

export type Speicalist = {
  id: number,
  name: string,
}

export const getSpeicalists = async (branchId: number, serviceId: number): Promise<Speicalist[]> => {
  try {
    const res = await fetch(`${API_URL}/employees/${branchId}/${serviceId}`)
    return res.json()
  } catch (error) {
    throw error;
  }
}

export type CustomDate = {
  id: number,
  name: string,
}

export const getDates = async (branchId: number, serviceId: number, specialistId: number): Promise<CustomDate[]> => {
  try {
    const res = await fetch(`${API_URL}/dates/${branchId}/${serviceId}/${specialistId}`)
    return res.json()
  } catch (error) {
    throw error;
  }
}

export type Time = {
  id: number,
  name: string,
}

export const getTimes = async (branchId: number, serviceId: number, specialistId: number, date: string): Promise<Time[]> => {
  try {
    const res = await fetch(`${API_URL}/hours/${branchId}/${specialistId}/${date}/${serviceId}`)
    return res.json()
  } catch (error) {
    throw error;
  }
}

interface Appointment {
  branch_id: number,
  service_id: number,
  employee_id: number,
  date_id: number,
  time_id: number,
  phone_number: string,
}

export const makeAppointment = async ({branch_id, service_id, employee_id, date_id, time_id, phone_number}: Appointment): Promise<string> => {
  try {
    const res = await fetch(`${API_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        branch_id,
        service_id,
        employee_id,
        date_id,
        time_id,
        phone_number,
      }),
    }).then(res => res.text())
    return res;
  } catch (error) {
    throw error;
  }
}

interface Order {
  client: {
    full_name: string,
    delivery_address: string,
  },
  products: { id: number, quantity: number }[],
}

export const makeOrder = async (params: Order): Promise<string> => {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(res => res.text())
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}