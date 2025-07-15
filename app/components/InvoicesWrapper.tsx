import { LatestInvoices } from "anjrot-components"
import { fetchInvoices } from "../helpers/api";

const InvoicesWrapper = async() => {

    const fetchInvoicesData = await fetchInvoices();

  return <LatestInvoices latestInvoices={fetchInvoicesData}> </LatestInvoices>
};

export default InvoicesWrapper