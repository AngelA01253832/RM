import { useMemo, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler,} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Button, ButtonGroup } from "@mui/material";
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const scores = [76,78,75,78,74,78,77];
const labels = [1,2,3,4,5,6,7];

const options = {
  fill: true,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};


export function WeightProgressChart() {
  const [chartColor, setchartColor] = useState('75, 192, 192')
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
          tension: 0.3,
          borderColor: `rgb(${chartColor})`,
          pointRadius: 6,
          pointBackgroundColor: `rgb(${chartColor})`,
          backgroundColor: `rgb(${chartColor},0.3)`,
        },
      ],
      labels,
    };
  }, []);

  return(
    <>
    <Box sx={{marginTop:'5vh'}}>
      <Line data={data} options={options} />
    </Box>
    </>
     
     )
}