import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { Channel } from "../types/Channel";
import { User } from "../types/User";
import { getChannels, getMessages, getUsers } from "../api/api";
import { Message } from "../types/Message";

interface ChatContextInterface {
    onChannel: boolean,
    handleOnChannel: () => void,
    handleChangeChannel: (channel: Channel) => void,
    currentChannel: Channel | null,
    users: User[] | [],
    messages: Message[] | [],
    channels: Channel[] | []
}

export const ChatContext = createContext<ChatContextInterface>({
    onChannel: false,
    handleOnChannel: () => { },
    handleChangeChannel: () => { },
    currentChannel: null,
    users: [],
    messages: [],
    channels: []
});

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
    const [onChannel, setOnChannel] = useState(false);
    const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [channels, setChannels] = useState<Channel[]>([]);
    
    useEffect(() => {
        const loadingData = async () => {
            const data = await getChannels();
            setChannels(data);
        };
        loadingData();
    }, []);


    useEffect(() => {
        const loadingData = async () => {
            const response = await getMessages();
            setMessages(response)
        };
        loadingData();
    }, []);

    useEffect(() => {
        const loadingData = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        loadingData();
    }, []);

    const handleChangeChannel = (channel: Channel) => {
        handleOnChannel();
        setCurrentChannel(channel);
    }

    const handleOnChannel = () => {
        setOnChannel(!onChannel)
    }
    return (
        <ChatContext.Provider value={{
            onChannel,
            handleOnChannel,
            handleChangeChannel,
            currentChannel,
            users,
            messages,
            channels
        }}>
            {children}
        </ChatContext.Provider>)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContext(ChatContext);