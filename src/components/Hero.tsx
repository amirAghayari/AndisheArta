import { FaAngleLeft } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <section className="bg-primary w-screen h-190 flex items-center justify-center ">
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
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary rounded-md"
            />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم </p>
          </li>
          <li className="flex gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary rounded-md"
            />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم</p>
          </li>
          <li className="flex gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary rounded-md"
            />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم </p>
          </li>
          <li className="flex gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary rounded-md"
            />
            <p>لورم اپسیوم متن ساختگی با تولید ساختگی نامفهوم </p>
          </li>
        </ul>

        <div className="flex gap-4">
          <button className="btn btn-active btn-secondary rounded-xl">
            درباره ما
            <FaAngleLeft />
          </button>
          <button className="btn btn-active btn-primary rounded-xl">
            درباره ما
            <FaAngleLeft className="text-secondary" />
          </button>
        </div>
      </div>

      {/* picture */}
      <div></div>
    </section>
  );
};

export default Hero;
