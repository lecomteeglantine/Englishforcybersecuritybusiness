const grammarQuestions = [
  {q:"We ___ suspicious activity on the endpoint since 08:20.", a:["monitor","are monitoring","have been monitoring","monitored"], c:2, tag:"Present & perfect forms"},
  {q:"The analyst ___ the alert twenty minutes ago.", a:["has escalated","escalated","escalates","had escalate"], c:1, tag:"Past vs present perfect"},
  {q:"If we ___ evidence of lateral movement, we'll widen the investigation.", a:["find","will find","found","would find"], c:0, tag:"Conditionals"},
  {q:"The endpoint ___ from the network as a precaution.", a:["isolated","was isolated","has isolating","was isolate"], c:1, tag:"Passive voice"},
  {q:"At this stage, the activity ___ be malicious, but we need more evidence.", a:["must","may","can't","has to"], c:1, tag:"Modals & uncertainty"},
  {q:"Could you tell me when the user ___ their password?", a:["did change","changed","has changed","change did"], c:1, tag:"Question structure"},
  {q:"We've seen ___ failed login attempts than yesterday.", a:["less","fewer","few","little"], c:1, tag:"Quantifiers"},
  {q:"This control is ___ effective than the previous one.", a:["more","most","much","many"], c:0, tag:"Comparison"},
  {q:"By the time the client joined the bridge, we ___ the affected account.", a:["disable","have disabled","had disabled","were disable"], c:2, tag:"Past forms"},
  {q:"We need ___ the logs before drawing a conclusion.", a:["review","to review","reviewing to","reviewed"], c:1, tag:"Verb patterns"},
  {q:"The client asked us ___ the incident timeline in writing.", a:["confirm","to confirm","confirming","confirmed"], c:1, tag:"Verb patterns"},
  {q:"There isn't ___ evidence yet to attribute the activity to a specific actor.", a:["many","few","enough","several"], c:2, tag:"Quantifiers"},
  {q:"The maintenance window starts ___ 11 p.m.", a:["at","on","in","by"], c:0, tag:"Prepositions"},
  {q:"The analyst ___ handled the initial triage is now off shift.", a:["which","whose","who","where"], c:2, tag:"Relative clauses"},
  {q:"I ___ to update you earlier, but I was waiting for confirmation.", a:["want","wanted","have want","am wanted"], c:1, tag:"Past forms"},
  {q:"You ___ delete the evidence before the forensic copy has been completed.", a:["don't have","mustn't","should to not","can't to"], c:1, tag:"Modals & obligation"},
  {q:"The current exposure is not as high ___ we first thought.", a:["than","that","as","like"], c:2, tag:"Comparison"},
  {q:"Our team is responsible ___ monitoring these security events.", a:["of","for","to","with"], c:1, tag:"Prepositions"},
  {q:"We don't yet know ___ the credentials were actually used by an attacker.", a:["that","whether","what","which"], c:1, tag:"Clause structure"},
  {q:"The review has been moved ___ Thursday afternoon.", a:["at","for","to","on"], c:2, tag:"Prepositions"},
  {q:"If the account had been protected by MFA, the attacker ___ access so easily.", a:["wouldn't gain","wouldn't have gained","won't gain","didn't gain"], c:1, tag:"Conditionals"},
  {q:"We ___ any signs of data exfiltration so far.", a:["didn't find","haven't found","don't found","hadn't find"], c:1, tag:"Past vs present perfect"},
  {q:"The logs suggest that the attacker ___ valid credentials.", a:["may have used","may used","must to use","could using"], c:0, tag:"Past modals"},
  {q:"The patch needs ___ before it is deployed widely.", a:["test","to testing","to be tested","tested to"], c:2, tag:"Passive voice"},
  {q:"Neither the firewall logs nor the EDR telemetry ___ evidence of persistence.", a:["show","shows","showing","has show"], c:0, tag:"Agreement"},
  {q:"We recommend that the client ___ the exposed service immediately.", a:["disables","disable","disabled","will disable"], c:1, tag:"Formal structures"},
  {q:"The incident was more serious ___ initially reported.", a:["that","than","as","then"], c:1, tag:"Comparison"},
  {q:"I’ll send the report as soon as the investigation ___ complete.", a:["will be","is","would be","was"], c:1, tag:"Future time clauses"},
  {q:"We found two accounts, both of ___ had administrator privileges.", a:["which","who","them","that"], c:0, tag:"Relative clauses"},
  {q:"Had the alert been ignored, the incident ___ significantly worse.", a:["could become","could have become","can have become","would became"], c:1, tag:"Advanced conditionals"}
];

