function getDotCoor() {
    const plot_container = document.getElementById("svg-plot");
    let rect = plot_container.getBoundingClientRect();
    let y_dot = (event.clientY - rect.top);
    let x_dot = (event.clientX - rect.left);
    let y = (150 - y_dot);
    let x = (-150 + x_dot);


    let isDotAllowed = validCB();
    let result = "";
    if (isDotAllowed) {
        let R = getR();
        y = y / 120 * R;
        x = x / 120 * R;
        let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "3");
        dot.setAttribute("cx", Math.round(x_dot));
        dot.setAttribute("cy", Math.round(y_dot));
        document.getElementById("svg-plot").appendChild(dot);
        dot.setAttribute("stroke", "#AD2D2D");
        dot.setAttribute("fill", "#AD2D2D");
        dot.setAttribute("class", R);
        result = x + " " + y + " " + R;
    }
    return result;
}

function changeDotPos() {
    if (validCB()) {
        let dotsList = document.querySelectorAll("circle");
        console.log(dotsList);
        dotsList.forEach(function (dot) {
            let x_dot = parseInt(dot.getAttribute("cx"));
            let y_dot = dot.getAttribute("cy");
            console.log(x_dot);
            let R = dot.getAttribute("class");
            let y = (150 - y_dot);
            let x = (-150 + x_dot);
            y = y * R;
            x = x * R;
            R = getR();
            y = y / R;
            x = x / R;
            x_dot = x + 150;
            y_dot = 150 - y;
            dot.setAttribute("cx", Math.round(x_dot));
            dot.setAttribute("cy", Math.round(y_dot));
            dot.setAttribute("class", R);

        })
    }
}

// document.getElementById("svg-plot").onclick = getDotCoor;

function sendRequest(x, y, r) {
    console.log("1");
    let http = new XMLHttpRequest();
    console.log("2");
    let url = "controller";
    let params = "x=" + x + "&y=" + y + "&r=" + r;

    http.open('GET', url + '?' + params);

    console.log("3");
    http.onload = function () {
        document.location.href = 'index.jsp';
    };
    http.send(null);
    console.log("4");
}