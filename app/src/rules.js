import React from 'react';
import ReactDOM from 'react-dom';

const Rules = ({ chapter, rules }) => (
  <div className="scroll">
    <p> {chapter} </p>
    {rules.map((items, index) => (
      <p key={index}>
        {items.rule} {items.content[0]}
      </p>
    ))}
  </div>
);

export function renderRules(rules, chapter) {
  let element = <Rules chapter={chapter} rules={rules} />;
  ReactDOM.render(element, document.getElementById('output'));
}
