import axiosClient from "./axiosClient";

export const getAllColor = async () => {
  const url = "/api/color";
  const result = await axiosClient.get(url);
  return result;
};

export const getAllOdor = async () => {
  const url = "/api/odor";
  const result = await axiosClient.get(url);
  return result;
};

export const guessQuality = async (dataForm) => {
  const url = "/api/form-guess/guess";
  const result = await axiosClient.post(url, dataForm);
  return result;
};

export const getAllCases = async () => {
  const url = "/api/cases";
  const result = await axiosClient.get(url);
  return result;
};

export const getInfoFormCase = async () => {
  const url = "/api/form-case/get-info";
  const result = await axiosClient.get(url);
  return result;
};

export const createCases = async (dataCases) => {
  const url = "/api/form-case/create";
  const result = await axiosClient.post(url, dataCases);
  return result;
};
