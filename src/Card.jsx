import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const Card =(props)=> {
  return (
    <>
<div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                  <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} style={{height:"224px"}} />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <NavLink to="/" className="btn btn-primary">
                      Join
                    </NavLink>
                  </div>
                </div>
              </div>
    </>
  );
}
export default Card;



