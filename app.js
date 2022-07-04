const btn = document.querySelector("#randomize");
let adviceNumber = document.querySelector("#adviceNumber");
let advice = document.querySelector(".mContainer__advice");

window.onload = addAdvice;
btn.addEventListener("click", addAdvice);

async function reqAdvice() {
  const req = await axios.get("https://api.adviceslip.com/advice");
  return req.data.slip;
}

async function addAdvice() {
  const ranAdvice = await reqAdvice();
  let id = ranAdvice.id.toString().split("");
  id = id.join(" ");
  adviceNumber.innerText = id;
  advice.innerText = `"${ranAdvice.advice}"`;
}
