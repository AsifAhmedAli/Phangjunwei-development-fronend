import { useHistory } from "react-router-dom";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import './CompanyInfo.css';
import { company_revenue_img_1, company_revenue_img_2, company_revenue_img_3 } from '../../images/dashboard';
import { ThreeDots, PencilFill, XLg } from 'react-bootstrap-icons';
import { person_info_image } from '../../images/dashboard';
import ListTable from "../../components/AdminDashboard/ListTable/ListTable";
import goBack from '../../helpers/goBack';
import { GET_MERCHANT, GET_PARENT_PRODUCTS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function CompanyInfo() {
    const history = useHistory();
    // Get id from params
    const merchantId = history.location.pathname.split('/')[3];
    const [merchant, setMerchant] = useState([]);
    const { loading, error, data } = useQuery(GET_MERCHANT, {
        variables: {
            id: +merchantId
        },
    });

    if (data) {
        setMerchant({ merchant, ...data.getMerchant });
    }

    return (
        <DashboardBars>
            <section id="merchant-company-info">
                {error && <p>Error fetching Data</p>}
                {loading ? 'loading....' :
                    <>
                        <h4 className="title mb-4">
                            <a onClick={goBack}>Merchants </a>
                            <span>&#x3e; Company A</span>
                        </h4>
                        <div className="revenue-cards">
                            <div className="revenue-card">
                                <div className="revenue_card_left">
                                    <div className="revenue-icon">
                                        <img src={company_revenue_img_1} alt="asset1" />
                                    </div>
                                    <div className="revenue-text">
                                        <h3 className="count">$50,000</h3>
                                        <p className="title">Total Revenue</p>
                                    </div>
                                </div>
                                <a href="#"><ThreeDots /></a>
                            </div>
                            <div className="revenue-card">
                                <div className="revenue_card_left">
                                    <div className="revenue-icon">
                                        <img src={company_revenue_img_2} alt="asset2" />
                                    </div>
                                    <div className="revenue-text">
                                        <h3 className="count">$50,000</h3>
                                        <p className="title">Revenue</p>
                                    </div>
                                </div>
                                <a href="#"><ThreeDots /></a>

                            </div>
                            <div className="revenue-card">
                                <div className="revenue_card_left">
                                    <div className="revenue-icon">
                                        <img src={company_revenue_img_3} alt="asset3" />
                                    </div>
                                    <div className="revenue-text">

                                        <h3 className="count">$50,000</h3>
                                        <p className="title">Growth</p>
                                    </div>
                                </div>
                                <a href="#"><ThreeDots /></a>
                            </div>
                        </div>
                        <div className='info-cards'>
                            <div className="info_card">
                                <div className="left-section pl-2">
                                    <div className="person_image pr-3">
                                        <img src={person_info_image} alt="Default" />
                                    </div>
                                    <div className="info_text">
                                        <h3 className="info_name avenir-black">David James (Owner)</h3>
                                        <p className="info_address">Address</p>
                                        <p className="info_phone">Mobile: +01923014712</p>
                                        <p className="info_email">Email: abc@gmail.com</p>
                                    </div>
                                </div>
                                <div className="right_section">
                                    <div>
                                        <PencilFill />
                                    </div>
                                    <div>
                                        <XLg />
                                    </div>
                                </div>
                            </div>
                            <div className="info_card">
                                <div className="left-section pl-4">
                                    <div className="info_text">
                                        <h3 className="info_name avenir-black">More info</h3>
                                        <p>Date joined: DD/MM/YYYY</p>
                                        <p>No. of products: XX</p>
                                        <p>Delivery: Within 7 days</p>
                                    </div>
                                </div>
                                <div className="right_section">
                                    <div>
                                        <PencilFill />
                                    </div>
                                    <div>
                                        <XLg />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ListTable product location={history.location.pathname} />
                    </>}
            </section>
        </DashboardBars>
    )
}
