import styled from "styled-components";

export const Button = styled.button`
  width: 207px;
  height: 51px;
  background: #2B2821;
  border:0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background 0.2s;

  a{
    font-family: Cinzel;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }
:hover{
  background: #B1A58D;
  a{
    color: #2B2821;
  }
}

`;