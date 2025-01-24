function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // tema claro
    // substituir imagem para a avatar-light
    img.src = "./imagens/Design_sem_nome-removebg-preview.png"
  
    img.title = "Eu"
    img.alt = "Foto de perfil modo claro"
  } else {
    // tema escuro
    // manter imagem normal (avatar)
    img.src = "./imagens/Design_sem_nome-removebg-preview.png"
    img.alt = "Foto de perfil modo escuro"
    img.title = "Come to the Dark Side of the Moon"
  }
}
