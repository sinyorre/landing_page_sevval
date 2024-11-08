import PrelineHeroSection from "@/app/components/PrelineHeroSection";
import MapView from "@/app/components/MapView";
import ParallaxHero from "@/app/components/ParallaxHero";
import PrelineFeaturesWithVerticalTabs from "@/app/components/PrelineFeaturesWithVerticalTabs";
import FlexWindContentSection from "@/app/components/FlexWindContentSection";
import PrelineIconSectionSolid from "@/app/components/PrelineIconSectionSolid";

export default function Home() {
    return (
        <div>
            <PrelineHeroSection/>
            <ParallaxHero/>
            <PrelineIconSectionSolid/>
            <PrelineFeaturesWithVerticalTabs/>
            <MapView/>
            <FlexWindContentSection/>
        </div>
    );
}
