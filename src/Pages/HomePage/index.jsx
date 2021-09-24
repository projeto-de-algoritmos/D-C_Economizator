import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import DatePicker from "react-date-picker";
import maxSubArraySum from "../../algorithm";

function HomePage() {
  const [total, setTotal] = React.useState();
  const [value, onChange] = React.useState(new Date());

  const [modal, setModal] = React.useState({
    show: false,
  });
  const history = useHistory();

  function handleClose() {
    setModal({ show: false });
  }

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

  const handleChangeTotal = (event) => {
    setTotal(event.target.value);
  };

  return (
    <div className="HomePage">
      <h3 className="question">
        {" "}
        Digite e valor total e o valor pago. <br />
        Clique em "Calcular" para calcular o troco
      </h3>
      <br />

      <div>
        <DatePicker onChange={onChange} value={value} />
      </div>

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
