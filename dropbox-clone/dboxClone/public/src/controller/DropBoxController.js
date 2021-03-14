class DropBoxController {

  constructor(){

    this.btnSendFileEL = document.querySelector('#btn-send-file');
    this.inputFileEL = document.querySelector('#files');
    this.snackModalEl = document.querySelector('#react-snackbar-root');

    this.initEvents();

  }

  initEvents(){

    this.btnSendFileEL.addEventListener('click', event => {

      this.inputFileEL.click();

    });

    this.inputFileEL.addEventListener('change', event => {


      this.uploadTask(event.target.files);

      this.snackModalEl.style.display = 'block';

    });

  }

  uploadTask(files){

    let promises = [];

    [...files].forEach(file =>{

      promises.push(new Promise((resolve, reject) => {

        let ajax = new XMLHttpRequest();

        ajax.open('POST', '/upload');

        ajax.onload = event => {

          try {

            resolve(JSON.parse(ajax.responseText));

          } catch (e) {

            reject(e);

          }

        };

        ajax.onerror = event => {

          reject(event);

        };

        let formData = new FormData();

        formData.append('input-file', file );

        ajax.send();

      }));

    });

    return Promise.all(promises);

  }

}