const SCORE_ZERO = 0;
const TEAM_COUNT = 5;
const ROUND_COUNT = 5;
let scoreAry = Array.from({ length: TEAM_COUNT }, () => {
    return Array.from({ length: ROUND_COUNT }, () => SCORE_ZERO);
});

console.log(scoreAry);

window.onload = () => {
    const randomBtn = document.querySelector(".random-btn");
    randomBtn.addEventListener("click", topicGet);
    scoreFormSet();
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

function scoreFormSet() {
    const scoreThead = document.querySelector(".score thead");
    const scoreTbody = document.querySelector(".score tbody");
    let thead = "";
    let tbody = "";
    let totalScore = "";

    for (const teamIdx in scoreAry) {
        let tbodyTmp = "";
        let scoreTotalTmp = 0;
        thead += `<th>Team${parseInt(teamIdx) + 1}</th>`;
        for (const score of scoreAry[teamIdx]) {
            scoreTotalTmp += score;
            tbodyTmp += `<td>
                            <input type="number" value="${score}" />
                        </td>`;
        }

        tbody += `<tr>
                    <td>Round${parseInt(teamIdx) + 1}</td>
                    ${tbodyTmp}
                    <td>${scoreTotalTmp}</td>
                </tr>`;
    }

    thead = `<thead>
                <tr>
                    <th></th>
                    ${thead}
                    <th>Total</th>
                </tr>
            </thead>`;
    tbody = `<tbody>${tbody}</tbody>`;
    scoreThead.innerHTML = thead;
    scoreTbody.innerHTML = tbody;
}

function scoreFromLocalGet() {}

function scoreFromLocalSave() {}

function scoreFromLocalClear() {}

function scoreAdd() {}