const cyberQuestions = [
  {q:"An alert is generated, but investigation shows normal authorised activity. It is most likely a…", a:["false positive","data breach","zero-day","threat actor"], c:0, tag:"SOC terminology"},
  {q:"What does 'triage an alert' mean?", a:["Delete it immediately","Assess and prioritise it before deeper investigation","Send it to every client","Rebuild the affected server"], c:1, tag:"SOC terminology"},
  {q:"Which term refers to limiting the spread or impact of an incident?", a:["Containment","Attribution","Enumeration","Obfuscation"], c:0, tag:"Incident response"},
  {q:"Which is the best definition of remediation?", a:["Only identifying an attacker","Actions taken to fix the weakness or damage and reduce recurrence","Writing the first alert","Making a risk look smaller"], c:1, tag:"Incident response"},
  {q:"A piece of evidence such as a malicious IP address, domain or file hash may be called an…", a:["IOC","SLA","MFA","RTO"], c:0, tag:"Threat intelligence"},
  {q:"TTPs describe an attacker's…", a:["budget and staffing","tactics, techniques and procedures","ticketing and tracking platform","time to patch"], c:1, tag:"Threat intelligence"},
  {q:"'Lateral movement' means…", a:["moving data to a backup","an attacker moving between systems inside an environment","changing an IP address","updating a firewall rule"], c:1, tag:"Attack lifecycle"},
  {q:"'Privilege escalation' means…", a:["gaining higher access rights","sending an alert to management","raising the incident severity manually","blocking an external IP"], c:0, tag:"Attack lifecycle"},
  {q:"Which phrase best communicates uncertainty to a client?", a:["This definitely came from the attacker.","The available evidence suggests malicious activity, but attribution is not confirmed.","We know everything already.","It may definitely be the attacker."], c:1, tag:"Client communication"},
  {q:"You need more information from a client. Which sounds most natural?", a:["Send me logs.","Could you share the relevant authentication logs for that time window?","I need you give logs.","You must transmit me the logs."], c:1, tag:"Client communication"},
  {q:"Which phrase is best for an incident update?", a:["Nothing bad happened.","So far, we have found no evidence of data exfiltration, but the investigation is still ongoing.","There is probably no problem, finished.","We didn't see anything so it is safe."], c:1, tag:"Client communication"},
  {q:"Which phrase gives a clear recommendation without overclaiming?", a:["You must rebuild everything now.","Based on what we've seen, we recommend isolating the affected host while we complete the investigation.","Maybe do something with the server.","Our solution is certainly the only one."], c:1, tag:"Recommendations"},
  {q:"A 'handover' between analysts is…", a:["a transfer of key information and responsibility","a password reset","a malware sample","a firewall block"], c:0, tag:"SOC workflow"},
  {q:"Which information belongs in a useful handover?", a:["Only the ticket number","What happened, evidence found, actions taken and next steps","Personal opinions about the client","Only the final conclusion"], c:1, tag:"SOC workflow"},
  {q:"Which phrase politely challenges an assumption?", a:["That's wrong.","I'm not sure the evidence supports that conclusion yet.","No, impossible.","You misunderstood everything."], c:1, tag:"Meetings"},
  {q:"Which phrase is useful when you need time to think during a call?", a:["Wait me.","Give me a second to check that.","I stop speaking.","I need reflection."], c:1, tag:"Meetings"},
  {q:"What is the difference between a vulnerability and an exploit?", a:["There is no difference.","A vulnerability is a weakness; an exploit is a method or code used to take advantage of it.","An exploit is always a patch.","A vulnerability is always proof of compromise."], c:1, tag:"Risk language"},
  {q:"In risk language, 'likelihood' is closest to…", a:["how probable something is","how expensive a tool is","how long a report is","how many analysts are on shift"], c:0, tag:"Risk language"},
  {q:"Which sentence explains risk clearly to a non-technical client?", a:["CVSS 9.8 means apocalypse.","The weakness is serious because it is exposed to the internet and could allow unauthorised access.","It is critical because CVSS.","This vulnerability compromises you automatically."], c:1, tag:"Plain English"},
  {q:"What does 'attack surface' refer to?", a:["The physical desk used by an attacker","The systems, services and entry points that could potentially be targeted","A list of blocked IPs only","A threat actor's country"], c:1, tag:"Risk language"},
  {q:"Which phrase best introduces a root-cause conclusion cautiously?", a:["The root cause was obviously…","Our current assessment is that the initial access was most likely achieved through…","We guess that maybe…","It is 100% certain without evidence."], c:1, tag:"Reporting"},
  {q:"Which is a useful phrase when escalating an incident?", a:["I'm escalating this due to the potential impact and the evidence of privileged-account activity.","I escalate because scary.","This is big, take it.","Please make more severity."], c:0, tag:"Escalation"},
  {q:"Which sentence distinguishes detection from response?", a:["Detection identifies suspicious activity; response focuses on containing, investigating and remediating it.","Detection and response are exactly identical.","Response happens before any alert.","Detection means writing a client report."], c:0, tag:"SOC terminology"},
  {q:"Which phrase is appropriate when a client asks 'Are we safe now?' but the investigation is incomplete?", a:["Yes, definitely.","The immediate risk has been reduced, but we still need to complete the investigation before we can give you a definitive answer.","Probably yes, don't worry.","No idea."], c:1, tag:"Client communication"},
  {q:"Which phrase closes an action point clearly?", a:["We'll review the remaining endpoints and send you an update by 4 p.m. UTC.","We do the necessary soon.","We will return toward you.","We see later."], c:0, tag:"Client communication"}
];

