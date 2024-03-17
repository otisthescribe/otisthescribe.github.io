const LOT2 = document.getElementById("LOT-2");
LOT2.addEventListener("mousemove", (event) => {
    showTooltip(event, "TEST")
});
LOT2.addEventListener("mouseout", hideTooltip);

function showTooltip(evt, text) {
    let tooltip = document.getElementById("lot-tooltip");
    let ID = tooltip.getElementsByTagName("h5")[0];
    ID.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX + 10 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById("lot-tooltip");
    tooltip.style.display = "none";
}

// HOVERABLE

