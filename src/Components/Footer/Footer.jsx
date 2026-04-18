import Logo from "@/assets/logo.png";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001931] py-10">
      <div className="max-w-360 mx-auto text-white">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              className="max-w-10"
              src={Logo}
              alt="log"
              width={0}
              height={0}
            ></Image>
            <h2 className="font-bold">HERO.IO</h2>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-xl">Social Links</p>

            <div className="flex gap-2 text-3xl">
              <FaXTwitter className="bg-white p-1 rounded-full text-black"></FaXTwitter>
              <FaLinkedinIn className="rounded-full p-0.5 bg-white text-black"></FaLinkedinIn>
              <FaFacebook></FaFacebook>
            </div>
          </div>
        </div>

        <p className=" pt-8 border-t border-[#E5E7EB50]">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
