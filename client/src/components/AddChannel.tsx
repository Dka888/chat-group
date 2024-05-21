import { useState, useCallback } from "react";

import { useChatContext } from "../context/ChatContext";
import { createChannel } from "../api/api";

export const AddChannel = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] =  useState('');

    const {handleModalChannel} = useChatContext();

    const submitFormChannel = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const upperTitle = title.toUpperCase();
        const channel = {title: upperTitle, description};
        createChannel(channel);
        setTimeout(() => window.location.href='/', 3000);
    }, [description, title]);

    return (
        <div className="w-full row-start-2 row-end-3 col-start-2 col-end-5 md:col-start-5 md:col-end-10 bg-black -translate-x-4 md:-translate-y-6">
        <form 
            className="flex flex-col gap-2 m-1 md:mx-2 "
            onSubmit={submitFormChannel}
        >
             <div className="flex justify-end"
                onClick={handleModalChannel}
            >
                <img src="/close.svg" alt="close" className="w-4 h-4 bg-input cursor-pointer"/>
            </div>
            <h4 className="uppercase font-semibold">Create channel</h4>
            <input
                placeholder='Title'
                className="rounded h-10 p-4 bg-input uppercase"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            ></input>
            <textarea
                placeholder="Description"
                className="rounded h-20 px-4 py-1 bg-input"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <div className="grid justify-center">
                <button 
                    className="bg-blue-400 rounded p-1 w-16 hover:bg-blue-500 font-semibold"
                >
                    Add
                </button>
            </div>

        </form>
    </div>
    )
}