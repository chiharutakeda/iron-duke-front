import React from 'react';
import deleteButton from './styles/DeleteButton.module.css';
import registButton from './styles/RegistButton.module.css';
type AtomButtonType = {
  buttonType: buttonType;
  fnc: () => void;
  isDisable?: boolean;
};

type buttonType = 'DELETE' | 'REGIST';

export const returnStyle = (buttonType: buttonType) => {
  switch (buttonType) {
    case 'DELETE':
      return deleteButton.DeleteButton;
    case 'REGIST':
      return registButton.RegistButton;
    default:
      return deleteButton.DeleteButton;
  }
};

const AtomButton = ({
  buttonType,
  isDisable = false,
  fnc,
}: AtomButtonType) => {
  const style = returnStyle(buttonType);
  return (
    <button
      className={style}
      onClick={(e) => {
        e.preventDefault();
        fnc();
      }}
      disabled={isDisable}
    >
      {buttonType}
    </button>
  );
};

export default AtomButton;
