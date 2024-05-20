import style from "./Nav.module.scss";
import NavA from "../NavigationA/NavigationA";
import data from "../../data/nav.json";
import addNav from "../../common/addDataNav";

export default function Nav({ editNavIndex }) {
  const newData = addNav(data);
  return (
    <div className={style.container}>
      <div className={style.wrapper_content}>
        {newData.map((item, index) => (
          <NavA
            editNavIndex={editNavIndex}
            images={item.images}
            title={item.title}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
