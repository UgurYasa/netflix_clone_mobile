import { createSlice } from "@reduxjs/toolkit";
import { FILMS } from "../constants/films";

const initialState = {
  films: FILMS.entries, //Bütün filmleri al
  categories: [], //Kategorileri al
  selectCategory: null, //Seçilen kategoriyi al
  filteredFilms: [], //Filtrelenmiş filmleri al
  selectFilm: null, //Seçilen filmi al
  sortOption: "", //Sıralama seçeneğini al
  search: "", //Arama yaparken alınan veriyi al
  options: [
    { label: "Yeniye Göre Sırala", value: "1" },
    { label: "Eskiye Göre Sırala", value: "2" },
    { label: "Puana Göre Sırala", value: "3" },
    { label: "Rastgele Sırala", value: "4" },
  ], //Sıralama seçeneklerini al
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    //Filmlerde bulunan kategorileri çıkar
    extractCategories: (state) => {
      if (!state.films || !Array.isArray(state.films)) {
        return; // terminate if there is no films array
      }
      state.films.forEach((film) => {
        // check if the movie category is available
        const existingCategory = state.categories.find(
          (category) => category.categoriesName === film.programType
        );
        if (!existingCategory) {
          // If there is no category, create a new category
          state.categories.push({
            categoriesName: film.programType,
            categoriesImage: film.images["Poster Art"].url,
          });
        }
      });
    },
    // dropdown üzerinden gelen veriyi setle
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    // Arama yaparken gelen veriyi setle
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    // Seçilen filmi tut
    setSelectFilm: (state, action) => {
      state.selectFilm = state.films.find(
        (film) =>
          film.title.replaceAll(" ", "_").toLowerCase() === action.payload
      );
    },
    // Seçilen kategoriyi tut
    setSelectCategory: (state, action) => {
      state.selectCategory = action.payload;
    },
    // Kategoriye göre filtrelenmiş filmleri listele
    setFilmsFilteredByCategories: (state, action) => {
      state.filteredFilms = state.films.filter(
        (film) => film.programType === action.payload
      );
    },
    // Arama yaparken filtrelenmiş filmleri listele
    setFilmsFilteredBySearch: (state) => {
      state.filteredFilms = state.films.filter((film) =>
        film.title
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(state.search.replaceAll(" ", "").toLowerCase())
      );
    },
    // Filmleri random sırala
    createRandomList: (state) => {
      state.filteredFilms = state.films.sort(() => Math.random() - 0.5);
    },
    // Filmleri yeniye göre sırala
    createSortByNew: (state) => {
      state.filteredFilms = state.films.sort(
        (a, b) => b.releaseYear - a.releaseYear
      );
    },
    // Filmleri eskiye göre sırala
    createSortByOld: (state) => {
      state.filteredFilms = state.films.sort(
        (a, b) => a.releaseYear - b.releaseYear
      );
    },
  },
});

export const {
  extractCategories,
  setSortOption,
  setSearch,
  setSelectFilm,
  setSelectCategory,
  setFilmsFilteredByCategories,
  setFilmsFilteredBySearch,
  createRandomList,
  createSortByNew,
  createSortByOld,
} = filmSlice.actions;
export default filmSlice.reducer;
