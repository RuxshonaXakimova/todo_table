let form = document.forms.todo
let input_name = document.querySelector('.name')
let input_age = document.querySelector('.age')
let table = document.querySelector('table')
let modal_main = document.querySelector('.modal_main')
let form_modal_name = document.forms.form_modal_name
let form_modal_age = document.forms.form_modal_age
let modal_input_name = form_modal_name.querySelector('input')
let modal_input_age = form_modal_age.querySelector('input')
let modal_cancel_btn = document.querySelector('.cancel')
let modal_change_btn = document.querySelector('.change') 


modal_main.classList.add('none')
// d
let arr = []
// let new_name_arr = []


form.onsubmit = (e) =>{
    e.preventDefault();

    let info = {
        no: arr.length+1,
        name: input_name.value,
        year: input_age.value,
        done: false,
    }

    arr.push(info)

    obrabotay(arr)

}

obrabotay(arr)

function obrabotay(arr) {
    
    for(let item of arr) {
        if(item.done == false){
        // a
        let tbody = document.createElement('tbody')
        let tbody_tr = document.createElement('tr')
        let td_No = document.createElement('td')
        let td_name = document.createElement('td')
        let td_year = document.createElement('td')
        let td_actions = document.createElement('td')
        let button_change = document.createElement('button')
        let button_change_img = document.createElement('img')
        let button_delete = document.createElement('button')
        let button_delete_img = document.createElement('img')


        // b
        td_No.innerHTML = item.no
        td_name.innerHTML = item.name
        td_year.innerHTML = new Date().getFullYear() - item.year
        button_change.classList.add('change')
        button_delete.classList.add('delete')
        button_change_img.src = "./img/icons8-редактировать-64.png"
        button_change_img.alt = ""
        button_delete_img.src = "./img/icons8-удалить-50.png"
        button_delete_img.alt = ""


        // c
        tbody.append(tbody_tr)
        tbody_tr.append(td_No, td_name, td_year, td_actions)
        td_actions.append(button_change, button_delete)
        button_change.append(button_change_img)
        button_delete.append(button_delete_img)

        table.append(tbody)
        
        item.done = true

        // new_name_arr.push(td_name)
        

        button_change.onclick = () => {
            modal_main.classList.remove('none')
        }

        modal_change_btn.onclick = () => {
            item.name = modal_input_name.value
            item.year = modal_input_age.value
            
            td_name.innerHTML = item.name
            td_year.innerHTML = new Date().getFullYear() - item.year
            // modal_main.classList.add('none')
            // new_name_arr[arr.indexOf(item)].innerHTML = item.name
        }

        modal_cancel_btn.onclick = () => {
            modal_main.classList.add('none')
        }

        button_delete.onclick = () => {
            arr.splice(arr.indexOf(item), 1)
            tbody.remove()
        }

        

        } else {
            null
        }
        
    }

   
}
