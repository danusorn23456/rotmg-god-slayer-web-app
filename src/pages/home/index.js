import React from "react";
import { MainLayout } from "layouts";
import { Banner } from "features/general";

export function HomePage({ ...rest }) {
  return (
    <MainLayout>
      <Banner/>
    </MainLayout>
  );
}
