window.onload = ()=> {
    let formid = document.getElementById("empForm")
    formid.addEventListener('submit', (e)=> {
        e.preventDefault()
        let id = document.getElementById("id").value
        let name = document.getElementById("name").value
        let extension = document.getElementById("ext").value
        let email = document.getElementById("email").value
        let d= document.getElementById("department")
        let department=d.options[d.selectedIndex].text
        console.log(`ID:${id}`)
        console.log(`Name:${name}`)
        console.log(`Extension:${extension}`)
        console.log(`Email:${email}`)
        console.log(`Department:${department}`)
    })}
