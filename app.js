const games = [
  {
    title: 'Super Mario World',
    description:
      'Um clássico da Nintendo, explorando o Reino dos Cogumelos com o encanador mais famoso do mundo.',
    image: './assets/marioworld.webp',
    genre: 'Aventura',
    console: 'Super Nintendo'
  },
  {
    title: 'Sonic the Hedgehog 2',
    description:
      'Acelere com o ouriço azul mais rápido do mundo em uma aventura épica.',
    image: './assets/sonic2.webp',
    genre: 'Aventura',
    console: 'Mega Drive'
  },
  {
    title: 'Street Fighter II',
    description: 'Lutas de rua para provar os seus limites.',
    image: './assets/street-fighter.webp',
    genre: 'Luta',
    console: 'Super Nintendo'
  }
]

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
    <a href="#" id="btnInfo" target="_blank">Saiba mais.</a>
  `

  gameList.appendChild(listItem)
})
