function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.src = "./imagens/Design_sem_nome-removebg-preview.png"

    img.title = "Eu"
    img.alt = "Foto de perfil modo claro"
  } else {
    img.src = "./imagens/Design_sem_nome-removebg-preview.png"
    img.alt = "Foto de perfil modo escuro"
    img.title = "Come to the Dark Side of the Moon"
  }
}