const pronunciationQuestions = [
  {q:"Which word has a different vowel sound?", a:["ship","risk","live","breach"], c:3, tag:"Vowel contrasts"},
  {q:"Which word begins with a clearly pronounced /h/?", a:["hour","honest","host","heir"], c:2, tag:"High-impact sounds"},
  {q:"In 'We need to ISOLATE the endpoint', which word carries the strongest information stress?", a:["we","to","isolate","the"], c:2, tag:"Sentence stress"},
  {q:"The -ed ending in 'breached' is pronounced…", a:["/t/","/d/","/ɪd/","silent"], c:0, tag:"-ed endings"},
  {q:"The -ed ending in 'detected' is pronounced…", a:["/t/","/d/","/ɪd/","/z/"], c:2, tag:"-ed endings"},
  {q:"The final -s in 'logs' is pronounced…", a:["/s/","/z/","/ɪz/","silent"], c:1, tag:"-s endings"},
  {q:"The final -s in 'patches' is pronounced…", a:["/s/","/z/","/ɪz/","silent"], c:2, tag:"-s endings"},
  {q:"Where is the main stress in 'security'?", a:["SE-cur-i-ty","se-CUR-i-ty","se-cur-I-ty","se-cur-i-TY"], c:1, tag:"Word stress"},
  {q:"Where is the main stress in 'vulnerability'?", a:["VUL-ner-a-bil-i-ty","vul-NER-a-bil-i-ty","vul-ner-a-BIL-i-ty","vul-ner-a-bil-i-TY"], c:2, tag:"Word stress"},
  {q:"Where is the main stress in 'authentication'?", a:["AU-then-ti-ca-tion","au-THEN-ti-ca-tion","au-then-ti-CA-tion","au-then-ti-ca-TION"], c:2, tag:"Word stress"},
  {q:"The 'th' sound at the start of 'threat' is closest to…", a:["/t/","/d/","/θ/","/s/"], c:2, tag:"High-impact sounds"},
  {q:"In natural speech, 'could you' often sounds closest to…", a:["could / you","couldja","could yoo-uh","cold you"], c:1, tag:"Connected speech"},
  {q:"In 'We haven't found any evidence YET', why might 'yet' be stressed?", a:["It signals the situation may still change.","It has no meaning.","Function words must always be stressed.","Because it is the longest word."], c:0, tag:"Sentence stress"},
  {q:"Which approach usually improves intelligibility most in technical explanations?", a:["Stress key content words and group ideas into chunks.","Stress every syllable equally.","Speak as fast as possible.","Try to remove every trace of a French accent."], c:0, tag:"Intelligibility"},
  {q:"Which chunking is easiest to follow?", a:["Weidentified/suspiciousactivityononeendpoint.","We've identified suspicious activity / on one endpoint / and we're reviewing the logs.","We've / identified suspicious / activity on / one endpoint.","Every word separated by a long pause."], c:1, tag:"Intelligibility"}
];

const listeningItems = [
  {text:"Quick handover for ticket four-eight-two-one. We saw repeated failed logins followed by a successful sign-in from an unusual location. The account has been disabled and the user's manager has confirmed they are not travelling. We haven't seen any lateral movement so far. Next step is to review the mailbox rules and cloud audit logs.", q:"What should the next analyst do next?", a:["Re-enable the account immediately.","Review mailbox rules and cloud audit logs.","Close the ticket as a false positive.","Contact the user about travel plans."], c:1, tag:"Handover"},
  {text:"At this stage, we believe the malicious attachment was opened, but we haven't confirmed execution of the payload. The workstation is isolated as a precaution. We're collecting additional telemetry now and we'll update you within the hour.", q:"What is confirmed?", a:["The payload definitely executed.","The whole network is compromised.","The workstation has been isolated.","Data was exfiltrated."], c:2, tag:"Incident update"},
  {text:"The vulnerability is rated critical, but the affected service isn't exposed to the internet and access is restricted to a small administrative network. That lowers the immediate likelihood of exploitation, although we still recommend patching it as a priority.", q:"Why is the immediate risk lower than the severity rating alone might suggest?", a:["The vulnerability is not real.","The service has limited exposure and restricted access.","Critical vulnerabilities cannot be exploited.","The patch has already been installed."], c:1, tag:"Risk explanation"},
  {text:"We've correlated the IP address with infrastructure previously used in a phishing campaign. That's useful context, but it isn't enough on its own to attribute this incident to the same threat actor. We need to compare the techniques and other indicators first.", q:"What is the speaker warning against?", a:["Using threat intelligence at all.","Attributing the incident too quickly from one indicator.","Investigating techniques and indicators.","Blocking a malicious IP address."], c:1, tag:"Threat intelligence"},
  {text:"Sorry to jump in. Before we change the detection rule, can we confirm whether these events are coming from the client's vulnerability scanner? If they are, suppressing them globally could hide similar activity from other sources.", q:"What is the speaker's concern?", a:["The scanner is definitely malicious.","A broad rule change could hide genuine suspicious activity.","The client has no vulnerability scanner.","The detection rule must be deleted immediately."], c:1, tag:"Meeting comprehension"}
];

function renderQuestions(targetId,prefix,items){
  const target=document.getElementById(targetId);
  target.innerHTML=items.map((item,i)=>`<fieldset class="question-card"><legend>${i+1}. ${item.q}</legend><div class="option-grid">${item.a.map((opt,j)=>`<label class="option"><input type="radio" name="${prefix}-${i}" value="${j}"><span>${opt}</span></label>`).join("")}</div></fieldset>`).join("");
}
renderQuestions("grammarQuestions","grammar",grammarQuestions);
renderQuestions("cyberQuestions","cyber",cyberQuestions);
renderQuestions("pronunciationQuestions","pronunciation",pronunciationQuestions);

