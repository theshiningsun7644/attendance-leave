  
  const scriptURL = 'https://script.google.com/macros/s/AKfycby1MIaOeONRGHJSXcMxHNkp3s2KLaK8E9sI-DxTRRmUVwuLpNv-KGtSHOJ2DV3QijF9ZA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  





function Export2Doc(element, filename = '') {

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
  
    var html = preHtml + document.getElementById(element).innerHTML + postHtml;
  
    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
  
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
  
  
    filename = filename ? filename + '.doc' : 'document.doc';
  
  
    var downloadLink = document.createElement("a");
  
    document.body.appendChild(downloadLink);
  
    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
  
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();
    }
  
    document.body.removeChild(downloadLink);
  }
  

  
  const submit=()=>{
    let name = document.getElementById("name").value;
      let age = document.getElementById("age").value;
      let state = document.getElementById("state").value;
      let time = document.getElementById("time").value;
  
  
    let newArray = [name,age,state,time];
    newArray.forEach((item)=>{
        var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    table.appendChild(li);
    })
    form.reset(); 
  }
  
  