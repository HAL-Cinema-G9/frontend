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
  column: string;
  row: number;
};

export type Schedule = {
  id: number;
  movie_id: number;
  screen_id: number;
  date: Date;
};

export type ReservationType = {
  id: number;
  user_id: number;
  ticket_id: number;
  seat_id: number;
  schedule_id: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
};
