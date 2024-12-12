export interface WeatherResponse {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      main: string;
      decription: string;
      icon: string;
    }
  ];
}
