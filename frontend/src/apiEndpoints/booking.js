import { instance } from "../axiosAPI/axios";

export const create_Booking = async (payload) => {
  try {
    const response = await instance.post("/createBooking", payload, {
      validateStatus: () => true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getAll_Bookings = async () => {
  try {
    const response = await instance.get("/getAllbookings");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getdiff_Bookings = async (sportType) => {
  try {
    const response = await instance.get(`/booking/${sportType}`);

    return response.data;
  } catch (error) {
    return error.message;
  }
};
