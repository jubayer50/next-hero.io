import IconDownload from "@/assets/icon-downloads.png";
import IconRating from "@/assets/icon-ratings.png";
import IconReview from "@/assets/icon-review.png";
import MyInstallButton from "@/Components/MyInstallButton/MyInstallButton";
import Image from "next/image";

const getPromise = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  return res.json();
};

const AppDetailPage = async ({ params }) => {
  const apps = await getPromise();

  const { id } = await params;

  const app = apps.find((app) => app.id === Number(id));

  return (
    <div className="bg-[#00000008]">
      <div className="max-w-360 mx-auto py-20">
        <div className="space-y-10 divide-y divide-[#00193120]">
          {/* content with image */}
          <div className="flex items-center gap-10 pb-10 ">
            {/* imm */}
            <div className="w-87.5 h-87.5 bg-white flex justify-center items-center">
              <Image
                src={app.image}
                alt={app.title}
                width={250}
                height={0}
              ></Image>
            </div>

            {/* content */}
            <div className="space-y-6 divide-y divide-[#00193120]">
              {/* title and sub info */}
              <div className="space-y-2 pb-6">
                <h2 className="text-3xl font-bold text-[#001931]">
                  {app.title}
                </h2>
                <p className="text-[#627382]">
                  Developed by{" "}
                  <span className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    {app.companyName}
                  </span>
                </p>
              </div>

              {/* icon with info */}
              <div className="flex gap-10">
                {/* download section */}
                <div className="space-y-2">
                  <Image
                    src={IconDownload}
                    alt="download-icon"
                    width={40}
                    height={40}
                  ></Image>
                  <p className="text-[#001931]">Downloads</p>
                  <h2 className="text-[#001931] font-extrabold text-[40px]">
                    {app.downloads}
                  </h2>
                </div>

                {/* rating section */}
                <div className="space-y-2">
                  <Image
                    src={IconRating}
                    alt="rating-icon"
                    width={40}
                    height={40}
                  ></Image>
                  <p className="text-[#001931]">Average Ratings</p>
                  <h2 className="text-[#001931] font-extrabold text-[40px]">
                    {app.ratingAvg}
                  </h2>
                </div>

                {/* review section */}
                <div className="space-y-2">
                  <Image
                    src={IconReview}
                    alt="review-icon"
                    width={40}
                    height={40}
                  ></Image>
                  <p className="text-[#001931]">Total Reviews</p>
                  <h2 className="text-[#001931] font-extrabold text-[40px]">
                    {app.reviews}
                  </h2>
                </div>
              </div>

              {/* btn */}
              <div>
                {/* clint btn component */}
                <MyInstallButton app={app}></MyInstallButton>
              </div>
            </div>
          </div>

          {/* bar chart */}
          <div className="pb-10">
            <h2 className="text-2xl font-bold py-2">Chart</h2>
            {/* <Chart></Chart> */}
          </div>

          {/* description */}
          <div>
            <h2 className="text-[#001931] font-semibold text-2xl">
              Description
            </h2>

            <p className="mt-6">{app.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailPage;
