import { createPortal } from "react-dom";
import React, { FC, useState } from "react";

function Test() {
  const [Title, changeTitle] = useTitle();
  return (
    <div onClick={() => changeTitle("new title")}>
      123
      {Title}
    </div>
  );
}

function TitleComponent({ title }: { title: string }) {
  return <div>{title}</div>;
}

function useTitle() {
  const [title, changeTitle] = useState("default title");

  const Element = React.createElement(TitleComponent, { title });
  return [Element, changeTitle];
}

export default Test;
