import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function User() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
      <div className="container my-1">

        {user ? (
          <>
            <h2 className="home-para"> 
              Order History for {user.firstName} {user.lastName}
            </h2>
           
    <hr className="line"></hr>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

  
    <Button to="/products" variant="contained" color="primary">← Back to Products</Button>
  
      </div>
  );
}


export default User;
