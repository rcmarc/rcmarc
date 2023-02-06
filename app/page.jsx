import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Caveat, Roboto } from "@next/font/google";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import profilePic from "../public/profile.jpeg";

const caveat = Caveat({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return (
    <div className="flex flex-col items-center sm:w-8/12 md:w-6/12 lg:w-4/12 mx-auto">
      <Image
        alt="Profile Picture"
        height={130}
        width={130}
        src={profilePic}
        className="rounded-full mx-auto"
        priority
      />
      <p className={clsx(caveat.className, "text-5xl mt-5")}>Marcos Carrera</p>
      <p className={clsx(roboto.className, "text-md")}>
        FullStack Software Developer
      </p>
      <div className="flex w-full mt-10 justify-between">
        <Social>
          <BsGithub href="https://github.com/rcmarc" />
          <BsLinkedin href="https://www.linkedin.com/in/marcoscarrera97" />
          <BsInstagram href="https://www.instagram.com/marcoscarrera_97" />
          <BsTwitter href="https://twitter.com/MarcosCarrera97" />
        </Social>
      </div>
      <Link
        className="mt-16 bg-sky-600 border-2 border-transparent transition-all hover:border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-sky-700"
        href="https://drive.google.com/file/d/1dQbyAFsU_iA6mt9hR1A-DHfcXl1eescX/view?usp=share_link"
        target="_blank"
      >
        See my CV
      </Link>
      <div className="relative mt-32 w-full">
        <div className="absolute right-0 h-12 w-12 rounded-full group transition-colors hover:border-sky-500 hover:bg-gray-900 bg-slate-700 border-2">
          <div className="absolute -top-12 min-w-max px-2 py-1 rounded-xl -left-4 hidden group-hover:block transition-all  bg-gray-900">
            <p>Mail me</p>
          </div>
          <Link href="mailto://ramoscarrer@gmail.com">
            <MdEmail className="absolute text-white transition-colors group-hover:text-sky-500 top-2 h-7 w-7 left-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Social({ children }) {
  return children.map((child, index) => (
    <Link
      href={child.props.href}
      target="_blank"
      key={index}
      className="rounded-md w-8 h-8 relative hover:bg-slate-700 transition-all cursor-pointer duration-150"
    >
      {React.createElement(child.type, {
        className: "absolute top-1 left-1",
        size: 24,
        ...child.props,
      })}
    </Link>
  ));
}
