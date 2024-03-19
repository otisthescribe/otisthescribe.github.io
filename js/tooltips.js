const sanbud_lots = {
    "LOT-1": {
        "Title": "PLAC 1",
        "Description": "Plac utwardzony betonowymi płytami.",
        "Availability": "Wydzierżawiony",
        "Area": "2514",
    },
    "LOT-2": {
        "Title": "PLAC 2",
        "Description": "Plac pomiędzy ogrodzeniem a budynkiem \"Titanic\", w bezpośrednim sąsiedztwie bramy wjazdowej od ulicy Targowej.",
        "Availability": "Wolny",
        "Area": "826",
    },
    "LOT-3": {
        "Title": "BUDYNEK BIUROWY \"TITANIC\"",
        "Description": "W trakcie inwestycji.",
        "Availability": "Czasowo niedostępny",
    },
    "LOT-4": {
        "Title": "PLAC 3",
        "Description": "Plac z indywidualnym ogrodzeniem i własną bramą wjazdową.",
        "Availability": "Wolny",
        "Area": "845",
    },
    "LOT-5": {
        "Title": "PLAC 4",
        "Description": "Plac w bezpośrednim sąsiedztwie budynku przemysłowo-usługowego.",
        "Availability": "Wydzierżawiony",
        "Area": "608",
    },
    "LOT-6": {
        "Title": "BUDYNEK PRZEMYSŁOWO-USŁUGOWY",
        "Description": "Budynek z wydzieloną częścią biurową, produkcyjną i magazynową.",
        "Availability": "Wynajęty",
        "Area": "269",
    },
    "LOT-7": {
        "Title": "PLAC 5",
        "Description": "Plac utwardzony betonowymi płytami.",
        "Availability": "Wydzierżawiony",
        "Area": "926",
    },
    "LOT-8": {
        "Title": "PLAC 6",
        "Description": "Plac uposażony w wagę. W jego skład wchodzi parking do części sklepowej budynku głównego.",
        "Availability": "Wolny",
        "Area": "561",
    },
    "LOT-9": {
        "Title": "BUDYNEK GŁÓWNY",
        "Description": "Budynek podzielony na dwie części.",
    },
    "LOT-10-A": {
        "Title": "BUDYNEK GŁÓWNY: CZĘŚĆ BIUROWA",
        "Description": "Przestrzeń biurowa wraz z biurem firmy Sanbud.",
        "Availability": "Wydzierżawiony",
    },
    "LOT-10-B": {
        "Title": "BUDYNEK GŁÓWNY: CZĘŚĆ SKLEPOWA",
        "Description": "Przestrzeń przeznaczona do prowadzenia sprzedaży. W jej skład wchodzi również zaplecze z biurem oraz częścią sanitarną. Powierzchnia obiektu wynosi 250 m2 (powierzchnia usługowa oraz biuro) + 25 m2 (toaleta, prysznic, część socjalna).",
        "Availability": "Wolny",
        "Area": "275",
        "Link": "https://www.olx.pl/d/oferta/wynajme-lokal-uslugowy-w-sanoku-dabrowce-CID3-IDWlscF.html?fbclid=IwAR0N_CdyA8SMBKwey4GpYLhRsxsv_-OPv5iRei1fthr76yiq2hcaV6wwYsE"
    },
    "LOT-11": {
        "Title": "PLAC 7",
        "Description": "Duży plac z bezpośrednim dostępem do bramy wjazdowej od ulicy Kujawskiej.",
        "Availability": "Wolny",
        "Area": "1548",
        "Link": "https://www.olx.pl/d/oferta/wynajme-plac-w-sanoku-dabrowce-CID3-IDWlrEH.html?fbclid=IwAR1kAmEcy3nchEwF128CIcN1oUvBPyOjk2RBnSFsYOYSpqDliVRGK0yOO3o"
    },
    "LOT-12": {
        "Title": "PLAC 8",
        "Description": "Plac przysługujący najemcy hali magazynowej.",
        "Availability": "Wydzierżawiony",
        "Area": "190",
    },
    "LOT-13": {
        "Title": "BUDYNEK HANDLOWO-USŁUGOWY",
        "Description": "Budynek przeznaczony do prowadzenia działalności gospodarczej opartej na handlu.",
        "Availability": "Wydzierżawiony",
        "Area": "412",
    },
    "LOT-14": {
        "Title": "PLAC 9",
        "Description": "Plac parkingowy przy hali magazynowej.",
        "Availability": "Wydzierżawiony",
        "Area": "353",
    },
    "LOT-15": {
        "Title": "HALA MAGAZYNOWA",
        "Description": "Wyposażona w trzy bramy wjazdowe, posadzkę żywiczną. Hala jest pokryta blachą.",
        "Availability": "Wydzierżawiona",
        "Area": "412",
    },
    "LOT-16": {
        "Title": "PLAC 10",
        "Description": "Plac przy bramie wjazdowej od strony ulicy Kujawskiej.",
        "Availability": "Wolny",
        "Area": "533",
    },
    "ROAD": {
        "Title": "DROGA WEWNĘTRZNA",
        "Description": "Droga wewnętrzna biegnąca przez cały teren Sanbudu. Łączy ulicę Targową z ulicą Kujawską.",
    },
    "LOT-4-FENCE": {
        "Title": "OGRODZENIE",
        "Description": "Ogrodzenie otaczające PLAC 3.",
    }
};

