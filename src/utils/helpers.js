const limit = 10;
let currentPage = 1

export const fetchcountries = async () => {
  try {
    const startIndex = (currentPage-1) *limit;
    const endIndex = startIndex + limit;
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    currentPage++;
    return data.slice(startIndex, endIndex);
  } catch (error) {
    console.error(error);
  }
};


