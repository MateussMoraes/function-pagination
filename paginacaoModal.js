function PaginacaoModal(max_paginas,page,resposta) {
    let pages = []
    let metade = Math.floor(max_paginas / 2)
    let pinicio = parseInt(page) - metade
    let pfim = parseInt(page) + metade
    // inicio menor ou igual a zero, deslocar pra direita
    if (pinicio <= 0) {
        pfim += 1 - pinicio
        pinicio = 1
    }
    if (pfim > resposta.data.pages) {
        pinicio += resposta.data.pages - pfim
        pfim = resposta.data.pages
    }
    for (let i = pinicio; i <= pfim; i++) {
        if (i <= 0 || i > resposta.data.pages)
            continue;

        let paginaAtual = page == i ? true : false
        pages.push({ id: i, page: i,active: paginaAtual })
    }
    return pages;
}

export default PaginacaoModal