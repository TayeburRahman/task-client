import { apiSlice } from "../apiSlice";
import {
  setUserData
} from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login endpoint
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // Store authentication data in local storage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            })
          ); 
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    // Registration endpoint
    registration: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/signup",
        method: "POST",
        body: data,
      }),
    }),
 
    postFormData: builder.query({
      query: (data) => ({
        url: "/api/v1/data/form",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled; 
          dispatch(setUserData(result.data?.form));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
 
    getUserFormData: builder.query({
      query: (email) => ({
        url: `/api/v1/data/form/${email}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled; 
          dispatch(setUserData(result.data.form));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
  }),
});
 

export const {
  useLoginUserMutation,
  useRegistrationMutation,
  useLazyPostFormDataQuery,  
  useGetUserFormDataQuery, 
} = authApi;
