import axios from "axios";

const BASE_URL = "https://assets-management.onrender.com/api/";

export const ENDPOINTS = {
  EMPLOYEES: "employees",
  GETTOKEN: "auth/token",
  REFRESHTOKEN: "auth/token/refresh",
  VERIFYTOKEN: "auth/token/verify",
  ASSET: "assets",
  LOGOUT: "auth/logout",
  ASSETREQUEST: "assetrequests",
  ASSETREQUESTADD: "assetrequests/add",
  DELETEASSETREQUEST: "assetrequests/delete",
  GETUSERNAME: "auth/getusername",
};

export const createAPIEndpoint = (endpoint: string) => {
  let url = BASE_URL + endpoint + "/";

  return {
    fetchAll: (token: string) =>
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    fetchById: (id: string, token: string) =>
      axios({
        method: "get",
        url: url + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    create: (newRecord: any, token: string) =>
      axios({
        method: "post",
        url: url,
        data: newRecord,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).catch((error) => {
        console.log(error);
      }),

    update: (id: string, updatedRecord: any, token: string) =>
      axios({
        method: "put",
        url: url + id,
        data: updatedRecord,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    delete: (id: string, token: string) =>
      axios({
        method: "delete",
        url: url + id + "/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    login: (username: string, password: string) =>
      axios({
        method: "post",
        url: url,
        data: {
          username: username,
          password: password,
        },
      }),

    logout: () =>
      axios({
        method: "post",
        url: url,
      }),

    refreshToken: (refresh: string) =>
      axios({
        method: "post",
        url: url,
        data: {
          refresh: refresh,
        },
      }),

    getUserName: (token: string) =>
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  };
};
