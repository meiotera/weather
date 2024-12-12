"use client";
import { WeatherResponse } from "../services/interface";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/Input/SearchBar";
import { fetchWeather } from "../services/weather";
import { useState } from "react";
import Results from "@/components/Results/Results";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  const handleCity = (cityValue: string): void => {
    setCity(cityValue);
  };

  const handleSearch = async (city: string): Promise<void> => {
    const searchWeather = await fetchWeather(city);
    setWeather(searchWeather);
    setCity("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-300">
      <Header />
      <main className="flex flex-col items-center w-full max-w-3xl px-4 py-6">
        {weather ? <Results climate={weather} /> : <p>Busque uma cidade</p>}
        <SearchBar
          handleCity={handleCity}
          city={city}
          handleSearch={handleSearch}
        />
      </main>
    </div>
  );
}
