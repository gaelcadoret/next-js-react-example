import React from "react";

import TitleH1 from "../src/components/TitleHn";

/**
 * Statefull component
 * @returns {JSX.Element}
 * @constructor
 */
const About = () => {
    return (
        <>
            <TitleH1 title="About"/>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium atque consequatur
                    cum eaque esse itaque libero, magnam modi, perferendis placeat porro quasi quia quo repellendus sit
                    veniam vero!
                </p>
            </div>
        </>
    );
}

export default About;
