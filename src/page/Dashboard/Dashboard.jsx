import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import AreaCharts from "../../share/Charts/AreaChart/AreaChart";
import BarCharts from "../../share/Charts/BarChart/BarCharts";
import Heading from "../../share/ui/Heading/Heading";
import Paragraph from "../../share/ui/Paragraph/Paragraph";

const Dashboard = () => {
  return (
    <div className="font-poppins">
      <Breadcrumb title="Dashboard" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Weekly Sales */}
        <div className="p-5 rounded-lg bg-gradient-to-r from-primary/70 to-secondary/10 cursor-pointer transition-all duration-700 flex items-center justify-center hover:scale-105 hover:shadow-lg">
          <div className="text-center">
            <h2 className="font-semibold text-[24px] text-white">
              Weekly Sales
            </h2>
            <p className="font-normal text-white">$ 500000</p>
            <p className="font-normal text-white">Increase by 30%</p>
          </div>
        </div>

        {/* Monthly Sales */}
        <div className="p-5 rounded-lg bg-gradient-to-r from-secondary/70 to-secondary/10 cursor-pointer transition-all duration-700 flex items-center justify-center hover:scale-105 hover:shadow-lg">
          <div className="text-center">
            <h2 className="font-semibold text-[24px] text-white">
              Monthly Sales
            </h2>
            <p className="font-normal text-white">$ 500000</p>
            <p className="font-normal text-white">Increase by 20%</p>
          </div>
        </div>

        {/* Yearly Sales */}
        <div className="p-5 rounded-lg bg-gradient-to-r from-primary/70 to-secondary/10 cursor-pointer transition-all duration-700 flex items-center justify-center hover:scale-105 hover:shadow-lg">
          <div className="text-center">
            <h2 className="font-semibold text-[24px] text-white">
              Yearly Sales
            </h2>
            <p className="font-normal text-white">$ 500000</p>
            <p className="font-normal text-white">Increase by 10%</p>
          </div>
        </div>

        {/* Latest User */}

        {/* Area Chart */}
        <div className="bg-white p-5 rounded-lg row-span-6 transition-all duration-700 hover:scale-105 hover:shadow-lg">
          <AreaCharts />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-5 rounded-lg row-span-6 transition-all duration-700 hover:scale-105 hover:shadow-lg">
          <BarCharts />
        </div>
        <div className="bg-white p-5 rounded-lg row-span-6 transition-all duration-700 hover:scale-105 hover:shadow-lg">
          <BarCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
