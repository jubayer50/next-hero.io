"use client";

import { InstallAppContext } from "@/Context/AppsContext";
import { useContext } from "react";

const MyInstallButton = ({ app }) => {
  const { installApps, setInstallApps } = useContext(InstallAppContext);

  const handleInstallBtn = (currentApp) => {
    const isExisting = installApps.find(
      (installApp) => installApp.id === currentApp.id,
    );

    if (isExisting) {
      alert(`${currentApp.title} is already Installed!`);
      return;
    }

    setInstallApps([...installApps, currentApp]);
  };

  return (
    <div>
      <button
        onClick={() => handleInstallBtn(app)}
        className="btn bg-[#00D390] font-semibold text-xl text-white"
      >
        Install Now ({app.size})
      </button>
    </div>
  );
};

export default MyInstallButton;
