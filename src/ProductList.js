import React from 'react'
import { useEffect,useState } from 'react'


const ProductList = () => {
    const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/posts").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
  return (
    <div>
                <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>product list</h2>
                </div>
                <div className="card-body">
                    
                    
                    
                    
                   
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                  <th>Product Name</th>
                                <th>Price</th>
                                 <th>Old Price</th>
                                <th>Category Type</th>
                                <th>Description</th>
                                      <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                          {empdata &&
                                            empdata.map(item => (
                                    <tr key={item.id}>
                                               <td>{item.id}</td>
                                            <td>{item.name}</td>
                                                  <td>{item.price}</td>
                                            <td>{item.oprice}</td>
                                            <td>{item.ct}</td>
                                        <td>{item.dis}</td>
                                        <td>
                                            <a  className="btn btn-danger">Remove</a>
                                              
                                            <a className='btn btn-warning m-1'>edit</a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList