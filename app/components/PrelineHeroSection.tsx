import React from 'react';

function PrelineHeroSection() {
    return (
        <>
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-2">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                            <span className="text-blue-900">Avukat</span>
                            <br/>
                            Şevval Kurular
                        </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        </p>
                    </div>
                    {/* End Col */}
                    <div className="relative ms-4">
                        <img
                            className="w-full rounded-md"
                            src="/unnamed2.png"
                            alt="Hero Image"
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