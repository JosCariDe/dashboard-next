import { RevenueChart } from "anjrot-components";
import { fetchRevenue } from "../helpers/api"

const ChartWrapper = async() => {

    const revenues = await fetchRevenue();

  return <RevenueChart revenues={revenues} chartHeight={350}/>;
}

export default ChartWrapper