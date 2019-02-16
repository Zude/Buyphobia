const formElem = document.querySelector('form');
const resultHostElem = document.querySelector('#cartElem');
const reloadButton = document.querySelector('#reloadButton');




const sendAndEmbedRequest = event => {

if (event) {
    event.preventDefault();
  }


  
  const req = new XMLHttpRequest();
  req.addEventListener('loadend', _ => {
    if (req.status === 200) {
      resultHostElem.innerHTML = req.responseText;
    }
  }); 



  const formData = new FormData(formElem);
 console.log(formData.getAll("artikelName"));
  console.log(formData.getAll("amount"));

  req.open(formElem.method, formElem.action);
  req.send(formData);

}

const sendNew = event => {

if (event) {
    event.preventDefault();
  }


  
  const req = new XMLHttpRequest();
  req.addEventListener('loadend', _ => {
    if (req.status === 200) {
      resultHostElem.innerHTML = req.responseText;
    }
  }); 



  const formData = new FormData(formElem);
 console.log(formData.getAll("artikelName"));
  console.log(formData.getAll("amount"));

  req.open(formElem.method, "/reload");
  req.send(formData);

}

sendAndEmbedRequest();

document.addEventListener('DOMContentLoaded', sendAndEmbedRequest);

formElem.addEventListener("submit",sendNew);
reloadButton.addEventListener("click",sendAndEmbedRequest);