const listeningContainer=document.getElementById("listeningQuestions");
listeningContainer.innerHTML=listeningItems.map((item,i)=>`<article class="listen-card"><div class="listen-head"><div><p class="small-label">LISTENING ${i+1}</p><h4>Listen, then answer.</h4></div><div><button class="listen-button" type="button" data-listen="${i}">▶ Play</button><span class="play-count" id="playCount-${i}">0 / 2</span></div></div><fieldset class="question-card"><legend>${item.q}</legend><div class="option-grid">${item.a.map((opt,j)=>`<label class="option"><input type="radio" name="listening-${i}" value="${j}"><span>${opt}</span></label>`).join("")}</div></fieldset></article>`).join("");

const playCounts=Array(listeningItems.length).fill(0);
document.querySelectorAll("[data-listen]").forEach(btn=>btn.addEventListener("click",()=>{
  const i=Number(btn.dataset.listen); if(playCounts[i]>=2)return;
  if(!("speechSynthesis" in window)){alert("Speech playback is not supported in this browser.");return;}
  const utterance=new SpeechSynthesisUtterance(listeningItems[i].text); utterance.lang=i%2===0?"en-GB":"en-US"; utterance.rate=1.02+(i*.025);
  speechSynthesis.cancel(); speechSynthesis.speak(utterance); playCounts[i]++;
  document.getElementById(`playCount-${i}`).textContent=`${playCounts[i]} / 2`; if(playCounts[i]>=2)btn.disabled=true;
}));

function showSection(name){
  document.querySelectorAll(".diag-panel").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".diag-tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(`panel-${name}`).classList.add("active");
  document.querySelector(`.diag-tab[data-section="${name}"]`).classList.add("active");
  document.getElementById("diagnostic").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll(".diag-tab").forEach(btn=>btn.addEventListener("click",()=>showSection(btn.dataset.section)));
document.querySelectorAll(".next-section").forEach(btn=>btn.addEventListener("click",()=>showSection(btn.dataset.next)));
document.querySelectorAll("[data-go='diagnostic']").forEach(btn=>btn.addEventListener("click",()=>document.getElementById("diagnostic").scrollIntoView({behavior:"smooth"})));

function scoreSection(prefix,items){
  let score=0,answered=0; const tags={};
  items.forEach((item,i)=>{
    tags[item.tag]??={score:0,total:0}; tags[item.tag].total++;
    const checked=document.querySelector(`input[name="${prefix}-${i}"]:checked`);
    if(checked){answered++; if(Number(checked.value)===item.c){score++; tags[item.tag].score++;}}
  });
  return {score,answered,total:items.length,pct:Math.round(score/items.length*100),tags};
}
function tagWeaknesses(sectionResult,max=3){
  return Object.entries(sectionResult.tags).map(([name,v])=>({name,pct:Math.round(v.score/v.total*100),n:v.total})).sort((a,b)=>a.pct-b.pct).slice(0,max);
}

document.getElementById("writingTask").addEventListener("input",e=>{const words=e.target.value.trim()?e.target.value.trim().split(/\s+/).length:0;document.getElementById("wordCount").textContent=words;});

let mediaRecorder,audioChunks=[]; const recordBtn=document.getElementById("recordBtn"),stopBtn=document.getElementById("stopBtn"),playback=document.getElementById("recordingPlayback"),recordingStatus=document.getElementById("recordingStatus");
recordBtn.addEventListener("click",async()=>{try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});audioChunks=[];mediaRecorder=new MediaRecorder(stream);mediaRecorder.ondataavailable=e=>audioChunks.push(e.data);mediaRecorder.onstop=()=>{const blob=new Blob(audioChunks,{type:"audio/webm"});playback.src=URL.createObjectURL(blob);playback.hidden=false;recordingStatus.textContent="Recording ready. Listen back for stress, rhythm, endings, linking and hesitation. Nothing has been uploaded.";stream.getTracks().forEach(t=>t.stop());};mediaRecorder.start();recordBtn.disabled=true;stopBtn.disabled=false;recordingStatus.textContent="Recording…";}catch(err){recordingStatus.textContent="Microphone access was not granted. You can still complete the rest of the diagnostic.";}});
stopBtn.addEventListener("click",()=>{if(mediaRecorder&&mediaRecorder.state==="recording"){mediaRecorder.stop();recordBtn.disabled=false;stopBtn.disabled=true;}});

function classify(pct){if(pct>=85)return"Strong — maintain";if(pct>=70)return"Functional — consolidate";if(pct>=55)return"Developing — review";return"Priority";}
function roadmapFor(key){const map={listening:["SOC listening","Short multi-accent incident updates, handovers and meetings with focused note-taking."],speaking:["Speak without a script","Timed explanations of alerts, risk and incidents with reusable speaking frames."],grammar:["Accuracy reset","Target only the grammar patterns that actually break down in professional communication."],cyber:["Cybersecurity English","Build precise SOC, incident-response, risk and threat-intelligence language in context."],pronunciation:["Technical intelligibility","Word stress, endings, connected speech and chunking using cybersecurity vocabulary."],writing:["Client-facing writing","Concise incident updates, recommendations and technical-to-plain-English explanations."]};return map[key];}

