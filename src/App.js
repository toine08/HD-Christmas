import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import backgroundVideo from '../src/video/video.mp4'
import backgroundImage from '../src/video/photo.jpg'

export default function App() {
  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth() + 1];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const dataset = data.map((items) => {
    let arrDate = items.date;
    function getColor() {
      let blue = "#3D49E8";
      let green = "#28AB67";
      let pink = "#EA5D8D";
      if (Math.random() <= 0.33) {
        return blue;
      } else if (Math.random() >= 0.33 && Math.random() <= 0.66) {
        return green;
      } else return pink;
    }

    let newArrDate = arrDate.split("-");
    if (newArrDate[2] <= day && newArrDate[1] == month) {
      console.error("DATES SONT LES MEMES");
      return (
        <div
          className="box"
          style={{
            height: getRandomInt(100, 200) + "px",
            width: getRandomInt(100, 150) + "px",
            backgroundColor: getColor(),
            color: "black",
          }}
        >
          {items.id}
        </div>
      );
    } else {
      return (
        <div
          className="box"
          style={{
            height: getRandomInt(100, 200) + "px",
            width: getRandomInt(100, 150) + "px",
            backgroundColor: "#000000",
            borderStyle: "solid",
            borderColor: "white",
            borderWidth: "thin",
          }}
        >
          {items.id}
        </div>
      );

      console.log(
        "la mois n'est pas comparé:",
        newArrDate[1],
        "le mois juste: " + month
      );
    }
  });
  return (
    <div className="app">
            <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <img src={backgroundImage} id="photo"></img>
      <div className="logo">
        <h4 className="logotext">DONUTS</h4>
      </div>
      <div className="title">
        <h1>Le calendrier de l’avent de Donuts</h1>
        <p className="text">
          Découvrez chaque jour une nouvelle surprise proposée par l’un de nos
          collaborateurs
        </p>
      </div>

      <div className="dataset">{dataset}</div>
    </div>
  );
}
