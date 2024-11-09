import React from 'react';

function MapView() {
    return (
        <div className="container mx-auto">
            <div
                className="rounded-lg overflow-hidden relative h-[36rem] w-full">
                <iframe
                    className="absolute inset-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.8074472127328!2d32.84735707694959!3d39.923325085520375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34efe2669af6d%3A0x5539fabfb45674d6!2zS8SxesSxbGF5LCBGZXZ6aSDDh2FrbWFrLTEgU2suIE5vOjI0IEQ6MzIsIDA2NDQwIMOHYW5rYXlhL0Fua2FyYQ!5e0!3m2!1str!2str!4v1731148212252!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default MapView;