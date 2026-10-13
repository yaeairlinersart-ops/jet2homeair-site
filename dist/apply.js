const params=new URLSearchParams(location.search);
const job={title:params.get('title')||'飞行运行助理',department:params.get('department')||'运行控制',location:params.get('location')||'昆明',level:params.get('level')||'2027届校招'};
document.querySelector('#job-title').textContent=job.title;
document.querySelector('#job-department').textContent=job.department;
document.querySelector('#job-meta').textContent=`${job.location} · ${job.level}`;

const identityButton=document.querySelector('#identity-button');
const identityStatus=document.querySelector('#identity-status');
let holdTimer=null,verified=false;
function readSavedProfile(){
  const candidates=[];
  for(const [storage,key] of [[localStorage,'yunxiang-member'],[sessionStorage,'yunxiang-passenger']]){
    try{const value=JSON.parse(storage.getItem(key)||'null');if(value)candidates.push(value)}catch{}
  }
  return candidates[0]||{};
}
function completeIdentity(){
  clearTimeout(holdTimer);holdTimer=null;verified=true;
  identityButton.classList.remove('holding');identityButton.classList.add('verified');
  identityButton.querySelector('b').textContent='身份已建立';identityButton.querySelector('small').textContent='可以填写并投递';
  const profile=readSavedProfile();
  const name=profile.name||profile.fullName||profile.passengerName||'';
  const phone=profile.phone||profile.mobile||'';
  const email=profile.email||'';
  if(name)document.querySelector('#full-name').value=name;
  if(phone)document.querySelector('#phone').value=phone;
  if(email)document.querySelector('#email').value=email;
  const identityId=`YX-ID-${Date.now().toString(36).slice(-6).toUpperCase()}`;
  identityStatus.textContent=`身份已建立 · ${identityId}${name?' · 已带入浏览器中的现有资料':' · 请继续补充基本信息'}`;
  identityStatus.classList.add('success');
}
function startHold(event){
  if(verified||holdTimer)return;
  if(event.type==='keydown'&&!['Enter',' '].includes(event.key))return;
  event.preventDefault();identityButton.classList.add('holding');
  holdTimer=setTimeout(completeIdentity,2000);
}
function cancelHold(event){
  if(event?.type==='keyup'&&!['Enter',' '].includes(event.key))return;
  if(!holdTimer)return;clearTimeout(holdTimer);holdTimer=null;identityButton.classList.remove('holding');
  identityStatus.textContent='长按时间不足，请按住 2 秒';
}
identityButton.addEventListener('pointerdown',startHold);
['pointerup','pointercancel','pointerleave'].forEach(type=>identityButton.addEventListener(type,cancelHold));
identityButton.addEventListener('keydown',startHold);identityButton.addEventListener('keyup',cancelHold);
identityButton.addEventListener('contextmenu',event=>event.preventDefault());

const form=document.querySelector('#application-form'),screening=document.querySelector('#ai-screening'),result=document.querySelector('#application-result'),screeningStatus=document.querySelector('#screening-status');
form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!verified){identityStatus.textContent='请先长按上方按键建立身份';identityStatus.classList.remove('success');identityButton.focus();return}
  if(!form.reportValidity())return;
  const submitButton=form.querySelector('button[type="submit"]');submitButton.disabled=true;
  document.querySelector('#application-number').textContent=`Offer 编号 · YX-${new Date().getFullYear()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  document.querySelector('#offer-name').textContent=document.querySelector('#full-name').value.trim();
  document.querySelector('#offer-job').textContent=job.title;
  screeningStatus.textContent='正在阅读基本信息与相关经历…';screening.showModal();
  setTimeout(()=>screeningStatus.textContent='正在匹配岗位能力与发展方向…',900);
  setTimeout(()=>screeningStatus.textContent='筛选完成，正在生成结果…',2100);
  setTimeout(()=>{screening.close();result.showModal();submitButton.disabled=false},3000);
});
const letterDialog=document.querySelector('#offer-letter-dialog'),letter=document.querySelector('#offer-letter');
result.querySelector('button').addEventListener('click',()=>{
  document.querySelector('#letter-name').textContent=document.querySelector('#full-name').value.trim();
  document.querySelector('#letter-job').textContent=job.title;document.querySelector('#letter-department').textContent=job.department;
  document.querySelector('#letter-location').textContent=job.location;document.querySelector('#letter-level').textContent=job.level;
  document.querySelector('#letter-date').textContent=new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'long',day:'numeric'}).format(new Date());
  result.close();letterDialog.showModal();
});
result.addEventListener('cancel',event=>event.preventDefault());
screening.addEventListener('cancel',event=>event.preventDefault());
letterDialog.addEventListener('cancel',event=>event.preventDefault());
document.querySelector('.close-letter').addEventListener('click',()=>location.href='careers.html');
document.querySelector('.print-offer').addEventListener('click',()=>window.print());
document.querySelector('.download-offer').addEventListener('click',()=>{
  const styles=[...document.styleSheets].map(sheet=>{try{return [...sheet.cssRules].map(rule=>rule.cssText).join('\n')}catch{return''}}).join('\n');
  const html=`<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><title>耀天航空 Offer</title><style>${styles}body{background:#fff}.offer-letter{margin:0 auto}.letter-toolbar{display:none}</style></head><body>${letter.outerHTML}</body></html>`;
  const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));link.download=`耀天航空-Offer-${document.querySelector('#letter-name').textContent}.html`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
});
