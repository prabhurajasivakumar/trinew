import React, { useState } from 'react';


const AddProduct = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [oprice, setOprice] = useState('');
  const [ct, setCt] = useState('');
  const [dis, setDis] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, price, oprice, ct, dis };

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(empdata),
    })
      
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form className="container-fluid" onSubmit={handleSubmit}>
        <input
          value={id}
           onChange={(e) => setId(e.target.value)}
          className="form-control"
          placeholder="ID"
        ></input>
        <input
          value={name}
             onChange={(e) => setName(e.target.value)}
             className="form-control"
          placeholder="Name"
        ></input>
        <input
                value={price}
                        onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                        placeholder="Price"
                    ></input>
                    <input
                    value={oprice}
                        onChange={(e) => setOprice(e.target.value)}
                        className="form-control"
                    placeholder="Original Price"
                    ></input>
                <input
                value={ct}
                    onChange={(e) => setCt(e.target.value)}
                    className="form-control"
                placeholder="Category"
                ></input>
                <input
                value={dis}
                    onChange={(e) => setDis(e.target.value)}
                    className="form-control"
                placeholder="Discount"
                ></input>
                <button className="btn btn-success" type="submit">
                Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
