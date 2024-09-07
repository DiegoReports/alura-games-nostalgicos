/* function pesquisar() {
  const gameList = document.querySelector('.resultados-pesquisa ul')

  games.forEach(game => {
    const listItem = document.createElement('li')
    listItem.classList.add('item-resultado')

    listItem.innerHTML = `
      <img src="${game.image}" alt="${game.title}" class="jogo-imagem">
      <h2>${game.title}</h2>
      <p>${game.description}</p>
      <span class="genero">${game.genre}</span>
      <span class="console">${game.console}</span>
      <a href=${game.link} id="btnInfo" target="_blank">Saiba mais.</a>
    `

    gameList.appendChild(listItem)
  })
} */

function pesquisar() {
  const gameList = document.querySelector('.resultados-pesquisa ul')
  const input = document.querySelector('input') // Seleciona o input de pesquisa
  const pesquisa = input.value.trim().toLowerCase() // Obtém o valor do input e converte para minúsculas para facilitar a comparação

  // Verifica se a pesquisa tem algum valor válido
  if (pesquisa === '') {
    // Exibe uma mensagem de erro ou realiza outra ação desejada
    alert('Por favor, digite um termo de pesquisa válido.')
    return // Interrompe a função
  }

  // Limpa a lista de resultados antes de cada pesquisa
  gameList.innerHTML = ''

  // Cria um array para armazenar os resultados da pesquisa
  const resultados = []

  games.forEach(game => {
    // Verifica se o título do jogo contém a palavra pesquisada
    if (
      game.title.toLowerCase().includes(pesquisa) ||
      game.description.toLowerCase().includes(pesquisa) ||
      game.genre.toLowerCase().includes(pesquisa) ||
      game.console.toLowerCase().includes(pesquisa)
    ) {
      // Cria um novo elemento de lista para o jogo
      const listItem = document.createElement('li')
      listItem.classList.add('item-resultado')

      // Define o conteúdo HTML do item da lista
      listItem.innerHTML = `
          <img src="${game.image}" alt="${game.title}" class="jogo-imagem">
          <h2>${game.title}</h2>
          <p>${game.description}</p>
          <span class="genero">${game.genre}</span>
          <span class="console">${game.console}</span>
          <a href=${game.link} id="btnInfo" target="_blank">Saiba mais.</a>
        `

      // Adiciona o elemento à lista de resultados
      resultados.push(listItem)
    }
  })

  // Verifica se foram encontrados resultados
  if (resultados.length === 0 || pesquisa == '') {
    const nenhumResultado = document.createElement('li')
    nenhumResultado.textContent =
      'Nenhum resultado encontrado para a sua pesquisa.'
    gameList.appendChild(nenhumResultado)
  } else {
    // Adiciona os resultados à lista HTML
    resultados.forEach(item => {
      gameList.appendChild(item)
    })
  }
}
