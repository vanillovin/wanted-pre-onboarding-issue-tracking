import type { Data, Status } from '../interfaces';

export const data: Record<Status, Data[]> = {
  todo: [
    {
      id: 1,
      content: 'Aqua-man',
    },
    {
      id: 3,
      content: 'Green Lantern',
    },
  ],
  doing: [
    {
      id: 2,
      content: 'Flash',
    },
  ],
  done: [
    {
      id: 4,
      content: 'Batman',
    },
  ],
};
