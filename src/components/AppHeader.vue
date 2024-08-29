<script>
import { store } from '../store'; // Importa lo store Vuex
import axios from 'axios'; // Importa Axios per le chiamate HTTP

export default {
    data() {
        return {
            store // Collega lo store ai dati del componente per accedere direttamente allo stato globale
        };
    },
    methods: {
        // Metodo per gestire la ricerca
        handleSearch() {
            this.$emit('search'); // Emette un evento di ricerca al componente genitore
        }
    }
};
</script>

<template>
    <div class="header">
        <!-- Sezione logo -->
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <!-- Barra di ricerca -->
        <div class="search-bar">
            <!-- Campo di input legato al dato 'searchFilm' dello store -->
            <input 
                type="text" 
                placeholder="Inserisci testo" 
                v-model="store.searchFilm" 
            />
            <!-- Bottone per avviare la ricerca -->
            <button @click="handleSearch">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 10px;
    color: red;

    .logo h1 {
        margin: 0;
        font-family: Arial, sans-serif;
        font-weight: 900; // Grassetto spesso per il titolo
    }

    .search-bar {
        display: flex;

        input {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-size: 14px;
        }

        button {
            padding: 5px 15px;
            margin-left: 10px;
            background-color: #ff4500;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: 700; // Grassetto per il testo del bottone
            transition: background-color 0.3s ease, transform 0.3s ease;

            &:hover {
                background-color: #ff6347;
                transform: scale(1.05); // Effetto di ingrandimento al passaggio del mouse
            }

            &:active {
                background-color: #ff4500;
                transform: scale(1); // Reset dell'effetto di ingrandimento al click
            }
        }
    }
}
</style>