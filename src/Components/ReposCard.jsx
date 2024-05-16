import React from "react";

export const ReposCard = ({ repo }) => {
    return (
        <div className="border rounded px-5 py-2 mx-2 mb-3 hover:shadow-xl hover:bg-gray-300 transition-all">
            <h1 className="font-bold text-lg">Repositories: "{repo.name}"</h1>
            <div className="flex flex-col">
                <p>
                    Owner: <span className="font-bold">{repo.owner.login}</span>
                </p>
                <p>
                    Created:
                    <span className="font-medium">{repo.created_at}</span>
                </p>
                <p>
                    Visibility:
                    <span className="font-medium">{repo.visibility}</span>
                </p>
                <p>
                    Forks: <span className="font-medium">{repo.forks}</span>
                </p>
            </div>
            <div>
                <h2 className="font-bold">Description:</h2>
                <p className="text-sm font-thin">{repo.description}</p>
            </div>
        </div>
    );
};
