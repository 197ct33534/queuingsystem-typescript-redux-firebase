import React, { memo } from 'react';

const STYLES = [
  'btn--primary--solid',
  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
];
interface PropButton {
  children?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement>) => void | undefined)
    | undefined;
  buttonStyle: string;
  buttonSize: string;
}
const SIZES = ['btn--medium', 'btn--large', 'btn--XL'];
const Button = (props: PropButton) => {
  const { children, type, onClick, buttonStyle, buttonSize } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default memo(Button);
