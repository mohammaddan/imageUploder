var file_num=0;
document.body.onload = function () {
    var el = document.getElementsByClassName('file-select');
    for (i = 0; i < el.length; i++) {
        el[i].nextElementSibling.getElementsByTagName('div')[1].onclick=function(){
           this.parentNode.previousElementSibling.click();
        }
    }
}
function addPic(f){
    bimg=document.getElementsByClassName('img-basket')[0];
    files_label=bimg.nextElementSibling.nextElementSibling.getElementsByTagName("div")[0];
    if (file_num){
        files_label.innerHTML=++file_num+" files will be upload";
    }
    else{
        files_label.innerHTML=f.files[0].name;
        file_num++;
    }
    dv=document.createElement('div');
    dv.className="image-holder";
    img=document.createElement('img');
    img.className="image1";
    img.src=window.URL.createObjectURL(f.files[0]);
    p=document.createElement("p");
    p1=document.createElement("p");
    br=document.createElement("br");
    dv_zoom=document.createElement("div");
    dv_del=document.createElement("div");
    dv_zoom.className="btn_zoom";
    dv_del.className="btn_del";
    dv_zoom.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>';
    dv_del.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';

    p.className="image-info";
    p1.className="image-info";
    p.innerText=f.files[0].name;
    p1.innerText="size : " +Math.round(f.files[0].size/1000)+" KB";
    dv.appendChild(img);
    dv.appendChild(br);
    dv.appendChild(dv_zoom);
    dv.appendChild(dv_del);
    dv.appendChild(p);
    dv.appendChild(p1);
    bimg.appendChild(dv);
    dv_zoom.addEventListener('click',function(){
        image_fullscreen(this);
    });
    dv_del.addEventListener('click',function(){
        image_delete(this);
    });
}
function image_fullscreen(img){
    img1=img.parentNode.firstChild;
    document.getElementsByClassName("img-upload")[0].style.filter="blur(5px)";
    // document.getElementsByClassName("img-upload")[0].style.filter="grayscale(80%)";
    document.getElementById("image_fullscreen").src=img1.src;
    document.getElementById("dv_fullscreen").style.display="block";
}
function image_delete(img){
    img.parentNode.parentNode.removeChild(img.parentNode);
    files_label.innerHTML=--file_num+" files will be upload";
}
function close_fullscreen(){
    document.getElementsByClassName("img-upload")[0].style.filter="blur(0px)";
    document.getElementById("dv_fullscreen").style.display="none";
}
