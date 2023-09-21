import styled from "styled-components";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

export const Container = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.danger};
`;

export const DateInputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.muted};
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  overflow: hidden;
`;

export const LocationInputContainer = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.muted};
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

export const SelectorContainer = styled.div`
  position: relative;
  z-index: 999;
`;

export const SelectorBackground = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px -2px #00000022;
  position: absolute;
  top: 5px;
  padding: 5px;
  border-radius: 6px;
`;

export const SelectorOption = styled.div`
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const Calendar = {
  OverlayContainer: styled.div`
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px -5px #00000099;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.backgroundInput};
    border-radius: ${({ theme }) => theme.sizing.borderRadius}px;
    z-index: 10000;
    left: -100px;
  `,

  HeaderContainer: styled.div`
    display: flex;
    align-items: center;
  `,

  PrevMonthButton: styled(IoArrowBackCircle).attrs({ size: 20 })`
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.9;
    }
  `,

  NextMonthButton: styled(IoArrowForwardCircle).attrs({ size: 20 })`
    margin-right: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.9;
    }
  `,

  CurrentMonthToggle: styled.div`
    flex: 1;
    position: relative;
  `,

  MonthList: styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundInput};
  `,

  CurrentMonth: styled.div``,

  DateToggle: styled.div`
    flex: 1;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.muted};
    border-radius: 3px;
    padding: 1px 5px;
    cursor: pointer;
  `,

  DateDropdown: styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundInput};
    border-radius: ${({ theme }) => theme.sizing.borderRadius}px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 2px;
    box-shadow: 0px 2px 10px -5px #00000099;
    max-height: 200px;
    overflow-y: scroll;
    left: 0px;
    z-index: 10000;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  `,

  DateOption: styled.div`
    cursor: pointer;
    padding: 5px;
    border-radius: ${({ theme }) => theme.sizing.borderRadius - 2}px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  `,

  CalendarBody: styled.div``,

  WeekdayHeaders: styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    margin-top: 15px;
    margin-bottom: 10px;
  `,

  WeekdayLabel: styled.div`
    font-weight: bold;
    flex: 1;
    text-align: center;
  `,

  DateGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
  `,
  DateCell: styled.div<{
    muted?: boolean;
    selected?: boolean;
  }>`
    color: ${({ muted, selected, theme }) => {
      if (muted && !selected) {
        return theme.colors.muted;
      }
      if (selected) {
        return "white";
      }
      return theme.colors.font;
    }};
    background-color: ${({ muted, selected, theme }) => {
      if (selected) {
        return theme.colors.secondary;
      }
      return "none";
    }};
    min-width: 20px;
    min-height: 20px;
    border-radius: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    &:active {
      opacity: 0.8;
    }
  `,
};

export const Incrementer = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundInput};
    border: 1px solid ${({ theme }) => theme.colors.muted};
    padding: 5px;
    border-radius: 6px;
    font-size: 12px;
    display: flex;
    display: inline-flex;
  `,

  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 25px;
    height: 25px;
    border-radius: 4px;
    padding: 0px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #a5b1e8;
    }
  `,

  Quantity: styled.div`
    width: 30px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
