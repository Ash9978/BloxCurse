const AllMineButton = document.querySelectorAll(`.Mine`);
console.log(AllMineButton)


AllMineButton.forEach(bt => {
bt.addEventListener(`click`, (e) => {
console.log(e.target.id)
document.getElementById(e.target.id).style.backgroundColor="blue";
})
});


