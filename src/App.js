import './style/App.css';
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';
import Routes from './routes';
import Footer from './common/Footer';
import Header from './common/Header';
import Partners from './common/Partners';
import MiniStripPromo from './common/MiniStripPromo';

const styles = {
  customContainer: {
    width: '100%',
    padding: '0px',
  },
  customContainerFluid: {
    width: '100%',
    paddingLeft: "30px",
    paddingRight: "30px"
  }
}

function App({ location }) {
  return (
    <div style={location.pathname === '/dashboard/admin' ? styles.customContainer : styles.customContainerFluid}>
      {location.pathname !== '/dashboard/admin' && (
        <>
          <Header />
          <div className='fourth-navigations' >
            <MiniStripPromo promoText="Get 20% Off on any furniture with code: BURROWS20" />
          </div>
        </>
      )}
      <Routes />
      {location.pathname !== '/dashboard/admin' && <Partners />}
      {location.pathname !== '/dashboard/admin' && <Footer />}
    </div >
  );
}

export default withRouter(App);
