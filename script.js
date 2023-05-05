let result = [];
document.addEventListener("DOMContentLoaded", async () => {
  chargeResult()
})
function token() {
    return Math.floor(Math.random() * (25 - 1) + 1);
  }
  function date() {
    const x = new Date();
    const y = x.getDate().toString().padStart(2, '0');
    const z = (x.getMonth() + 1).toString().padStart(2, '0');
    const t = x.getFullYear();
    return `${y}/${z}/${t}`;
  }
  
  const storage = {
    token: token()
  }
  function end(token) {
    document.querySelectorAll('button').forEach(element => element.setAttribute('class', element.id))
    let z = document.querySelector('.hereskill')
    z.innerHTML = "Aucun pion supprimé pour l'instant"
    let y = document.querySelector('.lastwin')
    y.innerHTML = date() + ' — ' + token
    result.push({token: token, date: date()});
    saveResult()
    storage.token = Math.floor(Math.random() * (25 - 1) + 1)
    }

document.querySelectorAll('button').forEach(element => element.addEventListener('click', () => {
    if (element.className != 'danger' && element.className != 'success') {
    if (element.textContent != storage.token) {
        let z = document.querySelector('.hereskill')
        z.innerHTML = z.textContent.replace("Aucun pion supprimé pour l'instant", "") + ' ' + element.className
        element.setAttribute('class', 'danger')
    } else {
        alert('Bravo ! ' + element.className + ' était la bonne réponse.')
        end(element.className)
    }
}
}))
function saveResult() {
  let json = JSON.stringify(result);
  localStorage.setItem("lastgame", json);
}
function chargeResult() {
  let json = localStorage.getItem("lastgame");
  if(json === null || json === undefined) {
      localStorage.setItem("lastgame", JSON.stringify(result));
  }
  let res = JSON.parse(json);
  if(res) {
      for(const item of res) {
  let x = document.querySelector('.lastwin')
  x.innerHTML = item.date + ' — ' + item.token
      }
    }
}
