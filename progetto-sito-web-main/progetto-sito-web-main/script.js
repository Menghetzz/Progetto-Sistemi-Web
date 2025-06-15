//Definizione Components
const Home = {
    template: `
    <div id="home">
        <aside class="asidehome">
        <h2>COS'È REACT.JS</h2>
             <ul>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('react')">React.JS</a></li>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('utilizzo')">Utilizzo</a></li>
             </ul>

        <h2>NO HTML, SI JSX</h2>
            <ul>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('jsx')">Cos'è JSX</a></li>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('whyjsx')">Perchè JSX</a></li>
            </ul>

        <h2>COMPONENTI</h2>
            <ul>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('component')">Cosa sono?</a></li>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('functionalComp')">Componenti funzionali</a></li>
                <li class="asideBar"><a href="#" @click.prevent="scrollTo('classesComp')">Componenti di classi</a></li>
            </ul>

        <h2>HOOKS</h2>
        <ul>
            <li class="asideBar"><a href="#" @click.prevent="scrollTo('hooks')">Cosa sono?</a></li>
            <li class="asideBar"><a href="#" @click.prevent="scrollTo('hooksRules')">Regole degli hooks</a></li>
            <li class="asideBar"><a href="#" @click.prevent="scrollTo('personalizedHooks')">Hooks personalizzati</a></li>
        </ul>

        </aside>
        <div class="content">
            <section>
                <h2>COS'È REACT.JS</h2>
                <h3 id="react">React.JS</h3>
                <p>React (noto anche come React.js o ReactJS) è una libreria open-source front-end di JavaScript per la creazione di interfacce utente. Nata nel 2013 da meta (ex Facebook).</p>

                <h3 id="utilizzo">Utilizzo</h3>
                <p>React può essere utilizzato come base nello sviluppo di applicazioni a pagina singola,  utilizzabile anche su mobile tramite React Native. Tuttavia, React si occupa solo del rendering dei dati sul DOM, pertanto la creazione di applicazioni React richiede generalmente l'uso di librerie aggiuntive per lo state management e il routing come <span class="important">Redux</span> e <span class="important">React Router</span>. A questo fine è possibile utilizzare anche dei framework terzi, ad esempio <span class="important">Next.js</span></p>
            </section>

            <section>
                <h2>NO HTML, SI JSX</h2>

                <h3 id="jsx">Cos'è JSX</h3>
                <p>JSX è una estensione della sintassi JavaScript che permette di scrivere markup simile all’HTML direttamente nel codice JavaScript. Anche se sembra HTML, JSX non è HTML, ma viene trasformato in JavaScript puro dal transpiler (di solito Babel).</p>
                <p>JSX ti permette di inserire espressioni JavaScript tra le graffe {}</p>
                <div id="imageDiv">
                    <img src="./snippets/snippet1.png" alt="esempio di codice in JSX">
                </div>

                <h3 id="whyjsx">Perchè JSX?</h3>
                <p>JSX è stato introdotto per migliorare la leggibilità e la scrittura dei componenti React, permettendo agli sviluppatori di: </p>
                <ul class="homelist">
                    <li>Scrivere struttura e logica in un unico posto (invece di separare HTML e JS)</li>
                   <li>Avere un controllo più preciso su come l'interfaccia viene costruita e aggiornata</li>
                    <li>Sfruttare la potenza di JavaScript per creare UI dinamiche</li>
                </ul>
                <p>Il fatto che utilizzi JSX, è uno dei motivi per cui React è così diffuso e apprezzato.</p>
            </section>

           <section>
                <h2>COMPONENTI</h2>

                <h3 id="component">Cosa sono?</h3>
                <p>Il codice di React è costituito principalmente da entità denominate componenti. Questi possono essere sottoposti a rendering su un particolare elemento del DOM, attraverso la libreria "React DOM". Quando si esegue il rendering di un componente, si possono passare valori noti come "PROPS".</p>

                <h3 id="functionalComp">Componenti funzionali</h3>
                <p>I componenti funzionali vengono dichiarati con una funzione che restituisce delle variabili JSX oppure un elemento HTML.</p>

                <h3 id="classesComp">Componenti di classi</h3>
                <p>I componenti di classi sono ormai superati rispetto a quelli funzionali con gli hook. Vengono dichiarati utilizzando classi ES6, cioè secondo lo standard di scripting di ECMA International.</p>
            </section>

            <section>
                <h2>HOOKS</h2>
                <h3 id="hooks">Cosa sono?</h3>
                <p>Gli hooks sono funzioni che consentono di agganciarsi allo stato di React e alle caratteristiche del ciclo di vita dei componenti delle funzioni. Rendono i codici leggibili e facilmente comprensibili.</p>
                <h3 id="hooksRules">Regole degli hooks</h3>
                <p>Gli hooks sono regolati da due regole fondamentali:</p>
                <ul class="homelist">
                    <li>Gli hook devono essere chiamati solo all'interno di componenti funzionali</li>
                    <li>Gli hook devono essere chiamati solo in alto nel componente fuori da condizioni if o loop.</li>
                </ul>
                <h3 id="personalizedHooks">Hooks personalizzati</h3>
                <p>Gli hooks personalizzati sono funzioni che permettono di riutilizzare la logica di stato tra i componenti. Sono funzioni scritte in JavaScript il cui nome inizia con "use" e che possono chiamare altri hook.</p>
            </section>  
        </div>
    </div>
  `,
    methods: {
        scrollTo(id) {
            const extlink = document.getElementById(id);
            if (extlink) {
                extlink.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
};

const Whyreact = {
    data() {
        return {
            immagineReact: "",
            immagineVue: "",
            paragrafi: [
                "Dichiarazione di un'applicazione (componente) in React:",
                "Dichiarazione di un root in React:",
                "Uso degli stati con React:",
                "Dichiarazione di un'applicazione in Vue:",
                "Dichiarazione di un router in Vue:",
                "Uso degli eventi con Vue:"
            ],
            index1: 0,
            index2: 0,
        }
    },
    template: `
    <div id="whyreact">
        <div>
            <section>
                <h2>React</h2>
                <p>{{ paragrafi[index1] }} </p>
                <img :src="immagineReact" alt="esempi di codice react">
                <div class="buttons">
                    <button type="button" @click="react1" :class="index1 === 0? 'selected' : ''"></button>
                    <button type="button" @click="react2" :class="index1 === 1? 'selected' : ''"></button>
                    <button type="button" @click="react3" :class="index1 === 2? 'selected' : ''"></button>
                </div>
            </section>
            <section>
                <h2>Vue</h2>
                <p> {{ paragrafi[index2] }} </p>
                <img :src="immagineVue" alt="esempi di codice vue">
                <div class="buttons">
                    <button type="button" @click="vue1" :class="index2 === 3? 'selected' : ''"></button>
                    <button type="button" @click="vue2" :class="index2 === 4? 'selected' : ''"></button>
                    <button type="button" @click="vue3" :class="index2 === 5? 'selected' : ''"></button>
                </div>
            </section>
        </div>
        <div>
            <section>
                <h2>Perchè scegliere REACT?</h2> 
                <ul>
                    <li>
                        <h3>Virtual DOM + rendering selettivo</h3>
                        <p>Grazie al Virtual DOM, confronta in memoria la versione aggiornata con quella precedente e applica solo le modifiche minime necessarie al DOM reale. </p>

                        <p>Questo approccio rende l'app più veloce, reattiva e ottimizzata, offrendo un'esperienza utente fluida.</p>
                    </li>
                    <li>
                        <h3>React Native</h3>
                        <p>Scegliere React Native è utile per estendere la propria applicazione anche al web, riutilizzando parte della logica e delle competenze acquisite.</p> 
                        <p>In questo modo si può offrire un’esperienza ottimale sia su browser sia su dispositivi mobili, sfruttando la potenza di ogni piattaforma con uno stile di sviluppo coerente.</p>
                    </li>
                    <li>
                        <h3>Supporto a lungo termine</h3>
                        <p>React è una scelta solida e strategica perché è sviluppato e mantenuto da Meta, una delle aziende tech più influenti al mondo. Questo significa aggiornamenti costante che garantiscono stabilità e affidabilità nel tempo.</p>

                        <p>Inoltre, React vanta una community enorme e attivissima, con milioni di sviluppatori ed una documentazione chiara e completa.</p>
                    </li>
                </ul>
            </section>
        </div>
    </div>
  `,
    methods: {
        react1() {
            this.immagineReact = "./snippets/snippet5.png"
            this.index1 = 0;
        },

        react2() {
            this.immagineReact = "./snippets/snippet3.png"
            this.index1 = 1;
        },

        react3() {
            this.immagineReact = "./snippets/snippet7.png"
            this.index1 = 2;
        },

        vue1() {
            this.immagineVue = "./snippets/snippet4.png"
            this.index2 = 3;
        },

        vue2() {
            this.immagineVue = "./snippets/snippet6.png"
            this.index2 = 4;
        },

        vue3() {
            this.immagineVue = "./snippets/snippet8.png"
            this.index2 = 5;
        }
    },
    mounted() {
        this.react1()
        this.vue1()
    }

};

const Json = {
    data() {
        return {
            mostri: null
        }
    },
    template: `
        <table>
          <caption>Bestiario della Gilda</caption>
          <thead>
            <tr>
                <th id="icona" scope="col"> Icona </th>
                <th id="nome" scope="col"> Nome </th>
                <th id="classe" scope="col"> Classe </th>
                <th id="elementi" scope="col"> Elementi </th>
                <th id="debolezza" scope="col"> Debolezza </th>
                <th id="habitat" scope="col"> Habitat </th>
                <th id="descrizione" scope="col"> Descrizione </th>
                <th id="dimensione" scope="col"> Dimensione </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mostro in mostri">
                <td headers="icona"><img :src="'iconeJson/' + mostro.Icona" :alt="'Icona di ' + mostro.Nome"></td>
                <td headers="nome">{{mostro.Nome}}</td>
                <td headers="classe">{{mostro.Classe}}</td>
                <td headers="elementi">{{mostro.Elementi}}</td>
                <td headers="debolezza">{{mostro.Debolezza}}</td>
                <td headers="habitat">{{mostro.Habitat}}</td>
                <td headers="descrizione">{{mostro.Descrizione}}</td>
                <td headers="dimensione">{{mostro.Dimensione}}</td>
            </tr>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
  `,
    methods: {
        getData: function() {
            axios.get('./mhcontent.json')
                .then(response => {
                    this.mostri = response.data
                });
        }
    },
    mounted() {
        this.getData();
    }
};

const Editpeople = {
    data() {
        return {
            persone: [
                { nome: "Antonio", cognome: "Rossi" },
                { nome: "Giuseppe", cognome: "Bianchi" },
                { nome: "Giovanni", cognome: "Neri" },
                { nome: "Paolo", cognome: "Gialli" },
                { nome: "Francesco", cognome: "Azzurri" }
            ],
            selected: 0,
            nome: "",
            cognome: "",
        }
    },
    template: `
    <div class="container">
        <aside class="peoplelist">
            <h2>Lista Persone</h2>
            <ul>
               <li v-for="persona in persone">{{persona.nome}} {{persona.cognome }}</li>
            </ul>
        </aside>
        <div class="modify">
        <section class="edit">
            <form id="1stform">
                <h2>Modifica o Elimina persona</h2>
                      <label for="persona_selezionata"></label>
                      <select id="persona_selezionata" v-model="selected">
                        <option :value="index" v-for="(persona, index) in persone">{{ persona.nome + " " + persona.cognome }}</option>
                      </select>
                      <br>
                      <label for="nome">Nome:</label>
                      <input type="text" name="nome" id="nome" v-model="persone[selected].nome" maxlength="15" />
                      <br>
                      <label for="cognome">Cognome:</label>
                      <input type="text" name="cognome" id="cognome" v-model="persone[selected].cognome" maxlength="15" />        
                  <div>
                  <label for="rimuovi"></label>
                    <input id="rimuovi" class="buttonedit" type="button" value="Rimuovi" @click="rimuovi" />
                  </div>
            </form>
        </section>
        <section class="add">
            <h2>Aggiungi persona</h2>
            <form id="2ndform">
                <label for="nome">Nome:</label>
                <input placeholder="Inserisci nome" type="text" v-model="nome" maxlength="15" />
                <br>
                <label for="cognome">Cognome:</label>
                <input placeholder="Inserisci cognome" type="text" v-model="cognome" maxlength="15" />
                <div>
                <label for="aggiungi"></label>
                <input id="aggiungi" class="buttonadd" type="button" value="Aggiungi" @click="aggiungi">
                </div>
            </form>
        </section>
        </div>
    </div>
    `,
    methods: {
        rimuovi() {
            if (this.persone.length != 0) {
                this.persone.splice(this.selected, 1)
                this.selected = 0
            } else {
                this.persone.push({ nome: "Lista", cognome: "Vuota" })
            }
        },

        aggiungi() {
            if (this.nome === "" || this.cognome === "") {
                alert("Inserire nome e cognome")
                return
            }

            this.persone.push({ nome: this.nome, cognome: this.cognome })
            this.nome = ""
            this.cognome = ""
        }
    }
}


const routes = [
    { path: "/", component: Home },
    { path: "/Whyreact", component: Whyreact },
    { path: "/Json", component: Json },
    { path: "/Editpeople", component: Editpeople }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({
    data() {
        return {
          
        }
    }
});
app.use(router);
app.mount("#app");
