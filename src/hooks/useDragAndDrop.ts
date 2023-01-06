import { useState } from 'react';
import { STATUSES, type Status, type Boards } from '../interfaces';

export const useDragAndDrop = (initialState: Boards) => {
  const [isDragging, setIsDragging] = useState(false);
  const [boards, setBoards] = useState(initialState);

  const handleUpdateList = (
    id: number,
    to: { status: Status; position: number }
  ) => {
    for (const status of STATUSES) {
      const card = boards[status].find((item) => item.id === id);

      if (!card) continue;

      const copied = { ...boards };
      copied[status] = copied[status].filter((item) => item !== card);
      const before = copied[to.status].slice(0, to.position);
      const after = copied[to.status].slice(to.position);

      copied[to.status] = [...before, card, ...after];

      setBoards(copied);

      return;
    }

    throw Error('에러! 카드가 없습니다!');
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    boards,
    handleUpdateList,
    handleDragging,
  };
};
