const SCORE_ZERO = 0;
const TEAM_COUNT = 5;
const ROUND_COUNT = 5;
let scoreAry = Array.from({ length: TEAM_COUNT }, () => {
    return Array.from({ length: ROUND_COUNT }, () => SCORE_ZERO);
});

window.onload = () => {
    const randomBtn = document.querySelector(".random-btn");
    randomBtn.addEventListener("click", topicGet);
    scoreBuild();
};

function scoreBuild() {
    scoreFormSet();
    scoreInputListener();
}

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

    for (const teamIdx in scoreAry) {
        let tbodyTmp = "";
        let scoreTotalTmp = 0;
        thead += `<th>Round${parseInt(teamIdx) + 1}</th>`;
        for (const roundIdx in scoreAry[teamIdx]) {
            const score = scoreAry[teamIdx][roundIdx];
            scoreTotalTmp += score;
            tbodyTmp += `<td data-team="${teamIdx}" data-round="${roundIdx}" >
                            <input class="score-input" type="number" value="${score}" />
                        </td>`;
        }

        tbody += `<tr>
                    <td>Team${parseInt(teamIdx) + 1}</td>
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

function scoreInputListener() {
    const scoreInputs = document.querySelectorAll(".score-input");
    for (const scoreInput of scoreInputs) {
        scoreInput.addEventListener("change", function () {
            scoreAdd(this);
            scoreBuild();
        });
    }
}

function scoreAdd(self) {
    const thisScore = self.value;
    const parentElement = self.parentElement;
    const teamIdx = parentElement.dataset.team;
    const roundIdx = parentElement.dataset.round;
    scoreAry[teamIdx][roundIdx] = parseInt(thisScore);
}

function scoreFromLocalGet() {}

function scoreFromLocalSave() {}

function scoreFromLocalClear() {}
