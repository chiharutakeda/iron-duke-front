import React from 'react';
import AtomTextStyle from './styles/AtomText.module.css';
type AtomTextAreaType = {
  className: TextAreaType;
  value: string;
  placeholder: string;
  onChangeFnc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
type TextAreaType = 'NORMAL';

export const returnStyle = (className: TextAreaType) => {
  switch (className) {
    case 'NORMAL':
      return AtomTextStyle.normal;
    default:
      return AtomTextStyle.normal;
  }
};

const AtomTextArea = ({
  className,
  value,
  placeholder,
  onChangeFnc,
}: AtomTextAreaType) => {
  const style = returnStyle(className);
  return (
    <textarea
      className={style}
      value={value}
      placeholder={placeholder}
      onChange={onChangeFnc}
      rows={3}
    />
  );
};

export default AtomTextArea;
