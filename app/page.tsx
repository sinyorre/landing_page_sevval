import PrelineNavbar from "@/app/components/PrelineNavbar";
import PrelineHeroSection from "@/app/components/PrelineHeroSection";
import PrelineIconSection from "@/app/components/PrelineIconSection";
import PrelineFooter from "@/app/components/PrelineFooter";
import MapView from "@/app/components/MapView";
import ParallaxHero from "@/app/components/ParallaxHero";
import PrelineFeaturesWithVerticalTabs from "@/app/components/PrelineFeaturesWithVerticalTabs";

export default function Home() {
    return (
        <div>
            <PrelineNavbar/>
            <PrelineHeroSection/>
            <PrelineIconSection/>
            <ParallaxHero/>
            <PrelineFeaturesWithVerticalTabs/>
            <MapView/>
            <PrelineFooter/>
        </div>
    );
}
