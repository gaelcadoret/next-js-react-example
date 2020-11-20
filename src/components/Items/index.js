import React from "react";
import Item from "./item";

/**
 * Stateless component !
 * @param {Object} data
 * @returns {JSX.Element}
 */
const items = ({data}) => (
    <ul>
        {
            data && Object.keys(data).map(
                (item, idx) => <Item
                    key={`menuItem-${idx}`}
                    date={item}
                    bitCoinValue={data[item]}
                />
            )
        }
    </ul>
);

export default items;
