"use client";

import InstallAppCard from "@/Components/InstallAppCard/InstallAppCard";
import { InstallAppContext } from "@/Context/AppsContext";
import { useContext } from "react";

const InstallationPage = () => {
  const { installApps } = useContext(InstallAppContext);
  return (
    <div className="bg-[#00000008]">
      <div className="max-w-360 mx-auto py-20">
        <div className="text-center space-y-4">
          <h2 className="text-[#001931] text-5xl font-bold">
            Your Installed Apps
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-11">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl  text-[#001931]">
              {installApps.length} Apps Found
            </h3>
            <input
              className="px-4 py-2 border border-[#D2D2D2] rounded-sm"
              type="text"
              placeholder="Sort by"
            />
          </div>

          <div className="mt-4 space-y-4">
            {installApps.map((installApp) => (
              <InstallAppCard
                key={installApp.id}
                installApp={installApp}
              ></InstallAppCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
