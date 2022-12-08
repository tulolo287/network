import axios from "axios";

const BASE_URL = "http://localhost:3001/";

const instance = axios.create({
   baseURL: BASE_URL,
});

export const userApi = {
   getUsers: async (page, limit) => {
      const response = await instance.get("users", {
         params: {
            _page: page,
            _limit: limit,
         },
      });
      const data = await response.data;
      return data;
   },
   register: (email, password, props) => {
      instance
         .post("register", {
            email,
            password,
         })
         .then((response) => {
            console.log(response);
            props.setUserData(response.data);
            localStorage.setItem("key", response.data.accessToken);
         });
   },

   login: async (email, password, cb) => {
      const response = await instance.post("login", {
         email,
         password,
      });

      const data = await response.data;
      console.log(data);
      cb(data);
   },

   followToggle: async (id, follow) => {
      axios
         .patch(`http://localhost:3001/users/${id}`, {
            follow: follow,
         })
         .then((response) => response);
   },
};

export const profileApi = {
   getProfile: (id, props) => {
      axios
         .get(`http://localhost:3001/users/${id}`)
         .then((response) => props.setProfile(response.data));
   },
};
