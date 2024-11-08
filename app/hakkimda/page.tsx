import React from 'react';
import CustomUserProfile from "@/app/components/CustomUserProfile";
import Link from "next/link";

const Page = () => {
    return (
        <div className="container m-auto mt-10">
            <ol className="flex items-center whitespace-nowrap">
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="/"
                    >
                        Anasayfa
                    </Link>
                    <svg
                        className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round"/>
                    </svg>
                </li>
                <li
                    className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                    aria-current="page"
                >
                    Hakkımda
                </li>
            </ol>
            <CustomUserProfile/>
        </div>
    );
};

export default Page;