//Semper Ordóñez Ismael Jared
const txt_rango1 = document.getElementById("txt-rango1")
const txt_rango2 = document.getElementById("txt-rango2")
const txt_numero = document.getElementById("txt-numero")
const btn_generar = document.getElementById("btn_generar")
const txt_primos = document.getElementById("txt-primos")
const txt_respuesta = document.getElementById("txt-respuesta")
const div_resultado = document.getElementById("div-resultado")

    btn_generar.addEventListener("click", (e) => {
        let numero = parseInt(txt_numero.value)
        generar_primos(numero)
    })

    function es_primo(n) {
        if (n < 2) return false

        for (let divisor = 2; divisor < n; divisor++) {
            if (n % divisor == 0) return false
        }
        return true
    }

    function generar_primos(numero) {
        let lista_primos = []
        let lista_rango1 = []
        let lista_rango2 = []

        for (let candidato = 2; lista_primos.length < numero; candidato++) {
            if (es_primo(candidato)) {
                lista_primos.push(candidato)

                if (candidato >= 1 && candidato <= 10) {
                    lista_rango1.push(candidato)
                }

                if (candidato >= 15 && candidato <= 25) {
                    lista_rango2.push(candidato)
                }
            }
        }

        txt_primos.textContent = numero + " primeros primos: " + lista_primos.join(" , ")
        txt_rango1.textContent = "Primos entre [1 - 10]: "  + lista_rango1.join(" , ") + " = Cantidad " + lista_rango1.length
        txt_rango2.textContent = "Primos entre [15 - 25]: " + lista_rango2.join(" , ") + " = Cantidad " + lista_rango2.length
        txt_respuesta.value  = "Primos generados: " + numero
        div_resultado.style.display = "block"
    }