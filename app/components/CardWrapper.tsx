import { InfoCard } from "anjrot-components"
import { fetchCardData } from "../helpers/api";

const CardWrapper = async() => {

    const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <>
        <InfoCard title={"Collected"} value={totalPaidInvoices} type="collected" currency={{ locale: "en-US", currency: "USD" }} />
        <InfoCard title={"Pending"} value={totalPendingInvoices} type="pending" currency={{ locale: "en-US", currency: "USD" }} />
        <InfoCard title={"Total Invoices"} value={numberOfInvoices} type="invoices" />
        <InfoCard title={"Total Customers"} value={numberOfCustomers} type="customers" />
    </>
  )
}

export default CardWrapper