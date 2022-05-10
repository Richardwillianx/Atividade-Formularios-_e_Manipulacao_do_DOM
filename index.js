const salvar = document.getElementById("salvar");

salvar.addEventListener("click", (e) => {
  // usa o evento pra previnir o submit
  e.preventDefault();

  const inputNome = document.getElementById("nome");
  const inputEndereco = document.getElementById("endereco");
  const inputCidade = document.getElementById("cidade");
  const selectEstado = document.getElementById("estado");
  const radioCargo = document.querySelector('[name="cargo"]:checked');
  const checkboxInteresse = document.querySelectorAll(
    '[name="interesses"]:checked'
  );
  const textareaCurriculo = document.getElementById("curriculo");

  const interessesNodeList = document.querySelectorAll(
    '[name="interesses"]:checked'
  );

  let checkboxValues = [];
  checkboxInteresse.forEach((checkbox) => checkboxValues.push(checkbox.value));

  if (interessesNodeList.length <= 0 || selectEstado.value == "") {
    alert("Você precisa selecionar ao menos um interesse e um Estado");
  } else {
    let savedValues = {
      nome: inputNome.value,
      endereço: inputEndereco.value,
      cidade: inputCidade.value,
      estado: selectEstado.value,
      cargo: radioCargo.value,
      interesses: checkboxValues,
      miniCurriculo: textareaCurriculo.value,
    };

    console.log(savedValues);
  }
});
