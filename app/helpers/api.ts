
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzZiMjc5NjFjYzI2MzJhOWQwYzdiNSIsImVtYWlsIjoiZGF2aWRjYXJpQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXZpZENhcmkiLCJpYXQiOjE3NTI2MDk0NzR9.LVC3AdCkfQzPdAEmAfr9JG9brP-qqrUYQa7M1jJ6QPk",
}

export const fetchCardData = async () => {
    try {
        const [getCustomerCount, getInvoicesCount, getInvoicesStatusCount] = await Promise.all([
            fetch(`${process.env.BACKEND_URL}/customer/count`, { headers }),
            fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers }),
            fetch(`${process.env.BACKEND_URL}/invoices/status-count`, { headers }),
        ]);

        const resultCustomerCount = await getCustomerCount.json();
        const resultInvoicesCount = await getInvoicesCount.json();
        const resultInvoiceStatusCount = await getInvoicesStatusCount.json();

        const numberOfInvoices = Number(resultInvoicesCount ?? "0");
        const numberOfCustomers = Number(resultCustomerCount ?? "0");
        const totalPaidInvoices = resultInvoiceStatusCount.paid ?? "0";
        const totalPendingInvoices = resultInvoiceStatusCount.pending ?? "0";
        

        return {
            numberOfInvoices,
            numberOfCustomers,
            totalPaidInvoices,
            totalPendingInvoices
        };
    } catch (error) {
        console.log("error :>> ", error);
        throw new Error(`Failed to fetch card data.`)
    }
}

export const fetchRevenue = async() => {
    try {
        
        const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`);
        const revenueResult = await fetchRevenue.json();

        return revenueResult;

    } catch (error) {
        console.log("error :>> ", error);
        throw new Error(`Failed to fetch revenue data.`)       
    }
}; 