let counter = 10; 
function countDown() {
    if (counter > 0) {
        console.log(counter); 
        counter--; 
    }
}
setInterval(countDown, 3000); 