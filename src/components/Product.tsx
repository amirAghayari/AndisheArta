import { FaAngleLeft } from "react-icons/fa6";

const Product: React.FC = () => {
  return (
    <section className="bg-primary w-full flex justify-center items-center flex-col ">
      {/* title */}
      <h2 className=" items-center font-bold">
        <img src="./productLogo.svg" alt="logo" className="mr-8 mb-2" />
        محصولات <span className="text-secondary">اندیشه آرتا</span>
      </h2>

      <img src="beetwenIcon.svg" alt="" className=" w-10 my-16" />
      {/* main */}
      <div className="flex flex-row items-center justify-between gap-16">
        <div>
          <img
            src="./firstProduct.png"
            alt="first product"
            className="w-160 "
          />
        </div>

        {/* Discription */}
        <div className="w-160">
          <h2 className="font-bold text-2xl">
            لورم اپسیوم متن ساختگی با تولید
          </h2>
          <p className="text-accent mt-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
          <ul className="mt-4">
            <li className="flex gap-2 items-center  ">
              <img src="product1.svg" alt="icon" className="w-12 mt-4" />
              لورم ایپسوم متن ساختگی
            </li>
            <li className="flex gap-2 items-center">
              <img src="product2.svg" alt="icon" className="w-12 mt-4" />
              لورم ایپسوم متن ساختگی
            </li>
            <li className="flex gap-2 items-center">
              <img src="product3.svg" alt="icon" className="w-12 mt-4" />
              لورم ایپسوم متن ساختگی
            </li>
          </ul>

          {/* btn */}
          <div className="flex gap-4 mt-4">
            <button className="btn btn-active btn-secondary rounded-xl">
              اطلاعات بیشتر
              <FaAngleLeft />
            </button>
            <button className="btn btn-active btn-primary rounded-xl text-secondary">
              مشاوره رایگان
              <FaAngleLeft className="text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
