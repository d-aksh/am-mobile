import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";

const tokenService = {
  setToken: (access: string, refresh: string) => {
    SecureStore.setItemAsync("access", access);
    SecureStore.setItemAsync("refresh", refresh);
  },

  removeToken: () => {
    SecureStore.deleteItemAsync("access");
    SecureStore.deleteItemAsync("refresh");
  },

  getAccessToken: async () => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      return token;
    }
    return null;
  },

  getRefreshToken: async () => {
    const refreshToken = await SecureStore.getItemAsync("refresh");
    if (refreshToken) refreshToken;
    return null;
  },

  updateAccessToken: (token: string) => {
    SecureStore.setItemAsync("refresh", token);
  },

  isAccessTokenExpired: async () => {
    const accessToken = await SecureStore.getItemAsync("access");
    if (accessToken) {
      let { exp } = jwt_decode<any>(accessToken);

      if (Date.now() >= exp * 1000) {
        return true;
      }

      return false;
    }
    return null;
  },

  isRefreshTokenExpired: async () => {
    let refreshToken = await SecureStore.getItemAsync("refresh");

    if (refreshToken) {
      let { exp } = jwt_decode<any>(refreshToken);

      if (Date.now() >= exp * 1000) {
        return true;
      }

      return false;
    }

    return null;
  },
};

export default tokenService;
