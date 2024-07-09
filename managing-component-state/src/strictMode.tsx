// Strict Mode - In the striuct mode the the first pass is the component inspection and 2nd time is the rendering.
let count = 0;
const Message = () => {
  count++;
  console.log(count);
  return <div>Message: {count}</div>;
};

export default Message;
