const limit = 10;
let currentPage = 1;

export const fetchcountries = async () => {
  let url = 'https://restcountries.com/v3.1/all';
  try {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const response = await fetch(url);
    const data = await response.json();
    currentPage++;
    return data.slice(startIndex, endIndex);
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchResults = async searchQuery => {
  let url = `https://restcountries.com/v3.1/name/${searchQuery}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const resetPage = () => {
  currentPage = 1;
};
