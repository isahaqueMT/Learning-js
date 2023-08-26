let menu = document.querySelector("#menu");

let newMenu = ["Service", "About", "Contact US"];

let final = newMenu.map((newMenu)=>{
    let li = document.createElement("li");
    li.textContent = newMenu;
    return li;
})

menu.append(...final);




let serial = document.querySelector("#serial");

let serialNumber = ["Second", "Third", "Fourth"];

let finalNumber = serialNumber.map((serialNumber)=>{
    let li = document.createElement("li");
    li.textContent = serialNumber;
    return li;
});

serial.prepend(...finalNumber);
