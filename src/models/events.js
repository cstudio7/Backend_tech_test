import mongoose from 'mongoose';

const events = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    category: { type: String, trim: true, required: true },
    date: { type: String, trim: true, required: true },
    isVirtual: { type: Boolean, trim: true, required: true },
    address: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

const Events = mongoose.model('Events', events);
export default Events;
