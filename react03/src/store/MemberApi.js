import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const memberApi = createApi({
    reducerPath: 'memberApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/'
    }),
    endpoints(build) {
        return {
            register: build.mutation({
                query(user) {
                    return {
                        url: '/auth/local/register',
                        method: 'post',
                        body: user //{username,password,emial}

                    }
                }
            }),
            login: build.mutation({
                query(user) {
                    return {
                        url: '/auth/local',
                        method: 'post',
                        body: user //{username,password}

                    }
                }
            }),

        }
    }

});

export const { useRegisterMutation, useLoginMutation } = memberApi;
export default memberApi;