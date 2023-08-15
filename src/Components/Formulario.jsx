import {
  infoInput,
  msgDanger,
  msgEmail,
  msgPass,
  msgSuccess,
} from "../Constants";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import { AlertMessage } from "./AlertMessage";
import { InpFormnulario } from "./inpFormulario";
import { validateEmail, validateEmpty } from "../logic/validateForm";

export function Formulario({ Alerta, setAlerta }) {
  
  const [inputsValues, setInputValue] = useState(
    Array(infoInput.length).fill(null)
  );

  const modifyInput = (index, inp) => {
    const newinputsValues = [...inputsValues];
    newinputsValues[index] = inp.target.value;
    setInputValue(newinputsValues);
  };

  const validarInput = (event) => {
    event.preventDefault()
    
    if (validateEmpty(inputsValues)) {
      if (validateEmail(inputsValues[1])) {
        if (inputsValues[2] === inputsValues[3]) {
          setAlerta(msgSuccess);
        } else {
          setAlerta(msgPass);
        }
      } else {
        setAlerta(msgEmail);
      }
    } else {
      setAlerta(msgDanger);
    }
  };

  return (
    <form className="formulario" onSubmit={validarInput}>
      {infoInput.map((inp, index) => (
        <InpFormnulario
          key={index}
          index={index}
          type={inp.type}
          placeHolder={inp.placeHolder}
          id={inp.id}
          modifyInput={modifyInput}
        />
      ))}
      <Button variant="success" type="submit">
        Registrate
      </Button>
      <AlertMessage
        type={Alerta.type}
        message={Alerta.msg}
        visible={Alerta.visible}
      />
    </form>
  );
}
