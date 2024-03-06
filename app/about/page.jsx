import Image from "next/image";
import AboutImg from "@/images/about.jpg";
import { IoMdPulse } from "react-icons/io";
const page = () => {
  return (
    <div className="py-20">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Story
        </h1>
        <Image
          src={AboutImg}
          width={600}
          height={600}
          alt="about us"
          className="rounded-md"
        />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-white">
          Website Ini Adalah projek untuk meng informasikan Ambatron yang telah
          menyerang bumi dan fuadmani sebagai penyelamat bumi ingin sekali
          menghancurkan ambatron yang begitu hebat dan kuat sangat sangat kuat
          dan jika fuadmani & ambatron bertarung maka seluruh alam semesta akan
          hancur akan kekuatan yang di miliki oleh ambatron dan fuadmani yang
          begitu hebat & dahsyat
        </p>
        <div className="flex gap-1 items-center">
          <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
            Ren-Tech
          </h1>
          <IoMdPulse className="text-3xl text-sky-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default page;
