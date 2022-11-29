import "../App.scss";
import App from "../App";
import data from "../data";
import { Value } from "sass";

export  default function Card( idCase) {
  console.log(idCase, "il vient de card lui");
  const christmas = new Date("2022-12-25")
  const christmasDay = christmas.getDate()
  const caseShow = Object.values(idCase);
  const transformDate = new Date(data[caseShow].date)
  const showDate = transformDate.getDate()
  const daysLeft = christmasDay - showDate
  console.error(caseShow, "c'est showdate de data");
  const newData = data.map((items)=>{
    
  })
  return (
    <div className="card">
      <h1 style={{ color: "white" }}>IT'S CHRISTMAS IN {showDate} DAYS</h1>
    </div>
  );
}
