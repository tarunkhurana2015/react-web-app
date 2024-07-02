import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokoyo", "London"];
  const handleOnSelect = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSeletItem={handleOnSelect}
      ></ListGroup>
    </div>
  );
}

export default App;
