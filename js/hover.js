const sanbud_lots = {
  "LOT-1": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-2": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-3": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-4": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-5": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-6": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-7": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-8": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-9": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-10": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-11": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-12": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-13": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-14": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-15": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
  "LOT-16": {
    "Title": "PLAC 1",
    "Description": "Plac tralala",
    "Availability": "Wynajęty",
    "Area": "600",
  },
};


const hoverable = document.getElementById("Hoverable");
const paths = hoverable.getElementsByTagName("path");

for (const path of paths) {
  const id = path.getAttribute("id");
  path.addEventListener("mousemove", (event) => {
    showTooltip(event, id);
  });
  path.addEventListener("mouseout", hideTooltip);
}

function showTooltip(event, id) {
  let tooltip = document.getElementById("tooltip");

  // FIND HTML ELEMENTS
  let title = tooltip.querySelector("#tooltip-title")[0];
  let description = tooltip.querySelector("#tooltip-description")[0];
  let availabilty = tooltip.querySelector("#tooltip-availability")[0];
  let area = tooltip.querySelector("#tooltip-area")[0];

  // GET LOTS INFO
  let lot_title = sanbud_lots[id]["Title"];
  let lot_description = sanbud_lots[id]["Description"];
  let lot_availability = sanbud_lots[id]["Availability"];
  let lot_area = sanbud_lots[id]["Area"];

  // FILL OUT THE DETAILS
  title.innerHTML = lot_title;
  description.innerHTML = lot_description;
  availability.innerHTML = lot_availability;
  area.innerHTML = lot_area;
  
  // POSITION AND SHOW TOOLTIP
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}