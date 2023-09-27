console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

a=document.body.firstChild

console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibiling)

let b=document.body
console.log(a.firstElementChild)

let bodybgcolor=() =>
{
    document.body.firstElementChild.style.background="green"
}