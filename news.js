// api =  
console.log("welcome to praj's world")
let newsAccordion = document.getElementById('newsAccordion')

const xhr = new XMLHttpRequest();
xhr.open('get', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=96a7ccac434c476481c904b588503384', true);

xhr.onload = function () {
    if (this.status === 200) {
        json = JSON.parse(this.responseText)
        console.log(json)
        let article = json.articles;
        console.log(article)

        let newsHtml = '';
        article.forEach((element , index ) => {
            let news = `<div class="card">
        <div class="card-header" id="heading${element.title} ">
        <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse"> 
             <b>Breaking News ${index+1} :   ${element['title' ]} 
            </button>
        </h5>
        </div>
        
        <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#newsAccordion">
        <div class="card-body">
             ${element['content']} 
             <a href="${element['url']}">Read more for here</a>
        </div>
        </div>
        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml
    }

    else {
        console.log('some error occured')
    }

}

xhr.send();


