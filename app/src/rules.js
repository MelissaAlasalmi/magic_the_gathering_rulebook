import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Rules = ({ chapter, rules }) => (
  <div>
    <h4> Subchapter {chapter} </h4>
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
