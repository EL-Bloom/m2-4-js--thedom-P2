// Preset values
const FROGS = 3;
 


for (let count = 1; count <= FROGS; count++) {  
    const lane = document.createElement("li"); 
    lane.id = `lane-${count}`;  

  const num = document.createElement("span");  
  num.innerText = count; 

    lane.appendChild(num); 
    track.appendChild(lane);
}    
 
// 1.2 - Call the Frogs
const racers = [];  
for (let i = 0; i < FROGS; i++) { 
    racers.push(frogstable[i]); 
}  
// 1.3 - Line up the frogs  
racers.forEach(function (racer, id) {   
    const newFrog= document.createElement("span"); 
    newFrog.style.background = racer.color;
    newFrog.innerText = `${racer.number}`; 
    document.getElementById(`lane-${id + 1}`).appendChild(newFrog); 

     // 1.4 Add styling to frogs  
  newFrog.classList.add("frog"); 
  const frogName = document.createElement("span");   
  frogName.classList.add("frog-name"); 
  frogName.innerText = racer.name; 
  document.getElementById(`lane-${id + 1}`).appendChild(frogName);  

 //1.5 Track Progress 
  racers[id].progress = 0;
  racers[id].lane = `lane-${id + 1}`;
}); 
 
//1.6 Make frogs hop   

function racingFrog(racer) {  
  const trackWidth = track.offsetWidth;
 
  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100); 
   racer.progress += hopLength; 

    console.log(racer.name," is at " + racer.progress); 

    if (racer.progress >= 100) {   
      racer.progress = 100; 
      console.log(racer.name," has finished the race!");
      clearInterval(hop);
    } 

    document.querySelector(`#${racer.lane} .frog`).style.left = `${racer.progress}%`;
  }, Math.random() * 1000); 
}

racers.forEach((racer) => racingFrog(racer));
