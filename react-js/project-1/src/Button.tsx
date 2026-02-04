import type { ButtonProps } from "./features/types/Button.type";

function Button({ onClick, text }: ButtonProps) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}

export default Button;
