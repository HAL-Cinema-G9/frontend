// ======== 全体で使用する状態まとめファイル ========
import { atom } from 'recoil';

// メニューがクリックされたかどうかの状態
export const isMenuClickedState = atom<boolean>({
  key: 'isMenuClickedState',
  default: false,
});

// 現在選択している日付の状態
export const selectDateState = atom<string>({
  key: 'selectDateState',
  default: '',
});
