// utilizando DOM para ter acesso aos elementos do html
const buttons = document.querySelectorAll("#image_picker li");
const image = document.querySelector("#product_image");

// bloco para a mudança da imagem do celular na tela
buttons.forEach((btn) => {
    
    btn.addEventListener("click", (e) => {
        
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        console.log(e)

        const button = e.target;
        const id = button.getAttribute("id");
        console.log(id)

        button.querySelector(".color").classList.add("selected");
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 100);
    });
});