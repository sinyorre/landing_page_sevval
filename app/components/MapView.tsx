import React from 'react';

function MapView() {
    return (
        <div className="container mx-auto">
            <div
                className="rounded-lg overflow-hidden relative h-[36rem] w-full">
                <iframe
                    className="absolute inset-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8893440693287!2d32.805198295046864!3d39.89910971357309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34ef899cd75eb%3A0xc02d79f4e8c91aaa!2zQVZVS0FUIEbEsEzEsFogRVJPTA!5e0!3m2!1str!2str!4v1730566252305!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <div
                    className="bg-white absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-wrap py-6 rounded shadow-md w-2/3">
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                            EPOSTA
                        </h2>
                        <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                            TELEFON
                        </h2>
                        <a href="tel:5555555555" className="leading-relaxed">(0312) 312 12 12</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapView;