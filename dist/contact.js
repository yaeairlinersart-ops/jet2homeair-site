(()=>{
  const openButton=document.querySelector('#contact-open');
  const dialog=document.querySelector('#contact-dialog');
  const closeButton=document.querySelector('#contact-close');
  if(!openButton||!dialog||!closeButton)return;
  openButton.addEventListener('click',()=>dialog.showModal());
  closeButton.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target===dialog){
      const rect=dialog.getBoundingClientRect();
      if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();
    }
  });
  dialog.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>dialog.close()));
})();
