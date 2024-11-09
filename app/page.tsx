import PrelineHeroSection from "@/app/components/PrelineHeroSection";
import MapView from "@/app/components/MapView";
import ParallaxHero from "@/app/components/ParallaxHero";
import FlexWindContentSection from "@/app/components/FlexWindContentSection";
import PrelineIconSectionSolid from "@/app/components/PrelineIconSectionSolid";

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
