function getMarkdownFormat(){
    // title
    var title = document.title;
    title = title.split(']')[1];
    title = title.slice(1,title.length);
    
    // author
    var authors = document.getElementsByClassName("authors");
    var allauthors = authors[0].getElementsByTagName("a");
    var firstauthor = authors[0].getElementsByTagName("a")[0].innerHTML;
    
    if (allauthors.length == 1){
        firstauthor = allauthors[0].innerHTML;
    }else if (allauthors.length == 2){
        firstauthor = allauthors[0].innerHTML.split(" ")[1] + "&" + allauthors[1].innerHTML.split(" ")[1];
    }else{
        firstauthor = allauthors[0].innerHTML.split(" ")[1] + "+";
    }

    // URL
    var url = location.href;

    // output
    var formark = `- [${title} [${firstauthor} ]](${url})`;
    
    var dateline = document.getElementsByClassName("dateline")[0];
    document.getElementsByClassName("dateline")[0].innerHTML = `${dateline.textContent} <button  id="copy_btn">Copy</button>`;
    var btn = document.getElementById("copy_btn")
    btn.addEventListener("click", function(){
        navigator.clipboard.writeText(formark)
    })
}

getMarkdownFormat()
