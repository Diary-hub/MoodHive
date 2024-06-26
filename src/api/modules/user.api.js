import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "login",
  signup: "signup",
  //getInfo: "moodhive/info",
  //passwordUpdate: "user/update-password"
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      console.log("send request");
      const response = await publicClient.post(
        userEndpoints.signin,
        { username, password }
        
      );
      console.log("mustafa")
      return { response };
    } catch (err) { console.log("error user"); return { err }; }
  },
  signup: async ({ username, password, confirm_password, display_name }) => {
    try {
      const response = await publicClient.post(
        userEndpoints.signup,
        { username, password, confirm_password, display_name }
      );

      return { response };
    } catch (err) { return { err }; }
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