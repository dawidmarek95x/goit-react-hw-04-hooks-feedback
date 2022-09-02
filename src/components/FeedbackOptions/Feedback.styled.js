import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  padding: 7px 12px;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  text-transform: capitalize;
  background-color: rgb(255, 255, 255);
  box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.5), ;
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.5);
  transition: background-color 1200ms, transform 600ms;
  transform: perspective(100px) scale(1.1);

  &:active {
    background-color: ${props => props.positive ? "#89BF53" : "#BE3535"};
    transform: perspective(0px) scale(1);
    transition: background-color 50ms, transform 50ms;
  }
`;

export const LastButton = styled(Button)`
  margin-right: 0;
`;