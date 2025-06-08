import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  room: { type: String, required: true },      // JobApplicationID
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = mongoose.model('Message', messageSchema);
