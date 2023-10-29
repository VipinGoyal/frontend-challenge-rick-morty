export interface ILocation {
  name: string;
  type?: string;
}

export interface ICharacterDetail {
  id: string;
  name: string;
  image: string;
  key?: number;
  status: string;
  gender: string;
  species: string;
  origin: ILocation;
  location: ILocation;
}

export interface ICharacterDetails {
  dialogOpen: boolean;
  onDialogClose: () => void;
  dialogData?: ICharacterDetail;
}
