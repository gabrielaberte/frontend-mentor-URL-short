import { ButtonStyle, DivContainerImageHeader, DivTitulo } from "../styles/styles";
import React from "react";
import illustration from '../../assets/images/illustration-working.svg'

export default function Conteudo() {
 return (
  <>
  <DivContainerImageHeader>
  <DivTitulo>
    <p>More than just shorter links</p>
    <span>
      Build your brand's recognition and get detailed insights on how your links
      are performing.
    </span>  
    <ButtonStyle>Get Started</ButtonStyle>
  </DivTitulo>
  <img src={illustration} />
  </DivContainerImageHeader>

  </>
)}
