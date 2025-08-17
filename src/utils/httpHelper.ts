import { HTTPResponse } from "../models/HTTPResponse";

export const ok = async (data: any): Promise<HTTPResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = async (): Promise<HTTPResponse> => {
  return {
    statusCode: 204,
    body: "",
  };
};

export const badResquest = async (): Promise<HTTPResponse> => {
  return {
    statusCode: 400,
    body: "",
  };
};

export const created = async (): Promise<HTTPResponse> => {
  return {
    statusCode: 201,
    body: "Sucesso !",
  };
};
