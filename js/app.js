

const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

for(const section of sections){
    const createLi= document.createElement("li");
    const createLink =document.createElement("a");
    createLink.href = "#"+section.id;
    createLink.innerHTML= section.dataset.nav;
    createLink.setAttribute('id', 'link');
    navbar.appendChild(createLi);
    createLi.appendChild(createLink);
}


// }
var iSInViewport = function(elem){
    var distance = elem.getBoundingClientRect();
    return(
        distance.top >=0 &&
        distance.left >=0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll',function(){
    sections.forEach(Element=> {
        if (iSInViewport(Element)){
            Element.classList.add("your-active-class");
        }
        else{
            Element.classList.remove("your-active-class");
        }
    });
});

performance.now();


////// I tried tihs method befor asking in stackOverflow and it did not work, can i now how
///// fix this method? /////////////////



// function addSection(){
//     const ul = document.getElementById("navbar__list");
//     var section = document.querySelectorAll("section");
//     for( let i= 0; i< section.length; i++){
//         var li= ul.appendChild(document.createElement("li"));
//         link=document.createElement("a");
//         li.appendChild(link);
//         link.innerHTML = "Section"+[i++];
//         link.href =section.data-nav;
//         link.setAttribute('id', 'link');
//     }
//     return ul
// }






















