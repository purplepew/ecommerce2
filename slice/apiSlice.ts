import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLI_BASE_URL }),
    endpoints: () => ({})
})

export default apiSlice