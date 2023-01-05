export type Status = 'todo' | 'doing' | 'done';

export const STATUSES: Status[] = ['todo', 'doing', 'done'];

export interface Data {
  id: number;
  content: string;
}

export type Boards = Record<Status, Data[]>;
