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
import { Divider, List } from "antd";
import copy from "copy-to-clipboard";

export default function Conteudo() {
  const [longLink, setLongLink] = useState<string>("");
  const [shorterLink, setshorterLink] = useState<string>();
  const [originalLink, setoriginalLink] = useState<string>();
  const [copyText, setCopyText] = useState<boolean>();

  const requestShortLink = async (): Promise<void> => {
    try {
      const shortLink = await getShortLink(longLink);

      setoriginalLink(shortLink.result.original_link);
      setshorterLink(shortLink?.result.short_link);

    } catch (erro: any) {
      console.log(erro);
    }
  };

  const copyToClipboard = () => {
    if (shorterLink){
    setCopyText(true)
    copy(shorterLink);
    }
  };

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
      {shorterLink && (
        <List
          style={{ display: "flex", flexDirection: "row" }}
          size="large"
          bordered
          dataSource={[shorterLink]}
          renderItem={(item) => (
            <>
              <List.Item>
                <DivShortLink>
                  <div>
                    <p>{originalLink}</p>
                  </div>
                  <span>{item}</span>
                  <ButtonStyle onClick={copyToClipboard}>{copyText && 'Copied!'}{!copyText && 'Copy'}</ButtonStyle>
                </DivShortLink>
              </List.Item>
            </>
          )}
        />
      )}
    </Container>
  );
}
