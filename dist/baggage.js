(()=>{
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('#baggage-nav');
  const backdrop=document.querySelector('.nav-backdrop');
  if(!toggle||!nav||!backdrop)return;
  const setOpen=open=>{
    nav.classList.toggle('open',open);
    backdrop.hidden=!open;
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'关闭导航':'打开导航');
    toggle.textContent=open?'×':'☰';
    document.body.classList.toggle('nav-open',open);
  };
  toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
  backdrop.addEventListener('click',()=>setOpen(false));
  nav.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')setOpen(false)});
  matchMedia('(min-width:901px)').addEventListener('change',event=>{if(event.matches)setOpen(false)});
})();
