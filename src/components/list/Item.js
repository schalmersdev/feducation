import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <li className="max-w-sm rounded overflow-hidden">

            <img src={props.item.icon} className="w-36 h-36 rounded-full object-cover bg-slate-100 mx-auto" alt={props.item.label}/>
            <div className="px-6 py-4">
                    <Link
                        className="font-bold text-xl mb-2"
                        to={`/resources/${props.item.label}`}
                        key={props.item.label}
                    >
                {props.item.label}</Link>
                <p className="text-gray-700 text-base">
                    {props.item.introduction}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.item.skills.map((skill) => (
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{skill}</span>
                ))}
            </div>

        </li>
    )
};
export default Item;