function renderProfile(results,details){
  const labels={grammar:"Grammar & accuracy",cyber:"Cybersecurity English",listening:"Listening",pronunciation:"Pronunciation",speaking:"Spoken fluency",writing:"Writing confidence"};
  document.getElementById("scoreGrid").innerHTML=Object.entries(results).map(([key,pct])=>`<article class="score-card"><div class="score-top"><h4>${labels[key]}</h4><span class="score-value">${pct}%</span></div><div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div><div class="status">${classify(pct)}</div></article>`).join("");
  const priorities=Object.entries(results).sort((a,b)=>a[1]-b[1]).slice(0,4);
  document.getElementById("priorityList").innerHTML=priorities.map(([key,pct])=>`<li><strong>${labels[key]}</strong> — ${classify(pct).toLowerCase()}</li>`).join("");
  const weak=[...tagWeaknesses(details.grammar,3).map(x=>({...x,area:"Grammar"})),...tagWeaknesses(details.cyber,3).map(x=>({...x,area:"Cyber English"})),...tagWeaknesses(details.pronunciation,2).map(x=>({...x,area:"Pronunciation"}))].sort((a,b)=>a.pct-b.pct).slice(0,6);
  document.getElementById("weaknessGrid").innerHTML=weak.map(x=>`<article class="weakness-card"><span>${x.area}</span><strong>${x.name}</strong><small>${x.pct}% in this diagnostic</small></article>`).join("");
  document.getElementById("roadmapCards").innerHTML=priorities.slice(0,3).map(([key])=>{const r=roadmapFor(key);return`<article class="roadmap-card"><strong>${r[0]}</strong><span>${r[1]}</span></article>`;}).join("");
  document.getElementById("resultsEmpty").hidden=true;document.getElementById("resultsContent").hidden=false;
}

document.getElementById("calculateBtn").addEventListener("click",()=>{
  const grammar=scoreSection("grammar",grammarQuestions),cyber=scoreSection("cyber",cyberQuestions),listening=scoreSection("listening",listeningItems),pronunciation=scoreSection("pronunciation",pronunciationQuestions);
  const speakingRating=Number(document.getElementById("speakingRating").value||0),writingRating=Number(document.getElementById("writingRating").value||0);
  const writingWords=document.getElementById("writingTask").value.trim().split(/\s+/).filter(Boolean).length;
  const speakingPct=speakingRating?speakingRating*20:50;let writingPct=writingRating?writingRating*20:50;if(writingWords>=90&&writingWords<=140)writingPct=Math.min(100,writingPct+5);if(writingWords>0&&writingWords<60)writingPct=Math.max(20,writingPct-10);
  const results={grammar:grammar.pct,cyber:cyber.pct,listening:listening.pct,pronunciation:pronunciation.pct,speaking:speakingPct,writing:writingPct};
  const details={grammar,cyber,listening,pronunciation}; localStorage.setItem("ebackontrack-v2",JSON.stringify({results,details})); renderProfile(results,details); renderTrainingPlan(results,details); showSection("results");
});

document.getElementById("resetBtn").addEventListener("click",()=>{if(!confirm("Reset all answers and local diagnostic results?"))return;localStorage.removeItem("ebackontrack-v2");localStorage.removeItem("ebackontrack-v3-progress");document.querySelectorAll("input[type=radio]").forEach(i=>i.checked=false);document.querySelectorAll("textarea").forEach(t=>t.value="");document.querySelectorAll("select").forEach(s=>s.value="");document.getElementById("wordCount").textContent="0";document.getElementById("resultsEmpty").hidden=false;document.getElementById("resultsContent").hidden=true;document.getElementById("planUnlocked").hidden=true;document.getElementById("planLocked").hidden=false;showSection("grammar");});

try{const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));if(saved?.results&&saved?.details)renderProfile(saved.results,saved.details);}catch(e){}


