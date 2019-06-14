import { returnListBook } from "../../../aladinAPI";

export default {
  Query: {
    ListBook: async (_, args) => {
      const { type } = args;
      return returnListBook(type);
    }
  }
};
