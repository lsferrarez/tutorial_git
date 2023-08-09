import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponent from "../../assets/components/Buttons";

export default function Start() {
  const handleNavToPlayAlone = () => {
    console.log("Teste de play alone");
  };
  const handleNavPlayTogether = () => {
    console.log("Teste de Play Together")
  };
  const handleNavPlayToRules = () => {
    console.log("Teste de Rules")
  };
  return (
  <Container>
    <Logo source={require("../../assets/logoDark.png")}
    style={{resizeMode: "contain"}}
     />
    <Title>Bem Vindo ao {"\n"} Bomb Game</Title>
    <SubTitle>Escolha um modo de jogo.</SubTitle>

    <ButtonComponent
      buttonText={"jogar Solo"}
      handlePress={ handleNavToPlayAlone }
    />

    <ButtonComponent
    buttonText={"Jogar em Dupla"}
    handlePress={ handleNavPlayTogether }
    />

    <Rules onPress={handleNavPlayToRules}>Ver as Regras Do Jogo</Rules>

  </Container>
  );
}
