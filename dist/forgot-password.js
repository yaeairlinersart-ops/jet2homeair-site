(()=>{
  const form=document.querySelector('#recovery-form');
  const result=document.querySelector('#recovery-result');
  if(!form||!result)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    result.hidden=false;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
})();
