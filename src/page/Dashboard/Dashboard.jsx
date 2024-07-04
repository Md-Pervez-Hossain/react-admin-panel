import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import AreaCharts from "../../share/Charts/AreaChart/AreaChart";
import BarCharts from "../../share/Charts/BarChart/BarCharts";
import Heading from "../../share/ui/Heading/Heading";
import Paragraph from "../../share/ui/Paragraph/Paragraph";

const Dashboard = () => {
  return (
    <div>
      <Breadcrumb title="Dashboard   " />
      <div className="grid grid-cols-12 row-span-12 my-5 gap-10">
        <div className="col-span-3 p-5 rounded-lg row-span-6   bg-gradient-to-r from-primary/70 from-10%  to-secondary/10 to-90%  cursor-pointer transition-all duration-700 flex items-center hover:scale-105 hover:shadow-lg">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins font-semibold text-[24px]  text-white">
              Weekly Sales
            </h2>
            <p className="font-poppins font-normal  text-white">$ 500000</p>
            <p className="font-poppins font-normal  text-white">
              Increase by 30%
            </p>
          </div>
        </div>
        <div className="col-span-3 p-5 rounded-lg row-span-6   bg-gradient-to-r from-secondary/70 from-10%  to-secondary/10 to-90%  cursor-pointer transition-all duration-700 flex items-center hover:scale-105 hover:shadow-lg">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins font-semibold text-[24px]  text-white">
              Monthly Sales
            </h2>
            <p className="font-poppins font-normal  text-white">$ 500000</p>
            <p className="font-poppins font-normal  text-white">
              Increase by 20%
            </p>
          </div>
        </div>
        <div className="col-span-3 p-5 rounded-lg row-span-6   bg-gradient-to-r from-primary/70 from-10%  to-secondary/10 to-90%  cursor-pointer transition-all duration-700 flex items-center hover:scale-105 hover:shadow-lg">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins font-semibold text-[24px]  text-white">
              Yearly Sales
            </h2>
            <p className="font-poppins font-normal  text-white">$ 500000</p>
            <p className="font-poppins font-normal  text-white">
              Increase by 10%
            </p>
          </div>
        </div>
        <div className="col-span-3 bg-white p-5 rounded-lg row-span-12  flex flex-col justify-around hover:scale-105 hover:shadow-lg transition-all duration-700 ">
          <h2 className="font-poppins font-semibold text-[24px]   text-primary">
            Latest User
          </h2>

          <div className="flex items-center gap-5 ">
            <img
              src="../../../public/assets/avatar.png"
              alt=""
              className="size-[70px] rounded-full bg-primary/10 "
            />
            <div>
              <h2 className="text-base font-semibold font-poppins text-secondary">
                Md Mahfujur Rahman
              </h2>
              <p className="font-poppins text-primary/50">Paid Member</p>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <img
              src="../../../public/assets/avatar.png"
              alt=""
              className="size-[70px] rounded-full bg-primary/10 "
            />
            <div>
              <h2 className="text-base font-semibold font-poppins text-secondary">
                Md Mahfujur Rahman
              </h2>
              <p className="font-poppins text-primary/50">Paid Member</p>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <img
              src="../../../public/assets/avatar.png"
              alt=""
              className="size-[70px] rounded-full bg-primary/10 "
            />
            <div>
              <h2 className="text-base font-semibold font-poppins text-secondary">
                Md Mahfujur Rahman
              </h2>
              <p className="font-poppins text-primary/50">Paid Member</p>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <img
              src="../../../public/assets/avatar.png"
              alt=""
              className="size-[70px] rounded-full bg-primary/10 "
            />
            <div>
              <h2 className="text-base font-semibold font-poppins text-secondary">
                Md Mahfujur Rahman
              </h2>
              <p className="font-poppins text-primary/50">Paid Member</p>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-white p-5 rounded-lg row-span-6 transition-all duration-700 hover:scale-105 hover:shadow-lg ">
          <AreaCharts />
        </div>
        <div className="col-span-4 bg-white p-5 rounded-lg row-span-6 transition-all duration-700 hover:scale-105 hover:shadow-lg ">
          <BarCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
