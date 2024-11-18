let pronombre = ["el", "la", "nuestro"];
let adjetivo = ["gran", "genial", "sorprendente"];
let sustantivo = ["chat", "pagina", "web"];
let extension = [".com", ".es", ".org"];

for (
  let contadorpronombre = 0;
  contadorpronombre < pronombre.length;
  contadorpronombre++
) {
  for (
    let contadoradjetivo = 0;
    contadoradjetivo < adjetivo.length;
    contadoradjetivo++
  ) {
    for (
      let contadorsustantivo = 0;
      contadorsustantivo < sustantivo.length;
      contadorsustantivo++
    ) {
      for (
        let contadorextension = 0;
        contadorextension < extension.length;
        contadorextension++
      )
        console.log(
          pronombre[contadorpronombre] +
            adjetivo[contadoradjetivo] +
            sustantivo[contadorsustantivo] +
            extension[contadorextension]
        );
    }
  }
}
