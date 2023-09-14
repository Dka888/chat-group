import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    channelId: {type: mongoose.Schema.Types.ObjectId, ref: "Channel", required: true },
    content: {type: String, require: true}
});

export default mongoose.model("Message", messageSchema);