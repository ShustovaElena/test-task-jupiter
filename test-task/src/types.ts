export type ICard = {
  src: string;
  name: string;
  category: string;
};

export interface ICategoryButton {
  category: string;
}

export interface IDelButton {
  name: string;
}

export interface IMenuButton {
  category: string;
  activeButton: string;
}

export interface IOption {
  nameOption: string;
}
