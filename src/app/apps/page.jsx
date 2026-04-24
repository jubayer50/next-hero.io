import AppCard from "@/Components/AppCard/AppCard";

const getPromise = async () => {
  const res = await fetch("http://localhost:3000//data.json", {
    cache: "no-store",
  });
  return res.json();
};

const InstallationPage = async () => {
  const apps = await getPromise();

  return (
    <div className="bg-[#00000008]">
      <div className="max-w-360 mx-auto py-20">
        <div className="text-center space-y-4">
          <h2 className="text-5xl text-[#001931] font-bold ">
            Our All Applications
          </h2>
          <p className="text-xl text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="mt-11.5 space-y-4">
          <div className="flex justify-between">
            <h3 className="text-[#001931] text-2xl font-semibold">
              ({apps.length}) Apps Found
            </h3>

            <input
              className="p-2 rounded-md border border-[#D2D2D2]"
              placeholder="Search"
              type="text"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {apps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
