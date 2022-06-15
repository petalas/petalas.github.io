import * as React from "react";
import { getAdjustedColor } from "../util/util";

const About = (props) => {

    const {className, ...rest} = props;
    const textColor = rest?.textColor ?? 'text-primary-300';
    const lighter = getAdjustedColor(textColor, -100);
    const darker = getAdjustedColor(textColor, 100);

    return (
        <section className={className}>
            <h2 className={`text-2xl ${lighter}`}>Hi, I'm Nick</h2>
            <h3 className={`text-xl ${textColor}`}>Software Engineer based in London, originally from Greece.</h3>
            <h4 className={`text-lg ${darker}`}>I enjoy learning constantly and strive for continuous self-improvement but also do my best to mentor others, I think knowledge sharing is great in general.</h4>
            <h4 className={`text-lg ${darker}`}>Typical tech / engineering enthusiast, always looking for new gadgets or projects to play with.</h4>
            <h4 className={`text-lg ${darker}`}>I'm also into photography, personal finance, crypto, travelling.</h4>
        </section>
    );
}

export default About;