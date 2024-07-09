import { useState } from "react";

function UpdateArayOfObjects() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <div onClick={handleClick}>
        {bugs.map((bug) => bug.title + "- " + bug.fixed)}
        <button>Update Bug</button>
      </div>
    </>
  );
}

export default UpdateArayOfObjects;
