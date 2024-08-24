import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="tab-titles">
        <h1>Tabs Component with React</h1>
        <div>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="tab-content">
        <h4>{tabs[activeIndex].title}</h4>
        <div>{tabs[activeIndex].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
