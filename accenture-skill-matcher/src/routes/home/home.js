import React from 'react';
import {List} from '../../components/list/list';
import {getAllFeds} from "../../data";
import Input from "../../components/input/input"

const TITLE = "Skill matcher";

const Home = () => {
    const allFeds = getAllFeds();
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };


    const searchedFeds = searchTerm ? allFeds.filter((fed) => [...fed.skills].some(skill => searchTerm.includes(skill.toLowerCase()))) : allFeds;

    return (
        <main>
            <div className="flex justify-center">
                <div className="w-full ml-8 mr-8 mt-8 mb-8">
                    <div className="bg-white shadow-md rounded border w-full px-8 pt-6 pb-8">
                        <h1 className="text-3xl mb-6 font-bold">
                            {TITLE}
                        </h1>

                        <form className="mb-4">
                            <div className="bg-gray-100 rounded p-4 pb-8">
                            <Input
                                id="search"
                                value={searchTerm}
                                type={'search'}
                                placeholder={'Enter the skill you are trying to match e.g. CSS, React'}
                                onInputChange={handleSearch}
                            >
                                <strong>Search for a matching resource:</strong>
                            </Input>
                            </div>
                            <List list={searchedFeds}/>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
