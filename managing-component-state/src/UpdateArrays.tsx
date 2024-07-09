import { useState } from "react";

function UpdateArays() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add new item in the array
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "cheerful" ? "cheering" : tag)));
  };

  return (
    <>
      <div onClick={handleClick}>
        {tags}
        <button>Add Tags</button>
      </div>
    </>
  );
}

export default UpdateArays;
