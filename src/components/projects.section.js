import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";

const Projects = (props) => {
    return (
        <section {...props} className="grid grid-cols-2 gap-2">

            <section className="project-tile">
                <a href="https://github.com/petalas/btc-risk-metric" target="_blank" rel="noreferrer" className="text-lg hover:text-primary-500">BTC Risk Metric</a>
                <StaticImage
                    className="w-full"
                    loading="eager"
                    src="../images/btc-risk.png"
                    quality={95}
                    alt="Profile Picture"
                />
                <p className="mt-2">Bitcoin risk oscillator, combining multiple metrics.</p>
                <p>Metrics involved so far: </p>
                <ul className="list-disc list-inside">
                    <li>EMA 5 Daily / EMA 50 Weekly</li>
                    <li>Mayer Multiple</li>
                    <li>Sharpe Ratio</li>
                    <li>Price / EMA 400</li>
                    <li>RSI 20</li>
                    <li>Puell Multiple</li>
                </ul>
                <p>It also attempts to account for the logarithmic nature of BTC growth and diminishing returns.</p>
                <p>Available as an indicator on TradingView.</p>
            </section>

            <section className="project-tile">
                <a href="https://artgen.xyz/" target="_blank" rel="noreferrer" className="text-lg hover:text-primary-500">artgen.xyz</a>
                <StaticImage
                    className="w-full"
                    loading="eager"
                    src="../images/artgen.png"
                    quality={95}
                    alt="Profile Picture"
                />
                <p className="mt-2">A heuristic vector art generator.</p>
                <p>It generates 'abstract art' pieces using genetic algorithms to 'evolve' a set of semi-transparent polygons, attempting to recreate a target image.</p>
            </section>

        </section>
    );
}

export default Projects;