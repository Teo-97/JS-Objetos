const cliente = {
    nombre: "Sofia",
    edad: 31,
    email: "sofia@gmail.com",
    telefonos: ["55 1234 5678", "55 4323 4353"],
    direccion: [
        {
            calle: "Avenida Reforma",
            numero: 222,
            pais: "Mexico",
            apartamento: true
        },

    ]
}

cliente.direccion.push({
    calle: "Insurgentes Sur",
    numero: 668,
    pais: "Mexico",
    apartamento: false
})

const listaSoloAp = cliente.direccion.filter((direccion) => direccion.apartamento === true)

console.log(listaSoloAp)