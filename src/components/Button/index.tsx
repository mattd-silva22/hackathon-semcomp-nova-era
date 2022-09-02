import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ButtonProps extends React.PropsWithChildren {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonWrapper
      initial={{ size: 0.9 }}
      animate={{ size: 1 }}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled(motion.button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 16px;
  gap: 8px;

  background: var(--white);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  font-weight: 700;
  font-size: 12px;
  color: var(--cinza);
`;
