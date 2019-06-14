import { ListBook } from "../../../aladinAPI";

export default {
  Query: {
    ListBook: async (_, args) => {
      const { type } = args;
      return ListBook(type);
    }
  }
};
