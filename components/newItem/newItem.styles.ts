import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  flex: 35%;
  overflow: hidden;
  box-shadow: 0px 6px 10px #c4c4c4;
  position: relative;
`;

export const ItemImg = styled.img`
  max-width: 100%;
  max-height: 350px;
  width: auto;
  height: auto;
  margin: auto;
`;

export const BuyButton = styled.button`
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20px;
  width: 85%;
  text-align: center;
  display: inline-block;
  height: 60px;
  background-color: #2ce78d;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 25px;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 1;
    cursor: pointer;
  }
`;
