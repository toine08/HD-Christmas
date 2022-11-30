import "./Card.scss";
import data from "../data";
import { useState } from "react";
import {CgClose} from 'react-icons/cg'

export default function Card(idCase) {
  /**
   * déclaration de mon useState 
   * utilisé dans le bouton pour afficher la card ou non
   */
  const [toggleView, setToggleView] = useState(true);
  //récupération de l'id de la case cliquer transformer en numéro car on reçoit un objet
  const caseShow = Object.values(idCase) - 1;
  //récupération de l'id/author/image/media dans le tableau par rapport idCase
  const showId = data[caseShow].id;
  const showAuthor = data[caseShow].author;
  const showImage = data[caseShow].image;
  const showMedia = data[caseShow].media;

  //fonction qui a pour but de désactiver l'affichage de la card
  function handleClick() {
    setToggleView(!toggleView);
  }
  //réutilisation du tableau/ function afin de pouvoir avoir les mêmes couleur que les cases
  const colorArray = ["#3D49E8", "#28AB67", "#EA5D8D"];
  function getColor() {
    var color = showId % colorArray.length;
    return color;
  }

  //function pour afficher la card
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
//if qui désactive l'affichage de la card lorsque toggleView == false 
  if (toggleView === true) {
    return cardView();
  } else return null;
}
