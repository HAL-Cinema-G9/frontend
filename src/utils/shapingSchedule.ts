import {
  Schedule,
  ShapedScheduleMovie,
} from '@/types/apiTypes';

export const shapingSchedule = (schedules: Schedule[]) => {
  const shapedSchedules: ShapedScheduleMovie[] = [];

  schedules.forEach((schedule) => {
    const { movie, screen, date } = schedule;
    const {
      id,
      title,
      description,
      director,
      actors,
      duration,
      thumbnail,
    } = movie;
    const { name } = screen;

    const index = shapedSchedules.findIndex(
      (shapedSchedule) => shapedSchedule.id === id
    );

    if (index === -1) {
      shapedSchedules.push({
        id,
        title,
        description,
        director,
        actors,
        duration,
        thumbnail,
        screen: [
          {
            id: screen.id,
            name,
            date: [date],
          },
        ],
      });
    } else {
      shapedSchedules[index].screen.push({
        id: screen.id,
        name,
        date: [date],
      });
    }
  });

  return shapedSchedules;
};
