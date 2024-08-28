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
}
</script>

<template>
    <div class="movie-card-container">
        <div v-for="film in store.filmList" :key="film.id" class="movie-info">
            <h3>{{ film.title }}</h3>
            <p><strong>Titolo Originale:</strong> {{ film.original_title }}</p>
            <p><strong>Lingua:</strong> {{ film.original_language }}</p>
            <p><strong>Voto:</strong> {{ film.vote_average }}</p>
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