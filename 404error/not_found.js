document.addEventListener("DOMContentLoaded", loaded)

function loaded() {
    messageBox = document.getElementById("message")
    const path = new URL(document.location);
    const urlParam = path.searchParams.get("url")
    console.log(urlParam)
    const url = urlParam ? new URL(`${path.origin}/#${urlParam}`) : path;
    console.log(url)
    if (url.hash) {
        messageBox.innerHTML = `${url.hash.substring(2)}<wbr/>が${url.hostname}<wbr/>の中に<wbr/>見つかりませんでした`
    }
    else {
        messageBox.innerHTML = `${url.pathname.substring(1)}<wbr/>は見つかりませんでした。<br/>パスの最初には#を使用します`
    }

    document.getElementById("busstop").addEventListener("click", busMove)
}

let isMoving = false;
function busMove() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    const bus = document.getElementById("bus")
    void bus.offsetWidth
    bus.classList.add("movebus")
    bus.addEventListener('animationend', () => {
        bus.classList.remove('movebus');
        isMoving = false;
    })
}