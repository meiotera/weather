import { ReactElement } from "react";

export default function Results({ climate }: any): ReactElement {
  const { name, weather, main, wind, sys } = climate || {};
  const { temp, temp_min, temp_max, feels_like, humidity } = main || {};
  const { description, icon } = weather?.[0] || {};
  const { country } = sys || {};
  const { speed } = wind || {};

  return (
    <>
      {!climate || !weather ? (
        <p className="text-center text-lg text-gray-600">
          Dados não disponíveis. Por favor, tente novamente.
        </p>
      ) : (
        <div className="mx-auto text-black p-6 bg-orange-200 rounded-lg shadow-lg w-full sm:w-96">
          <p className="text-center text-xl font-semibold text-gray-800">
            {name} - {country}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between py-4">
            <p className="text-4xl font-bold text-gray-600">
              {temp}ºC {description}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
              className="w-24 h-24 sm:w-28 sm:h-28"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-600">
                <span className="text-orange-600">&#8595;</span> {temp_min}º
                <span className="text-orange-600">&#8593;</span> {temp_max}º
              </p>
              <span className="text-gray-600">Sensação: {feels_like}º</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Vento: {speed} km/h</span>
              <span className="text-gray-600">Humidade: {humidity}%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
