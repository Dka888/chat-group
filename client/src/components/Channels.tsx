import { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import { Profile } from "./Profile";
import classNames from "classnames";

export const Channels = () => {
    const { handleChangeChannel, handleModalChannel, query, setQuery, searchingChannel} = useChatContext();

    const [openSearch, setOpenSearch] = useState(false);

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch);
    }

    return (
        <div className='col-start-1 col-end-2 row-start-1 row-end-5 h-[100vh] md:col-start-1 md:col-end-3 bg-left text-white py-3 relative'>
            <div className='flex justify-between flex-col md:flex-row' onClick={handleModalChannel}>
                <h2 className='mx-auto md:mx-6 md:font-bold'>
                    Channels
                </h2>
                <div
                    className="bg-input m-auto md:mx-3 rounded md:p-0.5 md:cursor-pointer"
                    onClick={handleModalChannel}
                >
                    <img src="/add.svg" alt="add" className="hidden md:block" />
                </div>
            </div>
            <div className='my-5 md:my-9 mx-auto text-center relative'>
                <input
                    className={classNames({'w-2/5 md:w-5/6 mx-1': !openSearch, 'w-80 md:w-5/6 ml-5 md:ml-auto pl-10': openSearch}, 'rounded h-8 bg-input mx-auto md:pl-10 text-sx md:text-base')}
                    onChange={(e)=> setQuery(e.target.value)}
                    value={query}
                />
                <img src="/search.svg" className="absolute top-1 left-7 md:left-8 " onClick={handleOpenSearch}/>

            </div>
            <div className='md:my-7 mx-auto text-center'>
                <ul>
                    {searchingChannel.map(channel => {
                        const firstLetter = channel.title[0];
                        const secondWord = channel.title.split(' ')[1];
                        const secondLetter = secondWord !== undefined ? secondWord[0] : '';
                        return (

                            <li className="flex my-1.5 overflow-hidden" key={channel._id} onClick={() => handleChangeChannel(channel)}>
                                <div className="mx-auto lg:mx-3 w-12 h-12 md:w-10 md:h-10 bg-input rounded flex justify-center items-center">{firstLetter}{!!secondLetter && secondLetter}</div>
                                <p className="hidden lg:block text-start my-auto">{channel.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
           <Profile />
        </div>

    )
}