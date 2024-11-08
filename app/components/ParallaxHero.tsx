import React from 'react';

function ParallaxHero() {
    return (
        <div className="flex items-center justify-center h-[50rem] bg-fixed bg-cover bg-[url('/parallax_bg.jpg')] bg-opacity-90">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Lorem Ipsum</h1>
                <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
                <div
                    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Lorem
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ParallaxHero;