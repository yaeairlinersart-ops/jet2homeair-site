const campusJobs=[
  ['飞行运行助理','运行控制'],['飞行签派培训生','运行控制'],['航班计划培训生','运行控制'],
  ['航线规划培训生','航线商务'],['收益管理培训生','航线商务'],['空地联运产品培训生','航线商务'],
  ['维修工程培训生','维修适航'],['持续适航培训生','维修适航'],['航材管理培训生','维修适航'],
  ['安全质量培训生','安全质量'],['航空安保培训生','安全质量'],
  ['品牌内容专员','品牌市场'],['视觉与网页设计专员','品牌市场'],
  ['数据分析培训生','信息数据'],['系统运维培训生','信息数据'],
  ['财务管理培训生','财务法务'],['人力资源培训生','人力行政'],['客服与票务培训生','客户服务']
].map(([title,department])=>({type:'campus',title,department,location:'昆明',level:'2027届校招',duties:[`协助${department}团队完成日常工作`,'参与耀天航空首期运营项目','完成岗位培训并整理业务资料'],requirements:['2027届本科及以上学历，专业与岗位方向相关','认可支线航空与小城连接理念','认真负责，具备良好的沟通和学习能力']}));

const socialRoleGroups={
  '飞行':['运-12F机长','运-12F副驾驶','飞行教员／检查员','总飞行师','飞行技术与标准管理员','飞行训练管理员','飞行员排班员'],
  '运行控制':['运行控制负责人','飞行签派员','航班动态监控员','机组排班员','航班计划员','航行情报与气象支持人员','应急响应协调员'],
  '维修适航':['维修负责人／总工程师','持续适航管理人员','维修控制人员','维修计划员','工程技术人员','可靠性管理人员','维修质量审核员','航材管理员','维修记录管理员','昆明基地航线放行人员'],
  '安全质量':['航空安全负责人','安全管理体系专员','质量经理','运行质量审核员','航空安保负责人','危险品运输管理员','应急管理人员','合规与证照管理员'],
  '客舱服务':['客舱乘务员','客舱负责人','客舱安全与训练管理员','乘务排班员'],
  '地面协调':['昆明基地运行协调员','陇川驻站协调员','兰坪驻站协调员','凤庆驻站协调员','地面服务供应商管理员','不正常航班协调员','接驳车运行协调员'],
  '航线商务':['航线网络规划员','运力与班期规划员','收益及票价管理员','市场与客流分析员','机场合作经理','地方政府及文旅合作经理','团体与企业客户销售','空地联运产品经理','接驳供应商管理员'],
  '客户服务':['客服负责人','在线客服','退改签与退款专员','投诉及旅客关系专员','特殊旅客服务协调员','订座系统业务管理员'],
  '品牌市场':['品牌与市场负责人','新媒体及社区运营','内容与文案编辑','视觉／网页设计人员','官网产品经理'],
  '信息数据':['信息技术负责人','系统运维与供应商管理员','数据分析员','信息安全及个人信息保护人员'],
  '财务法务':['财务负责人','会计','出纳','成本与预算人员','收入结算人员','采购与合同管理员','法务及保险事务人员'],
  '人力行政':['人力资源负责人','招聘与员工关系专员','薪酬福利专员','培训与资质管理员','行政与档案管理员'],
  '公司管理':['总经理','运行负责人','飞行负责人／总飞行师','维修负责人／总工程师','安全负责人','商务与市场负责人','财务负责人']
};
const locations={
  '陇川驻站协调员':'陇川','兰坪驻站协调员':'兰坪','凤庆驻站协调员':'凤庆',
  '昆明基地运行协调员':'昆明','昆明基地航线放行人员':'昆明'
};
const departmentProfiles={
  '飞行':{duties:['按照运行标准安全完成航班任务','执行检查单、训练和机组协作要求','主动报告运行风险并参与安全改进'],requirements:['持有岗位所需的有效执照、资质及体检合格证','满足公司训练和运行准入条件','无影响航空安全的不良记录']},
  '运行控制':{duties:['保障航班放行、监控与运行协调','分析天气、机场及航路运行条件','协调机组、维修和机场保障资源'],requirements:['民航运行、签派或相关专业背景','核心岗位须持有对应有效执照','能够适应航空运行倒班和值班安排']},
  '维修适航':{duties:['维护运-12F机队持续适航状态','执行维修计划、技术与记录管理','协调维修供应商并跟踪技术问题'],requirements:['航空工程、机务维修或相关专业背景','持证岗位须具备相应维修或放行资质','工作严谨，能够适应机务值班安排']},
  '安全质量':{duties:['维护安全、质量与合规管理体系','组织风险识别、审核与整改跟踪','管理安全信息及应急响应工作'],requirements:['具有民航安全、质量或合规工作经验','熟悉SMS及相关民航规章','原则性强并具备独立报告能力']},
  '客舱服务':{duties:['执行客舱安全程序与旅客服务标准','完成航前准备、应急训练和服务记录','协助特殊旅客和不正常情况处置'],requirements:['符合民航客舱岗位身体及资质要求','具备良好服务意识和应急反应能力','能够适应轮班及外站安排']},
  '地面协调':{duties:['协调机场地服、加油和维修支援','跟踪旅客、行李及接驳车辆保障','报告并协助处理不正常航班'],requirements:['具有机场或航空地面运行经验','能够独立完成现场协调和运行记录','可接受轮班或外站工作安排']},
  '航线商务':{duties:['参与航线、班期、票价及市场管理','分析客流与经营数据并提出建议','维护机场、政府、文旅及供应商合作'],requirements:['交通、经济、市场或相关专业背景','具备商业分析和跨部门协调能力','了解云南区域市场者优先']},
  '客户服务':{duties:['处理旅客咨询、票务及服务请求','跟进退改签、投诉和特殊旅客事项','维护服务记录并推动问题解决'],requirements:['具备客户服务或航空票务经验','表达清晰并能处理复杂旅客需求','熟悉订座系统者优先']},
  '品牌市场':{duties:['策划品牌、目的地及招聘传播内容','维护官网、社区和新媒体渠道','参与视觉、文案与市场活动执行'],requirements:['传播、设计、中文或市场相关背景','具备与岗位相符的作品或项目经验','理解耀天航空的品牌定位']},
  '信息数据':{duties:['维护业务系统、数据和信息安全','管理技术供应商及系统权限','为运营和经营决策提供数据支持'],requirements:['计算机、信息安全、统计或相关背景','具备对应系统或数据工作经验','重视数据准确性与个人信息保护']},
  '财务法务':{duties:['完成财务、结算、采购或合同管理','支持预算、成本及经营风险控制','维护准确完整的业务和审计资料'],requirements:['财务、法律、采购或相关专业背景','具备岗位所需的专业能力或资格','诚信严谨并具有保密意识']},
  '人力行政':{duties:['支持招聘、薪酬、培训及行政管理','维护员工资质、档案和制度流程','改善员工体验并保障团队运行'],requirements:['人力资源、行政管理或相关背景','具备良好的组织与沟通能力','能够妥善处理员工及敏感信息']},
  '公司管理':{duties:['负责分管领域的经营与安全目标','建立制度并推动跨部门协同','向公司治理层报告经营和风险情况'],requirements:['具有航空公司或相关行业管理经验','具备与岗位匹配的专业资质和领导能力','认同安全优先、稳健经营原则']}
};
const socialJobs=Object.entries(socialRoleGroups).flatMap(([department,titles])=>titles.map(title=>({
  type:'social',title,department,location:locations[title]||'昆明',level:'社会招聘',
  duties:departmentProfiles[department].duties,requirements:departmentProfiles[department].requirements
})));
const jobs=[...campusJobs,...socialJobs];
let activeType='campus',activeDepartment='全部岗位',query='',selectedJob=null;const tabs=document.querySelectorAll('.recruit-tabs button'),heroType=document.querySelector('#hero-type'),search=document.querySelector('#job-search'),clear=document.querySelector('#search-clear'),filters=document.querySelector('#department-filters'),list=document.querySelector('#job-list'),empty=document.querySelector('#empty-jobs'),count=document.querySelector('#job-count'),dialog=document.querySelector('#job-dialog');
function departments(){return ['全部岗位',...new Set(jobs.filter(job=>job.type===activeType).map(job=>job.department))]}
function renderFilters(){filters.replaceChildren(...departments().map(name=>{const button=document.createElement('button');button.type='button';button.textContent=name;button.className=name===activeDepartment?'active':'';button.addEventListener('click',()=>{activeDepartment=name;renderFilters();renderJobs()});return button}))}
function renderJobs(){const keyword=query.trim().toLowerCase(),visible=jobs.filter(job=>job.type===activeType&&(activeDepartment==='全部岗位'||job.department===activeDepartment)&&(!keyword||`${job.title}${job.department}${job.location}`.toLowerCase().includes(keyword)));count.textContent=visible.length;empty.hidden=visible.length>0;list.replaceChildren(...visible.map(job=>{const button=document.createElement('button');button.type='button';button.className='job-card';button.innerHTML=`<h3><small>${job.department.toUpperCase()}</small>${job.title}</h3><span>工作地点 · ${job.location}</span><b>${job.level}</b><i>↗</i>`;button.addEventListener('click',()=>showJob(job));return button}))}
function setType(type){activeType=type;activeDepartment='全部岗位';tabs.forEach(tab=>{const active=tab.dataset.type===type;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active))});heroType.textContent=type==='campus'?'校园招聘':'社会招聘';renderFilters();renderJobs()}
function showJob(job){selectedJob=job;document.querySelector('#dialog-department').textContent=job.department;document.querySelector('#dialog-title').textContent=job.title;document.querySelector('#dialog-meta').textContent=`${job.location} · ${job.level}`;document.querySelector('#dialog-duties').replaceChildren(...job.duties.map(text=>Object.assign(document.createElement('li'),{textContent:text})));document.querySelector('#dialog-requirements').replaceChildren(...job.requirements.map(text=>Object.assign(document.createElement('li'),{textContent:text})));dialog.showModal()}
tabs.forEach(tab=>tab.addEventListener('click',()=>setType(tab.dataset.type)));search.addEventListener('input',()=>{query=search.value;clear.hidden=!query;renderJobs()});document.querySelector('#search-button').addEventListener('click',()=>{query=search.value;renderJobs();document.querySelector('#openings').scrollIntoView()});clear.addEventListener('click',()=>{search.value='';query='';clear.hidden=true;renderJobs();search.focus()});document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());document.querySelector('.apply-button').addEventListener('click',()=>{if(!selectedJob)return;const application=new URLSearchParams({title:selectedJob.title,department:selectedJob.department,location:selectedJob.location,level:selectedJob.level});location.href=`apply.html?${application}`});dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});setType('campus');
const careerNotice=document.querySelector('#career-notice'),careerEnter=document.querySelector('#career-enter'),careerCountdown=document.querySelector('#career-countdown');let careerSeconds=5;careerNotice.showModal();careerNotice.addEventListener('cancel',event=>event.preventDefault());const careerTimer=setInterval(()=>{careerSeconds--;if(careerSeconds>0){careerCountdown.textContent=`请阅读以上内容（${careerSeconds} 秒）`;return}clearInterval(careerTimer);careerCountdown.textContent='已完成阅读';careerEnter.disabled=false;},1000);careerEnter.addEventListener('click',()=>careerNotice.close());

