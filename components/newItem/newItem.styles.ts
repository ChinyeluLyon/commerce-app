import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  flex: 35%;
  overflow: hidden;
  box-shadow: 0px 6px 10px #c4c4c4;
  margin-bottom: 30px;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

export const ItemImg = styled.img`
  max-width: 100%;
  max-height: 350px;
  width: auto;
  height: auto;
  margin: auto;
`;

export const BuyButton = styled.button`
  display: flex;
  margin: 10px auto;
  width: 85%;
  height: 60px;
  text-align: center;
  display: inline-block;
  background-color: #2ce78d;
  border: none;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 25px;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 1;
    cursor: pointer;
    color: white;
    width: 95%;
    height: 50px;
  }
`;
