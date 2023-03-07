import React, { useState } from 'react';
import axios from 'axios';

function AddCoffeePage() {
  const [coffee, setCoffee] = useState({
    type: '',
    name: '',
    processing: '',
    masl: '',
    size: '',
    variety: '',
    origin: '',
    cropYear: '',
    price: '',
    dryingTime: '',
    flavourNotes: '',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCoffee((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function handleAddCoffee(event) {
    event.preventDefault();
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .post(
        'https://bohemian-kids-backend-server.onrender.com/users/addProduct',
        {
          type: coffee.type,
          name: coffee.name,
          processing: coffee.processing,
          masl: coffee.masl,
          size: coffee.size,
          origin: coffee.origin,
          variety: coffee.variety,
          cropYear: coffee.cropYear,
          price: coffee.price,
          dryingTime: coffee.dryingTime,
          flavourNotes: coffee.flavourNotes,
        }
      )
      .then((user) => {
        setCoffee({
          type: '',
          name: '',
          processing: '',
          size: '',
          variety: '',
          masl: '',
          origin: '',
          cropYear: '',
          price: '',
          dryingTime: '',
          flavourNotes: '',
          image:
            'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      style={{
        width: '100wh',
        height: '100%',
        marginTop: '80px',
        marginBottom: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <form
        onSubmit={handleAddCoffee}
        className="login-form"
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <h4>Add Coffee:</h4>
        <label className="login-label" htmlFor="type">
          type: HAVE TO BE 'filter' OR 'espresso'
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="Type"
          name="type"
          id="type"
          value={coffee.type}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="name">
          name
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="name"
          name="name"
          id="name"
          value={coffee.name}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="processing">
          processing
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="processing"
          name="processing"
          id="processing"
          value={coffee.processing}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="size">
          size: NUMBER
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="size"
          name="size"
          id="size"
          value={coffee.size}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="origin">
          origin
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="origin"
          name="origin"
          id="origin"
          value={coffee.origin}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="masl">
          masl : NUMBER
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="masl"
          name="masl"
          id="masl"
          value={coffee.masl}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="variety">
          variety
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="variety"
          name="variety"
          id="variety"
          value={coffee.variety}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="cropYear">
          cropYear: NUMBER
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="cropYear"
          name="cropYear"
          id="cropYear"
          value={coffee.cropYear}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="price">
          price: NUMBER
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="price"
          name="price"
          id="price"
          value={coffee.price}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="dryingTime">
          dryingTime: NUMBER
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="dryingTime"
          name="dryingTime"
          id="dryingTime"
          value={coffee.dryingTime}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="flavourNotes">
          flavourNotes
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="flavourNotes"
          name="flavourNotes"
          id="flavourNotes"
          value={coffee.flavourNotes}
          onChange={handleChange}
          rows="3"
        />

        <button
          type="submit"
          className="login-button"
          style={{
            marginTop: '20px',
            height: '50px',
          }}
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
}

export default AddCoffeePage;
