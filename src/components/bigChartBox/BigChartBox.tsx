import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Site1",
    Excavators: 7,
    Bulldozers: 10,
    Cranes: 12,
  },
  {
    name: "Site2",
    Excavators: 3,
    Bulldozers: 13,
    Cranes: 10,
  },
  {
    name: "Site3",
    Excavators: 20,
    Bulldozers: 9,
    Cranes: 22,
  },
  {
    name: "Site4",
    Excavators: 20,
    Bulldozers: 13,
    Cranes: 15,
  },
  {
    name: "Site5",
    Excavators: 7,
    Bulldozers: 4,
    Cranes: 9,
  },
  {
    name: "Site6",
    Excavators: 19,
    Bulldozers: 13,
    Cranes: 12,
  },

];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Equipment Management</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Excavators"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Bulldozers"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Cranes"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
