import React from 'react';
import CustomUserProfile from "@/app/components/CustomUserProfile";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Hakkımda - Avukat Şevval Kurular',
    description: 'Ben Şevval Kurular, 5 Mayıs 1995 doğumluyum ve 2017 yılında Gazi Üniversitesi Hukuk Fakültesi’nden mezun oldum. Hukuk dünyasına olan ilgim, beni her zaman insan haklarını savunmaya, adaletin sağlanmasına katkıda bulunmaya ve müvekkillerimin haklarını en güçlü şekilde savunmaya yönlendirdi. Bu tutkumla 2018 yılında Ankara Barosu’na bağlı olarak yasal stajımı tamamladım. Staj döneminde edindiğim deneyimler, beni mesleki anlamda derinlemesine bir anlayışla donattı ve profesyonel kariyerimin temellerini attı.'
}

const Page = () => {
    return (
        <div className="container m-auto mt-10">
            <CustomUserProfile/>
        </div>
    );
};

export default Page;