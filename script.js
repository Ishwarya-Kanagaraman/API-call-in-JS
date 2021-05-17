fetch('https://609e2a6033eed80017957df0.mockapi.io/users',{method:'GET'})
  .then(data=>data.json())
  
 .then(data=>{
  
  for(var i=0;i<data.length;i++){
    const div= document.createElement('div');
    div.setAttribute('class','container ');


    //for text
    const p=document.createElement('h3');
    p.innerText=data[i].name;
   

    // for image
    const img=document.createElement('img');
    img.setAttribute('class','img');
    img.setAttribute('src',data[i].avatar);
    div.append(img);

    //for delete
    // 
    const button = document.createElement("button");
     button.innerText = 'Delete'
     button.addEventListener('click', function(){
     document.body.removeChild(div)
   
  })
  div.append(p);
  div.append(button);
  document.body.append(div);
}
 })
// fetch('https://609e2b3033eed80017957e97.mockapi.io/user', {method: 'GET'})
//   .then(data => data.json())
//   .then(x => {
//    for(let i =0 ; i <x.length ;i++){
    
//     const newDiv = document.createElement("div");
//   // and give it some content
//     const newContent = document.createElement('h3');
//   // add the text node to the newly created div
//     newContent.innerText = x[i].name;


//    //for img tag 
//     img = document.createElement('img');
//     img.setAttribute('class','space');
//     img.src = x[i].avatar;
//     newDiv.append(img);
        
//     // Delete 
//     const button = document.createElement("button");
//     button.innerText = 'Delete'
//     button.addEventListener('click', function(){
//       document.body.removeChild(newDiv)
//     })

//     newDiv.appendChild(newContent);
//     newDiv.append(button)
//     document.body.appendChild(newDiv)
     
     
//    }
//  })
