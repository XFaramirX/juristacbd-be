import { User, Product } from "../../db/models";

const resolvers = {
  products: (user: User) => {
    return Product.findAll({
      include: [
        {
          model: User,
          where: { id: user.id }
        }
      ],
      order: [["title", "ASC"]]
    });
  }
};

export default resolvers;
