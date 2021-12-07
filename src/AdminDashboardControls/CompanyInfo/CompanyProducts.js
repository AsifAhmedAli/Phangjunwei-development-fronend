import ListTable from "../../components/AdminDashboard/ListTable/ListTable";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import goBack from "../../helpers/goBack";

export default function CompanyProducts() {
    return (
        <DashboardBars>
            <section id="merchant-company-products">
                <h4 className="title mb-4">
                    <a onClick={goBack}>Merchants </a>
                    <span>&#x3e; Company A </span>
                    <span>&#x3e; Products</span>
                </h4>
                <ListTable product />
            </section>
        </DashboardBars>
    )
}
