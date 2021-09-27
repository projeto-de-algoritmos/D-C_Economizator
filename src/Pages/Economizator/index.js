import React from "react";
import { format } from "date-fns";
import "./style.css";
import maxSubArraySum from "../../algorithm";
import { useHistory } from "react-router-dom";
import ptBR from 'date-fns/locale/pt-BR';

function Economizator(history) {

  let arraySum = history.location.state.arraySum;
  console.log("ARRAY SUM PAG 2", arraySum);
  let media = history.location.state.media;

  let h = useHistory();

  function goToHome() {
    h.push({
      pathname: "/",
    });
  }

  let result = maxSubArraySum(arraySum, 0, arraySum.length - 1);

  let dates = [];

  console.log("result", result);

  result.elems.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  
  result.elems.forEach(element => {
    let formattedDate = format(new Date(element.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    dates.push(formattedDate);
  });
  

  return (
  
  <div className="resultArea">
    
    <br />
    <br />
    <h3>A melhor sequência de dias foi:</h3>

    <br />
      <br />
      <ul>
        {dates.map((elems) => (
          <li key={elems.toString()}>
            {elems.toString()}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Economizator;
