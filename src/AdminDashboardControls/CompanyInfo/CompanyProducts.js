import { useQuery } from "@apollo/client";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListTable from "../../components/AdminDashboard/ListTable/ListTable";
import ListTable2 from "../../components/AdminDashboard/ListTable2/ListTable2";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import { GET_MERCHANT_PRODUCTS } from "../../graphql/queries";
import goBack from "../../helpers/goBack";
// import {useHistory} from 'react-router-dom'

export default function CompanyProducts() {
    const history = useHistory();
    const [offset, setOffset] = useState(0);
    // Get id from params
    const merchantId = history.location.pathname.split('/')[3];
    const [merchantProducts, setMerchantProducts] = useState([]);
    const { loading, error, data } = useQuery(GET_MERCHANT_PRODUCTS, {
        variables: {
            offset: offset,
            merchantId: merchantId
        },
    });

    useEffect(async()=>{
        if (data) {
            setMerchantProducts(data.allMerchants.content );
            console.log(merchantProducts)
        }
    },[data])

    return (
        <DashboardBars>
            <section id="merchant-company-products">
                <h4 className="title mb-4">
                    <a onClick={goBack}>Merchants </a>
                    <span>&#x3e; Company A </span>
                    <span>&#x3e; Products</span>
                </h4>
                {loading ? 'loading....' : <>
                    {/* <ListTable product /> */}
                    {loading ? 'loading...' :<ListTable2 cols={[  "id",
                "Name",
                "Company",
                "skuTag",
                "skuCategory",
                "skuStyle",
                "skuColor",
                "skuprice",
                "type",
                "promoPrice",
                "inWishlist",
                "disabled",
                "stockQty"]} data={merchantProducts} buttontxt={"Edit"} table_title={"All Merchants"} />}

                </>}
            </section>
        </DashboardBars>
    )
}
