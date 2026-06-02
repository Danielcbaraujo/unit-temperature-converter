const form =
  document.getElementById("converter-form");

const result =
  document.getElementById("result");

form.addEventListener("submit", async (event) => {

  event.preventDefault();

  const value =
    document.getElementById("value").value;

  const type =
    document.getElementById("type").value;

  const from =
    document.getElementById("from").value;

  const to =
    document.getElementById("to").value;

  const response = await fetch("/convert", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      type,
      value,
      from,
      to
    })

  });

  const data = await response.json();

  result.textContent =
    `Resultado: ${data.result}`;

});