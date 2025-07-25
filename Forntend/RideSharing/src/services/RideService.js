// RideService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const bookRide = (rideData) => {
  return axios.post(`${API}/rides/book`, rideData);
};

export const getUserRides = (userId) => {
  return axios.get(`${API}/rides/user/${userId}`);
};

export const getRideRequests = () => {
  return axios.get(`${API}/rides/requests`);
};
