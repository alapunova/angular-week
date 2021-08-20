// simple model values
// there is no data typing in js
let n = 1
// js object has curly brackets 
let complicated = {id:3, address:'here', array:[4,3,2], signed_in:false}

const fn = (x,y)=>{return x+y}

n = fn(4,2)
console.log(n, complicated)

//inject the new content into the web page
//we use back-ticks for string interpolation
let some_text = `Address: ${complicated.address} ${complicated.array[2]}`
content.innerHTML = some_text

// add an event listener to the button
const handleButton = ()=>{console.log('clicked!')}
btnDoStuff.addEventListener('click', handleButton)

//fetching dat from an API endpoint
const getData = ()=>{
    let end_point_url = 'https://swapi.dev/api'
    //we can grab whatever is the current value in the form fields
    let category = swcategory.value //'planets'
    let id = swid.value //'3'
    //NB fetch is asyncronous
    fetch(`${end_point_url}/${category}/${id}`)
    //take the returned json and convert it to a JS object
    .then((response) => {return response.json()})
    .then((data) => {console.log(data)
        // JSON.stringify converts JS objects to JSON text
        let swapi_text = JSON.stringify(data)
        //let's put all the data in the page temporalily
        swapi.innerHTML = swapi_text
        //we can grab any member of the returned data
        let n = data['name'] //square bracket syntax vs dot syntax
        swname.innerHTML = n
    })
}

btnGetAPI.addEventListener('click',getData)







// demo about ECMAScript functions
function oldWay(params){
    return params
}

// a few words about functions
// now...
const f = (x)=>{return x*x}
// we can leave out all the brackets if it's dead simple
const g = x=>x*x // implicitly returns x*x
// if there a re NO prarams or more than one, we MUST use the brackets
const h = ()=>'oh'
// if there is more than one line in the function body 
// we MUST have curly braces
const j = v=>{
    result = `${v} stuff`
    return result // explicitly returns something
}