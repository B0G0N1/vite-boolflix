<!----------------------
   CONSEGNA ESERCIZIO
----------------------->

Ciao a tutti e ben ritrovati! Ecco la consegna dell'esercizio del giorno. E' un esercizio che si svolgerà su tre giorni, il termine ultimo è mercoledì alle 18:00.
Mi raccomando seguite le milestone, non andate alla successiva se non avete finito quella in cui siete (se siete alla 1 e non l'avete terminata non andate alla 2 e così via).
Numero di push minimo: 12
Buon lavoro!

Buon pomeriggio classe #129: ben ritrovati. Oggi si inizia una consegna spalmata su più giorni, quindi valgono sempre gli stessi consigli:
gestite bene il tempo (non arrivate tardi e non rinviate troppo): magari datevi delle scadenza intermedie
non bloccatevi su particolari insignificanti
rispettate l'ordine delle singole milestone della consegna
imperfetto consegnato è molto meglio di perfetto non consegnato
Se occorre supporto io e
@Alessio Crea
siamo come sempre disponibili dalle 15 alle 18.
Buon lavoro

### Passaggi Generici per Creare e Gestire un Progetto Vue con Vite

#### [1] Creazione dell'Applicazione

1. **Creazione del Progetto:**
   Eseguire `npm create vite@latest vite-yu-gi-oh -- --template vue` nel terminale nella cartella di destinazione per creare un nuovo progetto Vue con Vite.

2. **Installazione delle Dipendenze:**
   Nella cartella appena creata, eseguire `npm install` per installare tutte le dipendenze necessarie.

3. **Avvio del Server di Sviluppo:**
   Eseguire `npm run dev` per avviare il server di sviluppo e visualizzare l'applicazione.

#### [2] Installazione delle Risorse e Preparazione del Progetto

1. **Organizzazione delle Immagini:**

   - Creare una cartella `img` dentro `src` e copiare le immagini necessarie.
   - Creare una cartella `screenshot/layout` nella root del progetto per le immagini di layout.

2. **Pulizia dei File Iniziali:**

   - Eliminare `HelloWorld.vue` dalla cartella `components`.
   - Eliminare `style.css` da `src` e rimuoverne l'importazione da `main.js`.

3. **Configurazione di App.vue:**

   - Cancellare il contenuto di `App.vue` e ricreare la struttura con il comando `VueInit`, spostando lo script in cima al file.

4. **Creazione e Utilizzo degli Stili Generici:**

   - Creare una cartella `styles` dentro `src` e un file `generals.scss` per gli stili generici.
   - Per usare `generals.scss` in `App.vue`, aggiungere `lang="scss"` al tag `<style>` e includere `@use './styles/generals.scss';`.

5. **Installazione di SASS:**
   Eseguire `npm add -D sass` per installare SASS come dipendenza di sviluppo. Ricordarsi di aggiungere `lang="scss"` ai tag `<style>` nei file Vue.

6. **Installazione di Bootstrap:**
   Eseguire `npm install bootstrap` e importare Bootstrap in `generals.scss` con `@import "../node_modules/bootstrap/scss/bootstrap";`.

7. **Importazione di Font:**
   Per importare un font, aggiungere in `generals.scss` la riga `@import url('link del font da Google Fonts');` e applicarlo al body.

8. **Installazione di Axios:**
   Eseguire `npm install axios` per installare Axios, utile per le chiamate API.

#### [3] Gestione del Progetto

1. **Organizzazione delle Sezioni del Progetto:**
   Identificare le sezioni principali del progetto (es. HEADER, MAIN CONTENT SECTION, PROMOTIONAL SECTION, FOOTER).

2. **Creazione dei Componenti:**
   Per ogni sezione, creare un componente Vue (es. `AppHeader.vue`) dentro `components`. Utilizzare `VueInit` per generare la struttura base del componente.

3. **Importazione e Dichiarazione dei Componenti:**
   Importare i componenti in `App.vue` e dichiararli all'interno del tag `<script>`:

   ```javascript
   <script>
   import AppHeader from './components/AppHeader.vue';

   export default {
     components: {
       AppHeader
     }
   }
   </script>
   ```

   Inserire il componente nel template:

   ```html
   <template>
     <div>
       <AppHeader />
     </div>
   </template>
   ```

4. **Scoped Styles:**
   Ogni sezione avrà un tag `<style>` con l'attributo `scoped` per limitare gli stili al componente specifico.

#### [4] Note Utili

1. **Organizzazione delle Immagini:**
   Immagini in `./src/img`.

2. **Componenti Singoli:**
   `./src/components/AppHeader.vue` rappresenta un singolo componente che sarà incluso nell'app principale.

3. **Applicazione Principale:**
   `./src/App.vue` è l'app principale che contiene tutte le altre sezioni.

4. **Gestione delle Dipendenze:**
   `./package.json` elenca tutte le dipendenze del progetto.

5. **File Git Ignore:**
   `./gitignore` contiene le cartelle e i file da escludere su GitHub.

6. **File Main.js:**
   `./main.js` è il file principale che importa e crea l'app Vue.

7. **Stili Generici:**
   `./src/styles/generals.scss` contiene gli stili generici e le importazioni di librerie come Bootstrap, Google Fonts, FontAwesome, ecc.

8. **Struttura di un Componente Vue:**
   Ogni componente Vue (`./src/components/AppHeader.vue`) ha tre parti: `<script>` per gli script specifici, `<template>` per il contenuto HTML, e `<style>` per gli stili CSS, utilizzando `scoped` per limitare gli stili al componente.
