import "./Card.scss";
import data from "../data";
import { useState } from "react";
import {CgClose} from 'react-icons/cg'

export default function Card(idCase) {
  console.log(idCase, "il vient de card lui");
  const [toggleView, setToggleView] = useState(true);
  const caseShow = Object.values(idCase) - 1;
  const showId = data[caseShow].id;
  const showAuthor = data[caseShow].author;
  const showImage = data[caseShow].image;
  const showMedia = data[caseShow].media;

  function handleClick() {
    setToggleView(!toggleView);
    console.log(toggleView);
  }
  const colorArray = ["#3D49E8", "#28AB67", "#EA5D8D"];
  function getColor() {
    var color = showId % colorArray.length;
    return color;
  }

  function cardView() {
    return (
      <div className="card-view">
        <div className="button-div">
          <button className="buttonHide" onClick={handleClick}>
            <CgClose className="ButtonHide"/>
          </button>
        </div>

        <div
          className="card"
          style={{ backgroundColor: colorArray[getColor()] }}
        >
          <div className="left">
            <h3 className="day">Jour{" " + (caseShow + 1)}</h3>
            <p className="smalltext">
              La surprise du jour est proposé par {showAuthor}
            </p>
            <img
              className="photo"
              alt="non representative de moi"
              src={showImage}
            ></img>
          </div>
          <div className="right">
            <img
              className="right-media"
              alt="christmas theme"
              src={showMedia}
            ></img>
          </div>
        </div>
      </div>
    );
  }
  console.log("couleur est  ", showId);

  if (toggleView === true) {
    return cardView();
  } else return null;
}
