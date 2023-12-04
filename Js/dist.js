
// ---------------place one img ----------------

const mainImgOne = document.getElementById('mainImgOne')
const smallImgOne = document.getElementsByClassName('smallImgOne')
console.log(mainImgOne,smallImgOne)

smallImgOne[0].onmouseover = () => mainImgOne.src = smallImgOne[0].src;
smallImgOne[1].onmouseover = () => mainImgOne.src = smallImgOne[1].src;
smallImgOne[2].onmouseover = () => mainImgOne.src = smallImgOne[2].src;
smallImgOne[3].onmouseover = () => mainImgOne.src = smallImgOne[3].src;

// ---------------place Two img ----------------

const mainImgTwo = document.getElementById('mainImgTwo')
const smallImgTow = document.getElementsByClassName('smallImgTow')
console.log(mainImgTwo,smallImgTow)

smallImgTow[0].onclick = () => mainImgTwo.src = smallImgTow[0].src;
smallImgTow[1].onclick = () => mainImgTwo.src = smallImgTow[1].src;
smallImgTow[2].onclick = () => mainImgTwo.src = smallImgTow[2].src;
smallImgTow[3].onclick = () => mainImgTwo.src = smallImgTow[3].src;

// ---------------place Three img ----------------

const mainImgThree = document.getElementById('mainImgThree')
const smallImgThree = document.getElementsByClassName('smallImgThree')
console.log(mainImgThree,smallImgThree)

smallImgThree[0].onclick = () => mainImgThree.src = smallImgThree[0].src;
smallImgThree[1].onclick = () => mainImgThree.src = smallImgThree[1].src;
smallImgThree[2].onclick = () => mainImgThree.src = smallImgThree[2].src;
smallImgThree[3].onclick = () => mainImgThree.src = smallImgThree[3].src;

// ---------------place Four img ----------------

const mainImgFour = document.getElementById('mainImgFour')
const smallImgFour = document.getElementsByClassName('smallImgFour')
console.log(mainImgFour,smallImgFour)

smallImgFour[0].onclick = () => mainImgFour.src = smallImgFour[0].src;
smallImgFour[1].onclick = () => mainImgFour.src = smallImgFour[1].src;
smallImgFour[2].onclick = () => mainImgFour.src = smallImgFour[2].src;
smallImgFour[3].onclick = () => mainImgFour.src = smallImgFour[3].src;

