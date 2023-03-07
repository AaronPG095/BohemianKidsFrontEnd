import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AddToCartModal from '../purchases/AddToCartModal';
import ProductComponent from '../purchases/ProductComponent';
import { useContext } from 'react';
import { shopProductContext } from '../context/ShopProductContext';
import { v4 as uuidv4 } from 'uuid';
import { goToTopOfPage } from '../../util/goToTopPge';
import { scrollToSection } from '../../util/scrollToSection';
import UserLoginModal from '../purchases/UserLoginModal';

function Shop() {
  // Scroll to section Code
  const coffee = useRef(null);
  const equipment = useRef(null);
  const merchandise = useRef(null);

  const { shopProductState, dispatchShopProductState } =
    useContext(shopProductContext);

  const [currentProductType, setCurrentProductType] = useState(null);

  // Modal Product Selection Popup Code for UseState from AddToCartModal.jsx
  const [isOpen, setIsOpen] = useState(false);
  const [loginPromptIsOpen, setLoginPromptIsOpen] = useState(false);
  const [currentProductID, setCurrentProductID] = useState(null);

  //State for waiting until fetch will be over
  const [isLoading, setIsLoading] = useState(true);

  //Request to fetch products from database
  useEffect(() => {
    axios
      .get('https://bohemian-kids-backend-server.onrender.com/products/')
      .then((items) => {
        dispatchShopProductState({
          type: 'INITIAL',
          payload: [
            ...items.data.allItems.coffee,
            ...items.data.allItems.equipmentAndMerchandise,
          ],
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="shop_background_container">
        <article className="shop_content_container">
          <h1 className="shop_heading">SHOP</h1>

          <section className="shop_button_container">
            <Link
              onClick={() => scrollToSection(coffee)}
              aria-label="Link to Shop Coffee Section"
              className="button_link"
              to="#coffee"
            >
              <button className="button_large_colorOne">COFFEE</button>
            </Link>
            <Link
              onClick={() => scrollToSection(equipment)}
              aria-label="Link to Shop Equipment Section"
              className="button_link"
              to="#equipment"
            >
              <button className="button_large_colorOne">EQUIPMENT</button>
            </Link>
            <Link
              onClick={() => scrollToSection(merchandise)}
              aria-label="Link to Shop Merchandise Section"
              className="button_link"
              to="/Shop"
            >
              <button className="button_large_colorOne">MERCHANDISE</button>
            </Link>
          </section>

          <section className="shop_text_container">
            <p className="shop_medium_text">
              Our focus is on freshly brewed coffee; available as espresso,
              hand-brew filter, batch-brew filter and, naturally, all of your
              milk-based favourites. We work with a local dairy to ensure the
              best of milks and have a long-standing relationship with Oatly for
              those of you of a vegan persuasion.
            </p>

            <p className="shop_medium_text">
              We source our coffee from all across Europe but we do tend to
              shine a light on the under-represented scenes of the countries to
              the east of Leipzig and as such regularly serve the best filter
              roasts coming out of the Czech Republic, Poland and beyond.
            </p>
            <p className="shop_medium_text">
              The filter coffee’s change weekly (sometimes sooner, when they
              prove to be really popular) so there is always something new for
              regulars to experience.
            </p>
            <p className="shop_medium_text">
              Our house espresso is roasted by our good friends in Münster,
              Roestbar. We created this blend to cut through milk and deliver
              the flavours of a spiced hot chocolate, despite there being not a
              hint of cocoa or a spice insight.
            </p>
          </section>

          {/* COFFEE SECTION */}
          <h2 ref={coffee} id="coffee" className="shop_subHeading">
            COFFEE
          </h2>

          {/* FILTER */}

          <section className="shop_productType_container">
            <h3 className="shop_productType_heading">FILTER</h3>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              shopProductState
                .filter((product) => product.type === 'filter')
                .map((product) => (
                  <ProductComponent
                    key={uuidv4()}
                    name={product.name}
                    type={product.type}
                    image={product.image}
                    setIsOpen={setIsOpen}
                    setCurrentProductType={setCurrentProductType}
                    setCurrentProductID={setCurrentProductID}
                    productID={product._id}
                    origin={product.origin}
                    masl={product.masl}
                    variety={product.variety}
                    processing={product.processing}
                    cropYear={product.cropYear}
                    size={product.size}
                    dryingTime={product.dryingTime}
                    flavourNotes={product.flavourNotes}
                    setLoginPromptIsOpen={setLoginPromptIsOpen}
                  />
                ))
            )}
          </section>

          <section className="shop_text_container">
            <p className="shop_medium_text">
              Our focus is on freshly brewed coffee; available as espresso,
              hand-brew filter, batch-brew filter and, naturally, all of your
              milk-based favourites.
            </p>
            <p className="shop_medium_text">
              We work with a local dairy to ensure the best of milks and have a
              long-standing relationship with Oatly for those of you of a vegan
              persuasion.
            </p>
          </section>

          {/* ESPRESSO */}

          <section className="shop_productType_container">
            <h3 className="shop_productType_heading">ESPRESSO</h3>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              shopProductState
                .filter((product) => product.type === 'espresso')
                .map((product) => (
                  <ProductComponent
                    key={uuidv4()}
                    type={product.type}
                    image={product.image}
                    setIsOpen={setIsOpen}
                    setCurrentProductType={setCurrentProductType}
                    setCurrentProductID={setCurrentProductID}
                    productID={product._id}
                    origin={product.origin}
                    masl={product.masl}
                    variety={product.variety}
                    processing={product.processing}
                    cropYear={product.cropYear}
                    size={product.size}
                    dryingTime={product.dryingTime}
                    flavourNotes={product.flavourNotes}
                    setLoginPromptIsOpen={setLoginPromptIsOpen}
                  />
                ))
            )}
          </section>

          {/* EQUIPMENT SECTION */}
          <h2 ref={equipment} className="shop_subHeading">
            EQUIPMENT
          </h2>

          <section className="shop_productType_container">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              shopProductState
                .filter((product) => product.type === 'equipment')
                .map((product) => (
                  <ProductComponent
                    key={uuidv4()}
                    type={product.type}
                    image={product.image}
                    setIsOpen={setIsOpen}
                    setCurrentProductType={setCurrentProductType}
                    setCurrentProductID={setCurrentProductID}
                    productID={product._id}
                    description={product.description}
                    name={product.name}
                    material={product.material}
                    price={product.price}
                    size={product.size}
                    setLoginPromptIsOpen={setLoginPromptIsOpen}
                  />
                ))
            )}
          </section>

          {/** MERCHANDISE SECTION */}
          <h2 ref={merchandise} className="shop_subHeading">
            MERCH
          </h2>

          <section className="shop_productType_container">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              shopProductState
                .filter((product) => product.type === 'merchandise')
                .map((product) => (
                  <ProductComponent
                    key={uuidv4()}
                    type={product.type}
                    image={product.image}
                    setIsOpen={setIsOpen}
                    setCurrentProductType={setCurrentProductType}
                    setCurrentProductID={setCurrentProductID}
                    productID={product._id}
                    description={product.description}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    setLoginPromptIsOpen={setLoginPromptIsOpen}
                  />
                ))
            )}
          </section>

          <div className="shop_home_button_container">
            <Link
              onClick={goToTopOfPage}
              aria-label="Home button"
              className="button_link"
              to={'/'}
            >
              <button className="button_large_rightSideBoxShadow_colorOne">
                HOME
              </button>
            </Link>
          </div>
        </article>

        {isLoading
          ? null
          : loginPromptIsOpen && (
              <UserLoginModal
                windowPositionY={window.pageYOffset}
                setLoginPromptIsOpen={setLoginPromptIsOpen}
              />
            )}
        {isLoading
          ? null
          : isOpen && (
              <AddToCartModal
                currentProductType={currentProductType}
                productID={currentProductID}
                windowPositionY={window.pageYOffset}
                setIsOpen={setIsOpen}
              />
            )}
      </main>
    </>
  );
}
export default Shop;
