import joi from "joi";

export const createOrderSchema = {body: joi .object().keys({
  userId:joi.string().hex().length(24).required(),
  timeSlot: joi.string().required(),
  date: joi.date().iso().required()
    })
};

export const cancelOrderSchema = {
      bookingId:joi.string().hex().length(24).required(),
}
export const extendBookingSchema = joi.object({
  newTimeSlot: joi.string().required(),
});