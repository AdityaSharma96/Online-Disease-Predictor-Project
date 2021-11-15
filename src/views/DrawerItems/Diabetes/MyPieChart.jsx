import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { blue } from "@material-ui/core/colors";

const data = [
  { name: "Total Pregnancies", value: 7 },
  { name: "Skin Thickness", value: 7 },
  { name: "Blood Pressure", value: 8 },
  { name: "Insulin", value: 8 },
  { name: "Diabetes Pedigree Function", value: 12 },
  { name: "Age", value: 14 },
  { name: "BMI", value: 15 },
  { name: "Glucose Level", value: 25 },
];

const color = [
  blue[200],
  blue[300],
  blue[400],
  blue[500],
  blue[600],
  blue[700],
  blue[800],
  blue[900],
];

export default function MyPieChart() {
  return (
    <PieChart width={600} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#1e88e5"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell - ${index}`} fill={color[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
