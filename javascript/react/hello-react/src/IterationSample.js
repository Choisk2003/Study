import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    setNames([...names, { id: nextId, text: inputText }]);
    setNextId(nextId + 1);
    setInputText("");
  };

  const onRemove = id => {
    setNames(names.filter(name => name.id !== id));
  };

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
