let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
function change_count(){
    count++;
    countEl.textContent = count;
}
function save_changes(){
    saveEl.textContent += count +  " - ";
    countEl.textContent = 0 ;
    count = 0;
    // console.log(count);
}