import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaCharts = () => {
  const data = [
    {
      name: "A",
      uv: 1000,
      pv: 1500,
      amt: 2400,
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "C",
      uv: 2000,
      pv: 6700,
      amt: 2290,
    },
    {
      name: "D",
      uv: 3580,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "E",
      uv: 6090,
      pv: 3000,
      amt: 2181,
    },
  ];

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={400} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#006B77" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#006B77" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#006B77"
          />
          <YAxis
            stroke="#006B77"
            axisLine={false}
            tickLine={false}
            domain={[0, 5000]}
            interval={0}
          />
          <Tooltip
            formatter={(value) => {
              return value + "%";
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#006B77"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
