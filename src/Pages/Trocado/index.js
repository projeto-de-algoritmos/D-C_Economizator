import "./style.css";
import maxSubArraySum from "../../algorithm";
import { useHistory } from "react-router-dom";

const plural = {
  10000: "notas de 100",
  1000: "notas de 10",
  2000: "notas de 20",
  5000: "notas de 50",
  500: "notas de 5",
  200: "notas de 2",
  1: "moedas de 1 centavo",
  5: "moedas de 5 centavos",
  10: "moedas de 10 centavos",
  25: "moedas de 25 centavos",
  50: "moedas de 50 centavos",
  100: "moedas de 1 real",
};

const singular = {
  10000: "nota de 100",
  1000: "nota de 10",
  2000: "nota de 20",
  5000: "nota de 50",
  500: "nota de 5",
  200: "nota de 2",
  1: "moeda de 1 centavo",
  5: "moeda de 5 centavos",
  10: "moeda de 10 centavos",
  25: "moeda de 25 centavos",
  50: "moeda de 50 centavos",
  100: "moeda de 1 real",
};

function Trocado(history) {

  let arraySum = history.location.state.arraySum;
  console.log("ARRAY SUM PAG 2", arraySum)

  let h = useHistory();

  function goToHome() {
    h.push({
      pathname: "/",
    });
  }

  // let resultado = maxSubArraySum(arraySum, 0, (arraySum.lenght - 1));

  return (
    <div className="resultArea">
      Blabla
    </div>
  );
}

export default Trocado;
