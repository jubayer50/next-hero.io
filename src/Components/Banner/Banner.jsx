import Image from "next/image";
import BannerImage from "@/assets/hero.png";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-[#00000008]">
      <div className="max-w-360 mx-auto pt-20 flex gap-10 flex-col">
        <div className="text-center">
          <h2 className="text-[#001931] font-bold text-7xl max-w-149.25 mx-auto leading-21">
            We Build{" "}
            <span className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h2>

          <p className="text-[#627382] text-xl max-w-251.5 mt-4  mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="flex items-center gap-3 justify-center mt-10">
            <button className="btn ">
              <IoLogoGooglePlaystore className="text-2xl"></IoLogoGooglePlaystore>{" "}
              Google Play
            </button>
            <button className="btn ">
              <FaAppStoreIos className="text-2xl"></FaAppStoreIos> App Store
            </button>
          </div>
        </div>

        <div>
          <Image
            className="mx-auto"
            src={BannerImage}
            alt="banner-img"
            width={0}
            height={0}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
