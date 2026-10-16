(()=>{
  const bookTab=document.querySelector('#book-tab'),manageTab=document.querySelector('#manage-tab');
  const bookPanel=document.querySelector('#book-panel'),managePanel=document.querySelector('#manage-panel');
  const form=document.querySelector('#manage-booking-form'),result=document.querySelector('#manage-booking-result');
  if(!bookTab||!manageTab||!form)return;
  const switchTo=mode=>{
    const managing=mode==='manage';
    bookTab.classList.toggle('active',!managing);
    manageTab.classList.toggle('active',managing);
    bookTab.setAttribute('aria-selected',String(!managing));
    manageTab.setAttribute('aria-selected',String(managing));
    bookPanel.hidden=managing;
    managePanel.hidden=!managing;
  };
  bookTab.addEventListener('click',()=>switchTo('book'));
  manageTab.addEventListener('click',()=>switchTo('manage'));
  [bookTab,manageTab].forEach((tab,index)=>tab.addEventListener('keydown',event=>{
    if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;
    event.preventDefault();
    const next=index===0?manageTab:bookTab;
    switchTo(next===manageTab?'manage':'book');
    next.focus();
  }));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const reference=form.elements.reference.value.trim().toUpperCase();
    const surname=form.elements.surname.value.trim().toLocaleUpperCase();
    let bookings=[];
    try{bookings=JSON.parse(localStorage.getItem('yunxiang-demo-bookings')||'[]')}catch{}
    if(!Array.isArray(bookings))bookings=[];
    const booking=bookings.find(item=>item.reference===reference&&String(item.surname).toLocaleUpperCase()===surname);
    result.replaceChildren();
    const heading=document.createElement('strong'),copy=document.createElement('p');
    const english=document.documentElement.lang==='en';
    if(booking){
      heading.textContent=`${english?'Demo booking':'演示预订'} ${booking.reference}`;
      const placeNames={'昆明':'Kunming','陇川（瑞丽）':'Longchuan (Ruili)','兰坪':'Lanping','凤庆':'Fengqing'};
      const from=english?(placeNames[booking.from]||booking.from):booking.from;
      const to=english?(placeNames[booking.to]||booking.to):booking.to;
      copy.textContent=`${from} → ${to} · ${booking.date} · ${booking.flight} · ${english?'Passenger':'乘机人'} ${booking.surname}${booking.givenName?' '+booking.givenName:''}`;
      const note=document.createElement('small');
      note.textContent=english?'This record is stored only in this browser and cannot be used for real check-in, changes or refunds.':'此记录只保存在当前浏览器中，不能用于真实值机、改签或退票。';
      result.append(heading,copy,note);
    }else{
      heading.textContent=english?'No local demo booking found':'未找到本地演示预订';
      copy.textContent=english?'Check the booking reference and passenger surname. Only records created after a demo payment in this browser can be found.':'请核对预订编号和乘机人姓氏。只有在当前浏览器完成演示付款后生成的记录可查询。';
      result.append(heading,copy);
    }
    result.hidden=false;
  });
})();
