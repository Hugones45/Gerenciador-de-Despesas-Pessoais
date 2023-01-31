import * as C from "./styles";
import { Item } from "../../types/Item";
import { TabelItem } from "../TabelItem";

type props = {
  list: Item[];
};

export const TableArea = ({ list }: props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.tableHeadColumn width={100}>Data</C.tableHeadColumn>
          <C.tableHeadColumn width={130}>Categoria</C.tableHeadColumn>
          <C.tableHeadColumn>Título</C.tableHeadColumn>
          <C.tableHeadColumn width={150}>Valor</C.tableHeadColumn>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <TabelItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
