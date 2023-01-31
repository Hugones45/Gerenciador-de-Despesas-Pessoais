import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
  curretMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  curretMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePreviousMonth = () => {
    let [year, month] = curretMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = curretMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePreviousMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(curretMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea></C.ResumeArea>

      <ResumeItem title="Receitas" value={income} />
      <ResumeItem title="Despesas" value={expense} />
      <ResumeItem
        title="Balanço"
        value={income - expense}
        color={income - expense < 0 ? "red" : "green"}
      />
    </C.Container>
  );
};
