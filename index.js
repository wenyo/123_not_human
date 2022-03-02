window.onload = () => {
    const randomBtn = document.querySelector(".random-btn");
    randomBtn.addEventListener("click", topicGet);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function topicGet() {
    const topic = document.querySelector(".topic");
    const nounMaxIdx = noun.length - 1;
    const adjMaxIdx = adj.length - 1;
    const nounIdx = getRandomInt(nounMaxIdx);
    const adjIdx = getRandomInt(adjMaxIdx);
    const topicValue = `${adj[adjIdx]}${noun[nounIdx]}`;
    topic.innerText = topicValue;
}
