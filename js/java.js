const showsocial = (toggleCard, socialcard) => {

    const toggle = document. getElementById(toggleCard),
    social = document.getElementById(socialcard);
    
    toggle.addEventListener("click", () => {
    if(social.classList.contains("animation"))
    {
    
    social.classList.add("down-animation");
    setTimeout ( ( ) => {
    social.classList.remove
    ("down-animation");
    }, 1000);
}
    
    social. classList. toggle("animation");
    
    });
}
    showsocial("card-toggle","card-social");