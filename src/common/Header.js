import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { Heart, Person, Handbag, Disc } from 'react-bootstrap-icons';
import burrow_logo from '../images/burrow_white_logo.png';
import burrow_rabbit_logo from '../images/burrow_rabbit_logo.png';
import icon_search from '../images/Iconly-Light-Search.png';
import icon_scan from '../images/Iconly-Two-tone-Scan.png';
import sg_curr from '../images/sg_currency.png';
import { useState } from 'react';

//promo
import promo1 from '../images/promo/2021/sample1.png';
import promo2 from '../images/promo/2021/sample2.png';
import promo3 from '../images/promo/2021/sample3.png';
import promo4 from '../images/promo/2021/sample4.png';

//categories
import cat_img1 from '../images/menu/category_icon1.jpg';
import cat_img2 from '../images/menu/category_icon2.jpg';
import img_placeholder from '../images/menu/img_cat_placeholder.jpg';

function Header() {
    const [isRecentSearchFocus, setIsRecentSearchFocus] = useState(false);

    const showRecentSearch = (e) => {
        document.getElementById('recent-search-box').style.display = 'inline-block';
    }

    const onSearchLeave = (e) => {
        document.getElementById('recent-search-box').style.display = 'none';
        /*setTimeout(function() {
            console.log(isRecentSearchFocus);
            if(!isRecentSearchFocus) {
                document.getElementById('recent-search-box').style.display = 'none';
            }
          }, 2500);*/
    }

    const recentSearchFocus = (e) => {
        setIsRecentSearchFocus(false);
    }
    const recentSearchOut = (e) => {
        setIsRecentSearchFocus(false);
    }

    const handleMenuStripClick = (e) => {
        if (e.target.innerHTML === 'Sale') {
            document.getElementById('sale-menu').style.display = 'inline-block';
        } else if (e.target.innerHTML === 'All') {
            document.getElementById('all-cat-menu').style.display = 'inline-block';
        } else {
            document.getElementById('other-cat-menu').style.display = 'inline-block';
        }
    }

    const handleCloseMenuStripClick = (e) => {

        setTimeout(function () {
            if (e.target.innerHTML === 'Sale') {
                document.getElementById('sale-menu').style.display = 'none';
            } else if (e.target.innerHTML === 'All') {
                document.getElementById('all-cat-menu').style.display = 'none';
            } else {
                document.getElementById('other-cat-menu').style.display = 'none';
            }
        }, 2000);
    }

    return (
        <>
            <Row className="page-header-top">
                <Col md={8}>&nbsp;</Col>
                <Col md={4}>
                    <ul className="top-menu">
                        <li>COVID-19 Updates</li>
                        <li><a href="/faqs">FAQ</a></li>
                        <li className="currency"><img src={sg_curr} /></li>
                    </ul>
                </Col>
            </Row>

            <Row className="page-header-searchbar">
                <Col md={4} className="text-center"><img src={burrow_rabbit_logo} alt="burrows-brand" className="logo-brand" />&nbsp;&nbsp;<a href="/"><img src={burrow_logo} alt="burrows-logo" /></a></Col>
                <Col md={4} className="text-center">
                    <InputGroup className="search-control">
                        <img src={icon_search} alt="search-icon" className="search-icon" />
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            onClick={showRecentSearch}
                            onMouseOut={onSearchLeave}
                        />
                        <img src={icon_scan} alt="scan-icon" className="scan-icon" />
                    </InputGroup>
                    <div className="text-center recent-search" id="recent-search-box" onFocus={recentSearchFocus} onMouseEnter={recentSearchFocus} onMouseOut={recentSearchOut}>
                        <div className="searchterm">Sofa</div>
                        <div className="searchterm">Chair</div>
                        <div className="searchterm">Table</div>
                        <div className="clear">Clear recent searches</div>
                    </div>
                </Col>
                <Col md={4} className="text-center user-menu">
                    <a href="/account/wishlist"><span><Heart size={26} /><p>Wishlist</p></span></a>
                    <a href="/my-cart"><span><Handbag size={26} /><p>Cart</p></span></a>
                    <a href="/account/purchases"><span><Person size={26} /><p>Profile</p></span></a>
                </Col>
            </Row>

            <Row className="page-header-category-menu text-center">
                <Col>
                    <ul className={"categories-links"}>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Sale</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>All</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Table</li> 
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Sofa</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Shelves</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Dining</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Beds</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Mattresses</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Lighting</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Decor</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Kitchen</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Lifestyle</li>
                        <li onMouseOver={handleMenuStripClick} onClick={handleMenuStripClick} onMouseLeave={handleCloseMenuStripClick}>Accessories</li>
                    </ul>
                    <div className="text-center popup-submenu sale-menu" id="sale-menu">
                        <Row>
                            <Col>&nbsp;</Col>
                            <Col><img src={promo1} alt="promo-1" /></Col>
                            <Col><img src={promo2} alt="promo-2" /></Col>
                            <Col><img src={promo3} alt="promo-3" /></Col>
                            <Col><img src={promo4} alt="promo-4" /></Col>
                            <Col>&nbsp;</Col>
                        </Row>
                    </div>
                    <div className="text-center popup-submenu all-cat-menu" id="all-cat-menu">
                        <Row>
                            <Col md={2} className="main-menu text-center">
                                <div className="menu-list">
                                    <div className="menu-item"><img src={cat_img1} /><span>Living Room</span></div>
                                    <div className="menu-item"><img src={cat_img2} /><span>Dining Room</span></div>
                                    <div className="menu-item"><img src={cat_img2} /><span>Bedroom</span></div>
                                </div>
                            </Col>
                            <Col md={10} className="sub-menu text-left">
                                <div className="menu-items">
                                    <div>All Sofas</div>
                                    <div>Sectional Sofas</div>
                                    <div>Sofas</div>
                                    <div>2 Seater Sofas</div>
                                    <div>Sofa Beds</div>
                                    <div>Armchairs</div>
                                </div>
                                <div className="menu-items">
                                    <div>Footstools</div>
                                    <div>Coffee Tables</div>
                                    <div>Side Tables</div>
                                    <div>TV Consoles</div>
                                    <div>{'Shelves & Cabinets'}</div>
                                    <div>Dining Room Sets</div>
                                </div>
                                <div className="menu-items">
                                    <div className="last-item">All Living Room</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="text-center popup-submenu all-cat-menu" id="other-cat-menu">
                        <Row>
                            <Col md={12} className="sub-menu text-left">
                                <div className="menu-items">
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                </div>
                                <div className="menu-items">
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                    <div>Lorem Ipsum</div>
                                </div>
                                <div className="category-image-view">
                                    <img src={img_placeholder} alt="placeholder-img-category" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Header;