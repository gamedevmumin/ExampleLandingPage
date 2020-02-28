import React from "react";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";

export default function Content() {
  const contentItems = [
    {
      icon: (
        <FaAngular className="content__item__icon" style={{ color: "red" }} />
      ),
      title: "Angular",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      icon: <FaReact className="content__item__icon" />,
      title: "React",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      icon: (
        <FaVuejs className="content__item__icon" style={{ color: "#194D33" }} />
      ),
      title: "Vue",
      description: "Lorem ipsum dolor sit amet"
    }
  ];
  const contentItemsHTML = contentItems.map(item => {
    return (
      <div className="content__item">
        {item.icon}
        <h1 className="content__item__title">{item.title}</h1>
        <p className="content__item__description">{item.description}</p>
      </div>
    );
  });
  return <div className="content"> {contentItemsHTML} </div>;
}
