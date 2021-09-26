import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import DatePicker from "react-date-picker";
import maxSubArraySum from "../../algorithm";

function HomePage() {
  const [amount, setAmount] = React.useState();
  const [day, onChange] = React.useState(new Date());
  const [amountDay, setAmountDay] = React.useState([]);

  const [modal, setModal] = React.useState({
    show: false,
  });
  const history = useHistory();

  function handleClose() {
    setModal({ show: false });
  }

  function handleAdd() {
    let obj = {
      amount : amount,
      day : day
    }
    setAmountDay([...amountDay, obj]);
  }

  console.log("AMOUNT DAY", amountDay)

  console.log(
    maxSubArraySum(
      [
        { value: -2, date: "aa" },
        { value: -5, date: "bb" },
        { value: 6, date: "cc" },
        { value: -2, date: "dd" },
        { value: -3, date: "ee" },
        { value: 1, date: "ee" },
        { value: 5, date: "ee" },
        { value: -6, date: "ee" },
      ],
      0,
      7
    )
  );

  function handleSubmit() {
    history.push({
      pathname: "/trocado",
      state: {},
    });
  }

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="HomePage">
      <br />
      <br />
      <h3 className="question">
        {" "}
        1. Selecione o dia e o valor total recebido nesse dia <br />
        2. Clique em "Adicionar". Repita quantas vezes desejar <br />
        3. Após adicionar todos os dias que deseja, clique em "Calcular" para calcular
      </h3>
      <br />
      <br />
      <br />

      <div>
      </div>

      <label className="label">

          Dia:
          <br />
          <DatePicker className="textField" onChange={onChange} value={day} />
          <br />
          <br />

          Valor total deste dia (R$):
          <br />

          <input
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
{/* 
      <div>
        <input onChange={onChange} value={day} />
      </div> */}

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
          <h1>O valor pago precisa ser maior que o valor total</h1>

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
