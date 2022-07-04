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
    width: 90vw;
    padding: 0;
    margin: 0;
  }
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
  color: white;
  justify-content: space-evenly;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
