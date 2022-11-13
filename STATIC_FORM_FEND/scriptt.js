const form = document.getElementById('form1');

form.addEventListener('submit',saveContent);
const ul = document.getElementById('userlist');


window.addEventListener('DOMContentLoaded',()=>{

        //the result of the axios call is an object/promise , we acess the data part using res.data
        axios.get("http://localhost:4000/")
        .then((res)=>{

                console.log(res.data);
                for(let i=0 ;i < res.data.users.length; i++){

                        displayUser(res.data.users[i]);
                }
        });
        
})
function saveContent(event){

            event.preventDefault();
            let myobj = {

                name : event.target.name.value,
                email : event.target.eid.value,
                phone : event.target.pno.value,
                calltime : event.target.dt.value

            }
           
            let myobj_serial = JSON.stringify(myobj);
            axios.post("http://localhost:4000/user/adduser",myobj)
            .then((res)=>{
                console.log(res);
                displayUser(myobj)
            })
            .catch((err)=>console.log(err));
        
           
            
 }

function  displayUser(user){

         
         const newlistitem = document.createElement('li');
         newlistitem.setAttribute('data-email',user.email);
         newlistitem.innerHTML = `${user.name} ${user.email} <button onclick = deleteUser('${user.email}')>Delete User</button>
         <button onclick = editUser('${user.name}','${user.email}','${user.phone}')>Edit User</button>`;
         ul.appendChild(newlistitem);


} 
            
function deleteUser(email){

        const userTodel = ul.querySelector('[data-email="'+email+'"]');
        axios.delete("http://localhost:4000/user/deleteuser/"+email)
        .then(userTodel.remove())
        .catch(err=>console.log(err));
      
}
            

function editUser(name,email,phone){

        document.getElementById('fname').value = name;
        document.getElementById('eid').value = email;
        document.getElementById('pno').value = phone;
        //delete user
        deleteUser(email);

}
            

            
