import React from "react";
import Input from "../input/input"

const Search = (props: React.ComponentProps<any>) => (
    <>
        <Input
            id="search"
            value={props.searchTerm}
            onInputChange={props.handleSearch}
        >
            <strong>Search:</strong>
        </Input>
        <p>
            Searching for <strong>{props.searchTerm}</strong>.
        </p>
    </>
);
export {Search};
