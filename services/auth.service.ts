import { createAPIEndpoint, ENDPOINTS } from "./api.service";
import tokenService from "./token.service";

const authService = {
  login: async (username: string, password: string) => {
    const response = await createAPIEndpoint(ENDPOINTS.GETTOKEN).login(
      username,
      password
    );
    if (response.data.access) {
      tokenService.setToken(response.data.access, response.data.refresh);
    }
  },

  logout: () => {
    tokenService.removeToken();
  },

  getAuthToken: async () => {
    const isAccessTokenExpired = await tokenService.isAccessTokenExpired();
    const isRefreshTokenExpired = await tokenService.isRefreshTokenExpired();
    if (!isAccessTokenExpired) {
      return tokenService.getAccessToken();
    } else if (!isRefreshTokenExpired) {
      const refreshToken = await tokenService.getRefreshToken();
      if (refreshToken) {
        const response = await createAPIEndpoint(
          ENDPOINTS.REFRESHTOKEN
        ).refreshToken(refreshToken);
        if (response.data.access) return response.data.access;
      }
    }
    tokenService.removeToken();
    return null;
  },
};

export default authService;
