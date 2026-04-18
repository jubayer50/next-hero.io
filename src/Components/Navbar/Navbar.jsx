import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/apps"}>Apps</Link>
      </li>
      <li>
        <Link href={"/installation"}>Installation</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-360 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link href={"/"} className="flex items-center gap-2">
            <Image src={Logo} alt="logo" width={40} height={40}></Image>

            <h2 className="font-bold bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white items-center">
            <FaGithub className="text-lg" /> Contribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
