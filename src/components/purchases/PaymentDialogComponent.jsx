import React, { useContext, useState, useEffect, useRef } from 'react';
import { cartProductContext } from '../context/CartProductContext';
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa';
import { userInfoContext } from '../context/UserInfoContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addCurrentCart } from '../../util/addCurrentCart';
import { MdHeight } from 'react-icons/md';

function PaymentDialog() {
  const shipping = 5.95;

  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  const total = (
    cartProductState.reduce((acc, curr) => {
      return acc + Number(curr.totalPrice) * curr.count;
    }, 0) + shipping
  ).toFixed(2);

  const { userInfoState, dispatchUserInfoState } = useContext(userInfoContext);

  //! Change Address

  // Handle Submit for Change Address
  const [user, setUser] = useState({
    address: '',
    country: '',
    zipCode: '',
    city: '',
    state: '',
    fName: '',
    lName: '',
    title: '',
  });

  async function handleSubmitChangeAddress(event) {
    event.preventDefault();
    setIsUpdate(true);
    const userId = localStorage.getItem('user_id');
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .patch(
        'https://bohemian-kids-backend-server.onrender.com/users/updateUser',
        {
          address:
            user.address.length > 0 ? user.address : userInfoState.address,
          country:
            user.country.length > 0 ? user.country : userInfoState.country,
          zipCode:
            user.zipCode.length > 0 ? user.zipCode : userInfoState.zipCode,
          state: user.state.length > 0 ? user.state : userInfoState.state,
          city: user.city.length > 0 ? user.city : userInfoState.city,
          title: user.title.length > 0 ? user.title : userInfoState.title,
          fName: user.fName.length > 0 ? user.fName : userInfoState.fName,
          lName: user.lName.length > 0 ? user.lName : userInfoState.lName,
          userId: userId,
        }
      )
      .then((user) => {
        billingAddressForm.current.style.display = 'none';
        dispatchUserInfoState({
          type: 'INITIALIZATION',
          payload: user.data.address,
        });
        setIsUpdate(false);
        setUser({
          address: '',
          country: '',
          zipCode: '',
          city: '',
          state: '',
          firstName: '',
          lastName: '',
          title: '',
        });
      })
      .catch((error) => {
        setIsUpdate(false);
        console.log(error);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    const userId = window.localStorage.getItem('user_id');
    axios
      .post(
        'https://bohemian-kids-backend-server.onrender.com/users/getAddressData',
        { userId }
      )
      .then((userData) => {
        setIsLoading(false);
        dispatchUserInfoState({
          type: 'INITIALIZATION',
          payload: userData.data.userAddress,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  //! Billing Address

  // Function for Billing Address Form Open / Closed

  const billingAddressForm = useRef();

  const openBillingForm = () => {
    if (billingAddressForm.current.style.display === 'block') {
      billingAddressForm.current.style.display = 'none';
    } else {
      billingAddressForm.current.style.display = 'block';
    }
  };

  // Handle Change for Billing Address

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const [addressMessage, setAddressMessage] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //! Delivery Address

  // Function for Delivery Address Form Enabled / Disabled (CheckBox)

  const deliveryForm = useRef();

  const onCheck = (event) => {
    setIsDeliveryChecked((prev) => !prev);
    if (event.target.checked) {
      deliveryForm.current.disabled = true;
    } else {
      deliveryForm.current.disabled = false;
    }
  };

  // Handle Change for Delivery Address Form Infos

  function deliveryFormHandleChange(event) {
    const { name, value } = event.target;
    setUserDeliveryAddress((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const [userDeliveryAddress, setUserDeliveryAddress] = useState({
    deliveryAddress: '',
    deliveryCountry: '',
    deliveryZipCode: '',
    deliveryCity: '',
    deliveryState: '',
    deliveryFName: '',
    deliveryLName: '',
    deliveryTitle: '',
  });

  //! Shipping Method

  // Handle Change for Shipping Method Radio Inputs

  function shippingMethodHandleChange(event) {
    const { value } = event.target;
    setShippingMethod((prevValue) => value);
  }

  const [shippingMethod, setShippingMethod] = useState(null);

  //! Payment Method

  // Handle Change for Payment Method Radio Inputs

  function paymentMethodHandleChange(event) {
    const { value } = event.target;
    setPaymentMethod((prevValue) => value);
  }

  const [paymentMethod, setPaymentMethod] = useState(null);

  //! Payment Details

  // Handle Change for Payment Details Form Infos

  const [isDeliveryChecked, setIsDeliveryChecked] = useState(true);

  function paymentDetailsHandleChange(event) {
    const { name, value } = event.target;
    setPaymentDetails((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const [paymentDetails, setPaymentDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    CSV: '',
  });

  const [isCompleted, setIsCompleted] = useState(true);
  function handlePayment() {
    const userId = localStorage.getItem('user_id');
    axios
      .post(
        'https://bohemian-kids-backend-server.onrender.com/orders/addOrder',
        {
          userId: userId,
          products: cartProductState,
          price: total,
          billingAddress: userInfoState,
          deliveryAddress: deliveryForm.current.disabled
            ? userInfoState
            : userDeliveryAddress,
          paymentMethod: paymentMethod,
          paymentDetails: paymentDetails,
          shippingMethod: shippingMethod,
          orderDate: new Date(),
        }
      )
      .then((order) => {
        dispatchCartProductState({
          type: 'INITIALIZATION',
          payload: [],
        });
        setUser({
          address: '',
          country: '',
          zipCode: '',
          city: '',
          state: '',
          fName: '',
          lName: '',
          title: '',
        });
        setPaymentDetails({
          cardholderName: '',
          cardNumber: '',
          expiryDate: '',
          CSV: '',
        });
        setUserDeliveryAddress({
          deliveryAddress: '',
          deliveryCountry: '',
          deliveryZipCode: '',
          deliveryCity: '',
          deliveryState: '',
          deliveryFName: '',
          deliveryLName: '',
          deliveryTitle: '',
        });

        setIsCompleted(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {isCompleted ? (
        <main className="payment_main_page">
          <article className="payment_container">
            <h1 className="payment_heading">PAYMENT</h1>
            <section className="payment_section_container">
              {/* Billing Address */}
              <h2 className="payment_subHeading">BILLING ADDRESS</h2>

              <div className="payment_form">
                <ul className="payment_current_billing_address_list">
                  <li className="payment_current_billing_address_list_item">
                    <span>Title:</span> <span>{userInfoState.title}</span>
                  </li>
                  <li className="payment_current_billing_address_list_item">
                    <span>Name:</span>{' '}
                    <span>
                      {userInfoState.fName + ' ' + userInfoState.lName}
                    </span>
                  </li>
                  <li className="payment_current_billing_address_list_item">
                    <span>Address:</span> <span>{userInfoState.address}</span>
                  </li>
                  <li className="payment_current_billing_address_list_item">
                    <span>ZipCode:</span>{' '}
                    <span>{userInfoState.zispanCode}</span>
                  </li>
                  <li className="payment_current_billing_address_list_item">
                    <span>City:</span> <span>{userInfoState.city}</span>
                  </li>
                  <li className="payment_current_billing_address_list_item">
                    <span>State:</span> <span>{userInfoState.state}</span>
                  </li>
                  <li className="payment_current_billing_address_list_item">
                    <span>Country:</span> <span>{userInfoState.country}</span>
                  </li>
                </ul>
                <div className="payment_address_button_container" htmlFor="">
                  <button
                    type="button"
                    className="button_link"
                    onClick={openBillingForm}
                  >
                    <div className="payment_address_button_small">
                      ADD BILLING ADDRESS
                    </div>
                  </button>
                </div>

                <form
                  onSubmit={handleSubmitChangeAddress}
                  style={{ display: 'none' }}
                  className="payment_address_form"
                  ref={billingAddressForm}
                  action=""
                >
                  <div className="payment_address_form_grid">
                    <input
                      type="text"
                      placeholder="TITLE"
                      value={user.title}
                      name="title"
                      onChange={handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="FIRST NAME"
                      value={user.fName}
                      name="fName"
                      onChange={handleChange}
                    ></input>

                    <input
                      type="text"
                      placeholder="LAST NAME"
                      value={user.lName}
                      name="lName"
                      onChange={handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="ADDRESS"
                      value={user.address}
                      name="address"
                      onChange={handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="ZIPCODE"
                      value={user.zipCode}
                      name="zipCode"
                      onChange={handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="CITY"
                      value={user.city}
                      name="city"
                      onChange={handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="STATE"
                      value={user.state}
                      name="state"
                      onChange={handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="COUNTRY"
                      value={user.country}
                      name="country"
                      onChange={handleChange}
                    ></input>
                  </div>

                  <label
                    className="payment_address_button_container"
                    htmlFor=""
                  >
                    <button type="submit" className="button_link">
                      <div className="payment_address_button_small">
                        CHANGE BILLING ADDRESS
                      </div>
                    </button>
                  </label>
                </form>

                {/** Delivery Address */}

                <section className="payment_section_container">
                  <h2 className="payment_subHeading">DELIVERY ADDRESS</h2>

                  <form className="payment_address_form" action="">
                    <fieldset
                      className="payment_address_form_grid"
                      ref={deliveryForm}
                    >
                      <input
                        className="payment_form_Title"
                        type="text"
                        placeholder={
                          isDeliveryChecked ? 'TITLE' : `${userInfoState.title}`
                        }
                        name="deliveryTitle"
                        value={userDeliveryAddress.deliveryTitle}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_Name"
                        type="text"
                        placeholder={
                          isDeliveryChecked
                            ? 'FIRST NAME'
                            : `${userInfoState.fName}`
                        }
                        name="deliveryFName"
                        value={userDeliveryAddress.deliveryFName}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_Name"
                        type="text"
                        placeholder={
                          isDeliveryChecked
                            ? 'LAST NAME'
                            : `${userInfoState.lName}`
                        }
                        name="deliveryLName"
                        value={userDeliveryAddress.deliveryLName}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_Street"
                        type="text"
                        placeholder={
                          isDeliveryChecked
                            ? 'ADDRESS'
                            : `${userInfoState.address}`
                        }
                        name="deliveryAddress"
                        value={userDeliveryAddress.deliveryAddress}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_PostCode"
                        type="text"
                        placeholder={
                          isDeliveryChecked
                            ? 'ZIP-CODE'
                            : `${userInfoState.zipCode}`
                        }
                        name="deliveryZipCode"
                        value={userDeliveryAddress.deliveryZipCode}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_City"
                        type="text"
                        placeholder={
                          isDeliveryChecked ? 'CITY' : `${userInfoState.city}`
                        }
                        name="deliveryCity"
                        value={userDeliveryAddress.deliveryCity}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_State"
                        type="text"
                        placeholder={
                          isDeliveryChecked ? 'STATE' : `${userInfoState.state}`
                        }
                        name="deliveryState"
                        value={userDeliveryAddress.deliveryState}
                        onChange={deliveryFormHandleChange}
                      ></input>
                      <input
                        className="payment_form_Country"
                        type="text"
                        placeholder={
                          isDeliveryChecked
                            ? 'COUNTRY'
                            : `${userInfoState.country}`
                        }
                        name="deliveryCountry"
                        value={userDeliveryAddress.deliveryCountry}
                        onChange={deliveryFormHandleChange}
                      ></input>
                    </fieldset>
                    <div className="payment_selection_container">
                      <input
                        onClick={onCheck}
                        className="payment_selection_checkbox"
                        type="checkBox"
                      ></input>
                      <div className="payment_selection_text">
                        <p>SAME AS BILLING ADDRESS</p>
                      </div>
                    </div>
                  </form>
                </section>

                {/** Shipping Method */}
                <section className="payment_section_container">
                  <h2 className="payment_subHeading">SHIPPING METHOD</h2>
                  <div className="payment_selection_container">
                    <input
                      onClick={shippingMethodHandleChange}
                      value={'standard'}
                      className="payment_selection_checkbox"
                      type="radio"
                      name="shippingMethod"
                    ></input>
                    <p>DHL 3 - 5 WORKING DAYS</p>
                  </div>
                  <div className="payment_selection_container">
                    <input
                      onClick={shippingMethodHandleChange}
                      value={'express'}
                      className="payment_selection_checkbox"
                      type="radio"
                      name="shippingMethod"
                    ></input>

                    <div>
                      <p>DHL NEXT DAY DELIVERY</p>
                      <p className="sub_text">
                        AVAILABLE ON ORDERS PLACED BEFORE 1100
                      </p>
                    </div>
                  </div>
                </section>
                {/**Payment Method */}
                <section className="payment_section_container">
                  <h2 className="payment_subHeading">PAYMENT METHOD</h2>

                  {/**Credit Cards */}
                  <div className="payment_method_contents">
                    <input
                      onClick={paymentMethodHandleChange}
                      value={'credit card'}
                      name="paymentCard"
                      className="payment_selection_checkbox"
                      type="radio"
                    ></input>
                    <p>CREDIT CARD</p>

                    <div className="bank_card_images">
                      <FaCcMastercard className="payment_card" />
                      <FaCcVisa className="payment_card" />
                      <FaCcAmex className="payment_card" />
                    </div>
                  </div>
                  {/** Giro Card */}
                  <div className="payment_method_contents">
                    <input
                      onClick={paymentMethodHandleChange}
                      value={'giro card'}
                      name="paymentCard"
                      className="payment_selection_checkbox"
                      type="radio"
                    ></input>
                    <p>GIRO CARD</p>
                  </div>
                  {/** PayPal */}
                  <div className="payment_method_contents">
                    <input
                      onClick={paymentMethodHandleChange}
                      value={'paypal'}
                      name="paymentCard"
                      className="payment_selection_checkbox"
                      type="radio"
                    ></input>
                    <p>PAYPAL</p>

                    <div className="bank_card_images">
                      <FaCcPaypal className="payment_card" />
                    </div>
                  </div>
                </section>
                {/**Payment Details */}
                <section className="payment_section_container">
                  <h2 className="payment_subHeading">PAYMENT DETAILS</h2>
                  <div className="payment_details_form">
                    <label>
                      <input
                        onChange={paymentDetailsHandleChange}
                        value={paymentDetails.cardholderName}
                        name="cardholderName"
                        type="text"
                        placeholder="CARDHOLDER NAME"
                      ></input>
                    </label>
                    <label>
                      <input
                        onChange={paymentDetailsHandleChange}
                        value={paymentDetails.cardNumber}
                        name="cardNumber"
                        type="number"
                        placeholder="CARD NUMBER"
                      ></input>
                    </label>
                    <label>
                      <input
                        onChange={paymentDetailsHandleChange}
                        value={paymentDetails.expiryDate}
                        name="expiryDate"
                        type="date"
                        placeholder="EXPIRY DATE"
                      ></input>
                    </label>
                    <label>
                      <input
                        onChange={paymentDetailsHandleChange}
                        value={paymentDetails.CSV}
                        name="CSV"
                        type="text"
                        placeholder="CSV"
                      ></input>
                    </label>
                  </div>
                  <section className="payment_calculation_container">
                    <div className="payment_cost_labels_container">
                      <p className="payment_cost_label">SHIPPING:</p>
                      <p className="payment_cost_label">TOTAL:</p>
                    </div>
                    <section className="payment_cost_amounts_container">
                      <p className="payment_cost_amount">{shipping} €</p>
                      <p className="payment_cost_amount">
                        {cartProductState.length > 0 && total} €
                      </p>
                    </section>
                  </section>

                  <div className="payment_button_container">
                    <button
                      className="button_link"
                      onClick={handlePayment}
                      type="button"
                    >
                      <div className="button_large_colorOne">PAY NOW</div>
                    </button>
                  </div>
                </section>
              </div>
            </section>
          </article>
        </main>
      ) : (
        <main className="payment_main_page">
          <div style={{ height: '100vh' }} className="payment_container">
            <div className="minor_dialog_container">
              <h2 className="minor_dialog_subHeading">
                THANKS FOR YOUR ORDER!
              </h2>
              <h3 className="minor_dialog_text">
                Your items will be on the way as soon as possible...
              </h3>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
export default PaymentDialog;
