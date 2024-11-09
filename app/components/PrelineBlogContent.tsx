import React from 'react';
import Image from "next/image";

const PrelineBlogContent = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="container mx-auto px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Blog
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is
                        random or otherwise generated.
                    </p>
                </div>
                {/* text - end */}
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    {/* article - start */}
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a
                            href="#"
                            className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                        >
                            <Image
                                src="/content-image.jpeg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <div>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">Rekabet Hukuku</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">
                                <a
                                    href="#"
                                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                >
                                    New trends in Tech
                                </a>
                            </h2>
                            <p className="text-gray-500">
                                This is a section of some simple filler text, also known as
                                placeholder text.
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* article - end */}
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a
                            href="#"
                            className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                        >
                            <Image
                                src="/content-image.jpeg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <div>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">Rekabet Hukuku</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">
                                <a
                                    href="#"
                                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                >
                                    New trends in Tech
                                </a>
                            </h2>
                            <p className="text-gray-500">
                                This is a section of some simple filler text, also known as
                                placeholder text.
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a
                            href="#"
                            className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                        >
                            <Image
                                src="/content-image.jpeg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <div>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">Rekabet Hukuku</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">
                                <a
                                    href="#"
                                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                >
                                    New trends in Tech
                                </a>
                            </h2>
                            <p className="text-gray-500">
                                This is a section of some simple filler text, also known as
                                placeholder text.
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a
                            href="#"
                            className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                        >
                            <Image
                                src="/content-image.jpeg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <div>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">Rekabet Hukuku</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">
                                <a
                                    href="#"
                                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                >
                                    New trends in Tech
                                </a>
                            </h2>
                            <p className="text-gray-500">
                                This is a section of some simple filler text, also known as
                                placeholder text.
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* article - end */}
                </div>
                <div className="text-center mt-16">
                    <div
                        className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
                        <div className="py-3 px-4 flex items-center gap-x-2">
                            <a
                                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                href="../docs/index.html"
                            >
                                Daha Fazla Makale
                                <svg
                                    className="shrink-0 size-4"
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
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrelineBlogContent;