const sanbud_lots = {
    "LOT-1": {
      "Title": "PLAC 1",
      "Description": "Super plac o jak na razie najdłuższym opisie",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-2": {
      "Title": "PLAC 2",
      "Description": "Plac tralala",
      "Availability": "Wolny",
      "Area": "600",
    },
    "LOT-3": {
      "Title": "BUDYNEK 1",
      "Description": "Budynek obecnie poddawany jest pracom remontowym.",
      "Availability": "Czasowo niedostępny",
      "Area": "600",
    },
    "LOT-4": {
      "Title": "PLAC 3",
      "Description": "Plac tralala",
      "Availability": "Wolny",
      "Area": "600",
    },
    "LOT-5": {
      "Title": "PLAC 4",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-6": {
      "Title": "BUDYNEK 2",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-7": {
      "Title": "PLAC 5",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-8": {
      "Title": "PLAC 6",
      "Description": "Plac tralala",
      "Availability": "Wolny",
      "Area": "600",
    },
    "LOT-9": {
      "Title": "BUDYNEK 3",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-10-A": {
      "Title": "BUDYNEK 4A",
      "Description": "Główny budynek - siedziba firmy Sanbud",
      "Availability": "Zajęty na stałę",
      "Area": "600",
    },
    "LOT-10-B": {
      "Title": "BUDYNEK 4B",
      "Description": "Druga część glównego budynku - część sklepowa.",
      "Availability": "Wolny",
      "Area": "600",
    },
    "LOT-11": {
      "Title": "PLAC 7",
      "Description": "Plac tralala",
      "Availability": "Wolny",
      "Area": "600",
    },
    "LOT-12": {
      "Title": "PLAC 8",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-13": {
      "Title": "BUDYNEK 5",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-14": {
      "Title": "PLAC 9",
      "Description": "Plac tralala",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-15": {
      "Title": "BUDYNEK 6",
      "Description": "Budynek",
      "Availability": "Wynajęty",
      "Area": "600",
    },
    "LOT-16": {
      "Title": "PLAC 10",
      "Description": "Plac tralala",
      "Availability": "Wolny",
      "Area": "600",
    },
    "ROAD": {
        "Title": "DROGA WEWNĘTRZNA",
        "Description": "Droga wewnętrzna biegnąca przez cały teren Sanbudu. Łączy ulicę Targową z ulicą Kujawską.",
    },
    "LOT-4-FENCE": {
        "Title": "OGRODZENIE",
        "Description": "PLAC 3 jest ogrodzony metalowym ogrodzeniem z bramą wjazdową.",
    }
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
    let title = tooltip.querySelector("#tooltip-title");
    let description = tooltip.querySelector("#tooltip-description");
    let availability_span = tooltip.querySelector("#tooltip-availability-span");
    let area_span = tooltip.querySelector("#tooltip-area-span");
    let availability = tooltip.querySelector("#tooltip-availability");
    let area = tooltip.querySelector("#tooltip-area");

    // FILL MAIN INFO
    let lot_title = sanbud_lots[id]["Title"];
    let lot_description = sanbud_lots[id]["Description"];

    title.innerHTML = lot_title;
    description.innerHTML = lot_description;

    // FILL OPTIONAL INFO
    if  (sanbud_lots[id].hasOwnProperty('Availability')) {
        let lot_availability = sanbud_lots[id]["Availability"];
        availability.style.display = "block";
        availability_span.innerHTML = lot_availability;
    }
    else {
        availability.style.display = "none";
    }

    if  (sanbud_lots[id].hasOwnProperty('Area')) {
        let lot_area = sanbud_lots[id]["Area"];
        area.style.display = "block";
        area_span.innerHTML = lot_area;
    }
    else {
        area.style.display = "none";
    }

    // POSITION AND SHOW TOOLTIP
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY + 10 + 'px';
}
  
function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}