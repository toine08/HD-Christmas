import "../App.css";
import App from "../App";

export default function Card(id) {
    return (
      <div className="card">
        <h1 style={{ color: "white" }}>{id}</h1>
      </div>
    ); 
}
