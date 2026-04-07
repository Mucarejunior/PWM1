function verificar() {
    const input= 
    document.getElementById('campoIdade').value;
    const display =
    document.getElementById('resultado');
    if (input===""||
        isNaN(input)){
            alert("porfavor digite um numero valido!");
            display.innerHTML ="";}else{
                 const idade = Number(input);
        display.innerHTML="Maior de idade😎😎😎";
    } else {
        display.innerHTML="Menor de idade😜😜😜";
    }
}
}