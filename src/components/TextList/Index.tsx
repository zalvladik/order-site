import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

import ContainerBox from "../ContainerBox";
import { ListUl, ListItemLi, TextListText } from "./styles";
import { TextListProps } from "./types";

const TextList = ({ list }: TextListProps): JSX.Element => {
  return (
    <ContainerBox sx={{ textAlign: "center" }}>
      <ListUl>
        {list.map((text: string) => (
          <ListItemLi key={text}>
            <TextListText>
              <DoneOutlineIcon sx={{ color: "gold" }} />
              {text}
            </TextListText>
          </ListItemLi>
        ))}
      </ListUl>
    </ContainerBox>
  );
};

export default TextList;
