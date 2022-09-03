import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown, { Option } from "react-dropdown";
import DatePicker, { registerLocale } from "react-datepicker";
import Button from "../Button";
import pt from "date-fns/locale/pt-BR"; // the locale you want
import { toast } from "react-toastify";
const image = require("../../assets/images/registerAlert.svg");

interface ModalProps {
  visible: boolean;
  requestClose: () => void;
}

registerLocale("pt", pt);

const options = ["Despejo irregular de esgoto", "Despejo irregular de lixo", "Outro"];

const RegisterAlertModal: React.FC<ModalProps> = ({
  visible,
  requestClose,
}) => {
  const [option, setOption] = useState<string>(options[0]);
  const [date, setDate] = useState<Date>(new Date());

  const selectOption = (option: Option) => {
    setOption(option.value);
  };

  const onSubmit = () => {
    toast.success("Salvo com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    requestClose();
  };

  return (
    <AnimatePresence>
      {visible && (
        <ModalWrapper
          initial={{ opacity: 1, y: "100%" }}
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
                locale="pt"
              />
              <Button onClick={() => onSubmit()}>Salvar</Button>
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

  .localizacao,
  .Dropdown-control {
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

  .Dropdown-control {
    cursor: pointer;
  }

  .Dropdown-menu {
    top: calc(100% + 8px);
    background-color: var(--background-label2);
    border-radius: 8px;
    padding: 12px;
    color: var(--cinza);
    font-size: 14px;
    border: 0;
    width: 100%;
  }

  .Dropdown-option {
    &:hover {
      background-color: var(--white);
      border-radius: 8px;
    }
  }

  .Dropdown-option.is-selected {
    background-color: var(--white);
    border-radius: 8px;
  }

  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
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
    }
  }
`;
