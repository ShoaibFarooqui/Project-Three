const CSV = "https://raw.githubusercontent.com/ShoaibFarooqui/Project-Three/Vanat/cleaned_project3.csv";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        //console.log(rows);
        processData(rows);
    });
}

function processData(allRows) {
    let x = [];
    let y1 = [];
    let y2 = [];
    let row;

    let i = 0;
    while (i < allRows.length) {
        row = allRows[i];
        x.push(row["Country"]);
        y1.push(row["Total_Fatal_Injuries"]);
        y2.push(row["Total_Uninjured"]);
        i += 1;
    }

    makePlotly(x,y1,y2);
}

function makePlotly(x, y1 ,y2) {
    let traces = [
        {
            x: x,
            y: y1,
            name: "Fatal"

        }, 
        {
            x: x,
            y: y2,
            name: "Uninjured"
        }
    ];


    let layout = {
        title: "Injuries per State",
        yaxis: {
            range: [0, 800]
        },
    };

    Plotly.newPlot("plot", traces, layout);
    
}

plotFromCSV();