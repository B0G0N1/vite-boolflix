<script>
export default {
    
}
</script>

<template>
    <div class="movie-card">
        <img src="https://via.placeholder.com/300x300" alt="Movie Image" class="movie-image" />
        <div class="movie-details">
            <h3 class="movie-title">Inception</h3>
            <p class="movie-rating">Rating: 8.8/10</p>
            <p class="movie-duration">Duration: 148 min</p>
            <p class="movie-description">
                A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.movie-card {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    background-color: #fff;

    .movie-image {
        width: 100%;
        height: auto;
    }

    .movie-details {
        padding: 15px;

        .movie-title {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #333;
        }

        .movie-rating,
        .movie-duration,
        .movie-description {
            font-size: 0.9em;
            margin-bottom: 5px;
            color: #666;
        }

        .movie-description {
            margin-top: 10px;
        }
    }
}
</style>