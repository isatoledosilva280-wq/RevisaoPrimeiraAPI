const expess = require("express");

const app = expess();
app.use(expess.json());

let ALUNOS =[
    {id:1, nome:"Bernardo", curso:"Desenvolvimento de Sistema"},
    {id:2, nome:"Camilly", curso:"Redes de Computadores"},
    {id:3, nome:"Kaue", curso:"Banco ed dados"},
    {id:4, nome:"Maria", curso:"Adiministração"},
    {id:5, nome:"Marjory", curso:"Desenvolvimento de Sistema"},
];

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Alunos funcionando"
    })
})

app.get("/alunos",(req,res) =>{
    res.json(ALUNOS);
})

app.post("/alunos/cadastrar", (req,res) =>{
    console.log(req.body);
    const{nome, curso} = req.body
    // console.log("nome:" + nome);
    // console.log(`curso: ${curso}`);

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatorio"});
    }

    const id = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1;

    const novoAluno = {
        id : id,
        nome : nome,
        curso : curso
    };

    ALUNOS.push(novoAluno);

    res.status(201).json({msg: "Aluno cadastrado com sucesso."})

});

app.get("/alunos/:id", (req,res) =>{
    const valor = Number(req.params.valor);

    const aluno = ALUNOS.find(aluno => aluno.id === valor);

    if(!aluno){
        return res.status(404).json({msg:"Aluno não encontrado"})
    }
    res.status(200).json(aluno);
})


app.put("/alunos/:id",(req, res)=>{
    const valor = Number (req.params.id);
    const{nome, curso} = req.body;

    if(!aluno){
        return res.status(404).json({msg:"Nome do curso não obrigatorio"})
    }
})
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciando sucesso");
    console.log(`http://localhost:${PORTA}`);
})