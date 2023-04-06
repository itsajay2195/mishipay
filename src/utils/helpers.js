export const fetchcountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error(error);
  }
};


