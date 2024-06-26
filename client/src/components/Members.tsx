import { useChatContext } from "../context/ChatContext";
import { Profile } from "./Profile";

export const Members = () => {

    const { handleOnChannel, currentChannel, users } = useChatContext();

    return (
        <div className='col-start-1 col-end-2 row-start-1 row-end-4 h-full md:col-start-1 md:col-end-3 bg-left text-white py-3 relative'>
            <div className='flex' onClick={handleOnChannel}>
                <img src="/arrow_back.svg" className='ml-6 cursor-pointer' alt="arrow-back" />
                <h2 className='hidden lg:block mx-3 font-bold'>
                    All channels
                </h2>
            </div>
            <div className='hidden lg:block md:my-9 mx-6 relative'>
                <h3 className="font-semibold uppercase">{currentChannel?.title}</h3>
                <p className="font-sm">{currentChannel?.description}</p>
            </div>
            <h3 className="my-4 mx-3 text-xs md:text-lg font-semibold uppercase md:mx-6">Members</h3>
            <div className='md:my-7 mx-auto text-center'>
                <ul>
                    {users.map(user => {
                        const firstLetter = user.firstName[0];
                        const secondLetter = user.lastName[0] ?? '';
                        return (
                            <li className="flex my-1" key={user._id}>
                                <div className="mx-5 w-10 h-10 bg-input rounded flex justify-center items-center">
                                    {firstLetter}{secondLetter}
                                </div>
                                <p className="hidden lg:block text-center my-auto">
                                    {user.firstName} {user.lastName}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Profile />
        </div>
    )
}