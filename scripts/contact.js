const subjectOptions = [ "Dúvida" , "Feedback", "Consideração", "Reclamação" ];

const assuntoDropdown = document.getElementById("assunto");

subjectOptions.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject.toLowerCase();
    option.textContent = subject;
    assuntoDropdown.appendChild(option);
}); 

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    console.log("Message sent by:", username);
    
    alert("Mensagem enviada com sucesso!");
});