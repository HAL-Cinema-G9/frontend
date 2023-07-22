// 今日の日付を取得する関数
// 使用例: getTodayDate() 出力例: 2000-01-01
export const getTodayDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNum = date.getMonth() + 1;
  const month = monthNum.toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
