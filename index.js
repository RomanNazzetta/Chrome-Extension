let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/roman-nazzetta-38173a1b7/"}
]


tabBtn.addEventListener("click", function(){
    console.log(tabs[0].url)
})


function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myleads = []
    render(myleads)
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})