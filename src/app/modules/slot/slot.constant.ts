import { format } from "date-fns";

// Function to generate time slots
export const generateTimeSlots = (
  startTime: string,
  endTime: string,
  duration: number
) => {
  const startMinutes =
    parseInt(startTime.split(":")[0]) * 60 + parseInt(startTime.split(":")[1]);
  const endMinutes =
    parseInt(endTime.split(":")[0]) * 60 + parseInt(endTime.split(":")[1]);
  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / duration;

  const slots = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStart = startMinutes + i * duration;
    const slotEnd = slotStart + duration;
    slots.push({
      startTime: format(new Date(0, 0, 0, 0, slotStart), "HH:mm"),
      endTime: format(new Date(0, 0, 0, 0, slotEnd), "HH:mm"),
    });
  }
  return slots;
};

// Example usage
// const startTime = "09:00";
// const endTime = "14:00";
// const duration = 60; // in minutes
// const slots = generateTimeSlots(startTime, endTime, duration);

// console.log(slots);
