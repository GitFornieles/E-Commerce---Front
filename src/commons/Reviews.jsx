import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import logo from "../assets/logo.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Reviews = () => {
  const producto = useLocation().pathname.split("/")[2];
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(5);
  const user = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleInput = (e) => {
    setNewReview(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/reviews", {
        review: newReview,
        rating: parseInt(rating),
        product: parseInt(producto),
        user: parseInt(user),
      })
      .then(() =>
        MySwal.fire({
          title: <p>Review enviada con exito!</p>,
        })
      );
    navigate("/");
  };

  return (
    <div style={{ marginLeft: "200px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ height: "100px" }}></div>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <div>
            <label
              for="customRange3"
              class="form-label"
              style={{ fontSize: "20px" }}
            >
              {" "}
              Calificar el producto <br />
              {rating}
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="0.5"
              id="customRange3"
              onChange={handleRating}
              required
            ></input>
            <label
              for="customRange3"
              className="form-label"
              style={{ fontSize: "20px" }}
            >
              {" "}
              ¿Que te parecio el producto?{" "}
            </label>{" "}
            <br />
            <textarea
              name=""
              id=""
              cols="90"
              rows="10"
              onChange={handleInput}
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {" "}
          Enviar <i className="fa-sharp fa-solid fa-rocket"></i>{" "}
        </button>
      </form>
      <img src={logo} alt="" />
    </div>
  );
};

export default Reviews;
