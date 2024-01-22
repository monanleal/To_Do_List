const botao = document.querySelector('.adicionar');
const input = document.querySelector('.caixaDeTexto');
const listaCompleta = document.querySelector('.lista');

let listaDeItens = []

function adicionarTarefa() {

    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    mostrarTarefa()

    input.value = ''

}

function mostrarTarefa() {

    let novaLi = ''

    listaDeItens.forEach((item, index) => {

        novaLi = novaLi + `
        
        <li class="itensDaLista ${item.concluida && "done"}">
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/40C057/ok--v1.png" alt="concluir tarefa" onclick="concluirTarefa(${index})" />
            <p>${item.tarefa}</p>
            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="Deletar item" onclick="deletarItem(${index})" />
        </li>

        `
    })

        listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(listaDeItens))
}

function concluirTarefa(index) {
    listaDeItens[index].concluida = !listaDeItens[index].concluida

    mostrarTarefa()
}

function deletarItem(index) {
    listaDeItens.splice(index, 1)

    mostrarTarefa()
}

function recarregarTarefa() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
    listaDeItens = JSON.parse (tarefasDoLocalStorage)
    }
    
    mostrarTarefa()
}

recarregarTarefa()

botao.addEventListener('click', adicionarTarefa)