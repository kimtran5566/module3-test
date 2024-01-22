import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const containerApi = createApi(
    {
        reducerPath: "containerApi",
        baseQuery: fetchBaseQuery({baseUrl: "https://65ad0b0dadbd5aa31bdff978.mockapi.io"}),
        endpoints: (builder) => ({
            getDataContainer: builder.query({
                query: ()=>'/api/books'
            })
        })
    }
)



export  const {useGetDataContainerQuery} = containerApi
