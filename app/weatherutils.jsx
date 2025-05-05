// weatherutils.jsx
export const fetchWeatherSuggestions = async (lat, lon) => {
    const apiKey = '8b8ded7a9166ed71b66fb6e8203a697e';
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
  
      const weather = data.weather?.[0]?.main?.toLowerCase();
      const rain = data.rain?.['1h'] || 0;
  
      if (weather?.includes('rain') || rain > 0) {
        return [
          'Rain is expected — turn off your sprinklers and save water!',
          'Let nature help: wash your car in the rain!',
          'Use Water outside of peak times to minmize cost.'
        ];
      } else {
        return [
          "It's dry in your location — water your plants early to reduce evaporation.",
          'Check for irrigation leaks to avoid wasting water, and use water outside of peak times to minmize cost.',
        ];
      }
    } catch (error) {
      console.error('Weather API error:', error);
      return ['⚠️ Could not fetch weather suggestions. Try again later.'];
    }
  };
  