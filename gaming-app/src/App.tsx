import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
