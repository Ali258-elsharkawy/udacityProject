

const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

for(const section of sections){
    const createLi= document.createElement("li");
    const createLink =document.createElement("a");
    createLink.href = "#"+section.id;
    createLink.innerHTML= section.dataset.nav;
    createLink.setAttribute('class', 'link');
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
window.addEventListener('scroll',function(event){
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
























