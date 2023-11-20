const textareaEl = document.getElementById('textarea')
const totalEl = document.getElementById('total')
const remainingEl = document.getElementById('remaining')

textareaEl.addEventListener("keyup", ()=>{
    //console.log(true);
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalEl.innerText=textareaEl.value.length;
    remainingEl.innerText=textareaEl.getAttribute('maxlength') - textareaEl.value.length;
}



























