import React from 'react';
import Image from "next/image";
import Link from "next/link";

function PrelineHeroSection() {
    return (
        <>
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-2">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white animate-fade-right animate-once text-center">
                            <span className="text-[#6c4d31]">Avukat</span>
                            <br/>
                            Şevval Kurular
                        </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 animate-fade-right animate-once text-center italic">
                            Sayfama Hoşgeldiniz
                        </p>
                        <div className="text-center mt-4">
                            <Link
                                href="/hakkimda"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none text-[#6c4d31] border-[#6c4d31]">
                                Hakkımda
                            </Link>
                        </div>
                    </div>
                    {/* End Col */}
                    <div className="relative ms-4">
                        <Image
                            src="/unnamed-removebg.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="w-full rounded-md animate-fade-left animate-once"
                        />
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Hero */}
        </>
    );
}

export default PrelineHeroSection;