const lista = [
    {
        nome: "José",
        idade: 32
    },
    {
        nome: "Mateus",
        idade: 72
    },
    {
        nome: "Felipe",
        idade: 47
    },
    {
        nome: "Jurandir",
        idade: 24
    },
    {
        nome: "Pedru",
        idade: 38
    },
    {
        nome: "Maria",
        idade: 35
    }
]

const conversorDados = (objeto) => {
    return {
        ...objeto,
        // nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map(conversorDados))