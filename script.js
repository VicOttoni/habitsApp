/*variaveis com arquivos guardados*/
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

/* um ouvidor onde estou determinando que, ao dar um "click" na função "add" ele irá ouvir e executar uma ação que eu adicionarei depois. */
button.addEventListener('click', add)
/* esse ouvidor determina que irá executar a função "save", sempre que houver uma alteração(change) na página. */
form.addEventListener("change", save)

/* função criada para o evento acima */
function add() {
/* variavel com dia e mês */
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
/* código da biblioteca nlwSetup que verifica os dados inseridos em "today" */
    const dayExists = nlwSetup.dayExists(today)
/* Se a variavel "addDay" já estiver sido inserida, o código entenderá como "true", e rodará o que está dentro da função "if".*/
    if(dayExists) {
        alert("Dia já incluso 🔴")
        return
    }
/* caso ainda não tenha sido inserido as checkbox, o código entendera como "false", e não rodará o que está dentro do "if", vindo direto para os códigos abaixo. */
    
    alert('Adicionado com sucesso ✅')
    nlwSetup.addDay(today)
}
/* função criada para salvar as informações em string que houverem na página. */
function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

/* aqui eu estou pegando os itens da biblioteca que estarão em string e convertendo para objetos que serão impressos na tela */
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

/* aqui eu insiro(set) os itens da variavel "data" na página  */
nlwSetup.setData(data)
/* aqui eu faço com que os itens impressos na tela continuem carregados, mesmo após eu recarregar a página */
nlwSetup.load()