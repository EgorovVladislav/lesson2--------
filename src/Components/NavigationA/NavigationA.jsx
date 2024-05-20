import style from "./NavigationA.module.scss";

export default function NavigationA({ title, images, index, editNavIndex }) {
  return (
    <div className={style.container}>
      <button className={style.wrapperNav} onClick={(e) => editNavIndex(index)}>
        <img src={images} alt="navigation" />
        <p>{title}</p>
      </button>
    </div>
  );
}