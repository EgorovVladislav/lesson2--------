import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import style from "./style/App.module.scss";

export default function App() {
  return (
    <div className={style.container}>
      <Header />
      <Nav />
      <div className={style.wrapper_content}>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
