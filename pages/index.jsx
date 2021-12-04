import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Login from "../src/components/login/Login";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";
import LoginPage from "./login/index";
import Navigation from "../src/components/navigation/Navigation";
import Card from "../src/components/card/Card";
import Scenes from "../src/components/scenes/Scenes";
import Thermostat from "../src/components/thermostat/Thermostat";
import Energy from "../src/components/energy/Energy";
import Modal from "../src/components/modal/Modal";

const cardsData=[
  {
    iconUrl:'./images/morning.svg',
    outlined: false
  },
  {
    iconUrl:'./images/alarm-clock.svg',
    outlined: false
  },
  {
    iconUrl:'./images/shower.svg',
    outlined: false
  },
  {
    iconUrl:'./images/tea-cup.svg',
    outlined: false
  },
  {
    iconUrl:'./images/rock.svg',
    outlined: false
  },
  {
    iconUrl:'./images/plus.svg',
    outlined: true
  },
];

export default function Index() {
  return <Scenes cards={cardsData}/>;
}
