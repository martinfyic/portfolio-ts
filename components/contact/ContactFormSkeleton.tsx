import React from "react";

export const ContactFormSkeleton = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-center">
        <div className="mx-auto w-3/4 animate-pulse">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <div className="h-4 w-1/4 rounded bg-gray-400"></div>
                <div className="mt-2 h-10 w-full rounded bg-gray-400"></div>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <div className="h-4 w-1/4 rounded bg-gray-400"></div>
                <div className="mt-2 h-10 w-full rounded bg-gray-400"></div>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <div className="h-4 w-1/4 rounded bg-gray-400"></div>
                <div className="mt-2 h-32 w-full resize-none rounded bg-gray-400"></div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center p-2">
              <div className="cursor-pointer rounded bg-gray-400 px-6 py-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
