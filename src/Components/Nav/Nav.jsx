import style from "./Nav.module.scss";
import NavA from "../NavigationA/NavigationA";
import data from "../../data/nav.json";
import addNav from "../../common/addDataNav";

export default function Nav() {
  const newData = addNav(data);
  return (
    <div className={style.container}>
      <div className={style.wrapper_content}>
        {newData.map((item, index) => (
          <NavA images={item.images} title={item.title} key={index}/>
        ))}
      </div>
    </div>
  );
}
