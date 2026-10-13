(()=>{
  const dialog=document.querySelector('#privacy-dialog');
  if(!dialog)return;
  const storageKey='yunxiang-privacy-choice';
  const open=()=>{if(!dialog.open){dialog.showModal();document.body.classList.add('privacy-open')}};
  const close=choice=>{
    try{localStorage.setItem(storageKey,JSON.stringify({choice,updatedAt:new Date().toISOString()}))}catch{}
    dialog.close();document.body.classList.remove('privacy-open');
  };
  dialog.querySelector('.privacy-essential').addEventListener('click',()=>close('essential'));
  dialog.querySelector('.privacy-accept').addEventListener('click',()=>close('all'));
  document.querySelector('.privacy-settings-link')?.addEventListener('click',open);
  dialog.addEventListener('cancel',event=>event.preventDefault());

  let hasChoice=false;
  try{hasChoice=Boolean(localStorage.getItem(storageKey))}catch{}
  if(hasChoice)return;
  const showWhenReady=()=>{
    if(document.body.classList.contains('disclaimer-open'))return false;
    open();return true;
  };
  if(showWhenReady())return;
  const observer=new MutationObserver(()=>{if(showWhenReady())observer.disconnect()});
  observer.observe(document.body,{attributes:true,attributeFilter:['class']});
})();
