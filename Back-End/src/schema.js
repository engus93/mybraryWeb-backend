import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

// 실행되는 파일이 있는 경로에서 시작
const allTypes = fileLoader(path.join(__dirname, "./api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "./api/**/*.js"));

// 모든 파일 모아서 병합
const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;
