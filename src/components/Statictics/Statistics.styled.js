import styled from "styled-components";

export const Stats = styled.ul`
  list-style-type: none;
  text-align: start;
`;

export const StatsItem = styled.li`
  font-size: 18px;
  margin-left: 12.5%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;