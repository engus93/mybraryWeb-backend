// Import Modules
import axios from "axios";

// 알라딘 API 기본 설정
const aladinAxios = axios.create({
  baseURL: process.env.ALADIN_BASE_URL,
  timeout: 3000
});

// ListBook API 상세 설정
export const returnListBook = (type, CategoryId = 0, page = 1) =>
  aladinAxios({
    url: process.env.ALADIN_LIST,
    method: "post",
    params: {
      ttbkey: process.env.ALADIN_API_KEY,
      QueryType: type,
      Cover: "Big",
      start: page,
      CategoryId,
      MaxResults: 10,
      SearchTarget: "Book",
      output: "js",
      Version: 20131101
    }
  })
    .then(({ data: { item } }) => item)
    .catch(err => console.log(err));

// MainBookList
export const returnMainListBook = async () => {
  let mainListBook = [];

  mainListBook.push(...(await returnListBook("Bestseller")));
  mainListBook.push(...(await returnListBook("ItemNewSpecial")));
  mainListBook.push(...(await returnListBook("ItemEditorChoice", 53476)));
  mainListBook.push(...(await returnListBook("ItemEditorChoice", 1196)));
  mainListBook.push(...(await returnListBook("ItemEditorChoice", 656)));
  mainListBook.push(...(await returnListBook("ItemEditorChoice", 336)));

  return mainListBook;
};

// DetailBook API 상세 설정
export const returnDetailBook = itemId =>
  aladinAxios({
    url: process.env.ALADIN_DETAIL,
    method: "get",
    params: {
      ttbkey: process.env.ALADIN_API_KEY,
      ItemId: itemId,
      Cover: "Big",
      itemIdType: "ItemId",
      output: "js",
      Version: 20131101,
      OptResult: "authors,fulldescription,publisherFulldescription,Toc,Story"
    }
  })
    .then(({ data: { item } }) => item[0])
    .catch(err => console.log(err));

// SearchBook API 상세 설정
export const returnSearchBook = (searhing, page = 1) =>
  aladinAxios({
    url: process.env.ALADIN_SEARCH,
    method: "get",
    params: {
      ttbkey: process.env.ALADIN_API_KEY,
      Query: searhing,
      Cover: "Big",
      start: page,
      QueryType: "Title",
      MaxResults: 10,
      SearchTarget: "Book",
      output: "js",
      Version: 20131101
    }
  })
    .then(({ data: { item } }) => item)
    .catch(err => console.log(err));
