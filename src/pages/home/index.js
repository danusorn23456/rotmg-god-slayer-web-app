import React from "react";
import { MainLayout } from "layouts";
import { Banner, WelcomeVideo } from "features/general";

export function HomePage({ ...rest }) {

  const WELCOME_VIDEO_SECTION = "welcome-video-section"

  function handleGoDown(){
    document.getElementById(WELCOME_VIDEO_SECTION).scrollIntoView({
      behavior: 'smooth'
  });
  }

  return (
    <MainLayout>
      <Banner onGoDown={handleGoDown}/>
      <WelcomeVideo id={WELCOME_VIDEO_SECTION}/>
    </MainLayout>
  );
}
