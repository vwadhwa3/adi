if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  }
 
function createcard(doc){
    debugger; 
let divContainer = document.createElement('div');
divContainer.classList ='mdl-cell mdl-card mdl-shadow--4dp portfolio-card';
main.appendChild(divContainer);
let divMediaCard =document.createElement('div');
divMediaCard.classList = 'mdl-card__media';
divContainer.appendChild(divMediaCard);
let pic = document.createElement('img');
pic.classList='article-image';
pic.alt='pic';
pic.src = doc.data().link;
divMediaCard.appendChild(pic);
}
 
    // getting data
// db.collection('data').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc);
// let counter =0;
// counter = counter +1;
//         createcard(doc ,counter);

//     });
// });
 
//real time data
db.collection('data').orderBy('place').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            createcard(change.doc);
        }
    });
});
