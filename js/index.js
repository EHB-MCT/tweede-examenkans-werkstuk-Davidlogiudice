"use strict";
 
// stap 1: haal de artikels op van de endpoint
//object aanmaken
const service = {
    initFields() {
        document.getElementById("form").addEventListener("submit", e => {
            e.preventDefault();
            let inputValue = document.getElementById("SearchField").value;
            // console.log("inputValue is de value van de invuldveld", inputValue);
            this.dataArtikel(inputValue);
        });
    },
        fetch(`https://thecrew.cc/news/read.php`) //fetch variabelen
        .then(response => {
            return response.json();
            })
            .then(data => {
                console.log(data);
                data = data.news;
                let Artikels = [];
                for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                } })
 }
 
//Alles in een klasse opslaan
class Artikels {
 constructor(IDartikel, title, content, datum, likes, imageURL) {
 this._IDartikel = IDartikel;
 this._title = title;
 this._content = content;
 this._datum = datum;
 this._likes = likes;
 this._imageURL = imageURL;
 }
}
 
function likes() {
    fetch('https://thecrew.cc/news/create.php', {
        method: 'POST',
        body: 'UUID'
        
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
        
            console.log(data)
            const html = data(data => {
              
                Artikels.forEach(Artikel => {
                let html = `<article>
                <div class="image_wrapper">
                <img src="${Artikels.imageURL}.jpg">
                </div>
                <div class="article_content_wrapper">
                <div>
                <h1>${Artikels.title}</h1><!-- titel van het boek-->
                <h3>${Artikels.content}</h3><!-- content van het artikel-->
                </div>
            
                </div>
                </article>`;
                
            });
        

            dataArtikel(){
                fetch('https://thecrew.cc/news/read.php')
                        .then(resp => {
                            console.log(response);
                    
                        })
                        .then(data => {
                            console.log(data);
                            document.getElementById("content").innerHTML = "";
                            let html = `<article>
                            <div class="image_wrapper">
                            <img src="${Artikels.imageURL}.jpg">
                            </div>
                            <div class="article_content_wrapper">
                            <div>
                            <h1>${Artikels.title}</h1><!-- titel van het boek-->
                            <h3>${Artikels.content}</h3><!-- content van het artikel-->
                            </div>
                        
                            </div>
                            </article>`;
                            document.getElementById('content').insertAdjacentHTML("beforeend", html);
                    }
                
            }
              
service.initFields();