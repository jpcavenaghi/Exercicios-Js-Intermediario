const quadrado = document.querySelector('.quadrado')
quadrado.addEventListener('click', () => {
    const azulExiste = quadrado.classList.contains('azul')

    if(azulExiste){
        
        quadrado.classList.remove('azul')
    }else{
        quadrado.classList.add('azul')
        alert('o quadrado tem a classe AZUL!!!')
    }
});