import * as React from "react";

const About = (props) => {
    return (
        <section {...props} >
            <h2 className="text-2xl text-primary-200">Hi, I'm Nick.</h2>
            <h3 className="text-xl text-primary-300">Senior Software Engineer, based in London, originally from Greece.</h3>
            <h4 className="text-lg text-primary-400">My interests include but are not limited to: science, technology, cryptocurrencies, personal finance, photography.</h4>
        </section>
    );
}

export default About;