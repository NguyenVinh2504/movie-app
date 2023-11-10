import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "user/login",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password"
};

const userApi = {
  signin: async ({ name, password }) => {
    try {
      const response = await publicClient.post(
        userEndpoints.signin,
        { name, password }
      );
      return { response };
    } catch (err) { return { err } }
  },
  signup: async ({ name, email, password, confirmPassword }) => {
    try {
      const response = await publicClient.post(
        userEndpoints.signup,
        { name, email, password, confirmPassword }
      );

      return { response };
    } catch (err) { return err }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err) { return { err }; }
  },
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(
        userEndpoints.passwordUpdate,
        { password, newPassword, confirmNewPassword }
      );

      return { response };
    } catch (err) { return { err }; }
  }
};

export default userApi;