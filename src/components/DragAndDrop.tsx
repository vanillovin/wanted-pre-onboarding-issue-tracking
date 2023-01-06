import { useRef } from 'react';
import { data } from '../assets';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { STATUSES, type Data, type Status } from '../interfaces';
import { ContainerCards } from './ContainerCards';

export const DragAndDrop = () => {
  const { isDragging, boards, handleDragging, handleUpdateList } =
    useDragAndDrop(data);

  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  const handleDragEnd = () => handleDragging(false);

  const handleDragStart = (item: Data) => {
    dragItem.current = item.id;
    handleDragging(true);
  };

  const handleDragEnter = (position: number) => {
    dragOverItem.current = position;
  };

  const handleDrop = (status: Status) => {
    handleUpdateList(dragItem.current, {
      status,
      position: dragOverItem.current,
    });
    handleDragging(false);
  };

  return (
    <div className="grid">
      {STATUSES.map((status) => (
        <ContainerCards
          key={status}
          items={boards[status]}
          status={status}
          isDragging={isDragging}
          handlers={{
            handleDragEnd,
            handleDragStart,
            handleDragEnter,
            handleDrop,
          }}
        />
      ))}
    </div>
  );
};
