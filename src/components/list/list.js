import React from "react";
import Item from './Item'

const List = (props) => (
    <ul className="list-none pl-3 mt-6 grid grid-flow-row-dense grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {props.list.map((item) => (
            <Item key={item.acid} item={item}/>
        ))}
    </ul>
);
export {List};

