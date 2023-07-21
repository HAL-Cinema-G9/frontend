export const endMovieTime = (
  date: Date,
  duration: number
) => {
  const time = new Date(date);
  time.setHours(time.getHours() - 9);
  time.setMinutes(time.getMinutes() + duration);
  // 時刻だけ取得
  const hour = time.getHours();
  const minute = time.getMinutes();
  const sumTime = `${hour}:${minute}`;
  return sumTime;
};
