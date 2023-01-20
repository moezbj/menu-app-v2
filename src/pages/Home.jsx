import {useNavigate} from 'react-router-dom'
import Title from "../components/TitleMenu/Title";
import BtnCircle from "../components/BtnCircle/BtnCircle";
import Logo from "../assets/logo-menu.png";
import Home from "../assets/home.svg";
import Menu from "../assets/menu.svg";
import Info from "../assets/info.svg";
import "../styles/home.css";

const list = [
  { title: "Home", icon: Home, link: "/", id: 0 },
  { title: "Menu", icon: Menu, link: "/category", id: 1 },
  { title: "Info", icon: Info, link: "/info", id: 2 },
];

function App() {
  const navigate = useNavigate()
  return (
    <div className="container-home">
      <div className="content-home">
        <h1 className='welcome'>Welcome to</h1>
        <Title text="Restaurent Name" />
        <div className="image-container">
          <img src={Logo} alt="logo" className="image-content" />
        </div>
        <div className="footer-home">
          {list.map((el) => (
            <div className="item-footer" key={el.title} onClick={()=>navigate(el.link)}>
              <BtnCircle icon={el.icon} />
              <p className="item-text">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
