import React from "react";

export const SearchResult = (result) => {
  const { result: searchResult } = result;

  return (
    <div className="md:w-2/5 w-full">
      <a href={searchResult.link} target="_blank" rel="noreferrer">
        <span className="text-lg hover:underline dark:text-blue-300 text-blue-700">
          {searchResult.title}
        </span>
      </a>
    </div>
  );
};
