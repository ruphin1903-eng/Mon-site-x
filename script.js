function direOui() {

    document.querySelector(".boite").innerHTML = `
        <h1>Ahhh 😊❤️</h1>

        <p>Ça me rassure de savoir que tu vas bien.</p>

        <button onclick="questionOui()">
            Continuer ❤️
        </button>
    `;
}


function direNon() {

    document.querySelector(".boite").innerHTML = `
        <h1>Oh... 🥺</h1>

        <p>Pourquoi ?</p>

        <textarea id="reponse"
        placeholder="Dis-moi ce qui ne va pas..."></textarea>

        <br><br>

        <button onclick="questionNon()">
            Continuer ❤️
        </button>
    `;
}


function questionOui() {

    document.querySelector(".boite").innerHTML = `
        <h1>Petite question 😊</h1>

        <p>Comment s'est passée ta journée ? ❤️</p>

        <textarea id="reponse"
        placeholder="Raconte-moi..."></textarea>

        <br><br>

        <button onclick="finOui()">
            Continuer 💕
        </button>
    `;
}


function questionNon() {

    document.querySelector(".boite").innerHTML = `
        <h1>Je t'écoute ❤️</h1>

        <p>Et maintenant, comment te sens-tu ? 🥺</p>

        <textarea id="reponse"
        placeholder="Écris-moi..."></textarea>

        <br><br>

        <button onclick="finNon()">
            Continuer 💕
        </button>
    `;
}


function finOui() {

    document.querySelector(".boite").innerHTML = `
        <h1>Merci ❤️</h1>

        <p>
            J'aime bien savoir comment tu vas. 😊
        </p>

        <button onclick="derniereQuestion()">
            Encore une question ❤️
        </button>
    `;
}


function finNon() {

    document.querySelector(".boite").innerHTML = `
        <h1>Merci de m'avoir parlé ❤️</h1>

        <p>
            Je suis là pour t'écouter. 🥺❤️
        </p>

        <button onclick="derniereQuestion()">
            Continuer 
        </button>
    `;
}


function derniereQuestion() {

    document.querySelector(".boite").innerHTML = `
        <h1>Une dernière chose... ❤️</h1>

        <p>
            Tu veux continuer cette petite discussion avec moi ? 😊
        </p>

        <button onclick="fin()">
            Oui 
        </button>
    `;
}


function fin() {

    document.querySelector(".boite").innerHTML = `
        <h1>🥰</h1>

        <p>
            Alors continuons... cette histoire ne fait que commencer. ❤️
        </p>
    `;
}