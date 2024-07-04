import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example data structure, ensure your SixYearlyData is similar
const SixYearlyData = [
  { name: "2018", girl: 4000, boy: 2400 },
  { name: "2019", girl: 3000, boy: 1398 },
  { name: "2020", girl: 2000, boy: 9800 },
  { name: "2021", girl: 2780, boy: 3908 },
  { name: "2022", girl: 1890, boy: 4800 },
  { name: "2023", girl: 2390, boy: 3800 },
];

const BarCharts = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={400} data={SixYearlyData}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#999"
          />
          <YAxis stroke="#999" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="girl" fill="#9B52FA" barSize={15} />
          <Bar dataKey="boy" fill="#837DFA" barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
