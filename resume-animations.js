let sections = document.querySelectorAll(".toggle");

sections.forEach(function(header) {
    header.addEventListener("click" , function() {
        let content = this.nextElementSibling
        
        if(content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
            content.style.opacity = 0;
            let fade = setInterval(function() {
                if (content.style.opacity < 1) {
                    content.style.opacity = Number(content.style.opacity) + 0.1;
                } else {
                    clearInterval(fade);
                }
            }, 30);
        }
    });
});
