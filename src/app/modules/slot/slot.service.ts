import { generateTimeSlots } from "./slot.constant";
import { TSlot } from "./slot.interface";
import Slot from "./slot.model";

const createSlotIntoDB = async (payload: TSlot) => {
  const slot = await Slot.create(payload);

  const { service, date, startTime, endTime } = payload;

  // Example: Retrieve the service duration from the database or assume it
  const serviceDuration = 60; // Assume 60 minutes for this example

  // Generate slot time intervals
  const slotIntervals = generateTimeSlots(startTime, endTime, serviceDuration);

  // Save each slot to the database
  const createdSlots = [];
  for (const interval of slotIntervals) {
    const slot = new Slot({
      service,
      date,
      startTime: interval.startTime,
      endTime: interval.endTime,
      isBooked: "available",
    });

    const savedSlot = await slot.save();
    createdSlots.push(savedSlot);
  }

  return slot;
};

export const SlotService = {
  createSlotIntoDB,
};
