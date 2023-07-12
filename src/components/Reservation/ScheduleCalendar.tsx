import { selectDateState } from '@/recoil/elementAtom';
import { Schedule } from '@/types/apiTypes';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

const styles = {
  scheduleCalendarContainer: css`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `,
  topTitle: css`
    padding: 20px;
    background-color: #c39be4;
    width: 30%;
  `,
  bottomCalendar: css`
    padding: 20px;
    background-color: #c39be4;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 6px;
      height: 10px;
      background-color: #fff;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 5px;
    }
  `,
  selectDate: css`
    padding: 10px;
    background-color: #e28080;
    width: 100px;
    height: 100px;
    cursor: pointer;
  `,
  selectDateActivity: css`
    padding: 10px;
    background-color: #9bbce4;
    width: 100px;
    height: 100px;
    cursor: pointer;
  `,
  selectDateNone: css`
    padding: 10px;
    background-color: white;
    width: 100px;
    height: 100px;
    opacity: 0.7;
  `,
};

type Props = {
  props: {
    schedules: Schedule[];
  };
};

const ScheduleCalendar = ({ props }: Props) => {
  const { schedules } = props;
  const [selectedDate, setSelectedDate] =
    useRecoilState<string>(selectDateState);

  // 今日から2週間分の日付を取得
  const showCalendarNum: number = 14;
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
    const month = (today.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const date = today
      .getDate()
      .toString()
      .padStart(2, '0');
    const day = today.getDay();
    const dayOfWeekStr = dayOfWeek[day];
    const todayStr = `${month}/${date}`;
    calendarDate.push(todayStr);
    fullDate.push(`${year}-${month}-${date}`);
    calendarDayOfWeek.push(dayOfWeekStr);
  }

  // schedulesから上映予定が存在する日付を取得
  const scheduleDate: string[] = [];
  schedules.map((schedule) => {
    const date = schedule.date;
    // 日本時間に変換
    const dateObj = new Date(date);
    dateObj.setHours(dateObj.getHours() - 9);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const dateNum = dateObj
      .getDate()
      .toString()
      .padStart(2, '0');
    const dateStr = `${year}-${month}-${dateNum}`;
    // 重複を削除
    if (scheduleDate.includes(dateStr)) return;
    scheduleDate.push(dateStr);
  });

  const handleSelectDate = (fullDate: string) => {
    if (!scheduleDate.includes(fullDate)) return;
    setSelectedDate(fullDate);
  };

  return (
    <div css={styles.scheduleCalendarContainer}>
      <div css={styles.topTitle}>
        <p>日別上映スケジュール</p>
      </div>
      <div css={styles.bottomCalendar}>
        {calendarDate.map((todayStr, index) => (
          <button
            key={index}
            css={[
              selectedDate === fullDate[index]
                ? styles.selectDateActivity
                : styles.selectDate,
              !scheduleDate.includes(fullDate[index]) &&
                styles.selectDateNone,
            ]}
            onClick={() =>
              handleSelectDate(fullDate[index])
            }
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
