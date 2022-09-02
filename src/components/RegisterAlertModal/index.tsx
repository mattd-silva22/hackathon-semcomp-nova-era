import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown, { Option } from "react-dropdown";
import DatePicker from "react-datepicker";
import Button from "../Button";

const image = require("../../assets/images/registerAlert.svg");

interface ModalProps {
  visible: boolean;
  requestClose: () => void;
}

const options = ["one", "two", "three"];

const RegisterAlertModal: React.FC<ModalProps> = ({
  visible,
  requestClose,
}) => {
  const [option, setOption] = useState<string>(options[0]);
  const [date, setDate] = useState<Date>(new Date());

  const selectOption = (option: Option) => {
    setOption(option.value);
  };

  return (
    <AnimatePresence>
      {visible && (
        <ModalWrapper
          initial={{ opacity: 0.5, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
        >
          <header>
            <button onClick={() => requestClose()}>X</button>
          </header>
          <div className="body-register-alert-modal">
            <ContainerWrapper>
              <img src={image.default} alt="Registrar alerta" />
              <label>O que você deseja relatar?</label>
              <Dropdown
                options={options}
                onChange={selectOption}
                value={option}
                placeholder="Selecione uma opção"
              />
              <label htmlFor="localizacao">Localização</label>
              <input
                placeholder="Digite aqui o local do relato"
                name="localizacao"
                className="localizacao"
              />
              <label>Quando?</label>
              <DatePicker
                selected={date}
                onChange={(date: Date) => setDate(date)}
              />
              <Button onClick={() => requestClose()}>Salvar</Button>
            </ContainerWrapper>
          </div>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default RegisterAlertModal;

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: white;
  justify-content: center;

  header {
    display: flex;
    justify-content: end;

    button {
      background-color: white;
      font-size: 36px;
      padding: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
    }
  }

  .body-register-alert-modal {
    display: flex;
    justify-content: center;
    padding: 8px;
  }
`;

const ContainerWrapper = styled(motion.div)`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  .localizacao {
    background-color: var(--background-label);
    border-radius: 8px;
    padding: 12px;
    color: var(--cinza);
    font-size: 14px;
    border: 0;
    width: 100%;

    &:hover,
    &:focus {
      outline-color: var(--cinza);
    }
  }
`;
