import React, { useState } from 'react';
import axios from 'axios';

function AddMerchandisePage() {
  const [merchandise, setMerchandise] = useState({
    type: '',
    name: '',
    material: '',
    size: '',
    price: '',
    description: '',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMerchandise((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function handleAddCoffee(event) {
    event.preventDefault();
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .post(
        'https://bohemian-kids-backend-server.onrender.com/users/addMerch',
        {
          type: merchandise.type,
          name: merchandise.name,
          material: merchandise.material,
          size: merchandise.size,
          price: merchandise.price,
          description: merchandise.description,
        }
      )
      .then((user) => {
        setMerchandise({
          type: '',
          name: '',
          material: '',
          size: '',
          price: '',
          description: '',
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
        <h4>Add Merch or equipment:</h4>
        <label className="login-label" htmlFor="type">
          type: HAVE TO BE 'equipment' OR 'merchandise'
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="Type"
          name="type"
          id="type"
          value={merchandise.type}
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
          value={merchandise.name}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="material">
          material
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="material"
          name="material"
          id="material"
          value={merchandise.material}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="size">
          size:
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="size"
          name="size"
          id="size"
          value={merchandise.size}
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
          value={merchandise.price}
          onChange={handleChange}
          rows="3"
        />
        <label className="login-label" htmlFor="description">
          description:
        </label>
        <textarea
          className="login-textarea"
          type="password"
          placeholder="description"
          name="description"
          id="description"
          value={merchandise.description}
          onChange={handleChange}
          rows="8"
        />
        <button
          type="submit"
          className="login-button"
          style={{
            marginTop: '20px',
            height: '50px',
          }}
        >
          Add merch
        </button>
      </form>
    </div>
  );
}

export default AddMerchandisePage;
