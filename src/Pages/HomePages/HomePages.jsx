import React, { useState, useEffect } from "react";

import { Element } from "react-scroll";

import {
    useLazyGetUserReposQuery,
    useSearchUsersQuery,
} from "../../Redux/github/github.api";

import { useDebounce } from "../../Hooks/useDebounce";
import { ReposCard } from "../../Components/ReposCard";

import { HomeBanner } from "../../Components/HomeBanner";
import { MainBanner } from "../../Components/MainBanner";

export const HomePages = () => {
    const [search, setSearch] = useState("");
    const [dropDown, setDropDown] = useState(false);

    const debounce = useDebounce(search);

    const {
        isError,
        isLoading,
        data: users,
    } = useSearchUsersQuery(debounce, {
        skip: debounce.length < 3,
        refetchOnFocus: true,
    });

    const [fetchRepos, { isLoading: isLoadingRepos, data: repos }] =
        useLazyGetUserReposQuery();

    useEffect(() => {
        setDropDown(debounce.length > 3 && debounce.length > 0);
    }, [debounce, users]);

    const clickHandler = (username) => {
        fetchRepos(username);
        setDropDown(false);
    };

    return (
        <>
            <HomeBanner />
            <MainBanner />
            <Element name="section-1">
                <div className="flex w-full h-full bg-blueBG">
                    <div className="h-screen w-full flex flex-col md:flex-row pt-14 px-5">
                        {isError && (
                            <h3 className="text-red-600 font-bold text-xl text-center"></h3>
                        )}
                        <div className="flex flex-col items-center w-full h-full md:h-screen">
                            <div className="relative mb-20 w-full max-w-[620px]">
                                <input
                                    type="text"
                                    className="border py-2 px-4 w-full h-[42px] mb-2 rounded-xl"
                                    placeholder="Search users in GitHub..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {dropDown && (
                                    <ul className="list-none absolute top-[42px] overflow-y-scroll left-0 right-0 max-h-[300px] shadow-md bg-white">
                                        {isLoading && (
                                            <p className="text-center text-gray-400">
                                                Loading users...
                                            </p>
                                        )}
                                        {users?.map((user) => {
                                            return (
                                                <li
                                                    key={user.id}
                                                    className="relative bg-cardBG text-white px-2 py-4 hover:bg-blueBG hover:text-white transition-colors cursor-pointer"
                                                    onClick={() =>
                                                        clickHandler(user.login)
                                                    }
                                                >
                                                    <div className="flex items-center h-[50px] w-[50px] rounded ">
                                                        <img
                                                            src={
                                                                user.avatar_url
                                                            }
                                                            alt="Avatar"
                                                            classname="absolute top-0 left-0 w-full h-full z-0 object-cover"
                                                        />
                                                    </div>
                                                    {user.login}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                {isLoadingRepos && (
                                    <p className="text-center text-gray-400">
                                        Repositories are loading...
                                    </p>
                                )}
                                {repos?.map((repo) => (
                                    <ReposCard repo={repo} key={repo.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
};
