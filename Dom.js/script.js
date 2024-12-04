document
    .getElementById("changeTextButton")
    .addEventListener("click", function(){
        let paragraph = document.getElementById("myParagraph");
        paragraph.textContent = "The Paragraph is Changed";
    });

// we can also use document.queryselector()

document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function(){
        let cities = document.getElementById("citiesList");
        cities.firstElementChild.classList.add("highlight");
    });

document
    .getElementById("changeOrder")
    .addEventListener("click", function(){
        let coffeetype = document.getElementById("coffeeType");
        coffeetype.textContent = "Espresso";
        coffeetype.style.backgroundColor="brown";
    })

document
    .getElementById("addNewItem")
    .addEventListener("click", function(){
        let newItem = document.createElement('li')
        newItem.textContent = "Eggs"
        document.getElementById("shoppingList").appendChild(newItem)

    })

document
    .getElementById("removeLastTask")
    .addEventListener("click", function(){
        let task = document.getElementById("tasklist")
        task.lastElementChild.remove();
        
    })

document
    .getElementById("clickMeButton")
    .addEventListener("dblclick",function(){
        alert("Dewa Here!")
    })

document
    .getElementById("teaList")
    .addEventListener("click", function(event){
        if(event.target && event.target.matches(".teaItem")){
            alert(event.target.textContent)
        }    
    })

document
    .getElementById("feedbackForm")
    .addEventListener('submit', function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback);
        document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`      
    })

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("domstatus").textContent = `DOM Fully loaded`;
})

document.getElementById("toggleHighlight")
    .addEventListener('click',function(){
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.add("highlight");
    })