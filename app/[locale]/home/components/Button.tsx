type ButtonType = "submit" | "reset" | "button" | undefined;
interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
  type?: ButtonType;
  styles?: string;
  title?: string;
  disable?: boolean;
}
export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.handleClick}
      className={`${props.styles}`}
      type={props.type}
      title={props.title}
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
};
