import { selectDateState } from '@/recoil/elementAtom';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const styles = {
  scheduleCalendarContainer: css`
    width: 100%;
  `,
  topTitle: css`
    padding: 20px;
    background-color: #c39be4;
    width: 30%;
  `,
  bottomCalendar: css`
    padding: 20px;
    width: 100%;
    background-color: #c39be4;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  selectDate: css`
    padding: 10px;
    background-color: #fff;
    width: 100px;
    height: 100px;
  `,
};

const ScheduleCalendar = () => {
  const [selectedDate, setSelectedDate] =
    useRecoilState<string>(selectDateState);

  const showCalendarNum: number = 14;
  // 日付を取得
  // 今日から2週間分の日付を取得
  const calendarDate: string[] = [];
  const fullDate: string[] = [];
  const calendarDayOfWeek: string[] = [];
  const dayOfWeek = [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土',
  ];
  for (let i = 0; i < showCalendarNum; i++) {
    const today = new Date();
    today.setDate(today.getDate() + i);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const dayOfWeekStr = dayOfWeek[day];
    const todayStr = `${month}/${date}`;
    calendarDate.push(todayStr);
    fullDate.push(`${year}-${month}-${date}`);
    calendarDayOfWeek.push(dayOfWeekStr);
  }

  useEffect(() => {
    if (selectedDate === '') {
      setSelectedDate(fullDate[0]);
    }
    console.log(selectedDate);
  }, [fullDate]);

  return (
    <div css={styles.scheduleCalendarContainer}>
      <div css={styles.topTitle}>
        <p>日別上映スケジュール</p>
      </div>
      <div css={styles.bottomCalendar}>
        {calendarDate.map((todayStr, index) => (
          <button
            key={index}
            css={styles.selectDate}
            onClick={() => setSelectedDate(fullDate[index])}
          >
            <p>
              {todayStr}
              <span>({calendarDayOfWeek[index]})</span>
            </p>
            {index === 0 && <p>Today</p>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
