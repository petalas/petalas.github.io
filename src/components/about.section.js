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
            <h3 className={`text-xl ${textColor}`}>Senior Software Engineer based in London, originally from Greece.</h3>
            <h4 className={`text-lg ${darker}`}>I strive for constant self-improvement, enjoy lifelong learning and knowledge sharing.</h4>
            <h4 className={`text-lg ${darker}`}>Also into travelling all over the world, photography, fitness, finance.</h4>
            <h4 className={`text-lg ${darker}`}>Tech / engineering enthusiast, always looking for new gadgets or projects to play with.</h4>
        </section>
    );
}

export default About;