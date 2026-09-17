const expess = require("express");

const app = expess();

let Alunos =[
    {is:1, nome:"Bernardo", curso:"Desenvolvimento de Sistema"},
    {is:2, nome:"Camilly", curso:"Redes de Computadores"},
    {is:3, nome:"Kaue", curso:"Banco ed dados"},
    {is:4, nome:"Maria", curso:"Adiministração"},
    {is:5, nome:"Marjory", curso:"Desenvolvimento de Sistema"},
];

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Alunos funcionando"
    })
})

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciando sucesso");
    console.log(`http://localhost:${PORTA}`);
})