function books(title, author, pages , read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return title +' by '+ author +', '+ pages +', '+ read;
    }

}
const theHobbit = new books ("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet")
theHobbit.info();
console.log(theHobbit.info());