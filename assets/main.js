
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.1",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.2",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.3",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.4",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.5",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let Containers = document.getElementById("container");


let counter = 1;
posts.forEach((i) => {
    
   


    let div = document.createElement("div");
    div.classList.add("post");
    
    console.log(div);

     
    div.innerHTML = (` <div class="post__header">
    <div class="post-meta"> 

        <div class="post-meta__icon">
                <img class="profile-pic" src="${i.author.image}" alt="${i.author.name}">                    
        </div>

        <div class="post-meta__data">
            <div class="post-meta__author">${i.author.name}</div>
            <div class="post-meta__time">4 mesi fa</div>
        </div>

    </div>
    </div>

    <div class="post__text">${i.content}
    </div>

    <div class="post__image">
    <img src="${i.media}" alt="">
    </div>

     <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <button class="like-button  js-like-button" href="#" data-postid="${counter}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </button>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${counter}" class="js-likes-counter">${i.likes}</b> persone
            </div>
        </div> 
    </div> `)

Containers.append(div);


});


div.querySelector(".like-button").addEventListener("click", function () {
  div.querySelector(".js-like-counter").textContent =
})