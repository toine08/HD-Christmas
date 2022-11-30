import { useState } from "react";
import Card from "./components/card";
import "./App.scss";
import data from "./data";
import backgroundVideo from "../src/video/video.mp4";
import backgroundImage from "../src/video/photo.jpg";


export default function App() {
  const [show, setShow] = useState(false);
  const [caseId, setCaseId] = useState("")

  //date zone
  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth() + 1];
  const christmas = new Date("2022-12-25");
  const colorArray = ["#3D49E8","#28AB67","#EA5D8D"];

  const dataset = data.map((items) => {
    let arrDate = items.date;
    function getColor(){
      var color = items.id % colorArray.length;
      return color
    }

    const handleClick = (e)=>{
      showCase()
      var collectId = items.id
      setCaseId(collectId)

    }
    function showCase(){
      setShow(!show)
    }

    let newArrDate = arrDate.split("-");
    if (newArrDate[2] <= day && newArrDate[1] == month) {
      return (
        <div
        onClick={((e) => handleClick(e, data))}
          className="box goodday"
          style={{
            backgroundColor:colorArray[getColor()],
          }}
        >
          {items.title}
        </div>
      );
    } 
    else if ( newArrDate[2] === christmas.getDate() && newArrDate === christmas.getMonth()
    ) {
      return <div className="box nottheday">{items.title}</div>;
    } else {
      return (
        <div
          className="box nottheday">
          {items.title}
        </div>
      );
    }
  });
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
