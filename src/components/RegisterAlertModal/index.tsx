import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown, { Option } from "react-dropdown";
import DatePicker from "react-date-picker";

import "react-dropdown/style.css";

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
          <div>
            <ContainerWrapper>
              <img />
              <label>O que você deseja relatar?</label>
              <Dropdown
                options={options}
                onChange={selectOption}
                value={option}
                placeholder="Select an option"
              />
              <label>Localização</label>
              <DatePicker onChange={setDate} value={date} />
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerWrapper = styled(motion.div)`
  background-color: orange;
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
