"use client";

import Image from "next/image";
import DownloadIcon from "@/assets/icon-downloads.png";
import RatingIcon from "@/assets/icon-ratings.png";
import { useContext } from "react";
import { InstallAppContext } from "@/Context/AppsContext";

const InstallAppCard = ({ installApp }) => {
  const { installApps, setInstallApps } = useContext(InstallAppContext);

  const handleUninstallBtn = (currentApp) => {
    const filterInstallApps = installApps.filter(
      (installApp) => installApp.id !== currentApp.id,
    );

    setInstallApps(filterInstallApps);
    alert(`${currentApp.title} is Uninstalled!`);
  };

  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 bg-[#D9D9D9] flex justify-center items-center">
          <Image
            src={installApp.image}
            alt={installApp.title}
            width={65}
            height={0}
          ></Image>
        </div>

        <div className="space-y-4 font-medium">
          <h2 className="font-semibold text-2xl">{installApp.title}</h2>

          <div className="flex gap-4 ">
            <div className="text-[#00D390] flex gap-2 items-center">
              <Image
                src={DownloadIcon}
                alt="download-icon"
                width={20}
                height={20}
              ></Image>
              <p>{installApp.downloads}</p>
            </div>

            <div className="text-[#FF8811] flex gap-2 items-center">
              <Image
                src={RatingIcon}
                alt="rating-icon"
                width={18}
                height={18}
              ></Image>
              <p>{installApp.ratingAvg}</p>
            </div>

            <p className="[#627382]">{installApp.size}M</p>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => handleUninstallBtn(installApp)}
          className="btn font-semibold text-white px-4 py-3 bg-[#00D390]"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallAppCard;
