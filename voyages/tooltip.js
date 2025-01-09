const tooltip = document.getElementById("tooltip");
const countries = document.querySelectorAll("svg path");

countries.forEach(country => {
    country.addEventListener("mouseenter", (e) => {
        let countryName = country.getAttribute("name");
        if(countryName == null) {
          countryName = country.getAttribute("class").split(" ")[0]
        }
                
        tooltip.textContent = countryName;
        tooltip.style.display = "block";
    });

    country.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    country.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});