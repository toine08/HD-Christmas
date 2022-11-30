import { useState } from "react";
import Card from "./components/card";
import "./App.scss";
import data from "./data";
import backgroundVideo from "../src/video/video.mp4";
import backgroundImage from "../src/video/photo.jpg";


export default function App() {

  /**
   * déclaration de mes useState 
   * un pour récupérer l'id de la case ou on clique 
   * l'autre pour afficher ou non la card du jour
   */
  const [show, setShow] = useState(false);
  const [caseId, setCaseId] = useState("")

  /**
   * déclaration des jours ces jours sont utilisé dans le if
   * christmas est utilisé pour la case du 25 seulement car il a une taille différente
   * pour pouvoir supporter son text
   */
  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth() + 1];
  const christmas = new Date("2022-12-25");
  //tableau utilisé dans la fonction getColor() et pour le style
  const colorArray = ["#3D49E8","#28AB67","#EA5D8D"];

  const dataset = data.map((items) => {
    let arrDate = items.date;
    //fonction pour retouner un nombre entre 0 et 2 pour afficher 
    function getColor(){
      var color = items.id % colorArray.length;
      return color
    }
    //fonction qui modifie l'état du state pour qu'il soit l'inverse de ce qu'il est
    function showCase(){
      setShow(!show)
    }
    //function pour afficher la card et collecter l'id de la case ou on clique
    const handleClick = (e)=>{
      showCase()
      var collectId = items.id
      setCaseId(collectId)

    }


    //déclaration de newArrDate pour avoir un tableau qui sépare année[0] mois[1] jour[2]
    let newArrDate = arrDate.split("-");

    /**
     * position 2 du tableau est égale à la date du jour et la position 1 au mois
     * je compare ici la date du tableau à la date du jour et le mois au mois du jour 
     * si tout est bon alors il retourne les cases qui sont utilisables 
     * (qu'on distingue à leur couleurs)
     */

    if (newArrDate[2] <= day && newArrDate[1] == month) {
      return (
        <div
        onClick={((e) => handleClick(e, data))}
          className="box goodday"
          style={{
            backgroundColor:colorArray[getColor()],
          }}
        >
          {items.id}
        </div>
      );
    } 
    /**
     * si la date du tableau est égale au jour de noël alors on retourne la case 
     */
    else if ( newArrDate[2] === christmas.getDate() && newArrDate === christmas.getMonth()
    ) {
      return <div className="box">{items.title}</div>;
    } 
    /**
     * s'ils ne sont pas égales alors la cases ne fonctionne pas.
     */
    else {
      return (
        <div
          className="box nottheday">
          {items.id}
        </div>
      );
    }
  });

  /**
   * Ici on retourne la vue global avec tout ce qui la compose
   */
  return (
    <div className="app">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <img alt="background with snow" src={backgroundImage} id="photo"></img>
      <div className="logo">
        <h1 className="logotext">donuts</h1>
      </div>
      <div className="title">
        <h2>Le calendrier de l’avent de Donuts</h2>
        <p className="text">
          Découvrez chaque jour une nouvelle surprise proposée par l’un de nos
          collaborateurs
        </p>
      </div>
      {show ? <Card idCase={caseId}></Card> : null}
      <div className="dataset">{dataset}</div>
    </div>
  );
}
