import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../auth-context/authContext';
import { useContext } from 'react';
import { userInfoContext } from '../context/UserInfoContext';

function UserInfoPage() {
  const { userInfoState, dispatchUserInfoState } = useContext(userInfoContext);

  const [user, setUser] = useState({
    newPassword: '',
    confirmPassword: '',
    address: '',
    country: '',
    zipCode: '',
    city: '',
    state: '',
    fName: '',
    lName: '',
    title: '',
  });

  const navigate = useNavigate();

  const auth = useAuth();

  function handleChange(event) {
    setPasswordMessage('');
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const [passwordMessage, setPasswordMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [confirmationState, setConfirmationState] = useState('');
  const [addressMessage, setAddressMessage] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmitChangePassword(event) {
    event.preventDefault();
    const userId = localStorage.getItem('user_id');
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .patch(
        'https://bohemian-kids-backend-server.onrender.com/users/changePassword',
        {
          newPassword: user.newPassword,
          confirmPassword: user.confirmPassword,
          userId,
        }
      )
      .then((user) => {
        console.log(user, 'profile');
        setPasswordMessage(user.data.msg);
        setUser({
          newPassword: '',
          confirmPassword: '',
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
        setPasswordMessage(error.response.data.errors);
      });
  }

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
        dispatchUserInfoState({
          type: 'INITIALIZATION',
          payload: user.data.address,
        });
        setIsUpdate(false);
        setUser({
          newPassword: '',
          confirmPassword: '',
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

  function handleDeleteAccount(event) {
    event.preventDefault();
    const userId = localStorage.getItem('user_id');

    axios
      .delete(
        `https://bohemian-kids-backend-server.onrender.com/users/deleteUser/${userId}`
      )
      .then((response) => {
        auth.contextValue.logout();
        navigate('/');
      })
      .catch((error) => {
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

  return (
    <>
      <main className="shopping_cart_main_page">
        <article className="shopping_cart_container">
          <h1 className="shopping_cart_heading">Hi, YOUR PROFILE</h1>

          {/* CHANGE PASSWORD  */}
          <form onSubmit={handleSubmitChangePassword} className="">
            <h4>Change Password:</h4>
            {passwordMessage && <div className="">{passwordMessage}</div>}

            <label className="" htmlFor="newPassword">
              New Password
              <span className="">
                (At least 6 characters and includes a number and a special
                character)
              </span>
            </label>
            <input
              className=""
              type="password"
              placeholder="New Password"
              name="newPassword"
              id="newPassword"
              value={user.newPassword}
              onChange={handleChange}
            />
            <label className="" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className=""
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit" className="">
              Change
            </button>
          </form>

          {/* SET YOUR DELIVERY ADDRESS */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <form onSubmit={handleSubmitChangeAddress} className="">
              <h4>Set your delivery address:</h4>
              {addressMessage && (
                <div className="login-error">{addressMessage}</div>
              )}
              <label className="" htmlFor="title">
                Title:
                <input
                  className=""
                  type="text"
                  placeholder={userInfoState.title}
                  name="title"
                  id="title"
                  value={user.title}
                  onChange={handleChange}
                />
              </label>
              {/* <select
                className=''
                type='text'
                placeholder={userInfoState.title}
                name='title'
                id='title'
                value={user.address}
                onChange={handleChange}
              >
                <option default>select title</option>
                <option value='Mrs.'>Mrs.</option>
                <option value='Mr.'>Mr.</option>
                <option value='Ms.'>Ms.</option>
                <option value='Miss'>Miss</option>
              </select> */}
              <label className="" htmlFor="fName">
                First Name:
              </label>
              <input
                className=""
                type="text"
                placeholder={userInfoState.fName}
                name="fName"
                id="fName"
                value={user.fName}
                onChange={handleChange}
              />
              <label className="" htmlFor="lName">
                Second Name:
              </label>
              <input
                className=""
                type="text"
                placeholder={userInfoState.lName}
                name="lName"
                id="lName"
                value={user.lName}
                onChange={handleChange}
              />
              <label className="" htmlFor="address">
                Address:
              </label>
              <input
                className=""
                type="text"
                placeholder={userInfoState.address}
                name="address"
                id="address"
                value={user.address}
                onChange={handleChange}
              />
              <label className="" htmlFor="city">
                City:
              </label>
              <input
                className=""
                type="text"
                placeholder={userInfoState.city}
                name="city"
                id="city"
                value={user.city}
                onChange={handleChange}
              />
              <label className="" htmlFor="country">
                Country:
              </label>
              <select
                className=""
                type="text"
                name="country"
                id="country"
                placeholder={userInfoState.country}
                value={user.country}
                onChange={handleChange}
              >
                <option default>select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Aland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua & Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire, Sint Eustatius and Saba">
                  Caribbean Netherlands
                </option>
                <option value="Bosnia and Herzegovina">
                  Bosnia & Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo - Brazzaville</option>
                <option value="Congo, Democratic Republic of the Congo">
                  Congo - Kinshasa
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'Ivoire">Côte d’Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curacao">Curaçao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czechia</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Islas Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard & McDonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Vatican City
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  North Korea
                </option>
                <option value="Korea, Republic of">South Korea</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, the Former Yugoslav Republic of">
                  North Macedonia
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia
                </option>
                <option value="Moldova, Republic of">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar (Burma)</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Curaçao</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestine
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn Islands</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Réunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Barthelemy">St. Barthélemy</option>
                <option value="Saint Helena">St. Helena</option>
                <option value="Saint Kitts and Nevis">St. Kitts & Nevis</option>
                <option value="Saint Lucia">St. Lucia</option>
                <option value="Saint Martin">St. Martin</option>
                <option value="Saint Pierre and Miquelon">
                  St. Pierre & Miquelon
                </option>
                <option value="Saint Vincent and the Grenadines">
                  St. Vincent & Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  São Tomé & Príncipe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Serbia and Montenegro">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Sint Maarten">Sint Maarten</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islands">
                  South Georgia & South Sandwich Islands
                </option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard & Jan Mayen
                </option>
                <option value="Swaziland">Eswatini</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syria</option>
                <option value="Taiwan, Province of China">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks & Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  U.S. Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Vietnam</option>
                <option value="Virgin Islands, British">
                  British Virgin Islands
                </option>
                <option value="Virgin Islands, U.s.">
                  U.S. Virgin Islands
                </option>
                <option value="Wallis and Futuna">Wallis & Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <label className="" htmlFor="zipCode">
                Zip-code:
              </label>
              <input
                className=""
                type="text"
                placeholder={userInfoState.zipCode}
                name="zipCode"
                id="zipCode"
                value={user.zipCode}
                onChange={handleChange}
              />
              <label className="" htmlFor="state">
                State:
              </label>
              <input
                className=""
                type="text"
                placeholder={userInfoState.state}
                name="state"
                id="state"
                value={user.state}
                onChange={handleChange}
              />
              {isUpdate ? (
                <button type="submit" className="">
                  <i
                    class="fas fa-spinner fa-spin"
                    style={{ marginRight: '5px', marginBottom: '3px' }}
                  ></i>{' '}
                  Update
                </button>
              ) : (
                <button type="submit" className="">
                  Update
                </button>
              )}
            </form>
          )}

          {/* RENDER ORDERS HISTORY */}
          <section>
            <h4>See your orders history:</h4>
            <section className="shopping_cart_button_container">
              <Link
                aria-label="Link to user orders page"
                to="/UserOrders"
                className="button_link"
              >
                <button className="button_large_colorOne">ORDERS</button>
              </Link>
            </section>
            {/* render here or new page */}
          </section>

          {/* DELETE ACCOUNT  */}
          <form onSubmit={handleDeleteAccount} className="login-form">
            <h4>Delete Account:</h4>
            {deleteMessage ? (
              <>
                <div className="error error-delete">{deleteMessage}</div>
                <button type="submit" className="login-button">
                  Confirm
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setConfirmationState(false);
                    setDeleteMessage(null);
                  }}
                  className="login-button"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setConfirmationState(true);
                  setDeleteMessage(
                    `Arr you sure that you want to delete account?
              All data will be lost!`
                  );
                }}
                className="login-button"
              >
                Delete
              </button>
            )}
          </form>

          <section className="shopping_cart_button_container">
            <Link className="button_link">
              <button className="button_large_colorOne">TO PAYMENT</button>
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}

export default UserInfoPage;
