(()=>{
  const form=document.querySelector('#claim-form');
  const date=form?.querySelector('#claim-date');
  const result=document.querySelector('#claim-result');
  if(!form||!date||!result)return;
  const today=new Date();
  const localToday=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
  date.max=localToday;
  try{
    const member=JSON.parse(localStorage.getItem('yunxiang-member')||'null');
    if(member){form.querySelector('#claim-name').value=[member.surname,member.givenName].filter(Boolean).join('');form.querySelector('#claim-email').value=member.email||''}
  }catch{}
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    if(date.value>localToday){date.setCustomValidity('只能补登已完成的航班');date.reportValidity();return}
    date.setCustomValidity('');
    const fare=form.querySelector('#claim-fare');
    const points=Number(fare.value);
    const flight=form.querySelector('#claim-flight').value.trim().toUpperCase();
    const fareName=fare.selectedOptions[0].textContent.split(' · ')[0];
    result.replaceChildren();
    const heading=document.createElement('h3');heading.textContent='演示补登信息已填写';
    const summary=document.createElement('p');summary.textContent=`${flight} · ${date.value} · ${form.querySelector('#claim-from').value.trim()} → ${form.querySelector('#claim-to').value.trim()} · ${fareName}`;
    const pointsLine=document.createElement('p');pointsLine.textContent=`本次航段预计累计 ${points} 点旅程值。`;
    const note=document.createElement('p');note.textContent='这是页面演示结果；不会核验航班、保存补登记录或更新会员账户。';
    result.append(heading,summary,pointsLine,note);
    result.hidden=false;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  date.addEventListener('input',()=>date.setCustomValidity(''));
})();
