import { returnSearchBook } from "./../../../aladinAPI";

export default {
  Query: {
    SearchBook: (_, args) => {
      const { searching } = args;
      return returnSearchBook(searching);
    }
  },
  Mutation: {
    SearchBookPaging: async (_, args) => {
      const { page, searching } = args;
      try {
        return returnSearchBook(searching, page);
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }
};
