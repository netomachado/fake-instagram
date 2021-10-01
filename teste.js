const site= "https://images.dog.ceo/breeds/pyrenees/n02111500_8042.jpg";
const site1 = site.replace("https://images.dog.ceo/breeds/", "");


const site3 = site.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
const match = 'pyrenees/n02111500_8042.jpg'.match(/\/(\w+)/);
const id = match[0]


const site2 = site1.replace(id, '')

const site4 = site2.replace(".jpg", '')


nomePost = site
raca1 = nomePost.replace("https://images.dog.ceo/breeds/", "")
raca2 = raca1.match(/\/(\w+)/);
raca3 = raca2[0]
raca4 = raca1.replace(raca3, '')
racaSite = raca4.replace(".jpg", '')
console.log(racaSite)
