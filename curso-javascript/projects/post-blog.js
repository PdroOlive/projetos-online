
function Commentsy(author, mensage)
{
    this.author = author;
    this.mensage = mensage;
}

function PostBlog(title, mensage, author, view, comments)
{
    this.title = title;
    this.mensage = mensage;
    this.author = author;
    this.view = view;
    this.comments = comments;
    this.isOnline = false;
}
let people = [new Commentsy("Michael Ross", "Gostei da Thread"), new Commentsy("Lucy Williams", "Odiei a Thread")];
let obj = new PostBlog("Css Atividade", "Essa é uma mensagem", "Richard Collin", 2 , people);


console.log(obj); 