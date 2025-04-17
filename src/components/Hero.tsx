import { FaAngleLeft } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import Swiper from "./Swiper";

const Hero: React.FC = () => {
  return (
    <section className="bg-primary w-screen h-190 flex items-center justify-center gap-30 ">
      {/* content */}
      <div className=" flex flex-col gap-8">
        <div className="flex  items-center gap-2 ">
          <img src="./Group 1437253831.svg" alt="icon" className="h-10" />
          <h1 className="font-bold text-primary-content text-4xl  ">
            نام آوران اندیشه آرتا
          </h1>
        </div>

        <ul className="text-accent flex gap-2 flex-col ">
          <li className="flex gap-2">
            <FaCheckSquare className="text-secondary w-6 h-6" />

            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم </p>
          </li>
          <li className="flex gap-2">
            <FaCheckSquare className="text-secondary w-6 h-6" />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم</p>
          </li>
          <li className="flex gap-2">
            <FaCheckSquare className="text-secondary w-6 h-6" />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم </p>
          </li>
          <li className="flex gap-2">
            <FaCheckSquare className="text-secondary w-6 h-6" />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم </p>
          </li>
        </ul>

        <div className="flex gap-4">
          <button className="btn btn-active btn-secondary rounded-xl">
            درباره ما
            <FaAngleLeft />
          </button>
          <button className="btn btn-active btn-primary rounded-xl">
            محصولات ما <FaAngleLeft className="text-secondary" />
          </button>
        </div>
      </div>

      {/* picture */}
      {/* <div className="relative top-10">
        <div className="absolute top-20 w-150">
          <img src="./image.png" alt="image" className="w-200" />
          <img
            src="./logo.svg"
            alt="logo"
            className=" w-14 absolute z-10 top-0 left-2"
          />
        </div>
        <div>
          <img
            src="./bgPicture.png"
            alt=""
            className="-z-10 w-100 h-130 mr-70"
          />
          <img
            src="./pictureSideLogo.svg"
            alt="logo"
            className="z-0 top-1/2 left-8 absolute h-28"
          />
        </div>
      </div> */}
      <Swiper />
    </section>
  );
};

export default Hero;
