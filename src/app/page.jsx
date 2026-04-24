import Banner from "@/Components/Banner/Banner";
import Status from "@/Components/Status/Status";
import TrendingApps from "@/Components/TrendingApps/TrendingApps";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <Status></Status>

      <TrendingApps></TrendingApps>
    </div>
  );
};

export default HomePage;
