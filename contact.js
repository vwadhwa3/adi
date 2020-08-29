if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  }

const form =document.querySelector('#form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        db.collection('datasave').add({
            name :form.name.value,
            email:form.email.value,
            message:form.message.value,
            time : firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
             form.name.value='';
             form.email.value='';
              form.message.value='';
            var x = document.getElementById('show');
            if (x.style.display === 'none') {
            x.style.display = 'block';
            } else {
            x.style.display = 'none';
            }

            setInterval(function(){ x.style.display = 'none'; }, 3000);
            console.log("Message Sent Successfully  !");
        })
        .catch(function(error) {
            var y = document.getElementById('error');
            if (y.style.display === 'none') {
            y.style.display = 'block';
            } else {
            y.style.display = 'none';
            }

            setInterval(function(){ y.style.display = 'none'; }, 3000);
            console.error("Error   ", error);
        });
    })

 

