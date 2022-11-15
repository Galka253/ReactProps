import React from "react";
import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import Alerte from "./Alerte";
export default function App() {
  const myFunction = (MyName) => {
    alert(`hello ${MyName}`);
  };

  return (
    <div className="App">
      <ProfileComponent
        MyName="Galyna Mseddi"
        bio="Date of birth:22.09.1983"
        Profession="WebDevelopper"
      >
        <img src="./img_avatar2.png" />
      </ProfileComponent>
      <Alerte myFunction={myFunction} MyName={"Galyna Mseddi"} />
    </div>
  );
}
