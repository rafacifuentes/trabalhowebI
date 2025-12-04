const navToggle = document.getElementById('nav-toggle')
const navList = document.getElementById('nav-list')

if(navToggle){
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open')
    navToggle.setAttribute('aria-expanded', open)
  })
}

const selectProf = document.getElementById('tipo-prof')
if(selectProf){
  const profCards = document.querySelectorAll('.prof-card')
  selectProf.addEventListener('change', () => {
    const tipo = selectProf.value
    profCards.forEach(card => {
      const cTipo = card.getAttribute('data-tipo')
      if(tipo === 'todos' || tipo === cTipo){
        card.style.display = 'flex'
      }else{
        card.style.display = 'none'
      }
    })
  })
}

const btnBuscarAcad = document.getElementById('btn-buscar-acad')
const listaAcad = document.getElementById('lista-acad')
const cidadeInput = document.getElementById('cidade')
if(btnBuscarAcad){
  btnBuscarAcad.addEventListener('click', () => {
    const cidade = cidadeInput.value.trim() || 'sua região'
    listaAcad.insertAdjacentHTML('beforeend',
      `<article class="academia-card">
        <h3>Nova Academia em ${cidade}</h3>
        <p>Endereço: a definir.</p>
        <p>Avaliação: 4.6 ★</p>
        <p>Planos promocionais para novos alunos.</p>
      </article>`
    )
  })
}
