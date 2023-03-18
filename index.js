const loadImage = async () =>{
  const URL = `https://jsonplaceholder.typicode.com/photos`;
  try{
    const res = await fetch(URL)
    const data = await res.json()
    displayData(data);
  }
  catch(error){
    console.log(error)
  }
};
const displayData = (datas) =>{
const imageContainer = document.getElementById('image-container');
datas.forEach(data => {
  console.log(data)
  const {thumbnailUrl, title} = data
  const div = document.createElement('div');
 div.classList.add('col')
  div.innerHTML = `
  <div class="card h-100">
  <img src="${thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
  `;
  imageContainer.appendChild(div)
})
}
loadImage()