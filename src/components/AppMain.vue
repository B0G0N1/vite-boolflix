<script>
import MovieCard from './MovieCard.vue'; // Importa il componente MovieCard

export default {
    components: {
        MovieCard // Registra il componente MovieCard
    }
}
</script>

<template>
    <div class="movie-card-container">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
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