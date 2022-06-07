import * as React from "react";

const About = (props) => {
    return (
        <section {...props} >
            <h2 className="text-2xl text-primary-200">Hi, I'm Nick.</h2>
            <h3 className="text-xl text-primary-300">Software Engineer based in London, originally from Greece.</h3>
            <h4 className="text-lg text-primary-400">I enjoy learning constantly and strive for continuous self-improvement but also do my best to mentor others, I think knowledge sharing is great in general.</h4>
            <h4 className="text-lg text-primary-400">Typical tech / engineering enthusiast, always looking for new gadgets or projects to play with.</h4>
            <h4 className="text-lg text-primary-400">I'm also into photography, personal finance, crypto, travelling.</h4>
        </section>
    );
}

export default About;