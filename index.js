const casas = document.querySelectorAll(".linha");
casas.forEach(casa => {
    casa.classList.add("casa")
})

for (let colunas = 0; colunas < 8; colunas++) {
    for (let linhas = 8; linhas > 0; linhas--) { }
}

const peao = (tipo, pos) => {
    let peca = {
        tipo,
        pos
    }
}