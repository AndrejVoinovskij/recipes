import "./RecipeCard.css";
import React from "react";
import { Link } from "react-router-dom";
import clock from "../../img/clock.png";
import chart from "../../img/chart.png";
import human from "../../img/human.png"

const RecipeCard = ({ recipe: { idMeal, strMealThumb, strMeal } }) => {
  return (
    <div className="col-lg-6 col-md-6 col-xl-4 mb-3">
      <div className="card shadow">
        <div className="position-relative">
          <img src={strMealThumb} className="card-img-top" alt="..." />
          <div className="card-info position-absolute w-100 d-flex">
            <div className="d-flex info">
              <img src={clock} alt="" />
              <span>15 Min</span>
            </div>
            <div className="d-flex info">
              <img src={human} alt="" />
              <span>4 Servings</span>
            </div>
            <div className="d-flex info">
              <img src={chart} alt="" />
              <span>Medium</span>
            </div>
          </div>
        </div>
        

        <div className="card-body">
          <h3 className="card-title">{strMeal}</h3>
          <Link to={`/recipe/${idMeal}`}>View Recipe</Link>
        </div>
      </div>
    </div>
  );
};


export default RecipeCard;
