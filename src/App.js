import './style/App.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';
import Routes from './routes';
import Footer from './common/Footer';
import Header from './common/Header';
import Partners from './common/Partners';
import MiniStripPromo from './common/MiniStripPromo';

function App({ location }) {
  return (
    <div>
      <Container fluid className='main-container'>
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
      </Container>
    </div >
  );
}

export default withRouter(App);
