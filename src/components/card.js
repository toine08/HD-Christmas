import "../App.scss";
import App from "../App";
import data from "../data";

export default function Card(id) {
    return (
      <div className="card">
        <h1 style={{ color: "white" }}>IT'S CHRISTMAS IN {data[id].id} DAYS</h1>
      </div>
    ); 
}
