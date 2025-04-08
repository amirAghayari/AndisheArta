import { LuPackage2 } from "react-icons/lu";
import { MdWifiCalling3 } from "react-icons/md";

const Navbar: React.FC = () => {
  return (
    <div className="w-screen h-20 bg-primary flex justify-between items-center px-4">
      <div className="flex gap-8 ">
        {/* we can fix it later with react router */}
        <a href="#" className="activeLink p-2">
          صفحه اصلی
        </a>
        <a href="#" className="  text-accent p-2">
          درباره ما
        </a>
        <a href="#" className="text-accent p-2">
          تماس با ما
        </a>
        <a href="#" className="text-accent p-2">
          پروژه ها
        </a>
        <a href="#" className="text-accent p-2">
          بلاگ
        </a>
      </div>

      {/* logo */}
      <div className="text-secondary text-3xl font-bold">YOUR LOGO</div>

      {/* product */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <a href="tell:021555555" className="font-bold">
            021-555555
          </a>
          <MdWifiCalling3 className="text-accent" />
        </div>
        <button className="btn btn-secondary rounded-xl">
          <LuPackage2 />
          محصولات
        </button>
      </div>
    </div>
  );
};

export default Navbar;
