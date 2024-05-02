import style from "./NavigationA.module.scss";

export default function NavigationA({ title, images }) {
  return (
    <div className={style.container}>
      <a href="#" className={style.wrapperNav}>
        <img src={images} alt="navigation" />
        <p>{title}</p>
      </a>
    </div>
  );
}
