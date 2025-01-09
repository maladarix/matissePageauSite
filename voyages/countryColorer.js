const countries = document.querySelectorAll("svg path");

fetch("voyages/visited.json")
  .then(response => {
    if(!response.ok) {
      throw new Error ("Failed to fetch data")
    }
    return response.json()
  })
  .then(data => {
    data.forEach(visited => {
      countries.forEach(pays => {
        let countryName = pays.getAttribute("name");
        if(countryName == null) {
          countryName = pays.getAttribute("class")
        }

        if(countryName == visited.name) {          
          switch (visited.note) {
            case "lived":
              pays.classList.add("lived")
              break;
          
            case "good":
              pays.classList.add("good")
              break;
    
            case "medium":
              pays.classList.add("medium")
              break;
    
            case "bad":
              pays.classList.add("bad")
              break;
          }
        }
      });
    });
  })