// ---------- V3: personalised training plan ----------
const trainingModules = {
  role: {
    title:"Explain your SOC role", short:"Explain your work clearly without drowning the listener in jargon.", tags:["Speaking","Plain English","SOC workflow"],
    objective:"By the end of this module, you can explain your role, the purpose of a SOC and what happens after an alert in 60–90 seconds.",
    scenario:"A new international client asks: “So what exactly do you and the SOC team do for us?”",
    language:["We monitor your environment for signs of suspicious activity.","When an alert is triggered, we first assess whether it requires further investigation.","If necessary, we escalate the case and work with the relevant teams.","Our role is to reduce the time between detection, investigation and response.","In simple terms, we help identify threats early and coordinate the right response."],
    grammar:"Present Simple for roles and processes; passive voice for processes when the actor is less important.",
    pronunciation:"Chunk long explanations. Stress the content words: MONITOR · ALERT · INVESTIGATION · RESPONSE.",
    mission:"Record a 75-second explanation of your role for a non-specialist client. Do not read a script.",
    checkpoint:"Can you explain what happens from alert detection to escalation using at least three sequencing expressions?"
  },
  alert: {
    title:"Qualify an alert", short:"Describe evidence, uncertainty, severity and the next checks accurately.", tags:["SOC English","Risk language","Modals"],
    objective:"You can distinguish facts from hypotheses and explain why an alert is or is not concerning.",
    scenario:"A detection has fired on unusual PowerShell activity. You have indicators, but not enough evidence to call it malicious yet.",
    language:["The alert was triggered by…","At this stage, we have evidence of…, but no indication of…","This could be consistent with…, although we still need to rule out…","The activity appears unusual because…","The next step is to verify whether…"],
    grammar:"Modals and hedging: may, might, could, appears to, seems to, is likely to. Avoid stating a hypothesis as a fact.",
    pronunciation:"Practise contrastive stress: We have evidence of EXECUTION, but NOT of persistence.",
    mission:"Give a 60-second alert qualification: evidence → uncertainty → severity → next check.",
    checkpoint:"Can you make three cautious statements using could / appears to / no evidence of?"
  },
  incident: {
    title:"Give an incident update", short:"Communicate what happened, what is known and what happens next.", tags:["Client communication","Listening","Perfect forms"],
    objective:"You can give a calm, structured incident update while separating confirmed facts from ongoing investigation.",
    scenario:"A suspicious login was detected. The account has been disabled and investigation is continuing. There is no evidence of data exfiltration so far.",
    language:["We detected suspicious activity at approximately…","The account has been temporarily disabled as a precaution.","So far, we have found no evidence of data exfiltration.","We are currently reviewing…","We will provide the next update once…"],
    grammar:"Past Simple for the event; Present Perfect for current findings and actions with a present result; Present Continuous for ongoing investigation.",
    pronunciation:"Final consonants matter in incident language: detected, blocked, reviewed, logs, accounts.",
    mission:"Deliver a 90-second client update with five parts: detection → action → current findings → uncertainty → next update.",
    checkpoint:"Can you use Past Simple, Present Perfect and Present Continuous once each in the same update?"
  },
  handover: {
    title:"Investigate & hand over", short:"Summarise evidence and actions so another analyst can continue efficiently.", tags:["Handover","Past forms","Reporting"],
    objective:"You can give a concise shift handover with a timeline, evidence, actions already taken and outstanding checks.",
    scenario:"Your shift is ending while an investigation is still open. Another analyst needs to take over without repeating your work.",
    language:["The alert came in at…","I checked…, which showed…","We ruled out…","The endpoint has already been isolated.","The main outstanding point is…","The next analyst should check…"],
    grammar:"Past Simple and sequencing: initially, then, after that, by the time, so far. Use reported language to summarise findings.",
    pronunciation:"Use pauses between information blocks. A handover should sound segmented, not rushed.",
    mission:"Give a two-minute handover from a short incident timeline. Keep it chronological and action-focused.",
    checkpoint:"Can another analyst identify what happened, what you did and what remains to be done?"
  },
  risk: {
    title:"Explain risk to a client", short:"Translate technical evidence into likelihood, impact and business relevance.", tags:["Risk language","Plain English","Client communication"],
    objective:"You can explain why something matters without exaggerating certainty or relying on unexplained jargon.",
    scenario:"A manager asks why a critical vulnerability is important if there is no evidence that it has been exploited.",
    language:["The vulnerability increases the risk because…","There is currently no evidence that it has been exploited.","The likelihood depends on…","The potential impact would be…","Our recommendation is to prioritise remediation because…"],
    grammar:"Conditionals for consequences and modals for probability: if…, could…, may…, would… .",
    pronunciation:"Stress the contrast between VULNERABILITY and COMPROMISE; LIKELIHOOD and IMPACT.",
    mission:"Explain a high-risk vulnerability to a non-technical manager in 90 seconds, with no more than two technical terms.",
    checkpoint:"Can you state likelihood, impact and recommendation as three separate ideas?"
  },
  remediation: {
    title:"Recommend remediation", short:"Make clear, prioritised recommendations without sounding abrupt.", tags:["Recommendations","Diplomacy","Conditionals"],
    objective:"You can distinguish immediate containment from short- and long-term remediation and phrase recommendations diplomatically.",
    scenario:"The client needs to act quickly, but several remediation options have different operational costs.",
    language:["As an immediate containment measure, we recommend…","In the short term, it would be advisable to…","To reduce the likelihood of recurrence, you may also want to…","If this cannot be completed today, we recommend…","The priority should be… because…"],
    grammar:"Recommendation structures: recommend + -ing / recommend that + clause / should / it would be advisable to. Conditionals for fallback plans.",
    pronunciation:"Use falling intonation for clear recommendations and softer intonation for optional suggestions.",
    mission:"Give three prioritised recommendations: immediate, short term and long term. Justify each one.",
    checkpoint:"Can you recommend actions without using ‘you must’ for every point?"
  },
  threat: {
    title:"Threat intelligence", short:"Discuss actors, campaigns, IOCs and TTPs with evidence-based caution.", tags:["Threat intelligence","Hedging","Technical vocabulary"],
    objective:"You can summarise threat intelligence while clearly separating observed behaviour from attribution or speculation.",
    scenario:"You need to brief a client on activity that resembles a known threat actor's TTPs, but attribution is not confirmed.",
    language:["The observed activity is consistent with…","The TTPs overlap with those previously associated with…","This does not by itself confirm attribution.","We have observed indicators including…","Based on the available evidence, the most likely explanation is…"],
    grammar:"Hedging and evidence language. Practise relative clauses to add technical detail without creating sentence fragments.",
    pronunciation:"Word stress: attribution, indicator, persistence, credential, malicious, exfiltration.",
    mission:"Give a 90-second threat-intelligence briefing that includes one strong fact, two cautious interpretations and one limitation.",
    checkpoint:"Can you explain the difference between ‘associated with’ and ‘attributed to’?"
  },
  meetings: {
    title:"Meetings under pressure", short:"Clarify, interrupt, challenge assumptions and buy thinking time naturally.", tags:["Listening","Speaking","Meetings"],
    objective:"You can stay active in a fast meeting even when you miss information or need time to formulate an answer.",
    scenario:"During an incident call, several people are speaking quickly and a client asks you a question before the investigation is complete.",
    language:["Sorry to jump in, but can I clarify one point?","Could you run that by me again?","If I understood correctly, you're asking whether…","Let me think that through for a second.","I don't want to jump to conclusions, but at this stage…","Can I come back to that once we've checked the logs?"],
    grammar:"Question structure and indirect questions: Could you clarify what…? Do we know whether…? Can you confirm if…?",
    pronunciation:"Connected speech and listening chunks: could_you, do_we_know, at_this_stage. Focus on meaning groups, not individual words.",
    mission:"Run a three-minute mock incident call. Use one interruption, one clarification, one reformulation and one cautious answer.",
    checkpoint:"Can you recover naturally when you do not understand something the first time?"
  },
  review: {
    title:"Post-incident review", short:"Discuss root cause, lessons learned and improvements without assigning blame.", tags:["Past forms","Reporting","Diplomacy"],
    objective:"You can describe the incident timeline, explain contributing factors and formulate lessons learned constructively.",
    scenario:"The incident is closed. You are presenting what happened and what should change before the next similar event.",
    language:["The incident began when…","One contributing factor was…","This meant that…","In hindsight, we could have…","A key lesson learned is…","Going forward, we recommend…"],
    grammar:"Past narrative + past modals: could have, should have, might have. Use passive structures when the process matters more than blame.",
    pronunciation:"Use sentence stress to highlight cause, consequence and action rather than stressing every word.",
    mission:"Give a two-minute post-incident summary: timeline → contributing factors → lesson → action.",
    checkpoint:"Can you describe a missed opportunity using could have / should have without sounding accusatory?"
  }
};

