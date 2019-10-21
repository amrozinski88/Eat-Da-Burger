

$(".eatBurgerBtn").on("click",event=>{
    console.log(event);
    const id = event.target.value;
    
    console.log(id);
    $.ajax("/api/updateOne",{
        method: "PUT",
        data: {id}
    }).then(response=>{
        location.reload();
    });
});


$("#submitNewBurgerBtn").on("click",()=>{
    const newBurgerName = $("#submitNewBurgerInput").val().trim()
    console.log(newBurgerName)
    if(newBurgerName === ""){
        location.reload()
        return alert("Please make sure your burger has a name")
    }
    $.ajax("/api/insertOne",{
        method: "POST",
        data: {
            name: newBurgerName
        }
    }).then(response=>{
        location.reload();
    });
});

// button click for devour
// button click submit
// ajax 
