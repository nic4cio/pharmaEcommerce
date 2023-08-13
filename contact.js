const subjectOptions = [ "Dúvida" , "Feedback", "Consideração", "Reclamação" ];

const assuntoDropdown = document.getElementById("assunto");
console.log(assuntoDropdown);

subjectOptions.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject.toLowerCase();
    option.textContent = subject;
    assuntoDropdown.appendChild(option);
}); 