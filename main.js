const counters = document.querySelectorAll(".counters span")
const container = document.querySelectorAll(".counters")

let activated =  false;

window.addEventListener("scroll",()=>{
    /*If the page is scrolled to the containers elemetn and the counter are not activated */
    // console.log("okay")
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ){
        counters.forEach(counter =>{
            
        //set counter values to zero
            counter.innerText = 0;
        //set count variable to track count
        let count = 0;

        //Update count function
        function updateCount(){
            //gET COUNTER TARGET NUMBNER TO COUNT TO 

            const target = parseInt(counter.dataset.count);
            if(count < target){
                count++;
                counter.innerText =  count;
                setTimeout(updateCount,10)
            }
            else{
                counter.innerText =  target
            }

        }
        //Run the fintion initially
        updateCount();
        //set activated to true
        activated = true;
        });

    } else if(
        pageYOffset < container.offsetTop -container.offsetHeight - 500 || pageYOffset === 0 && activated === true){
            counters.forEach(counter =>{
                //set counter bacl to zero
                counter.innerText = 0;
            });
            //set activated to false
            activated =  false;
        }

});