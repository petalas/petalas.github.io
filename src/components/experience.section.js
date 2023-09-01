import * as React from "react";
import Item from "../components/item";
import { employmentHistory } from "../data/positions";

const Experience = (props) => {
  return (
    <section {...props}>
      {employmentHistory.map((i, idx) => (
        <section key={idx} className="bg-neutral-800 border-primary-800 border-2 rounded-xl">
          <Item {...i}></Item>
        </section>
      ))}
    </section>
  );
};

export default Experience;
