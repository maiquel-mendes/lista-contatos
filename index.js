const pessoas = [
    {nome: 'maiquel', sobrenome: "mendes", idade: 43},
    {nome: 'maiquel', sobrenome: "mendes", idade: 43},
    {nome: 'João', sobrenome: "mendes", idade: 43},
    {nome: 'maiquel', sobrenome: "mendes", idade: 43},
    {nome: 'maiquel', sobrenome: "mendes", idade: 43},
    {nome: 'maiquel', sobrenome: "mendes", idade: 43},
    {nome: 'João', sobrenome: "mendes", idade: 43},
    {nome: 'maiquel', sobrenome: "mendes", idade: 43},
]

console.log(pessoas[0].nome)

let body = document.getElementById('tbody')

function criaElemento(){
    let x = 1;
    pessoas.forEach((item) => {
        let tr = document.createElement('tr')
        

    tr.innerHTML = `
    <th scope="row">${x}</th>
    <td>${item.nome}</td>
    <td>${item.sobrenome}</td>
    <td>${item.idade}</td>
    `
    console.log(`O nome é ${item.nome} ${item.sobrenome} e tem ${item.idade} anos.`)
    body.appendChild(tr)
    x++
})
}

criaElemento()
// criaElemento()




