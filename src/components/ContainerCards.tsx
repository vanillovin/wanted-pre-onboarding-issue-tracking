import { Data, Status } from '../interfaces';

interface Props {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handlers: {
    handleDragEnd: () => void;
    handleDragStart: (item: Data) => void;
    handleDragEnter: (position: number) => void;
    handleDrop: (status: Status) => void;
  };
}

export const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handlers,
}: Props) => {
  return (
    <div
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDrop={(e) => {
        e.preventDefault();
        handlers.handleDrop(status);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <p>{status}</p>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-violet-500 rounded-sm m-2 p-2"
          draggable
          onDragStart={() => handlers.handleDragStart(item)}
          onDragEnter={() => handlers.handleDragEnter(index)}
          onDragEnd={handlers.handleDragEnd}
        >
          <p className="bg-transparent font-semibold text-white">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};
