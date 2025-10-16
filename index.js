const OP = document.getElementById("OP")
const PL = document.getElementById("PL")
const OL = document.getAnimations("OL")
const ADD = document.getElementById("ADD")
const SUB = document.getElementById("SUB")
const DIV= document.getElementById("DIV")
const MULTI = document.getElementById("MULTI")



function sum(a, b) {
let c = a+b
OP.textContent = "" + c

}

function subtraction(a, b) {
let c= a - b
OP.textContent = " " + c

}
function multiplication(a, b) {
let c=a*b
OP.textContent = " " + c
}

function division(a, b) {
let c=a/b
OP.textContent= " " + c
}

ADD.addEventListener("click", () => {
const OK= parseInt(document.getElementById("OK").value)

const OM= parseInt(document.getElementById("OM").value)
 sum (OK, OM)
})
SUB. addEventListener("click", () => {
const OK= parseInt(document.getElementById("OK").value)

const OM= parseInt(document.getElementById("OM").value)
 subtraction (OK, OM)
})
MULTI.addEventListener("click", () => {
const OK= parseInt(document.getElementById("OK").value)

const OM= parseInt(document.getElementById("OM").value)
 multiplication (OK, OM)
})
DIV.addEventListener("click", () => {
const OK= parseInt(document.getElementById("OK").value)

const OM= parseInt(document.getElementById("OM").value)
 division (OK, OM)
})


