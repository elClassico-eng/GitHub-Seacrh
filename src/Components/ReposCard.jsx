import React from "react";

import { useActions } from "../Hooks/actions";

export const ReposCard = ({ repo }) => {
    const { addFavorites } = useActions();

    const addToFavourite = (event) => {
        event.preventDefault();
        addFavorites(repo.html_url);
    };

    return (
        <div className="bg-cardBG text-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full max-w-xl mx-auto h-[420px]">
            <div className="flex">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer  p-6 z-10 "
                >
                    <h1 className="text-xl mb-12">{repo.name}</h1>
                    <div className="flex flex-col mb-12">
                        <p>
                            Created:{" "}
                            <span className="font-bold">{repo.created_at}</span>
                        </p>
                        <p>
                            Visibility:{" "}
                            <span className="font-bold">{repo.visibility}</span>
                        </p>
                        <p>
                            Forks:{" "}
                            <span className="font-bold">{repo.forks}</span>
                        </p>
                    </div>
                    <div className="mb-24 flex">
                        <h2 className="font-normal mb-2">Description:</h2>
                        <p className="text-sm font-thin">{repo.description}</p>
                    </div>
                    <div className="flex justify-center w-auto">
                        <button
                            className="px-4 py-2 mt-2 rounded-md w-32 bg-blueBG border hover:shadow-md  transition-all"
                            onClick={addToFavourite}
                        >
                            Add
                        </button>
                    </div>
                </a>
            </div>
        </div>
    );
};

/**
         <div className="border rounded px-5 py-2 mb-3 hover:shadow-xl hover:bg-black transition-all text-white">
            <a href={repo.html_url} target="_blank" className="cursor-pointer">
                <h1 className="font-normal text-lg">
                    Repository: <span className="font-bold">{repo.name}</span>
                </h1>
                <div className="flex flex-col">
                    <p>
                        Owner:{" "}
                        <span className="font-bold">{repo.owner.login}</span>
                    </p>
                    <p>
                        Created:{" "}
                        <span className="font-bold">{repo.created_at}</span>
                    </p>
                    <p>
                        Visibility:{" "}
                        <span className="font-bold">{repo.visibility}</span>
                    </p>
                    <p>
                        Forks: <span className="font-bold">{repo.forks}</span>
                    </p>
                </div>
                <div>
                    <h2 className="font-normal">Description:</h2>
                    <p className="text-sm font-thin">{repo.description}</p>
                </div>
                <button
                    className="px-4 py-2 mt-2 rounded w-32 bg-blue-400 border hover:shadow-md hover:bg-blue-500 transition-all"
                    onClick={(e) => addToFavourite(e)}
                >
                    Add
                </button>
            </a>
        </div>
 */
