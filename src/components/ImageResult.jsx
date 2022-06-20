import React from "react";

export const ImageResult = (result) => {
  const { result: imageResult } = result;
  return (
    <a
      className="sm:p-3 p-5"
      href={imageResult.href}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="rounded"
        src={imageResult.image?.src}
        alt={imageResult.title}
        loading="lazy"
      />
      <p className="w-36 break-words text-sm mt-2">{imageResult.title}</p>
    </a>
  );
};
