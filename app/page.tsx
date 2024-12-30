import PrelineHeroSection from "@/app/components/PrelineHeroSection";
import MapView from "@/app/components/MapView";
import ParallaxHero from "@/app/components/ParallaxHero";
import FlexWindContentSection from "@/app/components/FlexWindContentSection";
import PrelineIconSectionSolid from "@/app/components/PrelineIconSectionSolid";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Ankara, Avukat Şevval Kurular',
    description: 'Ankara Liberta Avukatlık ve Arabuluculuk Bürosu, Avukat Şevval Kurular, gayrimenkul hukuku, idare hukuku, icra hukuku, medeni hukuk, kira hukuku, aile hukuku ve benzeri alanlarda tüm hukuki süreçlerde yanınızdayım. Bilgi için +90 543 171 2791',
}

export default function Home() {
    return (
        <div>
            <PrelineHeroSection/>
            <ParallaxHero/>
            <PrelineIconSectionSolid/>
            <MapView/>
            <FlexWindContentSection/>
        </div>
    );
}
