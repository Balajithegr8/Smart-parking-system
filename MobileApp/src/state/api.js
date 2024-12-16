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
        "mobreports",
        "reservation",
        "pastbookings",
        "today",
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
        getreservation: build.query({
            query: (email) => `client/reservation/${email}`,
            providesTags: ["Res"],
        }),
        getpastbookings: build.query({
            query: (email) => `client/pastbookings/${email}`,
            providesTags: ["pastbookings"],
        }),
        gettoday: build.query({
            query: (email) => `client/today/${email}`,
            providesTags: ["today"],
        }),
    }),




});

// export api endpoints
export const {
    useGetmobuserQuery,
    useGetmoblocQuery,
    useGetmobreportsQuery,
    useGetreservationQuery,
    useGetpastbookingsQuery,
    useGettodayQuery,
} = api;
