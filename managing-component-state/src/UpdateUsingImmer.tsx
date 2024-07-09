import { useState } from "react";
import produce from "immer";

function UpdateUsingImmer() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
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

export default UpdateUsingImmer;
