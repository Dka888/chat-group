export interface Message {
    _id: string,
    content: string,
    userId: string,
    channelId: string | null
}