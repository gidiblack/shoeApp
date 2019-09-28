window.sr=ScrollReveal();

function showNav(){
    var x = document.getElementById("responsive-nav");
    if(x.className === "responsive-nav"){
        x.className += " unfold";
    } else {
        x.className = "responsive-nav";
    }
}

sr.reveal("#header img.hero-phone", {
    duration: 500,
    distance: '100px',
    origin: 'bottom'
});

sr.reveal("#features div.car", {
    duration: 500,
    delay: 200,
    distance: '100px',
    origin: 'bottom'
});

sr.reveal("#features div.shoe", {
    duration: 500,
    delay: 400,
    distance: '100px',
    origin: 'bottom'
});

sr.reveal("#features div.device", {
    duration: 500,
    delay: 600,
    distance: '100px',
    origin: 'bottom'
});

sr.reveal("#discount .offer", {
    duration: 500,
    delay: 600,
    distance: '200px',
    origin: 'right'
});

sr.reveal("#discount .discount-phone", {
    duration: 500,
    delay: 600,
    distance: '200px',
    origin: 'left'
});