"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <>
      <Link
        className={`font-medium ${pathName === href ? "border-b-2 border-[#632EE3] bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""}`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export default MyNavLink;
