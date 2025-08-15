interface HTTPResponse {
  statusCode: number;
  body: any;
}

export const ok = async (data: any): Promise<HTTPResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};
