
function calcularSalario() {
    var valorHora = parseFloat(document.getElementById('valorHora').value);
    var horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);

    var salarioBruto = valorHora * horasTrabalhadas;

    var impostoRenda = 0.11 * salarioBruto;
    var inss = 0.08 * salarioBruto;
    var sindicato = 0.05 * salarioBruto;

    var salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;

    document.getElementById('salarioBruto').textContent = 'R$ ' + salarioBruto.toFixed(2);
    document.getElementById('descontoINSS').textContent = 'R$ ' + inss.toFixed(2);
    document.getElementById('descontoSindicato').textContent = 'R$ ' + sindicato.toFixed(2);
    document.getElementById('salarioLiquido').textContent = 'R$ ' + salarioLiquido.toFixed(2);
    document.getElementById('totalDescontos').textContent = 'R$ ' + (impostoRenda + inss + sindicato).toFixed(2);
}



let d1 = document.querySelector('#d-01')
let d2 = document.querySelector('#d-02')
let d3 = document.querySelector('#d-03')
let d4 = document.querySelector('#d-04')

let tri = document.querySelector('.triangulo')
let ret = document.querySelector('.retangulo')
let cub = document.querySelector('.cubo')
let cir = document.querySelector('.circulo')

tri.style.display = 'none'
ret.style.display = 'none'
cub.style.display = 'none'
cir.style.display = 'none'

d1.addEventListener('click', ()=>{
tri.style.display = 'flex'
ret.style.display = 'none'
cub.style.display = 'none'
cir.style.display = 'none'

d1.style.backgroundColor = '#a4b5c4'
d2.style.backgroundColor = ''
d3.style.backgroundColor = ''
d4.style.backgroundColor = ''
});

d2.addEventListener('click', ()=>{
    tri.style.display = 'none'
    ret.style.display = 'flex'
    cub.style.display = 'none'
    cir.style.display = 'none'

d1.style.backgroundColor = ''
d2.style.backgroundColor = '#a4b5c4'
d3.style.backgroundColor = ''
d4.style.backgroundColor = ''
});

d3.addEventListener('click', ()=>{
    tri.style.display = 'none'
    ret.style.display = 'none'
    cub.style.display = 'flex'
    cir.style.display = 'none'

d1.style.backgroundColor = ''
d2.style.backgroundColor = ''
d3.style.backgroundColor = '#a4b5c4'
d4.style.backgroundColor = ''
});

d4.addEventListener('click', ()=>{
    tri.style.display = 'none'
    ret.style.display = 'none'
    cub.style.display = 'none'
    cir.style.display = 'flex'

d1.style.backgroundColor = ''
d2.style.backgroundColor = ''
d3.style.backgroundColor = ''
d4.style.backgroundColor = '#a4b5c4'
    });

    document.addEventListener('DOMContentLoaded', (event) => {
     
        function calcularAreaTriangulo() {
        
            let base = document.getElementById("base").value;
            let altura = document.getElementById("altura").value;
         
            base = parseFloat(base);
            altura = parseFloat(altura);
           
            let area = 0.5 * base * altura;
          
            document.querySelector(".triangulo p").innerText = "Área: " + area + " cm²";
        }
        document.getElementById("resultTri").addEventListener('click', calcularAreaTriangulo);
    });

    document.addEventListener('DOMContentLoaded', (event) => {
      
        function calcularAreaRetangulo() {
          
            let base = document.getElementById("baseR").value;
            let altura = document.getElementById("alturaR").value;
         
            base = parseFloat(base);
            altura = parseFloat(altura);
           
            let area = base * altura;
            
            document.querySelector(".retangulo p").innerText = "Área: " + area + " cm²";
        }
        document.getElementById("resultRet").addEventListener('click', calcularAreaRetangulo);
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        
        function calcularVolumeCubo() {
            
            let aresta = document.getElementById("aresta").value;
            
            aresta = parseFloat(aresta);
            
            let volume = Math.pow(aresta, 3);
          
            document.getElementById("resultadoC").innerText = "Volume: " + volume + " cm³";
        }
        document.getElementById("resultCub").addEventListener('click', calcularVolumeCubo);
    });

    document.addEventListener('DOMContentLoaded', (event) => {
       
        function calcularRaioCirculo() {
           
            let diametro = document.getElementById("diametro").value;
          
            diametro = parseFloat(diametro);
           
            let raio = diametro / 2;
           
            document.getElementById("resultado").innerText = "Raio: " + raio + " cm";
        }
        document.getElementById("resultCir").addEventListener('click', calcularRaioCirculo);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        let saldo = 1000;
    
        const valorOperacaoInput = document.getElementById('valorOperacao');
        const verSaldoBtn = document.getElementById('verSaldo');
        const fazerSaqueBtn = document.getElementById('fazerSaque');
        const fazerDepositoBtn = document.getElementById('fazerDeposito');
        const sairBtn = document.getElementById('sair');
    
        fazerSaqueBtn.addEventListener('click', () => {
            let valorSaque = parseFloat(valorOperacaoInput.value);
            if (isNaN(valorSaque) || valorSaque <= 0) {
                alert("Valor de saque inválido. Digite um valor válido.");
            } else if (valorSaque > saldo) {
                alert("Saldo insuficiente para o saque.");
            } else {
                saldo -= valorSaque;
                alert(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${saldo.toFixed(2)}`);
                atualizarSaldo();
            }
            valorOperacaoInput.value = '';
        });
    
        fazerDepositoBtn.addEventListener('click', () => {
            let valorDeposito = parseFloat(valorOperacaoInput.value);
            if (isNaN(valorDeposito) || valorDeposito <= 0) {
                alert("Valor de depósito inválido. Digite um valor válido.");
            } else {
                saldo += valorDeposito;
                alert(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${saldo.toFixed(2)}`);
                atualizarSaldo();
            }
            valorOperacaoInput.value = '';
        });
    
        sairBtn.addEventListener('click', () => {
           display03.style.display = 'none'
        });
    
        function atualizarSaldo() {
            document.getElementById('saldo').textContent = `R$ ${saldo.toFixed(2)}`;
        }
    });
    

let display01 = document.querySelector('.desafio-01');
let display02 = document.querySelector('.desafio-02');
let display03 = document.querySelector('.desafio-03');

let botaoDisplay01 = document.querySelector('#desafio01');
let botaoDisplay02 = document.querySelector('#desafio02');
let botaoDisplay03 = document.querySelector('#desafio03');

display01.style.display = 'none'
display02.style.display = 'none'
display03.style.display = 'none'

botaoDisplay01.addEventListener('click', ()=>{
display01.style.display = 'flex'
display02.style.display = 'none'
display03.style.display = 'none'
});

botaoDisplay02.addEventListener('click', ()=>{
    display01.style.display = 'none'
    display02.style.display = 'flex'
    display03.style.display = 'none'
});

botaoDisplay03.addEventListener('click', ()=>{
    display01.style.display = 'none'
    display02.style.display = 'none'
    display03.style.display = 'flex'
});



