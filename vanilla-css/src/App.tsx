import ListGroup1 from "./components/ListGroupCSSVanilla/ListGroup1";
import ListGroup2 from "./components/ListGroupCSSModule/ListGroup";
import ListGroup3 from "./components/ListGroupCssInJS/ListGropup3";
import ListGroup4 from "./components/ListGroupInlineStyling/ListGroup4";
import Icons from "./components/Icons/Icons";

function App() {
  let items = ["New York", "San Francisco", "Tokoyo", "London"];
  const handleOnSelect = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup1
        items={items}
        heading="Cities"
        onSeletItem={handleOnSelect}
      ></ListGroup1>
      <ListGroup2
        items={items}
        heading="Cities"
        onSeletItem={handleOnSelect}
      ></ListGroup2>
      <ListGroup3
        items={items}
        heading="Cities"
        onSeletItem={handleOnSelect}
      ></ListGroup3>
      <ListGroup4
        items={items}
        heading="Cities"
        onSeletItem={handleOnSelect}
      ></ListGroup4>
      <Icons></Icons>
    </div>
  );
}

export default App;
