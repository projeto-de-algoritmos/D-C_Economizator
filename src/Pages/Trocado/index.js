import "./style.css";
import maxSubArraySum from "../../algorithm";
import { useHistory } from "react-router-dom";

function Trocado(history) {
  let arraySum = history.location.state.arraySum;
  console.log("ARRAY SUM PAG 2", arraySum);

  let h = useHistory();

  function goToHome() {
    h.push({
      pathname: "/",
    });
  }

  let result = maxSubArraySum(arraySum, 0, arraySum.length - 1);
  console.log("result", result);

  return <div className="resultArea">Blabla</div>;
}

export default Trocado;
