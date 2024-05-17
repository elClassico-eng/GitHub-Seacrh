import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gitHubApi = createApi({
    reducerPath: "github/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com/",
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        searchUsers: build.query({
            query: (search) => ({
                url: "search/users",
                params: {
                    q: search,
                    per_page: 10,
                },
            }),
            transformResponse: (response) => response.items,
        }),
        getUserRepos: build.query({
            query: (username) => ({
                url: `users/${username}/repos`,
                params: {
                    per_page: 5,
                },
            }),
        }),
    }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = gitHubApi;
