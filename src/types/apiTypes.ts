export type Ticket = {
  id: number;
  name: string;
  price: number;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  director: string;
  actors: string;
  duration: number;
  thumbnail: string;
};

export type Screen = {
  id: number;
  name: string;
};

export type Seat = {
  id: number;
  screen_id: number;
  screen: Screen;
  column: string;
  row: number;
};

export type Schedule = {
  id: number;
  date: Date;
  movie_id: number;
  movie: Movie;
  screen_id: number;
  screen: Screen;
};

// Response
export type ShapedScheduleMovie = {
  id: number;
  title: string;
  description: string;
  director: string;
  actors: string;
  duration: number;
  thumbnail: string;
  screen: {
    id: number;
    name: string;
    date: Date[];
  }[];
};

export type ReservationType = {
  id: number;
  user_id: number;
  user: User;
  ticket_id: number;
  ticket: Ticket;
  seat_id: number;
  seat: Seat;
  schedule_id: number;
  schedule: Schedule;
};

export type User = {
  id: number;
  name: string;
  email: string;
};
