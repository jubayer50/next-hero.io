import Link from "next/link";
import AppCard from "../AppCard/AppCard";

const getPromise = async () => {
  const res = await fetch("https://next-hero-io.vercel.app/data.json", {
    cache: "no-store",
  });
  return res.json();
};

const TrendingApps = async () => {
  const apps = await getPromise();

  // console.log(apps);

  return (
    <div className="bg-[#00000008]">
      <div className="max-w-360 mx-auto py-20">
        <div className="text-center space-y-4">
          <h2 className="text-[#001931] text-5xl font-bold">Trending Apps</h2>
          <p className="text-[#627382] text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="my-10 grid grid-cols-4 gap-4">
          {apps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>

        <Link href={"/apps"} className="flex justify-center">
          <button className="btn bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
