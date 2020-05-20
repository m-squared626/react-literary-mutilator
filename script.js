// Change text color of first paragraph
function changeTextColor () {
  document.getElementById('chgTextColor').style.color = 'red'
}

const resetTextColor = () => {
  document.getElementById('chgTextColor').style.color = 'black'
}

// Change font of second paragraph
function changeFont () {
  document.getElementById('chgFont').style.fontFamily = 'cursive'
}

const resetFont = () => {
  document.getElementById('chgFont').style.fontFamily = ''
}

// Find and replace of third paragraph copied from answer script js file
function findReplace (event) {
  event.preventDefault()

  const text =document.getElementById("find-replace").innerHTML

  const searchTerm = document.getElementById("text-find").value

  const replacementTerm = document.getElementById("text-replace").value

  const headAche = new RegExp(searchTerm, "gi")
  const newText = text.replace(headAche, replacementTerm)

  document.getElementById("find-replace").innerText = newText

}