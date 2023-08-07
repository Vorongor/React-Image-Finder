const API_KEY = '37257084-385968b29bb2898cd9ae06014';

export const fetchImages = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => response.json())
    .then((data) => data.hits)
    .catch((error) => {
      console.error('Error fetching images:', error);
      return [];
    });
};