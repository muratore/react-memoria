import styled from "styled-components";

export const container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 750px;
  display: flex;
  padding: 50px 20px;
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const grid = styled.div`
  width: 450px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 750px){
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const logoLink = styled.a`
  display: block;
`;

export const infoArea = styled.div`
  width: 100%;
  margin: 15px 0;

  @media all (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const gridArea = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;
