import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import DatePicker from "react-date-picker";
import maxSubArraySum from "../../algorithm";

function HomePage() {
  const [amount, setAmount] = React.useState();
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  const [day, onChange] = React.useState(today);
  const [amountDay, setAmountDay] = React.useState([]);

  const [modal, setModal] = React.useState({
    show: false,
  });
  const history = useHistory();

  function handleClose() {
    setModal({ show: false });
  }

  function handleAdd() {
    let dayOk = true;
    amountDay.forEach((element) => {
      if (day.toString() == element.day.toString()) {
        dayOk = false;
        setModal({
          show: true,
        });
      }
    });

    if (dayOk) {
      let obj = {
        amount: amount,
        day: day,
      };
      setAmountDay([...amountDay, obj]);
    }

    setAmount(0);
  }

  function handleSubmit() {
    amountDay.sort(function (a, b) {
      return new Date(a.day) - new Date(b.day);
    });

    console.log("AMOUNT DAY ORDENADO", amountDay);

    let arraySum = [];

    amountDay.forEach((element) => {
      let obj = {
        value: 0,
        date: "",
      };

      obj.value = parseFloat(element.amount);
      obj.date = element.day.toString();
      arraySum.push(obj);
    });

    console.log("ARRAY SUM", arraySum);

    history.push({
      pathname: "/trocado",
      state: {
        arraySum: arraySum,
      },
    });
  }

  const handleChangeAmount = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  return (
    <div className="HomePage">
      <br />
      <br />
      <h3 className="question">
        {" "}
        1. Selecione o dia e o valor total recebido nesse dia <br />
        2. Clique em "Adicionar". Repita quantas vezes desejar <br />
        3. Após adicionar todos os dias que deseja, clique em "Calcular" para
        calcular
      </h3>
      <br />
      <br />
      <br />

      <div></div>

      <label className="label">
        Dia:
        <br />
        <DatePicker className="textField" onChange={onChange} value={day} />
        <br />
        <br />
        Valor total deste dia (R$):
        <br />
        <input
          name="inputValor"
          className="textField"
          type="number"
          value={amount}
          step="0.01"
          precision={2}
          onChange={handleChangeAmount}
        />
        <br />
        <br />
        <button className="button" onClick={handleAdd}>
          {" "}
          Adicionar
        </button>
      </label>
      <button className="button" onClick={handleSubmit}>
        {" "}
        Calcular
      </button>

      <br />
      <br />
      <br />
      <br />

      <h3>Adicionados:</h3>
      <ul>
        {amountDay.map((amountDay) => (
          <li key={amountDay.day.toString()}>
            {amountDay.day.toString()} --- R${amountDay.amount}
          </li>
        ))}
      </ul>

      <Modal
        open={modal.show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="modaldiv">
          <h1>
            Já foi adicionado um valor para esse dia. Por favor, selecione outra
            data
          </h1>

          <button className="calculateButton" onClick={handleClose}>
            {" "}
            Voltar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
