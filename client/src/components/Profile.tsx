import { useChatContext } from "../context/ChatContext"

export const Profile = () => {
    const { loggedUser, handleModalProfile, handleModalLogin } = useChatContext();

    if (loggedUser) {
        const { avatar, firstName, lastName } = loggedUser;
        return (
            <div className='flex w-full h-14 py-2 my-auto text-center border border-black bg-black absolute bottom-0'>
                <div className="w-10 h-10 ml-2 mb-3"><img src={avatar}/></div>
                <div className="text-white m-2 ml-3">{firstName} {lastName}</div>
                <div
                    className="w-5 h-5 absolute right-5 bottom-5 cursor-pointer"
                    onClick={handleModalProfile}
                >
                    <img src='/arrow_down.svg' alt="arrow_down" />
                </div>
            </div>
        );
    }

    return (
        <div className='w-full h-14 py-2 my-auto text-center border border-black bg-black absolute bottom-0'>
            <button
                onClick={handleModalLogin}
            >
                Profile
            </button>
            <div
                className="w-5 h-5 absolute right-5 bottom-5 cursor-pointer"
                onClick={handleModalProfile}
            >
                <img src='/arrow_down.svg' alt="arrow_down"/>
            </div>
        </div>
    )
}