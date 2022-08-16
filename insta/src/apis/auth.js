import instance from ".";

const authApis = {
  login: (data) => {
    instance.post("/auth/signup", data);
  },
};

export default authApis;
