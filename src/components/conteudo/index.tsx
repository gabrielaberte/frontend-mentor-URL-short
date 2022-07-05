import {
  ButtonStyle,
  DivContainerImageHeader,
  DivTitulo,
  DivContainerShortenALink,
  Container,
  DivShortLink,
  DivBoost,
} from "../styles/styles";
import React, { useState } from "react";
import illustration from "../../assets/images/illustration-working.svg";
import { getShortLink } from "../../services/requests";
import { Divider, List } from "antd";
import copy from "copy-to-clipboard";

export default function Conteudo() {
  const [longLink, setLongLink] = useState<string>("");
  const [shorterLink, setshorterLink] = useState<string>();
  const [originalLink, setoriginalLink] = useState<string>();
  const [copyText, setCopyText] = useState<boolean>();

  const requestShortLink = async (): Promise<void> => {
    setCopyText(false);
    try {
      const shortLink = await getShortLink(longLink);

      setoriginalLink(shortLink.result.original_link);
      setshorterLink(shortLink?.result.short_link);
    } catch (erro: any) {
      console.log(erro);
    }
  };

  const copyToClipboard = () => {
    if (shorterLink) {
      setCopyText(true);
      copy(shorterLink);
    }
  };

  return (
    <Container>
      <DivContainerImageHeader>
        <DivTitulo>
          <p>More than just </p>
          <p>shorter links</p>
          <span>Build your brand's recognition and get detailed</span> <br />
          <span> insights on how your links are performing.</span>
          <ButtonStyle>Get Started</ButtonStyle>
        </DivTitulo>
        <img src={illustration} />
      </DivContainerImageHeader>
    
      <br />

    </Container>
  );
}