function chooseOperationalModules(results, details){
  const selected=[];
  const add=k=>{if(trainingModules[k]&&!selected.includes(k))selected.push(k);};
  const cyberWeak=tagWeaknesses(details.cyber,5).map(x=>x.name);
  const grammarWeak=tagWeaknesses(details.grammar,5).map(x=>x.name);
  const pronWeak=tagWeaknesses(details.pronunciation,5).map(x=>x.name);

  if(cyberWeak.some(x=>["Risk language","Risk explanation","Plain English"].includes(x))) add("risk");
  if(cyberWeak.some(x=>["Incident update","Incident response","Escalation"].includes(x))) add("incident");
  if(cyberWeak.some(x=>["Threat intelligence","Attack lifecycle"].includes(x))) add("threat");
  if(cyberWeak.some(x=>["Handover","Reporting"].includes(x))) add("handover");
  if(cyberWeak.some(x=>["Recommendations"].includes(x))) add("remediation");
  if(cyberWeak.some(x=>["Client communication","Meetings"].includes(x))) add("meetings");
  if(cyberWeak.some(x=>["SOC terminology","SOC workflow"].includes(x))) add("role");

  if(results.listening<70 || results.speaking<70) add("meetings");
  if(grammarWeak.some(x=>x.includes("Past")||x.includes("perfect"))) add("incident");
  if(grammarWeak.some(x=>x.includes("Conditional")||x.includes("Modals"))) add("risk");
  if(grammarWeak.some(x=>x.includes("Passive"))) add("incident");
  if(pronWeak.some(x=>["Connected speech","Sentence stress"].includes(x))) add("meetings");
  if(pronWeak.some(x=>["Word stress","-ed endings","-s endings"].includes(x))) add("incident");

  ["role","incident","risk","meetings","handover","remediation","threat","review"].forEach(add);
  return selected.slice(0,4);
}

function focusFromDetails(details){
  const g=tagWeaknesses(details.grammar,1)[0]?.name || "core accuracy";
  const p=tagWeaknesses(details.pronunciation,1)[0]?.name || "intelligibility";
  const c=tagWeaknesses(details.cyber,1)[0]?.name || "SOC communication";
  return {g,p,c};
}

function planStorage(){try{return JSON.parse(localStorage.getItem("ebackontrack-v3-progress"))||{completed:[]};}catch(e){return{completed:[]};}}
function savePlanStorage(data){localStorage.setItem("ebackontrack-v3-progress",JSON.stringify(data));}
let currentPlan=[]; let currentDetails=null; let currentResults=null;

function renderTrainingPlan(results,details){
  currentResults=results; currentDetails=details; currentPlan=chooseOperationalModules(results,details);
  const focus=focusFromDetails(details); const state=planStorage();
  document.getElementById("planLocked").hidden=true; document.getElementById("planUnlocked").hidden=false;
  document.getElementById("planIntro").textContent=`Your starter programme targets ${focus.c.toLowerCase()}, ${focus.g.toLowerCase()} and ${focus.p.toLowerCase()} while keeping every activity tied to cybersecurity work.`;
  document.getElementById("planReason").textContent=`Diagnostic focus: ${focus.c} · ${focus.g} · ${focus.p}. The order below prioritises operational communication before isolated language study.`;
  document.getElementById("personalPlanGrid").innerHTML=currentPlan.map((key,i)=>{
    const m=trainingModules[key],done=state.completed.includes(key);
    return `<article class="personal-module ${done?'completed':''}" data-module-card="${key}">
      <div class="module-order"><span>${i+1}</span><span class="module-state">${done?'Completed':'To do'}</span></div>
      <h3>${m.title}</h3><p>${m.short}</p>
      <div class="module-tags">${m.tags.map(t=>`<span class="module-tag">${t}</span>`).join('')}</div>
      <button class="secondary-button open-module" type="button" data-module="${key}">${done?'Review module':'Start module'} →</button>
    </article>`;
  }).join('');
  updatePlanProgress();
  document.querySelectorAll('.open-module').forEach(btn=>btn.addEventListener('click',()=>openTrainingModule(btn.dataset.module)));
}

