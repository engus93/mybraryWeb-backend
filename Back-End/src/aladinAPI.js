// Import Modules
import axios from "axios";

// 알라딘 API 기본 설정
const aladinAxios = axios.create({
  baseURL: process.env.ALADIN_BASE_URL,
  timeout: 3000
});

// BestList API 상세 설정
export const ListBook = type =>
  aladinAxios({
    url: process.env.ALADIN_LIST,
    method: "get",
    params: {
      ttbkey: process.env.ALADIN_API_KEY,
      QueryType: type,
      Cover: "Big",
      start: 1,
      MaxResults: 10,
      SearchTarget: "Book",
      output: "js",
      Version: 20131101
    }
  })
    .then(({ data: { item } }) => item)
    .catch(err => console.log(err));
