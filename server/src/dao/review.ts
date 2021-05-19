import Reivew from "../models/review";

export const findReivews = async () => {
  const reviews = await Reivew.findAll();
  return reviews;
};

export const findReivewByQuery = async (id: number) => {
  const reviews = await Reivew.findAll({
    include: [
      {
        model: Reivew as any,
        where: { id },
        attributes: [],
      },
    ],
  });
  return reviews;
};

export const findReivewByID = async (id: number) => {
  const review = await Reivew.findByPk(id);
  return review;
};