function updatePlanProgress(){
  const state=planStorage(); const done=currentPlan.filter(k=>state.completed.includes(k)).length; const pct=currentPlan.length?Math.round(done/currentPlan.length*100):0;
  document.getElementById('planProgressText').textContent=`${done} / ${currentPlan.length||4}`;
  document.getElementById('planProgressBar').style.width=`${pct}%`;
}

function openTrainingModule(key){
  const m=trainingModules[key]; if(!m)return; const focus=focusFromDetails(currentDetails||{grammar:{tags:{}},cyber:{tags:{}},pronunciation:{tags:{}}});
  const pos=currentPlan.indexOf(key)+1;
  document.getElementById('lessonPosition').textContent=`Starter module ${pos} of ${currentPlan.length}`;
  document.getElementById('lessonContent').innerHTML=`
    <section class="lesson-hero">
      <div><p class="small-label">MODULE ${String(pos).padStart(2,'0')}</p><h2>${m.title}</h2><p>${m.objective}</p></div>
      <div class="mission-box"><strong>Professional scenario</strong><span>${m.scenario}</span></div>
    </section>
    <div class="lesson-grid">
      <article class="lesson-block"><p class="small-label">1 · USEFUL LANGUAGE</p><h3>Build reusable chunks</h3><div class="language-list">${m.language.map(x=>`<div class="language-item">${x}</div>`).join('')}</div></article>
      <article class="lesson-block"><p class="small-label">2 · ACCURACY FOCUS</p><h3>Fix the language that breaks down</h3><span class="focus-pill">Diagnostic gap: ${focus.g}</span><p>${m.grammar}</p><div class="practice-prompt"><strong>Micro-practice:</strong> Say three original sentences from your own work using this pattern.</div></article>
      <article class="lesson-block"><p class="small-label">3 · PRONUNCIATION & LISTENING</p><h3>Make technical English easier to say and hear</h3><span class="focus-pill">Diagnostic gap: ${focus.p}</span><p>${m.pronunciation}</p><div class="practice-prompt"><strong>Shadowing:</strong> read the useful-language chunks aloud once slowly, then again at natural speed without stopping between every word.</div></article>
      <article class="lesson-block"><p class="small-label">4 · SPEAKING MISSION</p><h3>Use it under pressure</h3><p>${m.mission}</p><div class="practice-prompt"><strong>Rule:</strong> maximum 60 seconds of preparation. Keywords are allowed; a written script is not.</div></article>
      <article class="lesson-block full checkpoint"><p class="small-label">5 · CHECKPOINT</p><h3>Before you move on</h3><p>${m.checkpoint}</p><div class="checkpoint-actions"><button class="primary-button" type="button" id="completeModuleBtn" data-complete="${key}">Mark this module complete ✓</button><span class="checkpoint-status" id="checkpointStatus"></span></div></article>
    </div>`;
  document.getElementById('lessonWorkspace').hidden=false; document.getElementById('personalPlanGrid').hidden=true;
  const state=planStorage(); if(state.completed.includes(key))document.getElementById('checkpointStatus').textContent='Already completed — reviewing is encouraged.';
  document.getElementById('completeModuleBtn').addEventListener('click',()=>completeTrainingModule(key));
  document.getElementById('lessonWorkspace').scrollIntoView({behavior:'smooth',block:'start'});
}

function completeTrainingModule(key){
  const state=planStorage(); if(!state.completed.includes(key))state.completed.push(key); savePlanStorage(state);
  document.getElementById('checkpointStatus').textContent='Completed. Progress saved on this device.';
  updatePlanProgress();
}

document.getElementById('closeLessonBtn').addEventListener('click',()=>{document.getElementById('lessonWorkspace').hidden=true;document.getElementById('personalPlanGrid').hidden=false; if(currentResults&&currentDetails)renderTrainingPlan(currentResults,currentDetails); document.getElementById('my-plan').scrollIntoView({behavior:'smooth',block:'start'});});
document.addEventListener('click',e=>{if(e.target?.id==='openPlanBtn'){if(currentResults&&currentDetails){renderTrainingPlan(currentResults,currentDetails);document.getElementById('my-plan').scrollIntoView({behavior:'smooth'});}}});

// Keep plan links working even though they are inserted below the original event-binding code.
document.querySelectorAll('#my-plan [data-go="diagnostic"]').forEach(btn=>btn.addEventListener('click',()=>document.getElementById('diagnostic').scrollIntoView({behavior:'smooth'})));

// Upgrade saved V2 diagnostic results into the V3 roadmap without changing the diagnostic itself.
try{const saved=JSON.parse(localStorage.getItem('ebackontrack-v2'));if(saved?.results&&saved?.details){renderTrainingPlan(saved.results,saved.details);}}catch(e){}
