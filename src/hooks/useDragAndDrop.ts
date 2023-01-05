import { useState } from 'react';
import { STATUSES, type Status, type Boards } from '../interfaces';
// type 키워드는 alias 의미. 다른이름을정의해주는의미

// Record<K, V>
// 키는 K이고 값은 V인 객체
// Record<Status, Data[]>
// 키는 Status이고 값은 Data[]인 객체
// TEST : {todo: Data[], doing: Data[]}
export const useDragAndDrop = (initialState: Boards) => {
  const [isDragging, setIsDragging] = useState(false);
  const [boards, setBoards] = useState(initialState);

  const handleUpdateList = (
    id: number,
    to: { status: Status; position: number }
  ) => {
    for (const status of STATUSES) {
      const card = boards[status].find((item) => item.id === id);

      if (card === undefined) {
        // return 했거나 에러던졋거나, continue(안티패턴;) 했으면... else를 쓰지 않아도 된다
        continue;
      }

      const copied = { ...boards };
      // 원래 있던 자리에서 card를 삭제해서...
      copied[status] = copied[status].filter((item) => item !== card);

      // 새로운 자리에 넣어준다~
      const before = copied[to.status].slice(0, to.position); // 0 부터 toposition 앞까지짜르고
      const after = copied[to.status].slice(to.position); // to.position부터끝까지자른다
      copied[to.status] = [...before, card, ...after];

      setBoards(copied);

      // if (Array.isArray(listItems)) {
      //   setListItems((prev) => [
      //     card!,
      //     ...prev.filter((item) => item.id !== id),
      //   ]);
      // }
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
