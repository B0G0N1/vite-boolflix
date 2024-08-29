<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue'; // Importa il componente MovieCard

export default {
    components: {
        MovieCard // Registra il componente MovieCard
    },
    data() {
        return {
            store
        }
    },
    methods: {
    getCountryCode(language) {
        return store.languageToCountry[language] || language; // 'un' for unknown/default flag
    }
}

}
</script>

<template>
    <div class="movie-card-container">
        <div v-for="film in store.filmList" :key="film.id" class="movie-info">
            <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="Poster of {{ film.title || film.name }}" />
            <h3>{{ film.title || film.name }}</h3>
            <p><strong>Titolo Originale:</strong>{{ film.original_title || film.original_name }}</p>
            <p><strong>Lingua:</strong></p>
            <img
                :src="`https://flagcdn.com/${getCountryCode(film.original_language)}.svg`"
                width="30"
                :alt="film.original_language"
            />
            <p><strong>Voto:</strong>
                <span v-for="star in 5" :key="star">
                    <i v-if="star <= Math.ceil(film.vote_average / 2)" class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i v-else class="fa-regular fa-star" style="color: #FFD43B;"></i>
                </span>
            </p>
        </div>
    </div>
</template>



<style lang="scss">
.movie-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: #f4f4f4;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
}
</style>