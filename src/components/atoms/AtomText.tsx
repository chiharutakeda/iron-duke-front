import React from 'react';
import AtomTextStyle from './styles/AtomText.module.css';
type AtomTextType = {
  className: TextType;
  value: string;
  placeholder: string;
  onChangeFnc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type TextType = 'NORMAL' | 'FIRSTNAME' | 'LASTNAME' | 'TODO';

export const returnStyle = (className: TextType) => {
  switch (className) {
    case 'NORMAL':
      return AtomTextStyle.normal;
    default:
      return AtomTextStyle.normal;
  }
};

const AtomText = ({
  className,
  value,
  placeholder,
  onChangeFnc,
}: AtomTextType) => {
  const style = returnStyle(className);
  return (
    <input
      type="text"
      className={style}
      value={value}
      placeholder={placeholder}
      onChange={onChangeFnc}
    />
  );
};

export default AtomText;
