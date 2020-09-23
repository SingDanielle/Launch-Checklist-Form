fetch ("https://handlers.education.launchcode.org/static/planets.json").then(
   function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget")
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">`
      })
   }
   )
let form = document.querySelector('form')
form.addEventListener("submit", function(event){
   let pilotName = document.getElementById("pilotName")
   let copilotName = document.getElementById("copilotName")
   let fuelLevel = document.getElementById("fuelLevel")
   let cargoMass = document.getElementById("cargoMass")
   if (pilotName.value === ""||copilotName.value === ""||fuelLevel.value=== ""||cargoMass.value==="") {
      alert("All fields are required");
      event.preventDefault();
   } else if (
      !isNaN(pilotName.value)||!isNaN(copilotName.value)||isNaN(fuelLevel.value)||isNaN(cargoMass.value)){
      alert("Invalid entries")
      event.preventDefault();
   } else {
      event.preventDefault();
      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      pilotStatus.innerHTML = `Pilot name: ${pilotName.value}`
      copilotStatus.innerHTML = `CoPilot name: ${copilotName.value}`      
      
      if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
         let fuelStatus = document.getElementById("fuelStatus")
         fuelStatus.innerHTML = `There is not enough fuel for the journey.`
         let cargoStatus = document.getElementById("cargoStatus")
         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      } else if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
         let cargoStatus = document.getElementById("cargoStatus")
         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      } else if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
         let fuelStatus = document.getElementById("fuelStatus")
         fuelStatus.innerHTML = `There is not enough fuel for the journey.`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      } else {
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
      }
      let faultyItems = document.getElementById("faultyItems")
      faultyItems.style.visibility = "visible"
   }
})
