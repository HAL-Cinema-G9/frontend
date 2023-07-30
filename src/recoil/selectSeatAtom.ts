// ======== 座席予約で使用する状態まとめファイル ========
import { atom } from 'recoil';

export const selectSeatState = atom<number[]>({
  key: 'selectSeatState',
  default: [],
});

export const selectTicketState = atom<number[]>({
  key: 'selectTicketState',
  default: [],
});
