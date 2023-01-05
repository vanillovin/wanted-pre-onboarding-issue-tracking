import { Data } from '../interfaces';

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export const CardItem = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`);
    console.log(e.dataTransfer);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className="bg-violet-500 rounded-sm m-2 p-2"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p className="bg-transparent font-semibold text-white">{data.content}</p>
    </div>
  );
};
