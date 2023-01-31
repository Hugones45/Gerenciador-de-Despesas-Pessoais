import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

export const TabelItem = ({ item }: Props) => {
  return (
    <C.TabelLine>
      <C.TabelColum>{formatDate(item.date)}</C.TabelColum>
      <C.TabelColum>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TabelColum>
      <C.TabelColum>{item.title}</C.TabelColum>

      <C.TabelColum>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          R${item.value}
        </C.Value>
      </C.TabelColum>
    </C.TabelLine>
  );
};
