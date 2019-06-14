import { returnSearchBook } from "./../../../aladinAPI";

export default {
  Query: {
    SearchBook: (_, args) => {
      const { searching } = args;
      return returnSearchBook(searching);
    }
  }
};
