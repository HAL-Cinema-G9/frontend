// ======== 全体で使用する状態まとめファイル ========
import { atom } from 'recoil';

export const isMenuClickedState = atom<boolean>({
  key: 'isMenuClickedState',
  default: false,
});
