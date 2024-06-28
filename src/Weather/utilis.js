import axios from 'axios';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;