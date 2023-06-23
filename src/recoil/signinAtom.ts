// ======== サインインで使用する状態まとめファイル ========
import { atom } from 'recoil';

export const signinState = atom<string>({
  key: 'signinState',
  default: '',
});
