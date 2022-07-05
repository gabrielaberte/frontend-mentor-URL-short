import styled from "styled-components";
import bgShorten from "../../assets/images/bg-boost-desktop.svg";

export const Container = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
  }
  @media (max-width: 4000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    padding: 0;
    margin: 0;
  }
`;

export const DivLogin = styled.div`
display: flex;
color: grey;
`;

export const DivTitulo = styled.div`
  align-items: center;
  justify-content: space-evenly;
  align-self: center;

  p {
    color: black;
    font-weight: 800;
    font-size: 48px;
    margin: 0;
  }
  span {
    color: grey;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  img {
    margin-left: 50px;
  }
`;

export const DivContainerImageHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: inherit;
`;

export const ButtonStyle = styled.button`
  background-color: #4cdcbf;
  display: flex;
  border-radius: 15px;
  color: white;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

export const DivContainerShortenALink = styled.div`
  display: flex;
  background-image: url(${bgShorten});
  background-color: #5c5388;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  background-size: cover;

  button {
    background-color: #4cdcbf;
    display: flex;
    margin-left: 15px;
    border-radius: 5px;
    color: white;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    height: 40px;
  }

  input {
    width: 500px;
    height: 40px;
    border-radius: 10px;
  }

  input:required {
    border-color: red;
  }

  input::placeholder {
    color: red;
    opacity: 0.5;
  }
`;

export const DivShortLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  width: max-content;

  p {
    font-weight: 500;
    margin-top: 10px;
  }

  span {
    color: #4cdcbf;
    font-weight: 800;
    margin-left: 100px;
    margin-right: 20px;
  }

  button {
    margin-top: 0;
  }
`;

export const DivBoost = styled.div`
  background-image: url(${bgShorten});
  background-color: #5c5388;
  width: inherit;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;

  p {
    color: white;
    font-weight: 800;
    font-size: 25px;
    margin: 0;
  }
`;
export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: baseline;
  margin-left: 50px;

  p {
    font-weight: 500;
    font-size: 18px;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  span {
    color: grey;
    margin-bottom: 10px;
  }

  img {
    background-color: #202124;
    color: white;
  }
`;

export const DivRedesSociais = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  margin-left: 20px;

  img {
    margin-left: 25px;
  }
`;

export const DivCinza = styled.div`
  background-color: #e6eded;
  background-size: contain;
`;

export const AdvancedStatisticsStyle = styled.div`
  background-color: #e6eded;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;

  p {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 0;
  }

  span {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    color: grey;
    padding: 0;
    margin: 0;
    width: 400px;
    text-align: center;
  }

  @media (max-width: 400px) {
   span {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    color: grey;
    padding: 0;
    margin: 0;
    width: 200px;
    text-align: center;
  }
  }

`;
