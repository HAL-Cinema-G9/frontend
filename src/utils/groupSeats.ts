import { Seat } from '@/types/apiTypes';

// Seat配列をグループに分ける関数
// 例: groupSeats([1,2,3,4,5,6,7,8,9], 3) => [[1,2,3], [4,5,6], [7,8,9]]
export const groupSeats = (
  seats: Seat[],
  groupSize: number
) => {
  const groups = [];
  for (let i = 0; i < seats.length; i += groupSize) {
    groups.push(seats.slice(i, i + groupSize));
  }
  return groups;
};
