import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000/",
    }), // base url
    reducerPath: "adminApi",
    // tags
    tagTypes: [
        "mobuser",
    ],
    // endpoints
    endpoints: (build) => ({
        getmobuser: build.query({
            query: (email) => `client/mobuser/${email}`,
            providesTags: ["User"],
        }),

    }),
});

// export api endpoints
export const {
    useGetmobuserQuery,
} = api;
