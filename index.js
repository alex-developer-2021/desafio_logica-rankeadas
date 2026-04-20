let vitoria = gets()
let derrota = gets()

function calcularRank(vitoria, derrota) {
    let resultado = vitoria - derrota
    let mensagem = ""

    switch (true) {
        case vitoria < 10:
            mensagem = "Ferro"
            break
        case vitoria <= 20:
            mensagem = "Bronze"
            break
        case vitoria <= 50:
            mensagem = "Prata"
            break
        case vitoria <= 80:
            mensagem = "Ouro"
            break
        case vitoria <= 90:
            mensagem = "Diamante"
            break
        case vitoria <= 100:
            mensagem = "Lendário"
            break
        default:
            mensagem = "Imortal"
            break
    }

    return `O Herói tem de saldo de ${resultado} está no nível de ${mensagem}`
}

print(calcularRank(vitoria, derrota))