import axiosInstance from "./axiosInstance";

interface RegisterEventRequestBody {
  eventCode: string;
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNo: string;
}

const registerEvent = async (requestBody: RegisterEventRequestBody) => {
  return await axiosInstance.post("/guest/registerEvent", requestBody);
};

const getEventCodeDetails = async (code: string) => {
  return await axiosInstance.post("/guest/getEventCodeDetails", {
    eventCode: code,
  });
};

export const API = {
  registerEvent,
  getEventCodeDetails,
};
