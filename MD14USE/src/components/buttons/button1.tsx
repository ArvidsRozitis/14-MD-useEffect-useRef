type ButtonProps = {
  onClick: () => void;
  label: number | string;
  disabled: boolean;
};

export const Button = ({ onClick, label, disabled }: ButtonProps) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button