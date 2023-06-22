import React from "react";

type TimelineElementProps = {
  name: string;
  width: number;
  color: string;
  id: string;
  handleMousedown : (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseUp : (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function TimelineElement({ name, width, color, id, handleMousedown, handleMouseUp }: TimelineElementProps) {
  return (
    // [css - Adding a className using variables (HTML, ReactJS) - Stack Overflow](https://stackoverflow.com/questions/61527695/adding-a-classname-using-variables-html-reactjs)
    <div
      style={{ width: `${width}%`, backgroundColor: color }}
      className={`h-full rounded-md duration-150 shadow-md flex justify-center items-center cursor-pointer`}
      id={id}
      draggable="true"
      onMouseDown={handleMousedown}
      onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
    >
      <p className="text-white font-bold text-xl">{name}</p>
    </div>
  );
}

export default TimelineElement;
