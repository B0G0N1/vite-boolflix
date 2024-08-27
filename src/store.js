import { reactive } from 'vue';  // Importa il metodo reactive da Vue

export const store = reactive({
    // Base URL dell'API da cui ottenere i film cercati
    searchMovieApi: "https://api.themoviedb.org/3/search/movie?api_key=2193eedc3082d0f581dd1cdebb7f8641&query="
});