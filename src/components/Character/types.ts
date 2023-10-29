import { ICharacterDetail } from "../CharacterDetails/types";

export interface ICharacter {
  item: ICharacterDetail;
  onCharacterClick: (item: ICharacterDetail) => void;
}
