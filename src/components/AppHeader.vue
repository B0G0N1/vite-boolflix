<script>
import { store } from '../store'; // Importa lo store
import axios from 'axios'; // Importa Axios

export default {
    data() {
        return {
            store // Include lo store nei dati del componente
        };
    },
        methods: {
      handleSearch() {
        this.$emit('search');
      }
    }
};
</script>

<template>
    <div class="header">
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Inserisci un film" v-model="store.searchFilm" />
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
        font-weight: 900; /* Grassetto spesso */
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
            font-weight: 700; /* Grassetto per il testo del bottone */
            transition: background-color 0.3s ease, transform 0.3s ease;

            &:hover {
                background-color: #ff6347;
                transform: scale(1.05);
            }

            &:active {
                background-color: #ff4500;
                transform: scale(1);
            }
        }
    }
}
</style>
