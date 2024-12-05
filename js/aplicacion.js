document.getElementById("formularioConsulta").onsubmit = async (e) => {
    e.preventDefault();

    const dni = document.getElementById("dni").value.trim();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE3MzI3NTQ5OTd9.Zw_MnXDS8edLTV-iu_cJP6-TevUgQt_4YMx1htCwwSw";

    const respuesta = await fetch(`https://miapi.cloud/v1/dni/${dni}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    const { datos } = await respuesta.json();

    document.getElementById("resultado").innerHTML = Object.entries(datos || {})
        .map(([clave, valor]) =>
            typeof valor === "object"
                ? `<p><strong>${clave}:</strong><br>${Object.entries(valor)
                    .map(([subClave, subValor]) => `<span>${subClave}: ${subValor}</span>`)
                    .join("<br>")}</p>`
                : `<p><strong>${clave}:</strong> ${valor}</p>`
        )
        .join("");
};