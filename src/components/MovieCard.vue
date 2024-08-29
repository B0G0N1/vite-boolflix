<script>
export default {
    props: {
        film: {
            type: Object,
            required: true
        },
        countryCode: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="movie-card">
        <div class="movie-card-inner">
            <!-- Parte frontale della card, che mostra l'immagine -->
            <div class="movie-card-front">
                <img
                :src="film.poster_path ? `https://image.tmdb.org/t/p/w342${film.poster_path}` : 'https://placehold.co/300x450?text=Not+Found'"
                alt="Poster of {{ film.title || film.name }}"
                class="movie-image"
                />
            </div>
            <!-- Parte posteriore della card, che mostra i dettagli -->
            <div class="movie-card-back">
                <div class="movie-details">
                    <h3 class="movie-title">{{ film.title || film.name }}</h3>
                    <p class="movie-original-title">
                        <strong>Titolo Originale:</strong> 
                        {{ film.original_title || film.original_name }}
                    </p>
                    <p class="movie-language">
                        <strong>Lingua:</strong>
                        <img
                            :src="`https://flagcdn.com/${countryCode}.svg`"
                            width="30"
                            :alt="film.original_language"
                            class="movie-flag"
                        />
                    </p>
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
                    <p class="movie-description">
                        <strong>Descrizione:</strong> {{ film.overview }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.movie-card {
    perspective: 1000px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .movie-card-inner {
        position: relative;
        width: 100%;
        height: 450px;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        cursor: pointer;
    }

    &:hover .movie-card-inner {
        transform: rotateY(180deg);
    }

    .movie-card-front, .movie-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
    }

    .movie-card-front {
        background-color: #fff;

        .movie-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .movie-card-back {
        background-color: #fff;
        transform: rotateY(180deg);
        padding: 20px;
        box-sizing: border-box;
        height: 100%; /* Imposta l'altezza al 100% della card */
        overflow-y: auto; /* Abilita lo scroll verticale */

        .movie-title {
            font-size: 1.4em;
            margin-bottom: 15px;
            color: #333;
        }

        .movie-original-title,
        .movie-language,
        .movie-rating,
        .movie-description {
            font-size: 1em;
            margin-bottom: 10px;
            color: #666;
        }

        .movie-flag {
            margin-left: 5px;
            vertical-align: middle;
        }
    }
}
</style>    