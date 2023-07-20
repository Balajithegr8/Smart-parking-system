import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Backend Api
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.REACT_APP_BASE_URL ||
      "http://localhost:9000",
  }), // base url
  reducerPath: "adminApi",
  // tags
  tagTypes: [
    "User",
    "Producs",
    "Customers",
    "Slots",
    "Locations",
    "Transactions",
    "Geography",
    "Sales",
    "CCTV",
    "cameras",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  // endpoints
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => ({url: "client/customers", }),
      providesTags: ["Customers"],
    }),
    getSlots: build.query({
      query: () => "client/slots",
      providesTags: ["Slots"],
    }),
    getLocations: build.query({
      query: () => "client/locations",
      providesTags: ["Locations"],
    }),
    getTransactions: build.query({
      query: () =>   "client/transactions",
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getCCTV: build.query({
      query: () => "management/cctvs",
      providesTags: ["CCTV"],
    }),
    getCCTVCameras: build.query({
      query: () => "management/cameras",
      providesTags: ["cameras"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

// export api endpoints
export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetSlotsQuery,
  useGetLocationsQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetCCTVQuery,
  useGetCCTVCamerasQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
