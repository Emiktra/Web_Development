const triangleData = document.getElementById("triangleInput");
const sendInfoBtn = document.getElementById("button");
const resultContainer = document.getElementById("main");

sendInfoBtn.addEventListener("click", ()=>{
    let dat = triangleData.value.split(" ")
    if(dat.length < 3) {dat =dat.join().split(",")}
    let data = []
    for (i=0; i< 3;i++) {data.push(dat[i].replace(",", ""))}
    if(data.length < 3) {alert("You must provide exactly 3 values")}
    else{for (i = 0; i < data.length; i++){if (data[i] < 1 || isNaN(data[i])){alert("No value can be below zero and must be a number"); break}
    else{createTriangle(data); break}}}
})

const createTriangle=(triangle)=>{
    // check if it is a valid triangle
    if((parseFloat(triangle[1])+parseFloat(triangle[2]))< parseFloat(triangle[0]) || (parseFloat(triangle[0])+parseFloat(triangle[2]))< parseFloat(triangle[1]) || (parseFloat(triangle[1])+parseFloat(triangle[0]))< parseFloat(triangle[2])){
        setMainInnerHTML("Invalid Triangle", triangle[0], triangle[1], triangle[2])
    } else if((parseFloat(triangle[1])+parseFloat(triangle[2]))== parseFloat(triangle[0]) || (parseFloat(triangle[0])+parseFloat(triangle[2]))== parseFloat(triangle[1]) || (parseFloat(triangle[1])+parseFloat(triangle[0]))== parseFloat(triangle[2])){
        setMainInnerHTML("Degenerate Triangle", triangle[0], triangle[1], triangle[2])}
    else if(triangle[1]==triangle[0] && triangle[1]==triangle[2]){setMainInnerHTML("Equilateral Triangle", triangle[0], triangle[1], triangle[2])}
    else if(triangle[1]==triangle[0] || triangle[0]==triangle[2] || triangle[1]==triangle[2]) {setMainInnerHTML("Isosceles  Triangle", triangle[0], triangle[1], triangle[2])}
    else {setMainInnerHTML("Scalene Triangle", triangle[0], triangle[1], triangle[2])}
}

const setMainInnerHTML=(triangleType, side1, side2, side3)=>{
    console.log(triangleType, side1, side2, side3)

    resultContainer.innerHTML = `
    <h1 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;">${triangleType}</h1>
        <div>
            <div style="display: flex; flex-flow: row nowrap; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            ">
                <h3 style="font-weight: 200;">Line 1</h3>
                <h4 style="font-weight: 400; margin-left: 30px;">${side1}</h4>
            </div>
            <div style="display: flex; flex-flow: row nowrap; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            ">
                <h3 style="font-weight: 200;">Line 2</h3>
                <h4 style="font-weight: 400; margin-left: 30px;">${side2}</h4>
            </div>
            <div style="display: flex; flex-flow: row nowrap; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            ">
                <h3 style="font-weight: 200;">Line 3</h3>
                <h4 style="font-weight: 400; margin-left: 30px;">${side3}</h4>
            </div>
        </div>`

}