const tooltip = document.getElementById("tooltip");
const countries = document.querySelectorAll("svg path");

countries.forEach(country => {
  country.addEventListener('click', () => {
    let countryName = country.getAttribute("name");
    if(countryName == null) {
      countryName = country.getAttribute("class").split(" ")[0]
    }
    console.log(countryName);
    
    fetch("voyages/visited.json")
      .then(response => {
        if(!response.ok) {
          throw new Error ("Failed to fetch data")
        }
        return response.json()
      })
      .then(data => {
        data.forEach(visited => {
          if(countryName == visited.name) {          
            window.location.href = visited.link
          }
        });
      })
    })
});