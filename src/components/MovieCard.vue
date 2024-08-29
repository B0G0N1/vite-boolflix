<script>
export default {
    props: {
        // Proprietà che contiene i dettagli del film
        film: {
            type: Object,
            required: true
        },
        // Codice del paese per la bandiera
        countryCode: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="movie-card">
        <!-- Immagine del poster del film -->
        <img
        :src="film.poster_path ? `https://image.tmdb.org/t/p/w342${film.poster_path}` : 'https://placehold.co/200x300?text=Not+Find'"
        alt="Poster of {{ film.title || film.name }}"
        class="movie-image"
        />
        <div class="movie-details">
            <!-- Titolo del film -->
            <h3 class="movie-title">{{ film.title || film.name }}</h3>
            <!-- Titolo originale del film -->
            <p class="movie-original-title">
                <strong>Titolo Originale:</strong> 
                {{ film.original_title || film.original_name }}
            </p>
            <!-- Lingua originale del film con la bandiera -->
            <p class="movie-language">
                <strong>Lingua:</strong>
                <img
                    :src="`https://flagcdn.com/${countryCode}.svg`"
                    width="30"
                    :alt="film.original_language"
                    class="movie-flag"
                />
            </p>
            <!-- Valutazione del film con le stelle -->
            <p class="movie-rating">
                <strong>Voto:</strong>
                <span v-for="star in 5" :key="star">
                    <i 
                        v-if="star <= Math.ceil(film.vote_average / 2)" 
                        class="fa-solid fa-star" 
                        style="color: #FFD43B;">
                    </i>
                    <i 
                        v-else 
                        class="fa-regular fa-star" 
                        style="color: #FFD43B;">
                    </i>
                </span>
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

        .movie-original-title,
        .movie-language,
        .movie-rating {
            font-size: 0.9em;
            margin-bottom: 5px;
            color: #666;
        }

        .movie-flag {
            margin-left: 5px;
            vertical-align: middle;
        }
    }
}
</style>