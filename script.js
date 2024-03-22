document.addEventListener('DOMContentLoaded', function() {
    let carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
        interval: false
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        carousel.prev();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        carousel.next();
    });

    
    let button = document.getElementById("submitBtn");
    let imgInput = document.querySelector(".imgInput");
    let brandInput = document.querySelector(".brandInput");
    let nameInput = document.querySelector(".nameInput");
    let linkInput = document.querySelector(".linkInput");
    let wholeList = document.querySelector(".wholeList");
    let carouselInner = document.querySelector(".carousel-inner");

    let list = [];

    let starter = {
        imgInput: "https://dlcdnwebimgs.asus.com/gain/8b776f5a-8ddb-47c8-bfa0-7b9b74ee7584/",
        brandInput: "Asus",
        nameInput: "TUF Gaming LCD Monitor",
        linkInput: "https://www.asus.com/us/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg247q1a/"
    };

    list.push(starter);

    button.addEventListener("click", function() {
        wholeList.innerHTML = "";
        let main = {
            imgInput: imgInput.value,
            brandInput: brandInput.value,
            nameInput: nameInput.value,
            linkInput: linkInput.value
        };

        list.push(main);
        for (let i = 0; i < list.length; i++) {
            let img = list[i].imgInput;
            let brand = list[i].brandInput;
            let name = list[i].nameInput;
            let link = list[i].linkInput;

            let type = "";
            if (i == 0) {
                type = "carousel-item active";
            } else {
                type = "carousel-item";
            }

            // carouselInner.insertAdjacentHTML(
            //     "beforeend",
            //     `
            //     <div class="${type}">
            //         <p class="id">${i}</p>
            //         <div class="enter">
            //             <h2>${brand}</h2>
            //         </div>
            //         <div class="enter">
            //             <h2>${name}</h2>
            //         </div>
            //         <div class="enter">
            //             <a href="${link}"></a>
            //         </div>
            //         <div class="enter">
            //             <img src="${img}">
            //         </div>
            //     </div>
            //     `
            // );
            carouselInner.insertAdjacentHTML(
                "beforeend",
                `
                <div class="${type}">
                    <p class="id">${i}</p>
                    <div class="enter">
                        <h2>${brand}</h2>
                    </div>
                    <div class="enter">
                        <h2>${name}</h2>
                    </div>
                    <div class="enter">
                    <a href="${link}" target="_blank">Link to buy</a> <!-- Add target="_blank" to open link in new tab --> 

                    </div>
                    <div class="enter">
                        <img src="${img}">
                    </div>
                </div>
                `
            );
        }
        console.log(list.length);
    });
});



