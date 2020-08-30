// lecture4 useState With Object
import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // console.log("name", name);
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        // onChange={(e) => setName({ firstName: e.target.value })} isse dikkat aaayegi u can check by commmenting  neeche wala line
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        // (...name) copy every property in name object and just overwrite the first name field with a different field
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your First Name is - {name.firstName} </h2>
      <h2>Your First Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounter3;
