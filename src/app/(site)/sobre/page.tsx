"use client";
import styled from "@emotion/styled";
import HeroSection from "./_sections/hero";
import Range from "../_components/Range";
import MvvSection from "./_sections/mvv";
import EcosystemSection from "./_sections/ecosytem";
import WaySection from "./_sections/way";

const SobreContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default function SobrePage() {
  return <SobreContainer>
    <HeroSection/>
    <Range />
    <EcosystemSection />
    <MvvSection/>
    <WaySection />
  </SobreContainer>
}
