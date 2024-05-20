import style from "./Button.module.scss";

export default function Button({
  content,
  color,
  colorText,
  width,
  hover,
  onClick,
}) {
  return (
    <div
      className={style.btn}
      style={{ backgroundColor: color, colorText, width: width }}
      onClick={onClick}
    >
      {content}
    </div>
  );
}
