import {
  ButtonStyle,
  DivContainerImageHeader,
  DivTitulo,
  DivContainerShortenALink,
  Container,
  DivShortLink,
} from "../styles/styles";
import React, { useState } from "react";
import illustration from "../../assets/images/illustration-working.svg";
import { getShortLink } from "../../services/requests";

export default function Conteudo() {
  const [longLink, setLongLink] = useState<string>("");
  const [shorterLink, setshorterLink] = useState<string>();

  const shorterLinkArray: string[] = [];
  const longLinkArray: string[] = [];

  const requestShortLink = async (): Promise<void> => {
    try {
      const shortLink = await getShortLink(longLink);
      setshorterLink(shortLink?.result.short_link);
      shorterLinkArray.push(shortLink?.result.short_link);
      longLinkArray.push(longLink);
    } catch (erro: any) {
      console.log(erro);
    }
  };

  shorterLinkArray.map((shortLinks) =>{
    <DivShortLink>

    </DivShortLink>
  });

  return (
    <Container>
      <DivContainerImageHeader>
        <DivTitulo>
          <p>More than just shorter links</p>
          <span>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </span>
          <ButtonStyle>Get Started</ButtonStyle>
        </DivTitulo>
        <img src={illustration} />
      </DivContainerImageHeader>
      <DivContainerShortenALink>
        <input
          onChange={(e) => setLongLink(e.target.value)}
          required
          placeholder="Shorten a link here..."
        ></input>
        <button onClick={() => requestShortLink()}> Shorten it!</button>
      </DivContainerShortenALink>
    </Container>
  );
}
