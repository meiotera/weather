import { WeatherResponse } from "../services/interface";

export async function fetchWeather(city: string): Promise<WeatherResponse> {
  const apiKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(
      `${apiUrl}q=${city}&lang=pt_br&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Erro na resposta da API: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data || !data.main || !data.weather) {
      throw new Error("Dados inválidos ou incompletos recebidos da API");
    }

    return data;
  } catch (error: any) {
    if (error instanceof Error) {
      console.error("Erro ao buscar dados do clima:", error.message);
    } else {
      console.error("Erro desconhecido:", error);
    }

    throw error;
  }
}
