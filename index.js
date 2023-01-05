
let homeScoreEl = document.getElementById("h-score")
let guestScoreEl = document.getElementById("g-score")

let count = 0
function incrementOneH()
{
    count = 0
    count += 1
    homeScoreEl.textContent = count
}

count = 0
function incrementOneG()
{
    count = 0
    count += 1
    guestScoreEl.textContent = count
}


