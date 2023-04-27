import { OptionBase } from 'chakra-react-select/dist/types/types';

export interface CommunityOptionType extends OptionBase {
  label: string;
  value: number;
}

export type DesktopMenuProps = {
  notShowText?: boolean;
  onLogOut: () => void;
  onCloseMenu: () => void;
  onOpen: () => void;
};

export type NavbarProps = {
  onCloseMenu: () => void;
  onOpenMenu: () => void;
};
