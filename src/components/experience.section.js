import * as React from "react";
import Item from "../components/item";
import {employmentHistory} from "../data/positions";

const Experience = (props) => {
    return (
        <section {...props}>
            {employmentHistory.map(i =>
                <section class="bg-secondary-600 border-secondary-400 border-2 rounded-xl">
                    <Item {...i}></Item>
                </section>
            )}
        </section>
    );
}

export default Experience;