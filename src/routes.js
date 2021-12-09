import AdminDashboard from './AdminDashboard/AdminDashboard';
import AdminDashboardFront from './AdminDashboardControls/AdminDashboardFront';
import MoreIdea from './common/MoreIdea';
import MerchantDiscover from './common/MerchantDiscover';
import Recommended from './product/Recommended';
import Discover from './product/Discover';
import RecentView from './product/RecentView';
import StyleInspire from './product/StyleInspire';
import StripPromo from './common/StripPromo';
import PageCarousel from './common/PageCarousel';

import MerchantCarousel from './merchant/MerchantCarousel'
import MerchantHome from './merchant/MerchantHome';
import CategoryStyle from './product/CategoryStyle';
import ProductDetails from './product/ProductDetails';
import Onboarding from './merchant/Onboarding';
import Feedback from './contact-form/Feedback';
import Wishlist from './account/Wishlist';
import PaymentMethod from './account/PaymentMethod';
import Setting from './account/Setting';
import Shops from './account/Shops';
import MyCart from './account/MyCart';
import RateCard from './merchant/RateCard';
import Team from './common/Team';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CategorySearch from './product/CategorySearch';
import ProductSearch from './product/ProductSearch';
import ImageSearch from './product/ImageSearch';
import Purchases from './account/Purchases';
import Shipping from './account/Shipping';
import OrderPayment from './account/OrderPayment';
import Privacy from './common/Privacy';
import ProductPhotography from './common/ProductPhotography';
import Faqs from './common/Faqs';
import Careers from './common/Careers';
import BlogHome from './blog/BlogHome';
import OrderSuccess from './account/OrderSuccess';
import OrderFailed from './account/OrderFailed';
import MerchantBanner from "./components/MerchantBanner";
import ReviewSlider from "./components/ReviewSlider";
import DiscoverShop from "./product/DiscoverShop";
import AddMerchant from './AdminDashboardControls/AddMerchant/AddMerchant';
import CompanyInfo from './AdminDashboardControls/CompanyInfo/CompanyInfo';
import CompanyProducts from './AdminDashboardControls/CompanyInfo/CompanyProducts';
import AddProduct from './AdminDashboardControls/AddProduct/AddProduct';
import ShowCustomers from './AdminDashboardControls/ShowCustomers/ShowCustomers'
import CustomerOrder from './AdminDashboardControls/Customer Order/CustomerOrder';
import CompanyOrder from './AdminDashboardControls/CompanyOrder/CompanyOrder';
import OrderInvoice from './AdminDashboardControls/OrderInvoice/OrderInvoice';

export default function Routes() {
    return (
        <Switch>

            <Route path="/" exact>
                <div className='home-page'>
                    <PageCarousel isHomePage={true} isCategory={false} />
                    <StripPromo />

                    <StyleInspire title="Style Inspirations" />
                    <RecentView />
                    <Discover title="Discover" />

                    <Recommended />
                    {/*<MerchantDiscover/>*/}
                    {/*Client asked to remove this above section*/}
                    <DiscoverShop title="Discover shop" />
                    <MoreIdea />
                </div>
            </Route>


            {/* Dashboard Routes */}
            <Route path="/dashboard/admin" exact>
                <AdminDashboard />
            </Route>

            <Route path="/dashboard/admin/merchants" exact>
                <AdminDashboardFront />
            </Route>

            <Route path="/dashboard/admin/merchant/add" exact>
                <AddMerchant />
            </Route>

            <Route path="/dashboard/admin/merchant/:companyId" exact>
                <CompanyInfo />
            </Route>

            <Route path="/dashboard/admin/merchant/:companyId/products" exact>
                <CompanyProducts />
            </Route>

            <Route path="/dashboard/admin/merchant/:companyId/product/add" exact>
                <AddProduct />
            </Route>
            <Route path="/dashboard/admin/merchant/:companyId/customers" exact>
                <ShowCustomers/>
            </Route>
            <Route path="/dashboard/admin/merchant/:companyId/customers/:customerid" exact>
                <CustomerOrder />
            </Route>
            <Route path="/dashboard/admin/merchant/:companyId/customers/:customerid/:orderid" exact>
                <OrderInvoice></OrderInvoice>
            </Route>
           
            <Route path="/dashboard/admin/merchant/:companyId/orders" exact>
                <CompanyOrder />
            </Route>
            
            {/* Dashboard Routes End*/}

            <Route path="/careers">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Careers />
            </Route>
            <Route path="/privacy">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Privacy />
            </Route>
            <Route path="/faqs">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Faqs />
            </Route>
            <Route path="/product-photography">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <ProductPhotography />
            </Route>
            <Route path="/merchant/:id">
                <MerchantCarousel />
                <StripPromo />
                <MerchantHome />
                <Discover title="Discover" />
                <RecentView />
                <MerchantBanner />
                <ReviewSlider />
            </Route>
            <Route path="/category/:catname">
                <PageCarousel isHomePage={false} isCategory={true} />
                <CategoryStyle title="ARMCHAIR STYLES" numbers={true} />
                <CategorySearch />
                <Discover title="Discover" />
                <MerchantDiscover />
                <RecentView />
                <br />
            </Route>
            <Route path="/product-details/:id">
                {/* <CategoryStyle title="ARMCHAIR STYLE" /> */}
                <ProductDetails />
                {/*<MerchantDiscover />*/}
                <RecentView customTitle="You may also like" />
                <StyleInspire title="Style Inspirations" />
                {/*<div className='pt-3'>*/}
                {/*<StyleInspire title="Discover the style" />*/}
                {/*</div>*/}
                {/*<MerchantDiscoverCompanies />*/}
            </Route>

            <Route path="/search/:searchterm">
                <PageCarousel isHomePage={false} isCategory={true} />
                <CategoryStyle title="Stool styles" />
                <ProductSearch />
                <MerchantDiscover />
                <br />
                <Discover title="You may also like" />
                <RecentView />
            </Route>
            <Route path="/image-search/:searchterm">
                <PageCarousel isHomePage={false} isCategory={true} />
                <ImageSearch />
                <CategoryStyle title="Stool styles" />
                <ProductSearch />
                <MerchantDiscover />
                <br />
                <Discover title="You may also like" />
                <RecentView />
            </Route>

            <Route path="/merchant-onboarding">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Onboarding />
            </Route>
            <Route path="/merchant-ratecard">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <RateCard />
            </Route>

            <Route path="/contact-form">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Feedback />
            </Route>

            <Route path="/account/purchases">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Purchases />
            </Route>
            <Route path="/account/wishlist">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Wishlist />
            </Route>
            <Route path="/account/payments">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <PaymentMethod />
            </Route>
            <Route path="/account/shops">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Shops />
            </Route>
            <Route path="/account/settings">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Setting />
            </Route>

            <Route path="/my-cart/shipping">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <Shipping />
            </Route>
            <Route path="/my-cart/payment">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <OrderPayment />
            </Route>
            <Route path="/my-cart">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <MyCart />
            </Route>

            <Route path="/order-complete">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <OrderSuccess />
            </Route>
            <Route path="/order-fail">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <OrderFailed />
            </Route>

            <Route path="/meet-the-team">
                <Team />
            </Route>
            <Route path="/blog">
                <PageCarousel isHomePage={true} isCategory={false} />
                <StripPromo />
                <BlogHome />
            </Route>

            {/* unknown route */}
            <Route path="*">
                <div>404 error</div>
            </Route>
        </Switch>

    )
}
