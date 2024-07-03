import React, { useState } from "react";
import "./ListGroup1.css";

interface Props {
  items: string[];
  heading: string;
  onSeletItem: (item: string) => void;
}

const ListGroup1 = ({ items, heading, onSeletItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group container">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSeletItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup1;
