import React from 'react';
import Link from "next/link";
import {Playfair_Display} from 'next/font/google'

const playfairDisplay = Playfair_Display({subsets: ['latin']})

function PrelineNavbar() {
    return (
        <header
            className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
            <nav className="container mx-auto sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <Link
                        className={`${playfairDisplay.className} flex-none text-3xl font-bold dark:text-white focus:outline-none focus:opacity-80 ml-3`}
                        href="/"
                        aria-label="Av. Şevval Kurular"
                    >
                        Av. Şevval Kurular
                    </Link>
                    <div className="sm:hidden mr-3">
                        <button
                            type="button"
                            className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                            id="hs-navbar-example-collapse"
                            aria-expanded="false"
                            aria-controls="hs-navbar-example"
                            aria-label="Toggle navigation"
                            data-hs-collapse="#hs-navbar-example"
                        >
                            <svg
                                className="hs-collapse-open:hidden shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1={3} x2={21} y1={6} y2={6}/>
                                <line x1={3} x2={21} y1={12} y2={12}/>
                                <line x1={3} x2={21} y1={18} y2={18}/>
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div
                    id="hs-navbar-example"
                    className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                    aria-labelledby="hs-navbar-example-collapse"
                >
                    <div
                        className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link href="/"
                              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">Anasayfa</Link>
                        <Link href="/hakkimda"
                              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">Hakkımda</Link>
                        {/*<div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                            <button
                                id="hs-navbar-example-dropdown"
                                type="button"
                                className="hs-dropdown-toggle flex items-center w-full text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                aria-label="Mega Menu"
                            >
                                Çalışma Alanları
                                <svg
                                    className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </button>
                            <div
                                className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="hs-navbar-example-dropdown"
                            >
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                    href="#"
                                >
                                    Rekabet Hukuku
                                </a>
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                    href="#"
                                >
                                    İdare Hukuku
                                </a>
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                    href="#"
                                >
                                    Ticaret Hukuku
                                </a>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default PrelineNavbar;