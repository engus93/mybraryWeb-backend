import { returnDetailBook } from "../../../aladinAPI";

export default {
  Query: {
    DetailBook: (_, args) => {
      const { itemId } = args;
      return returnDetailBook(itemId);
    }
  }
};
``;
