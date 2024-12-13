import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000/",
    }), // base url
    reducerPath: "adminApi",
    // tags
    tagTypes: [
        "mobuser",
        "mobloc",
        "mobreports"
    ],

    // endpoints
    endpoints: (build) => ({
        getmobuser: build.query({
            query: (email) => `client/mobuser/${email}`,
            providesTags: ["User"],
        }),
        getmobloc: build.query({
            query: (email) => `client/mobloc/${email}`,
            providesTags: ["Loc"],
        }),
        
        getmobreports: build.query({
            query: (email) => `client/mobreports/${email}`,
            providesTags: ["Rep"],
        }),
    }),
    
        

    
});

// export api endpoints
export const {
    useGetmobuserQuery,
    useGetmoblocQuery,
    useGetmobreportsQuery,
} = api;
