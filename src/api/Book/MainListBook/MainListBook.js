import { returnMainListBook } from "../../../aladinAPI";

export default {
  Query: {
    MainListBook: async () => {
      return returnMainListBook();
    }
  }
};
