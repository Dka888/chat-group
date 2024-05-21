import { useChatContext } from "../context/ChatContext";
import { SendingText } from "./SendingText";

export const Messages = () => {
    const { currentChannel, messages, users} = useChatContext();

    function getUserById (id: string) {
      return users.find(user => user._id === id) ?? null;
    }

    const channelMessages = currentChannel ? messages.filter(message => message.channelId === currentChannel._id) : [];
    const messagesWithUsers = channelMessages.map(message => ({
        ...message,
        userId: getUserById(message.userId),
      }));

      const heighMess = 60;

    const lengthOfMessages = channelMessages.length;
    const overflow = lengthOfMessages > 7
      ? lengthOfMessages * heighMess - (heighMess * 7)
      : 0;

    return (
        <div className='col-start-2 col-end-5 md:col-start-3 md:col-end-12 text-white py-2 z-1'>
            <header className='h-9 w-full relative z-1'>
                <h1 className="text-lg md:text-2xl font-bold m-auto text-center text-white uppercase">
                    {currentChannel?.title}
                </h1>
            </header>
            
            <div className='m-2 md:m-12 relative h-[70vh] overflow-hidden '>            
                <ul
                    className="absolute inset-x-0 top-0"
                    style={{ transform: `translateY(-${overflow}px)`}}
                >
                    {messagesWithUsers.map(message => 
                        <li key={message._id} className={`flex gap-3 md:gap-5 m-1.5 my-3`} >
                            <div className="w-12 h-12 border rounded mr-2 md:mr-5">
                                <img src={message.userId?.avatar} alt={message.userId?.lastName}/>
                            </div>
                            <div className="w-full">
                                <div className="flex text-xs md:text-base justify-between">
                                    <span className="mr-3 md:mr-9 italic">{message.userId?.firstName} {message.userId?.lastName}</span>
                                    <span className="font-normal">{message.created}</span>
                                </div>
                                <p className="font-semibold">{message.content}</p> 
                            </div>
                </li>)}
                </ul>
            </div>
            <SendingText />
        </div>
    )
}