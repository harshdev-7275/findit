const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
searchForm.addEventListener('submit', getResult);


function getResult(e){
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
     const searchLimit = document.getElementById('limit').value;
     if(searchInput.value === ''){
        showMessage('Please add a search term')   
     }    
     getdata(searchTerm, sortBy, searchLimit)
     e.preventDefault();   
}


function getdata(searchTerm, sortBy, searchLimit){
    let output =''
    fetch(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
 .then(res => res.json())
 .then(data => {
    test = data.data.children.map(data => data.data)
    test.forEach(post => {
      const image = post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
      output+=`
      <div class ="flex flex-col text-center items-center px-10 border  bg-shadedWhite shadow-lg" id="cards">
       <img src ="${image}">
       <div class="mt-2">
         <h5 class ="text-lg font-semibold mb-2" id="title">${post.title}</h5>
         <p class="text-start mb-3" id="content">${truncateString(post.selftext, 100)}</p>
         <a href = "${post.url}" target ="_blank" class="bg-primary text-white rounded-md px-3 hover:bg-white hover:text-primary" id= "btn">Read More</a>
       </div>
      </div>
      `;
    });
    
    document.getElementById('card').innerHTML = output;
 })
 } 

 function showMessage(message){
     const msg =  document.getElementById('error');
     msg.classList.remove('hidden')
    msg.innerHTML=(`${message}`)
    setTimeout(()=> document.querySelector('#error').remove(), 3000);  
 }
 
 function truncateString(myString, limit) {
    const shortened = myString.indexOf(' ', limit);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
  }