const hoverable = document.getElementById("Hoverable");
const paths = hoverable.getElementsByTagName("path");

// Configure tooltip on hover for each element
for (const path of paths) {
    const id = path.getAttribute("id");
    // CONFIGURE ACTION ON HOVER
    if(window.matchMedia("(pointer: coarse)").matches) {
        // TOUCHSCREEN DEVICE - ONLY ONCLICK ACTION

        // CONFIGURE ACTION ON CLICK
        path.addEventListener("click", (event) => {
            sidePanel(id);
        });
    }
    else {
        // DESKTOP DEVICE - ALL ACTIONS

        // CONFIGURE ACTION ON HOVER
        path.addEventListener("mousemove", (event) => {
            showTooltip(event, id);
        });
        path.addEventListener("mouseout", hideTooltip);
        // CONFIGURE ACTION ON CLICK
        path.addEventListener("click", (event) => {
            sidePanel(id);
        });
    }

}

// Show tooltip above the plan
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
    if (sanbud_lots[id].hasOwnProperty('Availability')) {
        let lot_availability = sanbud_lots[id]["Availability"];
        availability.style.display = "block";
        availability_span.innerHTML = lot_availability;
    } else {
        availability.style.display = "none";
    }

    if (sanbud_lots[id].hasOwnProperty('Area')) {
        let lot_area = sanbud_lots[id]["Area"];
        area.style.display = "block";
        area_span.innerHTML = lot_area;
    } else {
        area.style.display = "none";
    }

    // POSITION AND SHOW TOOLTIP
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX - 10 + 'px';
    tooltip.style.top = event.pageY + 10 + 'px';
}

// Hide tooltip on mouse out
function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

function sidePanel(id) {
    let panel = document.getElementById("oferta-opis");
    let plan = document.getElementById("oferta-plan");

    // FIND HTML ELEMENTS
    let title = panel.querySelector("#panel-title");
    let description = panel.querySelector("#panel-description");
    let availability_span = panel.querySelector("#panel-availability-span");
    let area_span = panel.querySelector("#panel-area-span");
    let availability = panel.querySelector("#panel-availability");
    let area = panel.querySelector("#panel-area");
    let link = panel.querySelector("#panel-link");
    let link_a = panel.querySelector("#panel-link-a");

    // FILL MAIN INFO
    let lot_title = sanbud_lots[id]["Title"];
    let lot_description = sanbud_lots[id]["Description"];

    // SHOW OR HIDE SIDE PANEL
    if (!(panel.classList.contains("d-none")) && (title.innerHTML == lot_title)) {
        // IF VISIBLE AND THE SAME = HIDE
        panel.classList.remove("col-md-3")
        panel.classList.add("col-md-0")
        panel.classList.add("d-none")
        plan.classList.remove("col-md-9")
        plan.classList.add("col-md-12")

    }
    else {
        // OTHERWISE SHOW
        panel.classList.add("col-md-3")
        panel.classList.remove("col-md-0")
        panel.classList.remove("d-none")
        plan.classList.add("col-md-9")
        plan.classList.remove("col-md-12")
    }

    title.innerHTML = lot_title;
    description.innerHTML = lot_description;

    // FILL OPTIONAL INFO
    if (sanbud_lots[id].hasOwnProperty('Availability')) {
        let lot_availability = sanbud_lots[id]["Availability"];
        availability.style.display = "block";
        availability_span.innerHTML = lot_availability;
    } else {
        availability.style.display = "none";
    }

    if (sanbud_lots[id].hasOwnProperty('Area')) {
        let lot_area = sanbud_lots[id]["Area"];
        area.style.display = "block";
        area_span.innerHTML = lot_area;
    } else {
        area.style.display = "none";
    }

    if (sanbud_lots[id].hasOwnProperty('Link')) {
        let lot_link = sanbud_lots[id]["Link"];
        link.style.display = "block";
        link_a.setAttribute("href", lot_link);
    } else {
        link.style.display = "none";
    }
}