import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import backgroundVideo from "../src/video/video.mp4";
import backgroundImage from "../src/video/photo.jpg";

export default function App() {
  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth() + 1];
  const christmas = new Date("2022-12-25")

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

    function getSize() {
      let small = "200px";
      let medium = "250px";
      let big = "275px";
      if (Math.random() <= 0.33) {
        return small;
      } else if (Math.random() >= 0.33 && Math.random() <= 0.66) {
        return medium;
      } else return big;
    }

    let newArrDate = arrDate.split("-");
    if (newArrDate[2] <= day && newArrDate[1] == month) {
      console.error("DATES SONT LES MEMES");
      return (
        <div
          className="box"
          style={{
            height: getSize(),
            width: getSize(),
            backgroundColor: getColor(),
            color: "black",
          }}
        >
          {items.title}
        </div>
      );
    } else if (newArrDate[2] === christmas.getDate() && newArrDate === christmas.getMonth()){
      return <div style={{width: "300px"}}>
        {items.title}
      </div>
    }
    else {
      return (
        <div
          className="box"
          style={{
            height:getSize(),
            width: getSize(),
            backgroundColor: "#000000",
            borderStyle: "solid",
            borderColor: "white",
            borderWidth: "thin",
          }}
        >
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

      <div className="dataset">{dataset}</div>
    </div>
  );
}
