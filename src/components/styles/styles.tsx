import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

export const DivTitulo = styled.div`
  align-items: center;
  justify-content: center;
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
  }
`;

export const DivContainerImageHeader = styled.div`
  display: flex;
`;

export const ButtonStyle = styled.button`
  background-color: #4cdcbf;
  display: flex;
  margin-top: 20px;
  border-radius: 15px;
  color: white;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
