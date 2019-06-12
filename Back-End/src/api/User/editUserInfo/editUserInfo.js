export default {
  Mutation: {
    editUserInfo: async (_, args) => {
      const { username, pw } = args;
      try {
        // edit user info
      } catch (error) {
        console.log(error);
      }
    }
  }
};
