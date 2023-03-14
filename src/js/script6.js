const acordeonItens = document.querySelectorAll(".acordeon-item");

acordeonItens.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivo = document.querySelector(".active");
       
        item.classList.add("active");
        itemAtivo.classList.remove("active");

    });
});
