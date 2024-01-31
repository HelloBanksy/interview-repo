import { useState } from "react";
import styled from "styled-components";
import "./App.css";

const items = [
  {
    title: "Test 1",
    id: "text1",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Test 2",
    id: "text2",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Test 3",
    id: "text3",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

function App() {
  const [activeItem, setActiveItem] = useState<undefined | string>();

  return (
    <Wrap>
      {items.map((item) => {
        return (
          <ItemWrap key={item.id}>
            <ItemTitle
              onClick={() =>
                setActiveItem(activeItem === item.id ? undefined : item.id)
              }
            >
              {item.title}
            </ItemTitle>
            {activeItem === item.id && (
              <ItemContent>{item.content}</ItemContent>
            )}
          </ItemWrap>
        );
      })}
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  width: 400px;
`;

const ItemTitle = styled.div`
  display: flex;
  background: gray;
  cursor: pointer;
`;

const ItemContent = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;
