import { useState, useRef } from 'react';

interface IssueBoardProps {
  name: string;
}

function IssueBoard({ name }: IssueBoardProps) {
  const dragItem = useRef<number | null>(0);
  const dragOverItem = useRef<number | null>(0);

  const [list, setList] = useState([]);

  const handleDragStart = (e: React.DragEvent<HTMLElement>, position: any) => {
    dragItem.current = position;
    // console.log('dragStart', e.target.innerHTML);
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLElement>,
    position: number
  ) => {
    dragOverItem.current = position;
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    console.log('drop event :', e);
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current as number];
    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <div>
      {/* To-Do In-Progress Completed */}
      <ul className="border">
        {list?.map((item, index) => (
          <li
            className="bg-blue-200 m-5 text-center text-lg"
            // onDrop={(e) => dragTest(e, index)}
            // onDragLeave={(e) => dragTest(e, index)}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={(e) => handleDrop(e)}
            key={index}
            draggable
          >
            {/* <h3>{item.title}</h3>
            <h4>{item.content}</h4>
            <h5>{item.date}</h5> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueBoard;
