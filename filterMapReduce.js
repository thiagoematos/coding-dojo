// Eliminar loops

const filmes = [

    'TITANIC',
    'SKYCRAPER',
    'THOR - RAGNAROK'

]



// 1. Filter
// Challenge: Imprimir somente os filmes que contenham a letra 'T'

const filmesQueTenhamALetraT = (filme) => filme.includes('T')
const filmesTamanhoMenorQue7 = filme => filme.length <= 7

Array.prototype.filtrar = function(condicaoFn) {
    let resultado = []
    for (let itemDaLista of this) {
        if (condicaoFn(itemDaLista)) {
            resultado.push(itemDaLista)
        }
    }
    return resultado
}


let resultado = filmes.filtrar(filmesQueTenhamALetraT)
console.log('Com T', resultado)

resultado = filmes.filtrar(filmesTamanhoMenorQue7)
console.log('Tamanho 7', resultado)



// 2. Map
// 3. Reduce