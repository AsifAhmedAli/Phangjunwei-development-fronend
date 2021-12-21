import "./style/App.css";
import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";
import Routes from "./routes";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Partners from "./common/Partners";
import MiniStripPromo from "./common/MiniStripPromo";
import Loader from "./components/Loader/Loader";
import { createContext, useState } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const styles = {
  customContainer: {
    width: "100%",
    padding: "0px",
  },
  customContainerFluid: {
    width: "100%",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
};
export const LoaderContext = createContext();

function App({ location }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader></Loader>}

      <div
        style={
          (location.pathname.startsWith("/dashboard") ||
            location.pathname.startsWith('/register') ||
            location.pathname.startsWith('/login'))
            ? styles.customContainer
            : styles.customContainerFluid
        }
      >
        {(!location.pathname.startsWith("/dashboard") && !location.pathname.startsWith('/register') && !location.pathname.startsWith('/login')) && (
          <>
            <Header />
            <div className="fourth-navigations">
              <MiniStripPromo promoText="Get 20% Off on any furniture with code: BURROWS20" />
            </div>
          </>
        )}
        <Routes />
        {(!location.pathname.startsWith("/dashboard") &&
          !location.pathname.startsWith('/register') &&
          !location.pathname.startsWith('/login')) && <Partners />}
        {(!location.pathname.startsWith("/dashboard") &&
          !location.pathname.startsWith('/register') &&
          !location.pathname.startsWith('/login')) && <Footer />}
      </div>
    </LoaderContext.Provider>
  );
}

export default withRouter(App);
