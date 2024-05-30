document.getElementById("git").addEventListener("click", function(){
    window.location.href = "https://github.com/TeeCV";
});

document.getElementById("certificate").addEventListener("click", function(){
    window.location.href = "document.html";
});

document.getElementById("CV").addEventListener("click", function(){
    window.location.href = "cv.html";
});

function resetForm(event){
    event.preventDefault();

    document.getElementById("Poetic").reset();

    document.getElementById("poeticOutput").innerHTML = ""; 
}

function submitForm(event){
    event.preventDefault();

    var plant = document.getElementById("plant").value;
    var animal = document.getElementById("animal").value;

    var poe  = `
        <h2>The ${plant} and the ${animal}</h2>
        <p>In a serene garden,</p>
        <p>The ${plant} danced with the ${animal}.</p>
    `;
    
    document.getElementById("poeticOutput").innerHTML = poe;    

    console.log(poe);
}