import Tabs from "./Tabs";

const App = () => {
  const tabData = [
    {
      name: "Tab 1",
      title: "Content 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis consequuntur quibusdam est iusto animi soluta sapiente amet, alias, eos tempora voluptates vero tenetur qui voluptate, quaerat porro nostrum reiciendis.",
    },
    {
      name: "Tab 2",
      title: "Content 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis consequuntur quibusdam est iusto animi soluta sapiente amet, alias, eos tempora voluptates vero tenetur qui voluptate, quaerat porro nostrum reiciendis.",
    },
    {
      name: "Tab 3",
      title: "Content 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis consequuntur quibusdam est iusto animi soluta sapiente amet, alias, eos tempora voluptates vero tenetur qui voluptate, quaerat porro nostrum reiciendis.",
    },
    {
      name: "Tab 4",
      title: "Content 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis consequuntur quibusdam est iusto animi soluta sapiente amet, alias, eos tempora voluptates vero tenetur qui voluptate, quaerat porro nostrum reiciendis.",
    },
  ];

  return (
    <div className="app">
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
