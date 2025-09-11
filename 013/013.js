
this.onload = ()=>{ 
   
    const body = document.querySelector('body');

    const title = document.createElement('h1');
   

    title.textContent = 'hello, I am addded by code !';
    const mySpan = document.createElement("span");
    mySpan.textContent = "(span)";
    title.appendChild(mySpan);
   
    body.appendChild(title);
    const nwanted = document.querySelector('em');
    nwanted.remove();
}   
