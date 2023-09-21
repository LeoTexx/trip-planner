import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import styled from "styled-components";

export const Table = styled.table.attrs({
  cellSpacing: 0,
  cellPadding: 0,
})`
  width: 100%;
`;

export const TableRow = styled.tr``;

export const LeftColumn = styled.td`
  vertical-align: top;
  padding-top: 22px;
  height: 80px;
  width: 16px;
  box-sizing: border-box;
  position: relative;
  text-align: center;
`;

export const MiddleColumn = styled.td`
  padding: 0px 12px 0px 24px;
  vertical-align: top;
`;

export const RightColumn = styled.td`
  vertical-align: top;
  padding-top: 22px;
  width: 16px;
`;

export const ButtonColumn = styled.td.attrs({
  colSpan: 3,
})`
  vertical-align: top;
  height: 50px;
`;

export const PlusLinkButton = styled.button.attrs({
  type: "button",
})`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  border: none;
  background: none;
  padding: 0px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  &:active {
    opacity: 0.9;
  }
`;

export const PlusIcon = styled(AiOutlinePlusCircle).attrs({ size: 16 })``;

export const CloseIcon = styled(CgCloseO).attrs({ size: 16 })`
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.8;
  }
`;
