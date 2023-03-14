const campos = document.querySelectorAll('.campo')

campos.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value != ""){
      input.classList.add('borda-verde')
        }else{
            input.classList.remove('borda-verde')
        }
    })
})