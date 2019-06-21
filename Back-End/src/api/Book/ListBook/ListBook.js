import { returnListBook } from "../../../aladinAPI";

// Type List

// ItemNewAll : 신간 전체 리스트 안씀
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트 (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// CategotyId: 53476=요리
// CategotyId: 1196=여행
// CategotyId: 656=인문학
// CategotyId: 336=자기계발
// Bestseller : 베스트셀러

export default {
  Query: {
    ListBook: async (_, args) => {
      const { type, categoryId } = args;
      try {
        return returnListBook(type, categoryId);
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }
};
