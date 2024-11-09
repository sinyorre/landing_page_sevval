import React from 'react';

function ParallaxHero() {
    return (
        <div className="flex items-center justify-center h-[50rem] bg-fixed bg-cover bg-[url('/parallax_bg.jpg')] bg-opacity-90 mt-12">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 bg-opacity-20 bg-gray-300 shadow-xl">
                <blockquote className="text-3xl italic text-white dark:text-white">
                    <svg className="w-8 h-8 mb-4" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path
                            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <p>
                        “İnsan; Avukatı, tutacağı herhangi bir işin istikbalini gösteren ışığı, düştüğü herhangi bir
                        felaketin kurtarıcısı, bir hayatı karanlık görmekten doğan ümitsizlik buhranlarının gidericisi;
                        yaralanan yüreğinin dermanı, kınlan izzeti nefsinin tamircisi, tehlikede gördüğü hayatının
                        koruyucusu tanır”
                    </p>
                    <p className="mt-6 text-lg">
                        - Refik İnce -
                    </p>
                </blockquote>
            </div>
        </div>
    );
}

export default ParallaxHero;