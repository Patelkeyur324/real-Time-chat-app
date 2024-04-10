import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    messages: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default:[]
        }
    ]
},
//createdAt, updatedAt => member Creatded time, and updated time in database
{timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;    