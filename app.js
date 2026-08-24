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
  const listenRec=document.getElementById("listeningRecommendation");
  if(listenRec){
    listenRec.hidden=results.listening>=75;
    const txt=document.getElementById("listeningRecommendationText");
    if(txt)txt.textContent=results.listening<55
      ?"Listening is a priority. Start with gist and note-taking at Training speed, then repeat the same drills at Natural speed."
      :"Listening needs consolidation. Use the lab for short, focused decoding and incident-call practice alongside the starter modules.";
  }
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

document.getElementById("resetBtn").addEventListener("click",()=>{if(!confirm("Reset all answers and local diagnostic results?"))return;localStorage.removeItem("ebackontrack-v2");localStorage.removeItem("ebackontrack-v3-progress");document.querySelectorAll("#diagnostic input[type=radio]").forEach(i=>i.checked=false);document.querySelectorAll("#diagnostic textarea").forEach(t=>t.value="");document.querySelectorAll("#diagnostic select").forEach(s=>s.value="");document.getElementById("wordCount").textContent="0";document.getElementById("resultsEmpty").hidden=false;document.getElementById("resultsContent").hidden=true;document.getElementById("planUnlocked").hidden=true;document.getElementById("planLocked").hidden=false;showSection("grammar");});

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


const moduleActivities = {
  role:{
    listen:{
      text:"Our SOC monitors the client environment around the clock. When an alert is generated, the analyst first checks the available context to decide whether it is a false positive or needs investigation. If the activity looks suspicious, the case can be escalated and the relevant response teams are involved.",
      q:"What happens first after an alert is generated?",
      a:["The client is immediately told there is an incident.","The analyst reviews the context and qualifies the alert.","The affected system is always isolated.","The case is sent directly to threat intelligence."],c:1
    },
    notice:[
      {q:"Which explanation is clearest for a non-specialist client?",a:["We perform triage on SIEM-generated detections.","We first check whether an alert really needs investigation.","We ingest telemetry for correlation.","We operationalise detection engineering."],c:1},
      {q:"Choose the best process sentence.",a:["If an alert triggers, we are investigating always it.","When an alert is triggered, we first assess it.","When alert is triggered, first we assess.","An alert triggered is first assess."],c:1}
    ],
    practice:[
      {q:"A client asks what a SOC does. Best opening?",a:["A SOC is a SIEM-centric operational capability.","In simple terms, we monitor for suspicious activity and coordinate the response when something needs investigation.","We do cybersecurity things.","The SOC is responsible of alerts."],c:1},
      {q:"Best way to describe escalation?",a:["If the alert needs deeper investigation, we escalate it to the relevant team.","If alert is bad, we escalate him.","We make an escalation when it is necessary.","We escalate always suspicious things."],c:0},
      {q:"Which sentence uses the passive appropriately?",a:["The analyst triggers an alert by the tool.","An alert is triggered when the detection rule matches suspicious activity.","An alert is trigger.","It is alerted by suspicious."],c:1}
    ],
    speakChecklist:["I explained the SOC in plain English.","I described the process in a logical order.","I used at least three sequencing expressions.","I avoided unexplained jargon.","I finished in under 90 seconds."],
    checkpoint:[
      {q:"Best plain-English definition of alert qualification?",a:["Deciding whether an alert is relevant and needs further investigation.","Installing a new firewall.","Writing malware.","Closing every alert quickly."],c:0},
      {q:"Complete: “When an alert ___, we first assess the context.”",a:["triggers","is triggered","has trigger","was triggering always"],c:1},
      {q:"Best sequencing phrase after the initial check?",a:["At first after","If necessary, we then…","In a second time","Afterwards of that"],c:1},
      {q:"What should a client-facing explanation prioritise?",a:["Every technical acronym.","A clear purpose and process.","Maximum detail regardless of audience.","Very long sentences."],c:1}
    ]
  },
  alert:{
    listen:{
      text:"The PowerShell alert was triggered at 10:14. We can confirm that an encoded command was executed, but at this stage we have no evidence of persistence or lateral movement. The activity could be legitimate administration, although the source account is unusual. We are checking the parent process and the user's recent logins next.",
      q:"Which statement best reflects the analyst's conclusion?",
      a:["The host is definitely compromised.","The alert is a false positive.","There is suspicious evidence, but the cause is not confirmed yet.","Lateral movement has been confirmed."],c:2
    },
    notice:[
      {q:"Which sentence separates fact from hypothesis?",a:["The attacker used PowerShell.","PowerShell execution was observed; this could be malicious, but we have not confirmed that yet.","This is surely an attacker.","The account must be hacked."],c:1},
      {q:"Which expression is appropriately cautious?",a:["This proves that…","This appears to be consistent with…","This absolutely means…","There is no doubt that…"],c:1}
    ],
    practice:[
      {q:"You saw an encoded command but no persistence. Best wording?",a:["We have evidence of command execution, but no indication of persistence so far.","Persistence didn't happen.","The machine is safe.","It is an APT."],c:0},
      {q:"Best next-step phrase?",a:["The next step is to verify whether the account activity is legitimate.","We next verify if legitimate is account.","Next step we control.","We will prove the attack."],c:0},
      {q:"Which modal best expresses an open possibility?",a:["must","could","will","cannot"],c:1}
    ],
    speakChecklist:["I stated the observed facts first.","I used cautious language for hypotheses.","I mentioned what has NOT been observed.","I gave a clear next check.","I did not overclaim."],
    checkpoint:[
      {q:"Which is a confirmed fact?",a:["The actor is malicious.","An encoded PowerShell command was executed.","The user intended to attack the system.","The alert is part of a known campaign."],c:1},
      {q:"Best phrase when evidence is incomplete?",a:["This could be consistent with…","This is certainly…","It obviously is…","We know for sure…"],c:0},
      {q:"Complete: “At this stage, we have no evidence ___ lateral movement.”",a:["for","of","about of","to"],c:1},
      {q:"A strong alert qualification should finish with…",a:["a guess about attribution","the next verification step","an apology","a long definition of the SIEM"],c:1}
    ]
  },
  incident:{
    listen:{
      text:"We detected a suspicious login to the administrator account at 08:42. The account was disabled ten minutes later as a precaution. We have reviewed the authentication logs and, so far, we have found no evidence of data exfiltration. We are currently checking whether the same source IP accessed any other accounts. Our next update will be at noon.",
      q:"What is still in progress?",
      a:["Disabling the account.","Reviewing whether other accounts were accessed.","Detecting the first login.","Scheduling the noon update."],c:1
    },
    notice:[
      {q:"Why is Present Perfect used in “We have found no evidence…”?",a:["Because the investigation is completely finished.","Because the finding is relevant to the current situation.","Because it happened at a specific finished time.","Because Present Perfect is always formal."],c:1},
      {q:"Which tense fits an action happening now?",a:["Past Simple","Present Perfect","Present Continuous","Past Perfect"],c:2}
    ],
    practice:[
      {q:"Choose the best incident-update opening.",a:["A suspicious login was detected at 08:42.","We have detected yesterday a login.","There was happened suspicious login.","At 08:42 has detected login."],c:0},
      {q:"Current result?",a:["The account has been disabled as a precaution.","The account disabled tomorrow.","The account is disable yesterday.","We disable since ten minutes."],c:0},
      {q:"Ongoing action?",a:["We are currently reviewing the source IP activity.","We reviewed currently.","We have currently review.","We current review."],c:0}
    ],
    speakChecklist:["I gave the detection time.","I explained the containment action.","I separated confirmed findings from ongoing checks.","I used Past Simple, Present Perfect and Present Continuous.","I gave a next-update point."],
    checkpoint:[
      {q:"Complete: “We ___ the suspicious login at 08:42.”",a:["have detected","detected","are detecting","detect since"],c:1},
      {q:"Complete: “So far, we ___ no evidence of exfiltration.”",a:["found yesterday","have found","are find","have finding"],c:1},
      {q:"Complete: “We ___ the other accounts now.”",a:["check","checked","are checking","have checked yesterday"],c:2},
      {q:"Best final sentence?",a:["We will provide the next update once the additional checks are complete.","We come back to you when finish.","We return you information.","No news is good news."],c:0}
    ]
  },
  handover:{
    listen:{
      text:"The alert came in at 16:20 after repeated failed logins from an unfamiliar IP address. I checked the authentication logs and found one successful login five minutes later. The account has already been disabled. I also checked the user's usual locations and the source IP does not match them. The main outstanding task is to review mailbox activity after the successful login.",
      q:"What should the next analyst do?",
      a:["Disable the account.","Review mailbox activity after the login.","Check whether there were failed logins.","Find the alert time."],c:1
    },
    notice:[
      {q:"Which handover sentence clearly distinguishes completed work from pending work?",a:["I checked the logs; the remaining task is to review mailbox activity.","I do logs and mailbox later.","Everything almost done.","There are things to check."],c:0},
      {q:"Best phrase for an outstanding item?",a:["The main outstanding point is…","The rest thing is…","It stays to…","The point not finished is…"],c:0}
    ],
    practice:[
      {q:"Chronological opener?",a:["The alert came in at 16:20 after repeated failed logins.","At 16:20 is coming alert.","The alert has come at 16:20 yesterday.","Repeated logins before alert after."],c:0},
      {q:"Completed containment?",a:["The account has already been disabled.","The account already disable.","The account is disabled tomorrow.","We have disable the account."],c:0},
      {q:"Best handover ending?",a:["The next analyst should review mailbox activity and confirm whether any messages were accessed.","Good luck.","You continue.","There are maybe other things."],c:0}
    ],
    speakChecklist:["My handover followed a timeline.","I said what I checked and what I found.","I identified containment already completed.","I stated one or more outstanding tasks.","A new analyst could continue without repeating my work."],
    checkpoint:[
      {q:"Which phrase signals completed work?",a:["I have already checked…","I will maybe check…","It remains checking…","I checking now yesterday."],c:0},
      {q:"Which phrase signals pending work?",a:["We ruled out…","The main outstanding task is…","It was detected…","The account has been disabled."],c:1},
      {q:"Best connector for sequence?",a:["After that","Despite of","In a second time","By consequence"],c:0},
      {q:"The main purpose of a handover is to…",a:["show all the vocabulary you know","allow another analyst to continue efficiently","re-tell every detail from memory","assign blame"],c:1}
    ]
  },
  risk:{
    listen:{
      text:"The vulnerability is rated critical because exploitation could allow remote code execution. We currently have no evidence that it has been exploited in your environment. However, the affected service is internet-facing, which increases the likelihood of attempted exploitation. The potential impact is high, so we recommend prioritising the patch even though compromise has not been observed.",
      q:"Why is remediation still a priority?",
      a:["Compromise has already been confirmed.","The service is internet-facing and the potential impact is high.","The vulnerability score is low.","The client has already patched the system."],c:1
    },
    notice:[
      {q:"Which sentence correctly separates vulnerability from compromise?",a:["A critical vulnerability means the system is compromised.","The vulnerability creates an exposure, but there is currently no evidence of compromise.","Vulnerability and compromise mean the same thing.","Critical always means exploited."],c:1},
      {q:"Best risk structure?",a:["likelihood + impact + recommendation","technical jargon + CVE only","certainty + blame","score + panic"],c:0}
    ],
    practice:[
      {q:"Best explanation of likelihood?",a:["Because the service is internet-facing, attempted exploitation is more likely.","The likelihood is critical.","It will be exploited certainly.","Internet makes attack."],c:0},
      {q:"Best conditional?",a:["If the vulnerability were exploited, an attacker could execute code remotely.","If exploited, attacker can has execution.","If it will exploit, code executes.","If vulnerability exploited yesterday, will attack."],c:0},
      {q:"Best recommendation?",a:["We recommend prioritising remediation because the potential impact is high.","You must patch because CVSS.","Patch now!!!","The system is dangerous."],c:0}
    ],
    speakChecklist:["I explained the vulnerability in plain English.","I stated whether exploitation was observed.","I separated likelihood from impact.","I used at least one conditional.","I ended with a justified recommendation."],
    checkpoint:[
      {q:"A vulnerability is…",a:["a weakness that may be exploitable","proof that an attacker is present","the same as an incident","always malware"],c:0},
      {q:"Best cautious wording?",a:["There is currently no evidence that it has been exploited.","It was never exploited and never will be.","The system is safe.","No attacker can use it."],c:0},
      {q:"Complete: “If exploited, the vulnerability ___ allow remote code execution.”",a:["could","must to","is","has"],c:0},
      {q:"Which pair belongs in a risk explanation?",a:["likelihood and impact","username and password","grammar and spelling","speed and accent"],c:0}
    ]
  },
  remediation:{
    listen:{
      text:"As an immediate containment measure, we recommend isolating the affected endpoint and resetting the exposed credentials. In the short term, the vulnerable application should be patched after compatibility checks. Longer term, we suggest reviewing privileged access and adding a detection rule for the behaviour observed during this incident.",
      q:"Which action is presented as a long-term improvement?",
      a:["Isolating the endpoint.","Resetting credentials.","Patching after compatibility checks.","Reviewing privileged access and adding detection."],c:3
    },
    notice:[
      {q:"Which structure is correct?",a:["We recommend isolating the endpoint.","We recommend to isolate the endpoint.","We recommend you to isolating.","We recommend isolate it."],c:0},
      {q:"Which phrase is softer than “You must…”?",a:["It would be advisable to…","You are obliged that…","Do it.","You have no choice."],c:0}
    ],
    practice:[
      {q:"Immediate action?",a:["As an immediate containment measure, we recommend isolating the endpoint.","For someday, isolate.","Maybe long term reset now.","The endpoint is recommend isolation."],c:0},
      {q:"Fallback plan?",a:["If patching cannot be completed today, we recommend restricting external access temporarily.","If patch not today, nothing.","If cannot patch, you must panic.","If patching couldn't, we recommend to restricting."],c:0},
      {q:"Best prioritisation phrase?",a:["The priority should be credential reset because the account may still be exposed.","Everything is priority one.","Do all immediately maybe.","The priority must being reset."],c:0}
    ],
    speakChecklist:["I separated immediate, short-term and long-term actions.","I prioritised rather than listing random actions.","I used at least two recommendation structures.","I gave a reason for each priority.","My tone was firm but professional."],
    checkpoint:[
      {q:"Correct pattern after recommend?",a:["recommend + -ing","recommend + to + infinitive only","recommend + object + to","recommend + past participle"],c:0},
      {q:"Best diplomatic recommendation?",a:["It would be advisable to restrict access temporarily.","You must do what I say.","Obviously patch.","Your configuration is bad."],c:0},
      {q:"A fallback condition often starts with…",a:["If this cannot be completed…","Despite this can…","According to if…","Since perhaps…"],c:0},
      {q:"Good remediation advice should be…",a:["prioritised and justified","as technical as possible","all equally urgent","unconnected to operational constraints"],c:0}
    ]
  },
  threat:{
    listen:{
      text:"The observed activity is consistent with techniques previously associated with the group, particularly the use of stolen credentials and scheduled tasks for persistence. We have also identified two indicators reported in earlier campaigns. However, these overlaps do not confirm attribution, and other actors could use the same techniques.",
      q:"What is the analyst careful NOT to claim?",
      a:["That techniques overlap with previous campaigns.","That stolen credentials were involved.","That attribution to the group is confirmed.","That indicators were identified."],c:2
    },
    notice:[
      {q:"Which phrase signals cautious association rather than confirmed attribution?",a:["associated with","definitely carried out by","proved to be","certainly attributed to"],c:0},
      {q:"Best evidence-based sentence?",a:["The TTPs overlap with previously reported activity, but this does not by itself confirm attribution.","It looks like them, so it is them.","Same technique means same actor.","We know the group did it."],c:0}
    ],
    practice:[
      {q:"Best way to report an IOC?",a:["We observed an IP address previously reported in related campaigns.","We found the hacker's IP, definitely.","The IOC proves attribution.","An IP is the actor."],c:0},
      {q:"Best hedged conclusion?",a:["Based on the available evidence, this is one plausible explanation.","This is absolutely the only explanation.","No other actor could do this.","We attribute with certainty."],c:0},
      {q:"Which phrase introduces a limitation?",a:["However, this evidence is not sufficient to confirm attribution.","This confirms all.","Therefore definitely.","No limitation exists."],c:0}
    ],
    speakChecklist:["I distinguished observed behaviour from interpretation.","I used ‘associated with’ or equivalent cautious language.","I mentioned at least one limitation.","I avoided claiming attribution as fact.","I summarised the most plausible interpretation."],
    checkpoint:[
      {q:"TTP stands for…",a:["tactics, techniques and procedures","threat transfer protocol","technical tracking process","target threat profile"],c:0},
      {q:"‘Associated with’ is generally…",a:["more cautious than ‘attributed to’","stronger than confirmed attribution","proof of identity","a malware family"],c:0},
      {q:"Which sentence is appropriately cautious?",a:["The activity is consistent with previously observed TTPs.","The actor is definitely Group X.","The IOC proves who did it.","No other explanation is possible."],c:0},
      {q:"Good threat-intelligence reporting separates…",a:["observation, assessment and confidence","verbs and nouns","clients and analysts","English and French"],c:0}
    ]
  },
  meetings:{
    listen:{
      text:"Sorry to jump in, but can I clarify one point? If I understood correctly, you're asking whether the suspicious login led to any data access. We haven't confirmed that yet. Could I come back to you on that once we've finished reviewing the audit logs?",
      q:"What does the speaker do before answering cautiously?",
      a:["Changes the subject.","Reformulates the question to check understanding.","Claims the investigation is complete.","Ends the meeting."],c:1
    },
    notice:[
      {q:"Which phrase naturally buys thinking time?",a:["Let me think that through for a second.","Wait me.","I reflect.","Give me seconds."],c:0},
      {q:"Which is an indirect clarification question?",a:["Could you clarify what you mean by ‘affected’ here?","What means affected?","Explain affected.","Affected is what?"],c:0}
    ],
    practice:[
      {q:"You missed part of a fast explanation. Best response?",a:["Could you run that by me again?","Repeat more slowly because I can't English.","What?","I didn't listen."],c:0},
      {q:"You need to challenge an assumption politely.",a:["I see why you'd think that, but we haven't confirmed the link yet.","You're wrong.","No, impossible.","That makes no sense."],c:0},
      {q:"You need time before committing.",a:["Can I come back to that once we've checked the logs?","I answer later maybe.","No answer.","Wait until logs."],c:0}
    ],
    speakChecklist:["I used one polite interruption.","I asked for clarification naturally.","I reformulated one point to check understanding.","I bought thinking time without going silent.","I gave a cautious answer when evidence was incomplete."],
    checkpoint:[
      {q:"Best interruption?",a:["Sorry to jump in, but can I clarify one point?","Stop talking.","I interrupt you.","No, listen."],c:0},
      {q:"Best reformulation opener?",a:["If I understood correctly, you're asking whether…","You ask that…","Your question is… yes?","I think your ask…"],c:0},
      {q:"Best way to defer an answer?",a:["Can I come back to that once we've checked the logs?","I don't answer.","Maybe later.","Ask somebody else."],c:0},
      {q:"The goal of meeting-recovery phrases is to…",a:["stay active even when comprehension or formulation is difficult","hide every difficulty","speak faster than everyone","avoid asking questions"],c:0}
    ]
  },
  review:{
    listen:{
      text:"The incident began with a successful login using a compromised account. One contributing factor was that multi-factor authentication had not yet been enabled for that service. In hindsight, we could have detected the activity earlier if the new alert rule had already been deployed. A key lesson is to accelerate MFA coverage and complete the planned detection rollout.",
      q:"Which sentence identifies a contributing factor without directly blaming a person?",
      a:["Someone forgot everything.","Multi-factor authentication had not yet been enabled for that service.","The analyst failed.","The user caused the incident."],c:1
    },
    notice:[
      {q:"Which phrase is constructive rather than accusatory?",a:["One contributing factor was…","You should have known better.","This was your fault.","Someone messed up."],c:0},
      {q:"Which past modal describes a missed possibility?",a:["could have","must","will","is going to"],c:0}
    ],
    practice:[
      {q:"Best lesson-learned phrase?",a:["A key lesson learned is to expand MFA coverage.","The lesson is people are bad.","Never trust users.","Someone should be blamed."],c:0},
      {q:"Best missed-opportunity sentence?",a:["We could have detected the activity earlier if the alert rule had been deployed.","We could detected earlier.","We can have detect.","We would detected."],c:0},
      {q:"Best forward-looking close?",a:["Going forward, we recommend completing the detection rollout and validating coverage.","Next time don't fail.","We will hope.","It should not happen."],c:0}
    ],
    speakChecklist:["I gave a short, clear incident timeline.","I identified contributing factors without blame.","I used could have / should have appropriately.","I stated a concrete lesson learned.","I ended with an action for the future."],
    checkpoint:[
      {q:"Best phrase for a neutral contributing factor?",a:["One contributing factor was…","The guilty person was…","You caused…","It was stupid that…"],c:0},
      {q:"Complete: “We ___ detected it earlier if the rule had been active.”",a:["could have","could","can have","should"],c:0},
      {q:"A post-incident review should primarily aim to…",a:["learn and improve","assign blame","show technical vocabulary","prove nobody made mistakes"],c:0},
      {q:"Best closing phrase?",a:["Going forward, we recommend…","In the future yesterday…","Next go…","After now we must…"],c:0}
    ]
  }
};

function renderQuestionSet(items,prefix){
  return items.map((item,i)=>`<fieldset class="activity-question">
    <legend>${i+1}. ${item.q}</legend>
    <div class="activity-options">${item.a.map((opt,j)=>`<label><input type="radio" name="${prefix}-${i}" value="${j}"><span>${opt}</span></label>`).join("")}</div>
    <div class="inline-feedback" id="${prefix}-feedback-${i}" aria-live="polite"></div>
  </fieldset>`).join("");
}

function checkQuestionSet(items,prefix){
  let correct=0,answered=0;
  items.forEach((item,i)=>{
    const picked=document.querySelector(`input[name="${prefix}-${i}"]:checked`);
    const fb=document.getElementById(`${prefix}-feedback-${i}`);
    if(!fb)return;
    if(!picked){fb.className="inline-feedback neutral";fb.textContent="Choose an answer.";return;}
    answered++;
    if(Number(picked.value)===item.c){correct++;fb.className="inline-feedback correct";fb.textContent="Correct ✓";}
    else{fb.className="inline-feedback wrong";fb.textContent=`Not quite. Best answer: ${item.a[item.c]}`;}
  });
  return {correct,answered,total:items.length,pct:Math.round(correct/items.length*100)};
}

let moduleMediaRecorder=null,moduleAudioChunks=[];
function bindModuleRecorder(key){
  const start=document.getElementById("moduleRecordBtn"),stop=document.getElementById("moduleStopBtn"),playback=document.getElementById("modulePlayback"),status=document.getElementById("moduleRecordStatus");
  if(!start||!stop)return;
  start.addEventListener("click",async()=>{
    try{
      const stream=await navigator.mediaDevices.getUserMedia({audio:true});
      moduleAudioChunks=[];
      moduleMediaRecorder=new MediaRecorder(stream);
      moduleMediaRecorder.ondataavailable=e=>moduleAudioChunks.push(e.data);
      moduleMediaRecorder.onstop=()=>{
        const blob=new Blob(moduleAudioChunks,{type:"audio/webm"});
        playback.src=URL.createObjectURL(blob);playback.hidden=false;
        status.textContent="Recording ready. Listen back, then use the checklist below. Nothing has been uploaded.";
        stream.getTracks().forEach(t=>t.stop());
      };
      moduleMediaRecorder.start();start.disabled=true;stop.disabled=false;status.textContent="Recording…";
    }catch(e){status.textContent="Microphone access was not granted. You can still complete the speaking task aloud and use the checklist.";}
  });
  stop.addEventListener("click",()=>{if(moduleMediaRecorder?.state==="recording"){moduleMediaRecorder.stop();start.disabled=false;stop.disabled=true;}});
}

function updateStageBanner(key){
  const state=planStorage(),count=moduleStageCount(state,key),el=document.getElementById("lessonStageProgress");
  if(el)el.textContent=`${count} / 5 stages completed`;
}

function bindInteractiveModule(key){
  const a=moduleActivities[key]; if(!a)return;
  let plays=0;
  const listenBtn=document.getElementById("moduleListenBtn");
  listenBtn?.addEventListener("click",()=>{
    if(plays>=2)return;
    if(!("speechSynthesis" in window)){document.getElementById("listenFeedback").textContent="Speech playback is not supported in this browser.";return;}
    const u=new SpeechSynthesisUtterance(a.listen.text);u.lang="en-GB";u.rate=1.04;speechSynthesis.cancel();speechSynthesis.speak(u);
    plays++;document.getElementById("moduleListenCount").textContent=`${plays} / 2 plays`;if(plays>=2)listenBtn.disabled=true;
  });
  document.getElementById("checkListenBtn")?.addEventListener("click",()=>{
    const picked=document.querySelector(`input[name="module-listen-${key}"]:checked`),fb=document.getElementById("listenFeedback");
    if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose an answer first.";return;}
    const ok=Number(picked.value)===a.listen.c;fb.className=`activity-summary ${ok?"correct":"wrong"}`;fb.textContent=ok?"Correct ✓":`Not quite. Best answer: ${a.listen.a[a.listen.c]}`;
    const state=planStorage();state.stages[key]=state.stages[key]||{};state.stages[key].listen=ok;savePlanStorage(state);updateStageBanner(key);
  });
  document.getElementById("checkNoticeBtn")?.addEventListener("click",()=>{
    const r=checkQuestionSet(a.notice,`notice-${key}`),fb=document.getElementById("noticeSummary");
    fb.className=`activity-summary ${r.pct>=75?"correct":"wrong"}`;fb.textContent=`${r.correct} / ${r.total} correct${r.pct>=75?" — stage passed ✓":" — review the corrections and try again."}`;
    const state=planStorage();state.stages[key]=state.stages[key]||{};state.stages[key].notice=r.pct>=75;savePlanStorage(state);updateStageBanner(key);
  });
  document.getElementById("checkPracticeBtn")?.addEventListener("click",()=>{
    const r=checkQuestionSet(a.practice,`practice-${key}`),fb=document.getElementById("practiceSummary");
    fb.className=`activity-summary ${r.pct>=67?"correct":"wrong"}`;fb.textContent=`${r.correct} / ${r.total} correct${r.pct>=67?" — stage passed ✓":" — review and try once more."}`;
    const state=planStorage();state.stages[key]=state.stages[key]||{};state.stages[key].practice=r.pct>=67;savePlanStorage(state);updateStageBanner(key);
  });
  document.getElementById("speakSelfCheckBtn")?.addEventListener("click",()=>{
    const checks=[...document.querySelectorAll(".speak-check input[type=checkbox]")];
    const n=checks.filter(x=>x.checked).length,fb=document.getElementById("speakSummary");
    fb.className=`activity-summary ${n>=4?"correct":"neutral"}`;fb.textContent=`${n} / ${checks.length} criteria checked${n>=4?" — speaking stage complete ✓":" — aim for at least four before moving on."}`;
    const state=planStorage();state.stages[key]=state.stages[key]||{};state.stages[key].speak=n>=4;savePlanStorage(state);updateStageBanner(key);
  });
  document.getElementById("checkCheckpointBtn")?.addEventListener("click",()=>{
    const r=checkQuestionSet(a.checkpoint,`checkpoint-${key}`),fb=document.getElementById("checkpointQuizSummary"),complete=document.getElementById("completeModuleBtn");
    const pass=r.pct>=75;
    fb.className=`activity-summary ${pass?"correct":"wrong"}`;fb.textContent=`${r.correct} / ${r.total} correct${pass?" — checkpoint passed. You can complete the module ✓":" — you need 3 / 4. Review the module and try again."}`;
    complete.disabled=!pass;
    const state=planStorage();state.stages[key]=state.stages[key]||{};state.stages[key].checkpoint=pass;state.attempts[key]=(state.attempts[key]||0)+1;savePlanStorage(state);updateStageBanner(key);
  });
  bindModuleRecorder(key);
}

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
  if(cyberWeak.some(x=>["SOC terminology","SOC workflow"].includes(x))){ add("role"); add("alert"); }

  if(results.listening<70 || results.speaking<70) add("meetings");
  if(grammarWeak.some(x=>x.includes("Past")||x.includes("perfect"))) add("incident");
  if(grammarWeak.some(x=>x.includes("Conditional")||x.includes("Modals"))) add("risk");
  if(grammarWeak.some(x=>x.includes("Passive"))) add("incident");
  if(pronWeak.some(x=>["Connected speech","Sentence stress"].includes(x))) add("meetings");
  if(pronWeak.some(x=>["Word stress","-ed endings","-s endings"].includes(x))) add("incident");

  ["role","alert","incident","risk","meetings","handover","remediation","threat","review"].forEach(add);
  return selected.slice(0,4);
}

function focusFromDetails(details){
  const g=tagWeaknesses(details.grammar,1)[0]?.name || "core accuracy";
  const p=tagWeaknesses(details.pronunciation,1)[0]?.name || "intelligibility";
  const c=tagWeaknesses(details.cyber,1)[0]?.name || "SOC communication";
  return {g,p,c};
}

function planStorage(){
  try{
    const data=JSON.parse(localStorage.getItem("ebackontrack-v3-progress"))||{};
    return {completed:Array.isArray(data.completed)?data.completed:[], attempts:data.attempts||{}, stages:data.stages||{}};
  }catch(e){return{completed:[],attempts:{},stages:{}}}
}
function savePlanStorage(data){localStorage.setItem("ebackontrack-v3-progress",JSON.stringify(data));}
function moduleStageCount(state,key){
  const s=state.stages?.[key]||{};
  return ["listen","notice","practice","speak","checkpoint"].filter(k=>s[k]).length;
}
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
      <div class="mini-stage-progress"><span>${moduleStageCount(state,key)} / 5 stages</span><span>${state.attempts?.[key]||0} checkpoint attempt${(state.attempts?.[key]||0)===1?'':'s'}</span></div>
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
  const m=trainingModules[key],a=moduleActivities[key]; if(!m||!a)return;
  const focus=focusFromDetails(currentDetails||{grammar:{tags:{}},cyber:{tags:{}},pronunciation:{tags:{}}});
  const pos=currentPlan.indexOf(key)+1,state=planStorage(),alreadyDone=state.completed.includes(key),checkpointPassed=!!state.stages?.[key]?.checkpoint;
  document.getElementById('lessonPosition').innerHTML=`Starter module ${pos} of ${currentPlan.length} · <strong id="lessonStageProgress">${moduleStageCount(state,key)} / 5 stages completed</strong>`;
  document.getElementById('lessonContent').innerHTML=`
    <section class="lesson-hero">
      <div><p class="small-label">MODULE ${String(pos).padStart(2,'0')}</p><h2>${m.title}</h2><p>${m.objective}</p><div class="module-tags hero-tags">${m.tags.map(t=>`<span class="module-tag">${t}</span>`).join('')}</div></div>
      <div class="mission-box"><strong>Professional scenario</strong><span>${m.scenario}</span></div>
    </section>

    <nav class="activity-flow" aria-label="Module sequence">
      <span>1 Listen</span><span>2 Notice</span><span>3 Practise</span><span>4 Speak</span><span>5 Checkpoint</span>
    </nav>

    <div class="interactive-lesson">
      <article class="interactive-stage">
        <div class="stage-heading"><div><p class="small-label">1 · LISTEN</p><h3>Understand the operational message</h3></div><span class="stage-badge">2 plays max</span></div>
        <p>Listen without reading first. Focus on <strong>what is known, what is uncertain and what happens next</strong>.</p>
        <div class="listen-controls"><button class="listen-button" id="moduleListenBtn" type="button">▶ Play update</button><span id="moduleListenCount" class="play-count">0 / 2 plays</span></div>
        <fieldset class="activity-question single">
          <legend>${a.listen.q}</legend>
          <div class="activity-options">${a.listen.a.map((opt,j)=>`<label><input type="radio" name="module-listen-${key}" value="${j}"><span>${opt}</span></label>`).join("")}</div>
        </fieldset>
        <button class="secondary-button" id="checkListenBtn" type="button">Check answer</button>
        <div id="listenFeedback" class="activity-summary" aria-live="polite"></div>
        <details class="transcript-box"><summary>Reveal transcript after listening</summary><p>${a.listen.text}</p></details>
      </article>

      <article class="interactive-stage">
        <div class="stage-heading"><div><p class="small-label">2 · NOTICE</p><h3>See how effective cyber English works</h3></div><span class="focus-pill">Diagnostic gap: ${focus.g}</span></div>
        <div class="language-bank"><h4>Reusable language</h4>${m.language.map(x=>`<div class="language-item"><span>${x}</span><button class="inline-save-btn" type="button" data-save-phrase="${encodeURIComponent(x)}" data-source-module="${key}">+ Phrasebook</button></div>`).join('')}</div>
        <p class="focus-explainer"><strong>Accuracy focus:</strong> ${m.grammar}</p>
        ${renderQuestionSet(a.notice,`notice-${key}`)}
        <button class="secondary-button" id="checkNoticeBtn" type="button">Check this stage</button>
        <div id="noticeSummary" class="activity-summary" aria-live="polite"></div>
      </article>

      <article class="interactive-stage">
        <div class="stage-heading"><div><p class="small-label">3 · PRACTISE</p><h3>Choose language you could actually use</h3></div><span class="focus-pill">Cyber focus: ${focus.c}</span></div>
        <p>These are deliberately short. The goal is to make useful wording <strong>automatic</strong>, not to memorise grammar rules.</p>
        ${renderQuestionSet(a.practice,`practice-${key}`)}
        <button class="secondary-button" id="checkPracticeBtn" type="button">Check my answers</button>
        <div id="practiceSummary" class="activity-summary" aria-live="polite"></div>
      </article>

      <article class="interactive-stage">
        <div class="stage-heading"><div><p class="small-label">4 · SPEAK</p><h3>Use it without a script</h3></div><span class="focus-pill">Pronunciation: ${focus.p}</span></div>
        <div class="speaking-mission"><strong>Your mission</strong><p>${m.mission}</p><span>Preparation: maximum 60 seconds · keywords allowed · full script forbidden.</span></div>
        <p><strong>Pronunciation focus:</strong> ${m.pronunciation}</p>
        <div class="record-actions">
          <button class="secondary-button" id="moduleRecordBtn" type="button">● Start recording</button>
          <button class="secondary-button" id="moduleStopBtn" type="button" disabled>■ Stop</button>
        </div>
        <audio id="modulePlayback" controls hidden></audio>
        <p class="microcopy" id="moduleRecordStatus">The recording stays on this device and disappears when the page is reloaded.</p>
        <div class="speak-check">
          <h4>Listen back and check:</h4>
          ${a.speakChecklist.map((x,i)=>`<label><input type="checkbox" id="speak-${key}-${i}"><span>${x}</span></label>`).join("")}
        </div>
        <button class="secondary-button" id="speakSelfCheckBtn" type="button">Save my self-check</button>
        <div id="speakSummary" class="activity-summary" aria-live="polite"></div>
      </article>

      <article class="interactive-stage checkpoint-stage">
        <div class="stage-heading"><div><p class="small-label">5 · CHECKPOINT</p><h3>Can you use the language accurately?</h3></div><span class="stage-badge">Pass mark: 3 / 4</span></div>
        <p>${m.checkpoint}</p>
        ${renderQuestionSet(a.checkpoint,`checkpoint-${key}`)}
        <button class="secondary-button" id="checkCheckpointBtn" type="button">Check checkpoint</button>
        <div id="checkpointQuizSummary" class="activity-summary" aria-live="polite"></div>
        <div class="checkpoint-actions">
          <button class="primary-button" type="button" id="completeModuleBtn" data-complete="${key}" ${checkpointPassed||alreadyDone?'':'disabled'}>${alreadyDone?'Module completed ✓':'Mark this module complete ✓'}</button>
          <span class="checkpoint-status" id="checkpointStatus">${alreadyDone?'Already completed — reviewing is encouraged.':checkpointPassed?'Checkpoint already passed. You can complete the module.':''}</span>
        </div>
      </article>
    </div>`;
  document.getElementById('lessonWorkspace').hidden=false; document.getElementById('personalPlanGrid').hidden=true;
  document.getElementById('completeModuleBtn').addEventListener('click',()=>completeTrainingModule(key));
  bindInteractiveModule(key);
  bindInlinePhraseButtons();
  document.getElementById('lessonWorkspace').scrollIntoView({behavior:'smooth',block:'start'});
}
function completeTrainingModule(key){
  const state=planStorage();
  if(!state.stages?.[key]?.checkpoint && !state.completed.includes(key)){
    document.getElementById('checkpointStatus').textContent='Pass the checkpoint first (3 / 4).';
    return;
  }
  if(!state.completed.includes(key))state.completed.push(key);
  savePlanStorage(state);
  const btn=document.getElementById('completeModuleBtn'); if(btn){btn.disabled=false;btn.textContent='Module completed ✓';}
  document.getElementById('checkpointStatus').textContent='Completed. Progress saved on this device.';
  updatePlanProgress();
}

document.getElementById('closeLessonBtn').addEventListener('click',()=>{document.getElementById('lessonWorkspace').hidden=true;document.getElementById('personalPlanGrid').hidden=false; if(currentResults&&currentDetails)renderTrainingPlan(currentResults,currentDetails); document.getElementById('my-plan').scrollIntoView({behavior:'smooth',block:'start'});});
document.addEventListener('click',e=>{if(e.target?.id==='openPlanBtn'){if(currentResults&&currentDetails){renderTrainingPlan(currentResults,currentDetails);document.getElementById('my-plan').scrollIntoView({behavior:'smooth'});}}});

// Keep plan links working even though they are inserted below the original event-binding code.
document.querySelectorAll('#my-plan [data-go="diagnostic"]').forEach(btn=>btn.addEventListener('click',()=>document.getElementById('diagnostic').scrollIntoView({behavior:'smooth'})));

// Upgrade saved V2 diagnostic results into the V3 roadmap without changing the diagnostic itself.
try{const saved=JSON.parse(localStorage.getItem('ebackontrack-v2'));if(saved?.results&&saved?.details){renderTrainingPlan(saved.results,saved.details);}}catch(e){}



// V6 · Phrasebook, flashcards & spaced review
const phrasebookItems = [
  {id:"soc-alert-triggered",category:"SOC & Alerts",phrase:"The alert was triggered by…",definition:"Use this to state the event or behaviour that caused a detection rule to fire.",fr:"L’alerte a été déclenchée par…",example:"The alert was triggered by repeated failed logins from an unfamiliar IP address."},
  {id:"soc-at-this-stage",category:"SOC & Alerts",phrase:"At this stage, we have evidence of…, but no indication of…",definition:"Separate confirmed evidence from what has not been observed.",fr:"À ce stade, nous avons des éléments indiquant…, mais aucun signe de…",example:"At this stage, we have evidence of credential use, but no indication of lateral movement."},
  {id:"soc-could-consistent",category:"SOC & Alerts",phrase:"This could be consistent with…",definition:"Introduce a possible interpretation without presenting it as confirmed.",fr:"Cela pourrait correspondre à…",example:"This could be consistent with credential stuffing, although we still need to verify the source."},
  {id:"soc-rule-out",category:"SOC & Alerts",phrase:"We still need to rule out…",definition:"Say that an alternative explanation must still be eliminated.",fr:"Nous devons encore exclure…",example:"We still need to rule out legitimate administrative activity."},
  {id:"soc-appears-unusual",category:"SOC & Alerts",phrase:"The activity appears unusual because…",definition:"Explain why behaviour looks suspicious while keeping appropriate caution.",fr:"L’activité semble inhabituelle parce que…",example:"The activity appears unusual because the account has never logged in from that region before."},
  {id:"soc-next-step",category:"SOC & Alerts",phrase:"The next step is to verify whether…",definition:"State the next investigative check clearly.",fr:"L’étape suivante consiste à vérifier si…",example:"The next step is to verify whether the PowerShell command was authorised."},
  {id:"soc-false-positive",category:"SOC & Alerts",phrase:"This is likely to be a false positive.",definition:"Say that a detection probably does not represent malicious activity.",fr:"Il s’agit probablement d’un faux positif.",example:"The events match the approved scanner schedule, so this is likely to be a false positive."},
  {id:"soc-escalate",category:"SOC & Alerts",phrase:"We are escalating this due to the potential impact.",definition:"Explain why a case is being passed to a higher response level.",fr:"Nous faisons remonter cet incident en raison de son impact potentiel.",example:"We are escalating this due to the potential impact on privileged accounts."},

  {id:"inc-detected",category:"Incidents",phrase:"We detected suspicious activity at approximately…",definition:"Open an incident update with a clear time reference.",fr:"Nous avons détecté une activité suspecte vers…",example:"We detected suspicious activity at approximately 09:20 UTC."},
  {id:"inc-disabled",category:"Incidents",phrase:"The account has been temporarily disabled as a precaution.",definition:"Describe a containment action and explain that it is precautionary.",fr:"Le compte a été temporairement désactivé par mesure de précaution.",example:"The account has been temporarily disabled as a precaution while we review the sign-ins."},
  {id:"inc-so-far",category:"Incidents",phrase:"So far, we have found no evidence of…",definition:"Report a negative finding while making clear that the investigation is still ongoing.",fr:"Jusqu’à présent, nous n’avons trouvé aucun élément indiquant…",example:"So far, we have found no evidence of data exfiltration."},
  {id:"inc-currently-reviewing",category:"Incidents",phrase:"We are currently reviewing…",definition:"State an investigation activity that is in progress now.",fr:"Nous sommes actuellement en train d’examiner…",example:"We are currently reviewing identity and endpoint telemetry."},
  {id:"inc-next-update",category:"Incidents",phrase:"We will provide the next update once…",definition:"Set a clear condition for the next communication.",fr:"Nous ferons un nouveau point dès que…",example:"We will provide the next update once the log review is complete."},
  {id:"inc-isolated",category:"Incidents",phrase:"The endpoint has already been isolated.",definition:"Report a completed containment action with a current result.",fr:"Le terminal a déjà été isolé.",example:"The endpoint has already been isolated from the network."},
  {id:"inc-outstanding",category:"Incidents",phrase:"The main outstanding point is…",definition:"Identify the most important unresolved item in a handover.",fr:"Le principal point restant à traiter est…",example:"The main outstanding point is whether the token was used on any other system."},
  {id:"inc-keep-posted",category:"Incidents",phrase:"We’ll keep you posted.",definition:"Promise concise ongoing updates in a natural professional way.",fr:"Nous vous tiendrons informé.",example:"The investigation is still active and we’ll keep you posted as soon as we have new findings."},

  {id:"ti-consistent",category:"Threat Intelligence",phrase:"The observed activity is consistent with…",definition:"Compare behaviour with known patterns without claiming attribution.",fr:"L’activité observée correspond à…",example:"The observed activity is consistent with techniques seen in previous phishing-led intrusions."},
  {id:"ti-overlap",category:"Threat Intelligence",phrase:"The TTPs overlap with those previously associated with…",definition:"Describe similarities between techniques without overstating certainty.",fr:"Les TTP se recoupent avec ceux précédemment associés à…",example:"The TTPs overlap with those previously associated with the campaign."},
  {id:"ti-no-attribution",category:"Threat Intelligence",phrase:"This does not by itself confirm attribution.",definition:"Warn that one piece of evidence is not sufficient to identify an actor.",fr:"Cela ne suffit pas, à lui seul, à confirmer l’attribution.",example:"The IP has been used before by the group, but this does not by itself confirm attribution."},
  {id:"ti-indicators",category:"Threat Intelligence",phrase:"We have observed indicators including…",definition:"Introduce concrete technical indicators in a briefing.",fr:"Nous avons observé des indicateurs tels que…",example:"We have observed indicators including the domain, file hash and command-line pattern."},
  {id:"ti-most-likely",category:"Threat Intelligence",phrase:"Based on the available evidence, the most likely explanation is…",definition:"State a current assessment while showing that it depends on evidence.",fr:"Sur la base des éléments disponibles, l’explication la plus probable est…",example:"Based on the available evidence, the most likely explanation is credential theft."},
  {id:"ti-low-confidence",category:"Threat Intelligence",phrase:"We assess this with low confidence.",definition:"State explicitly that an intelligence judgement has limited confidence.",fr:"Nous évaluons cette hypothèse avec un faible niveau de confiance.",example:"We assess this attribution with low confidence because only one indicator overlaps."},

  {id:"risk-increases",category:"Risk",phrase:"The vulnerability increases the risk because…",definition:"Connect a technical weakness to the reason it matters.",fr:"La vulnérabilité augmente le risque parce que…",example:"The vulnerability increases the risk because the service is internet-facing and remotely exploitable."},
  {id:"risk-no-exploitation",category:"Risk",phrase:"There is currently no evidence that it has been exploited.",definition:"Distinguish the existence of a vulnerability from confirmed exploitation.",fr:"Nous n’avons actuellement aucun élément indiquant qu’elle a été exploitée.",example:"The flaw is critical, but there is currently no evidence that it has been exploited here."},
  {id:"risk-likelihood-depends",category:"Risk",phrase:"The likelihood depends on…",definition:"Explain the factors that affect probability.",fr:"La probabilité dépend de…",example:"The likelihood depends on exposure, access controls and whether exploit code is available."},
  {id:"risk-impact",category:"Risk",phrase:"The potential impact would be…",definition:"Describe what could happen if the risk materialised.",fr:"L’impact potentiel serait…",example:"The potential impact would be loss of administrative access and service disruption."},
  {id:"risk-recommendation",category:"Risk",phrase:"Our recommendation is to prioritise remediation because…",definition:"Link a recommendation directly to the assessed risk.",fr:"Nous recommandons de donner la priorité à la remédiation parce que…",example:"Our recommendation is to prioritise remediation because the affected service is externally exposed."},
  {id:"risk-immediate-reduced",category:"Risk",phrase:"The immediate risk has been reduced, but…",definition:"Reassure without implying that the incident or risk is fully resolved.",fr:"Le risque immédiat a été réduit, mais…",example:"The immediate risk has been reduced, but we still need to complete the investigation."},

  {id:"client-simple-terms",category:"Clients",phrase:"In simple terms…",definition:"Signal that you are translating technical information into plain English.",fr:"En termes simples…",example:"In simple terms, the account behaved in a way we would not normally expect."},
  {id:"client-current-assessment",category:"Clients",phrase:"Our current assessment is that…",definition:"Present a provisional conclusion that may evolve with new evidence.",fr:"Notre évaluation actuelle est que…",example:"Our current assessment is that the activity was contained before it spread."},
  {id:"client-what-we-know",category:"Clients",phrase:"What we know at this point is…",definition:"Structure an update around confirmed facts.",fr:"Ce que nous savons à ce stade, c’est que…",example:"What we know at this point is that one privileged account was used from a new location."},
  {id:"client-not-confirmed",category:"Clients",phrase:"We have not confirmed…",definition:"Say clearly that a suspected event or impact has not been established.",fr:"Nous n’avons pas confirmé…",example:"We have not confirmed any access to sensitive data."},
  {id:"client-doesnt-mean",category:"Clients",phrase:"That does not necessarily mean that…",definition:"Correct an overly strong interpretation without sounding dismissive.",fr:"Cela ne signifie pas nécessairement que…",example:"A critical vulnerability does not necessarily mean that the system has been compromised."},
  {id:"client-written-update",category:"Clients",phrase:"We’ll send you a written update by…",definition:"Close an update with a concrete communication commitment.",fr:"Nous vous enverrons un point écrit d’ici…",example:"We’ll send you a written update by 16:00 UTC."},

  {id:"meet-jump-in",category:"Meetings",phrase:"Sorry to jump in, but can I clarify one point?",definition:"Interrupt politely to check an important detail.",fr:"Désolé de vous interrompre, mais puis-je clarifier un point ?",example:"Sorry to jump in, but can I clarify one point about the affected accounts?"},
  {id:"meet-think",category:"Meetings",phrase:"Let me think that through for a second.",definition:"Buy a short amount of thinking time naturally.",fr:"Laissez-moi y réfléchir une seconde.",example:"Let me think that through for a second — there are two possible explanations."},
  {id:"meet-follow",category:"Meetings",phrase:"I’m not sure I follow.",definition:"Signal that you need clarification without pretending to understand.",fr:"Je ne suis pas sûr de bien suivre.",example:"I’m not sure I follow. Are you referring to the production tenant or the test environment?"},
  {id:"meet-put-another-way",category:"Meetings",phrase:"Let me put that another way.",definition:"Reformulate your own explanation when the first version was unclear.",fr:"Permettez-moi de le formuler autrement.",example:"Let me put that another way: the alert is serious, but compromise is not confirmed."},
  {id:"meet-evidence-supports",category:"Meetings",phrase:"I’m not sure the evidence supports that conclusion yet.",definition:"Challenge an assumption diplomatically and evidence-first.",fr:"Je ne suis pas sûr que les éléments disponibles permettent encore de tirer cette conclusion.",example:"I’m not sure the evidence supports that conclusion yet; we only have one matching indicator."},
  {id:"meet-does-make-sense",category:"Meetings",phrase:"Does that make sense so far?",definition:"Check understanding during a technical explanation.",fr:"Est-ce que c’est clair jusque-là ?",example:"That is why we isolated the host first. Does that make sense so far?"},
  {id:"meet-say-again",category:"Meetings",phrase:"Could you say that again, please?",definition:"Ask for repetition naturally when you did not catch something.",fr:"Pourriez-vous répéter, s’il vous plaît ?",example:"Sorry, could you say that again, please? I missed the account name."},

  {id:"rem-immediate",category:"Remediation",phrase:"As an immediate containment measure, we recommend…",definition:"Introduce the action that should happen first to limit harm.",fr:"Comme mesure immédiate de confinement, nous recommandons de…",example:"As an immediate containment measure, we recommend disabling the affected session."},
  {id:"rem-short-term",category:"Remediation",phrase:"In the short term, it would be advisable to…",definition:"Make a professional near-term recommendation without sounding abrupt.",fr:"À court terme, il serait conseillé de…",example:"In the short term, it would be advisable to rotate the exposed credentials."},
  {id:"rem-recurrence",category:"Remediation",phrase:"To reduce the likelihood of recurrence, you may also want to…",definition:"Suggest a preventive improvement after the immediate fix.",fr:"Pour réduire le risque de récurrence, vous pourriez également…",example:"To reduce the likelihood of recurrence, you may also want to expand MFA coverage."},
  {id:"rem-fallback",category:"Remediation",phrase:"If this cannot be completed today, we recommend…",definition:"Give a fallback action when the preferred remediation cannot happen immediately.",fr:"Si cela ne peut pas être fait aujourd’hui, nous recommandons de…",example:"If this cannot be completed today, we recommend restricting external access temporarily."},
  {id:"rem-priority",category:"Remediation",phrase:"The priority should be… because…",definition:"Rank an action and justify why it comes first.",fr:"La priorité devrait être… parce que…",example:"The priority should be credential reset because the account may still be exposed."},
  {id:"rem-going-forward",category:"Remediation",phrase:"Going forward, we recommend…",definition:"Introduce a lesson learned or longer-term improvement.",fr:"Pour la suite, nous recommandons de…",example:"Going forward, we recommend extending logging retention to support future investigations."}
  ,{id:"role-monitor",category:"SOC & Alerts",phrase:"We monitor your environment for signs of suspicious activity.",definition:"Explain the continuous monitoring role of the SOC in plain English.",fr:"Nous surveillons votre environnement afin de détecter tout signe d’activité suspecte.",example:"We monitor your environment for signs of suspicious activity across endpoints, identity and network data."}
  ,{id:"role-assess-alert",category:"SOC & Alerts",phrase:"When an alert is triggered, we first assess whether it requires further investigation.",definition:"Describe the first triage step after a detection.",fr:"Lorsqu’une alerte est déclenchée, nous évaluons d’abord si elle nécessite une investigation plus poussée.",example:"When an alert is triggered, we first assess whether it requires further investigation or can be closed as benign."}
  ,{id:"role-escalate-case",category:"SOC & Alerts",phrase:"If necessary, we escalate the case and work with the relevant teams.",definition:"Explain escalation and collaboration in a SOC workflow.",fr:"Si nécessaire, nous faisons remonter le cas et travaillons avec les équipes concernées.",example:"If necessary, we escalate the case and work with the incident-response and identity teams."}
  ,{id:"role-reduce-time",category:"Clients",phrase:"Our role is to reduce the time between detection, investigation and response.",definition:"Summarise the operational value of SOC work for a client.",fr:"Notre rôle est de réduire le délai entre la détection, l’investigation et la réponse.",example:"Our role is to reduce the time between detection, investigation and response so that threats are contained faster."}
  ,{id:"role-simple-terms-full",category:"Clients",phrase:"In simple terms, we help identify threats early and coordinate the right response.",definition:"Give a non-technical summary of SOC work.",fr:"En termes simples, nous aidons à identifier les menaces rapidement et à coordonner la réponse appropriée.",example:"In simple terms, we help identify threats early and coordinate the right response with your teams."}
  ,{id:"alert-consistent-ruleout",category:"SOC & Alerts",phrase:"This could be consistent with…, although we still need to rule out…",definition:"Combine a cautious hypothesis with the alternative explanation that still needs checking.",fr:"Cela pourrait correspondre à…, même si nous devons encore exclure…",example:"This could be consistent with malicious scripting, although we still need to rule out authorised administration."}
  ,{id:"incident-no-exfil-full",category:"Incidents",phrase:"So far, we have found no evidence of data exfiltration.",definition:"Report that exfiltration has not been observed while keeping the investigation open.",fr:"Jusqu’à présent, nous n’avons trouvé aucun élément indiquant une exfiltration de données.",example:"So far, we have found no evidence of data exfiltration, but the review is still ongoing."}
  ,{id:"handover-came-in",category:"Incidents",phrase:"The alert came in at…",definition:"Start a handover timeline with the time the alert arrived.",fr:"L’alerte est arrivée à…",example:"The alert came in at 08:42 UTC and was assigned to the SOC five minutes later."}
  ,{id:"handover-checked",category:"Incidents",phrase:"I checked…, which showed…",definition:"Report an investigative action and the evidence it produced.",fr:"J’ai vérifié…, ce qui a montré…",example:"I checked the identity logs, which showed three failed logins followed by one successful login."}
  ,{id:"handover-ruled-out",category:"Incidents",phrase:"We ruled out…",definition:"State that an investigated hypothesis is no longer considered likely.",fr:"Nous avons exclu…",example:"We ruled out the vulnerability scanner as the source of the activity."}
  ,{id:"handover-next-analyst",category:"Incidents",phrase:"The next analyst should check…",definition:"Give a precise outstanding action during a shift handover.",fr:"L’analyste suivant devrait vérifier…",example:"The next analyst should check whether the same token was used on any other endpoint."}
  ,{id:"meeting-run-by",category:"Meetings",phrase:"Could you run that by me again?",definition:"Ask someone to repeat or explain something again in natural spoken English.",fr:"Pourriez-vous me réexpliquer cela ?",example:"Sorry, could you run that by me again? I missed the part about the service account."}
  ,{id:"meeting-understood",category:"Meetings",phrase:"If I understood correctly, you're asking whether…",definition:"Reformulate a question to confirm that you understood it correctly.",fr:"Si j’ai bien compris, vous demandez si…",example:"If I understood correctly, you're asking whether the account is safe to re-enable."}
  ,{id:"meeting-no-jump",category:"Meetings",phrase:"I don't want to jump to conclusions, but at this stage…",definition:"Introduce a cautious provisional assessment in a live discussion.",fr:"Je ne veux pas tirer de conclusions hâtives, mais à ce stade…",example:"I don't want to jump to conclusions, but at this stage the activity looks more likely to be legitimate."}
  ,{id:"meeting-come-back",category:"Meetings",phrase:"Can I come back to that once we've checked the logs?",definition:"Postpone an answer responsibly until the evidence has been checked.",fr:"Puis-je revenir sur ce point une fois que nous aurons vérifié les journaux ?",example:"Can I come back to that once we've checked the logs? I don't want to give you an inaccurate answer."}
  ,{id:"pir-began",category:"Incidents",phrase:"The incident began when…",definition:"Introduce the starting event in a post-incident timeline.",fr:"L’incident a commencé lorsque…",example:"The incident began when a privileged account authenticated from an unusual location."}
  ,{id:"pir-factor",category:"Risk",phrase:"One contributing factor was…",definition:"Identify a factor that helped an incident happen without assigning simplistic blame.",fr:"L’un des facteurs contributifs était…",example:"One contributing factor was incomplete MFA coverage on legacy accounts."}
  ,{id:"pir-meant",category:"Risk",phrase:"This meant that…",definition:"Explain the consequence of a condition or contributing factor.",fr:"Cela signifiait que…",example:"This meant that the attacker could reuse the credential without an additional authentication challenge."}
  ,{id:"pir-hindsight",category:"Remediation",phrase:"In hindsight, we could have…",definition:"Discuss an improvement identified after the incident in a constructive way.",fr:"Avec le recul, nous aurions pu…",example:"In hindsight, we could have escalated the identity anomalies earlier."}
  ,{id:"pir-lesson",category:"Remediation",phrase:"A key lesson learned is…",definition:"State a clear takeaway from a post-incident review.",fr:"L’un des principaux enseignements est…",example:"A key lesson learned is to expand MFA coverage to all privileged accounts."}

];

const phrasebookStateKey="ebackontrack-v6-phrasebook";
const phrasebookDay=24*60*60*1000;
const phrasebookStarterIds=[
  "soc-at-this-stage","soc-rule-out","inc-so-far","inc-next-update",
  "risk-no-exploitation","client-current-assessment","meet-think","rem-priority"
];

function loadPhraseState(){
  try{
    const raw=JSON.parse(localStorage.getItem(phrasebookStateKey))||{};
    return {items:raw.items||{}};
  }catch(e){return {items:{}};}
}
function savePhraseState(state){
  localStorage.setItem(phrasebookStateKey,JSON.stringify(state));
}
function findPhraseItem(id){return phrasebookItems.find(x=>x.id===id);}
function findPhraseByText(text){
  const norm=(text||"").trim().replace(/\s+/g," ").toLowerCase();
  return phrasebookItems.find(x=>x.phrase.trim().replace(/\s+/g," ").toLowerCase()===norm);
}
function addPhrase(id){
  const item=findPhraseItem(id); if(!item)return;
  const state=loadPhraseState();
  if(!state.items[id]){
    state.items[id]={addedAt:Date.now(),favorite:false,level:0,due:Date.now(),reviews:0,lastRating:null};
  }
  savePhraseState(state);renderPhrasebook();updateInlinePhraseButtons();
}
function removePhrase(id){
  const state=loadPhraseState(); delete state.items[id]; savePhraseState(state);
  renderPhrasebook();updateInlinePhraseButtons();
}
function togglePhraseFavourite(id){
  const state=loadPhraseState();
  if(!state.items[id])state.items[id]={addedAt:Date.now(),favorite:true,level:0,due:Date.now(),reviews:0,lastRating:null};
  else state.items[id].favorite=!state.items[id].favorite;
  savePhraseState(state);renderPhrasebook();updateInlinePhraseButtons();
}
function phraseStats(){
  const state=loadPhraseState(),now=Date.now(),ids=Object.keys(state.items);
  return {
    saved:ids.length,
    due:ids.filter(id=>(state.items[id].due||0)<=now).length,
    active:ids.filter(id=>(state.items[id].level||0)>=3).length
  };
}
function renderPhrasebookStats(){
  const s=phraseStats();
  const a=document.getElementById("phraseSavedCount"),b=document.getElementById("phraseDueCount"),c=document.getElementById("phraseActiveCount");
  if(a)a.textContent=s.saved;if(b)b.textContent=s.due;if(c)c.textContent=s.active;
}
function phraseSpeak(text){
  if(!("speechSynthesis" in window))return;
  const u=new SpeechSynthesisUtterance(text);u.lang="en-GB";u.rate=.95;
  speechSynthesis.cancel();speechSynthesis.speak(u);
}
function renderPhrasebook(){
  const library=document.getElementById("phraseLibrary");if(!library)return;
  const state=loadPhraseState();
  const search=(document.getElementById("phraseSearch")?.value||"").toLowerCase().trim();
  const cat=document.getElementById("phraseCategory")?.value||"all";
  const favOnly=!!document.getElementById("phraseFavouritesOnly")?.checked;
  const filtered=phrasebookItems.filter(item=>{
    const saved=state.items[item.id];
    const hay=[item.phrase,item.definition,item.fr,item.example,item.category].join(" ").toLowerCase();
    return (!search||hay.includes(search)) && (cat==="all"||item.category===cat) && (!favOnly||saved?.favorite);
  });
  const count=document.getElementById("phraseResultCount");if(count)count.textContent=`${filtered.length} phrase${filtered.length===1?"":"s"}`;
  library.innerHTML=filtered.length?filtered.map(item=>{
    const saved=state.items[item.id],fav=!!saved?.favorite;
    return `<article class="phrase-card ${saved?"saved":""}">
      <div class="phrase-card-top">
        <span class="module-tag">${item.category}</span>
        <div class="phrase-card-actions">
          <button class="icon-button phrase-speak" type="button" data-phrase-speak="${item.id}" aria-label="Hear phrase">🔊</button>
          <button class="icon-button phrase-fav ${fav?"is-favourite":""}" type="button" data-phrase-fav="${item.id}" aria-label="Favourite">${fav?"★":"☆"}</button>
        </div>
      </div>
      <h4>${item.phrase}</h4>
      <div class="phrase-definition">${item.definition}</div>
      <div class="phrase-fr">${item.fr}</div>
      <div class="phrase-example"><strong>At work:</strong> ${item.example}</div>
      <button class="phrase-add ${saved?"remove":""}" type="button" data-phrase-add="${item.id}">${saved?"✓ Saved · remove":"+ Add to my vocabulary"}</button>
    </article>`;
  }).join(""):`<div class="phrase-no-results">No phrase matches these filters.</div>`;
  library.querySelectorAll("[data-phrase-add]").forEach(btn=>btn.addEventListener("click",()=>{
    const id=btn.dataset.phraseAdd,state=loadPhraseState();state.items[id]?removePhrase(id):addPhrase(id);
  }));
  library.querySelectorAll("[data-phrase-fav]").forEach(btn=>btn.addEventListener("click",()=>togglePhraseFavourite(btn.dataset.phraseFav)));
  library.querySelectorAll("[data-phrase-speak]").forEach(btn=>btn.addEventListener("click",()=>{const x=findPhraseItem(btn.dataset.phraseSpeak);if(x)phraseSpeak(x.phrase);}));
  renderPhrasebookStats();renderReviewCard();
}
function duePhraseIds(){
  const state=loadPhraseState(),now=Date.now();
  return Object.keys(state.items).filter(id=>(state.items[id].due||0)<=now && findPhraseItem(id))
    .sort((a,b)=>(state.items[a].due||0)-(state.items[b].due||0));
}
let currentReviewPhraseId=null;
function renderReviewCard(){
  const state=loadPhraseState(),due=duePhraseIds();
  const card=document.getElementById("reviewCard"),empty=document.getElementById("reviewEmpty"),queue=document.getElementById("reviewQueueText");
  if(!card||!empty)return;
  if(!due.length){
    currentReviewPhraseId=null;card.hidden=true;empty.hidden=false;
    if(queue)queue.textContent=Object.keys(state.items).length?"Nothing is due right now. Good — come back later or add more language.":"Save a few phrases to start your review queue.";
    return;
  }
  if(!currentReviewPhraseId||!due.includes(currentReviewPhraseId))currentReviewPhraseId=due[0];
  const item=findPhraseItem(currentReviewPhraseId);
  card.hidden=false;empty.hidden=true;
  document.getElementById("reviewCategory").textContent=item.category;
  document.getElementById("reviewFront").textContent=item.phrase;
  document.getElementById("reviewBack").innerHTML=`<strong>${item.fr}</strong><span>${item.definition}</span><span><em>${item.example}</em></span>`;
  document.getElementById("reviewBack").hidden=true;
  document.getElementById("reviewRatings").hidden=true;
  document.getElementById("reviewRevealBtn").hidden=false;
  if(queue)queue.textContent=`${due.length} phrase${due.length===1?" is":"s are"} due now.`;
}
function reviewPhrase(id,rating){
  const state=loadPhraseState(),entry=state.items[id];if(!entry)return;
  const now=Date.now();
  entry.reviews=(entry.reviews||0)+1;entry.lastRating=rating;
  if(rating==="again"){
    entry.level=Math.max(0,(entry.level||0)-1);
    entry.due=now+10*60*1000;
  }else if(rating==="difficult"){
    entry.level=Math.max(1,entry.level||1);
    entry.due=now+phrasebookDay;
  }else{
    entry.level=Math.min(5,(entry.level||0)+1);
    const intervals=[0,2,4,7,14,30];
    entry.due=now+(intervals[entry.level]||30)*phrasebookDay;
  }
  savePhraseState(state);currentReviewPhraseId=null;renderPhrasebookStats();renderReviewCard();renderPhrasebook();
}
function updateInlinePhraseButtons(){
  const state=loadPhraseState();
  document.querySelectorAll("[data-save-phrase]").forEach(btn=>{
    const text=decodeURIComponent(btn.dataset.savePhrase||"");
    const found=findPhraseByText(text);
    if(found&&state.items[found.id]){
      btn.textContent="✓ Saved";btn.disabled=true;
    }else{
      btn.textContent="+ Phrasebook";btn.disabled=false;
    }
  });
}
function bindInlinePhraseButtons(){
  document.querySelectorAll("[data-save-phrase]").forEach(btn=>{
    if(btn.dataset.phraseBound==="1")return;
    btn.dataset.phraseBound="1";
    btn.addEventListener("click",()=>{
      const text=decodeURIComponent(btn.dataset.savePhrase||"");
      const found=findPhraseByText(text);
      if(found){addPhrase(found.id);}
      else{
        btn.textContent="Not in library yet";
        setTimeout(()=>{btn.textContent="+ Phrasebook";},1600);
      }
    });
  });
  updateInlinePhraseButtons();
}
function renderActiveChallenge(){
  const box=document.getElementById("activeChallenge");if(!box)return;
  const state=loadPhraseState(),ids=Object.keys(state.items).filter(id=>findPhraseItem(id));
  if(!ids.length){
    box.innerHTML=`<span class="active-placeholder">Save at least one phrase first.</span>`;return;
  }
  const id=ids[Math.floor(Math.random()*ids.length)],item=findPhraseItem(id);
  const scenarios={
    "SOC & Alerts":"You are qualifying a new alert for another analyst.",
    "Incidents":"You are giving a 60-second incident update to a client.",
    "Threat Intelligence":"You are briefing a client without overclaiming attribution.",
    "Risk":"A non-technical manager asks why this issue matters.",
    "Clients":"You need to explain an uncertain situation clearly and calmly.",
    "Meetings":"You are in a live call and need to keep the conversation moving.",
    "Remediation":"You are recommending the next action and explaining its priority."
  };
  box.innerHTML=`<div class="active-task">
    <span class="module-tag">${item.category}</span>
    <div class="target-phrase">${item.phrase}</div>
    <div class="active-scenario"><strong>Situation:</strong> ${scenarios[item.category]}</div>
    <p>Speak for 30–45 seconds and use the target phrase naturally. Do not write the sentence first.</p>
    <button class="secondary-button" type="button" id="activeSpeakModelBtn">🔊 Hear the phrase</button>
    <label><input type="checkbox" id="activeUsedCheck"><span>I used the phrase without reading it.</span></label>
  </div>`;
  document.getElementById("activeSpeakModelBtn")?.addEventListener("click",()=>phraseSpeak(item.phrase));
}
function initPhrasebook(){
  if(!document.getElementById("phrasebook"))return;
  ["phraseSearch","phraseCategory","phraseFavouritesOnly"].forEach(id=>{
    const el=document.getElementById(id);if(el)el.addEventListener(id==="phraseSearch"?"input":"change",renderPhrasebook);
  });
  document.getElementById("addStarterPhrasesBtn")?.addEventListener("click",()=>{
    const state=loadPhraseState();
    phrasebookStarterIds.forEach(id=>{if(!state.items[id])state.items[id]={addedAt:Date.now(),favorite:false,level:0,due:Date.now(),reviews:0,lastRating:null};});
    savePhraseState(state);renderPhrasebook();updateInlinePhraseButtons();
  });
  document.getElementById("reviewRevealBtn")?.addEventListener("click",()=>{
    document.getElementById("reviewBack").hidden=false;
    document.getElementById("reviewRatings").hidden=false;
    document.getElementById("reviewRevealBtn").hidden=true;
  });
  document.getElementById("reviewSpeakBtn")?.addEventListener("click",()=>{
    const x=findPhraseItem(currentReviewPhraseId);if(x)phraseSpeak(x.phrase);
  });
  document.querySelectorAll("[data-review-rating]").forEach(btn=>btn.addEventListener("click",()=>{
    if(currentReviewPhraseId)reviewPhrase(currentReviewPhraseId,btn.dataset.reviewRating);
  }));
  document.getElementById("activePhraseBtn")?.addEventListener("click",renderActiveChallenge);
  renderPhrasebook();renderActiveChallenge();
}
document.addEventListener("click",e=>{
  const btn=e.target.closest?.("[data-save-phrase]");
  if(btn)setTimeout(bindInlinePhraseButtons,0);
});


// V5 · Listening Lab
const listeningLab = {
  gist:{
    text:"Just a quick update. We've confirmed that the suspicious sign-ins came from a legitimate administrator using a new VPN exit node. There is no evidence of account compromise at this stage, so we're downgrading the alert. We will keep the account under enhanced monitoring until tomorrow morning.",
    q:"What is the main message?",
    a:[
      "The administrator account has definitely been compromised.",
      "The alert now appears benign, but monitoring will continue.",
      "The team has blocked the administrator permanently.",
      "The VPN service has been taken offline."
    ],
    c:1,max:2
  },
  dictation:{
    text:"We haven't seen any evidence of lateral movement so far.",
    accepted:[
      "we haven't seen any evidence of lateral movement so far",
      "we have not seen any evidence of lateral movement so far"
    ],
    display:"We haven't seen any evidence of lateral movement so far.",
    max:3
  },
  notes:{
    text:"Handover for the authentication alert. The first event was recorded at nine fifteen this morning. We have identified three affected endpoints, all in the finance network segment. The most significant finding is unusual PowerShell activity on one of those devices, but we have not confirmed malicious execution. The three endpoints have been isolated as a precaution. The next investigation update is scheduled for eleven o'clock.",
    facts:[
      {label:"Time",value:"09:15",keywords:["09:15","9:15","nine fifteen"]},
      {label:"Scope",value:"3 endpoints",keywords:["3 endpoint","three endpoint"]},
      {label:"Evidence",value:"unusual PowerShell activity",keywords:["powershell"]},
      {label:"Action",value:"endpoints isolated",keywords:["isolat"]},
      {label:"Next update",value:"11:00",keywords:["11:00","11","eleven"]}
    ],
    max:2
  },
  call:{
    text:"Thanks for joining at short notice. Initially, the alert was triggered by repeated authentication failures against a privileged account. We then found a successful login from an unfamiliar location. After that, the SOC disabled the active session and forced a credential reset. At this stage, we have no evidence that the account was used to access other systems. Next, we're reviewing the identity logs and checking for any related activity across the tenant. We'll send you a written update within the next hour.",
    max:2,
    order:[
      "Repeated authentication failures trigger the alert.",
      "A successful login from an unfamiliar location is found.",
      "The SOC disables the session and forces a credential reset.",
      "No evidence of access to other systems is found at this stage.",
      "The team reviews identity logs and promises a written update."
    ]
  }
};

const decodingLab = [
  {
    id:"d1",
    text:"We should've picked that up earlier.",
    prompt:"What did the speaker say?",
    a:["We should have picked that up earlier.","We should pick that app earlier.","We showed the picture earlier."],c:0
  },
  {
    id:"d2",
    text:"Could you send it over when you get a chance?",
    prompt:"Which sentence matches the audio?",
    a:["Could you send it over when you get a chance?","Could you sign it over when you get the chance?","Can you send over a change?"],c:0
  },
  {
    id:"d3",
    text:"There's been a spike in failed login attempts.",
    prompt:"What changed?",
    a:["Failed login attempts increased suddenly.","A login rule was deleted.","The speaker cannot log in."],c:0
  }
];

const labStateKey="ebackontrack-v5-listening";
function getLabState(){
  try{
    const x=JSON.parse(localStorage.getItem(labStateKey))||{};
    return {completed:x.completed||{},plays:x.plays||{}};
  }catch(e){return {completed:{},plays:{}};}
}
function saveLabState(s){localStorage.setItem(labStateKey,JSON.stringify(s));}
function normaliseLabText(s){
  return (s||"").toLowerCase()
    .replace(/[’']/g,"'")
    .replace(/[.,!?;:]/g,"")
    .replace(/\s+/g," ")
    .trim();
}
function labVoiceFor(lang){
  const voices=window.speechSynthesis?.getVoices?.()||[];
  return voices.find(v=>v.lang===lang) ||
         voices.find(v=>v.lang?.toLowerCase().startsWith(lang.toLowerCase().split("-")[0])) ||
         null;
}
function speakLab(text){
  if(!("speechSynthesis" in window)) return false;
  const lang=document.getElementById("labVoice")?.value||"en-GB";
  const rate=Number(document.getElementById("labSpeed")?.value||1);
  const u=new SpeechSynthesisUtterance(text);
  u.lang=lang; u.rate=rate;
  const voice=labVoiceFor(lang); if(voice)u.voice=voice;
  speechSynthesis.cancel(); speechSynthesis.speak(u); return true;
}
function updateLabProgress(){
  const state=getLabState();
  const keys=["gist","decoding","dictation","notes","call"];
  const done=keys.filter(k=>state.completed[k]).length;
  const score=document.getElementById("labProgressScore");
  const label=document.getElementById("labProgressLabel");
  if(score)score.textContent=`${done} / ${keys.length}`;
  if(label){
    label.textContent=done===0?"Start with the 5-minute warm-up.":
      done<5?"Keep going — accuracy before speed.":
      "Listening lab completed. Repeat at Pressure speed.";
  }
}

function renderLab(){
  const gist=document.getElementById("labQuestion-gist");
  if(!gist)return;
  gist.innerHTML=listeningLab.gist.a.map((x,i)=>`<label><input type="radio" name="lab-gist" value="${i}"><span>${x}</span></label>`).join("");
  const decoding=document.getElementById("decodingDrills");
  decoding.innerHTML=decodingLab.map((d,i)=>`
    <div class="decoding-item" data-decoding="${d.id}">
      <div class="decoding-top">
        <strong>${i+1}. ${d.prompt}</strong>
        <button class="listen-button decoding-play" type="button" data-decode-play="${d.id}">▶ Play</button>
      </div>
      <div>
        ${d.a.map((x,j)=>`<label class="decoding-choice"><input type="radio" name="decode-${d.id}" value="${j}"><span>${x}</span></label>`).join("")}
      </div>
    </div>`).join("") + `<button class="secondary-button" id="decodingCheck" type="button">Check decoding</button>`;
  const callOrder=[...listeningLab.call.order].sort(()=>Math.random()-.5);
  document.getElementById("callOrdering").innerHTML=callOrder.map((x,i)=>`
    <div class="order-row" data-order-item="${x.replace(/"/g,'&quot;')}">
      <span class="order-rank">${i+1}</span><span>${x}</span>
      <div class="order-actions"><button type="button" class="order-up" aria-label="Move up">↑</button><button type="button" class="order-down" aria-label="Move down">↓</button></div>
    </div>`).join("");
  document.getElementById("callTranscript").textContent=listeningLab.call.text;
  bindLabEvents();
  updateLabProgress();
}

function labCanPlay(key,max){
  const state=getLabState();
  const count=state.plays[key]||0;
  return count<max;
}
function labRegisterPlay(key,max){
  const state=getLabState();
  state.plays[key]=(state.plays[key]||0)+1;
  saveLabState(state);
  const el=document.getElementById(`labPlay-${key}`);
  if(el)el.textContent=`${state.plays[key]} / ${max} plays`;
  document.querySelectorAll(`[data-lab-play="${key}"]`).forEach(b=>b.disabled=state.plays[key]>=max);
}
function markLabComplete(key,pass){
  if(!pass)return;
  const state=getLabState();state.completed[key]=true;saveLabState(state);updateLabProgress();
}
function resetLabPlaysForSpeedChange(){
  const state=getLabState();state.plays={};saveLabState(state);
  ["gist","dictation","notes","call"].forEach(k=>{
    const max=listeningLab[k].max;
    const el=document.getElementById(`labPlay-${k}`); if(el)el.textContent=`0 / ${max} plays`;
    document.querySelectorAll(`[data-lab-play="${k}"]`).forEach(b=>b.disabled=false);
  });
}

function bindLabEvents(){
  const state=getLabState();
  ["gist","dictation","notes","call"].forEach(k=>{
    const max=listeningLab[k].max;
    const count=state.plays[k]||0;
    const el=document.getElementById(`labPlay-${k}`);if(el)el.textContent=`${count} / ${max} plays`;
    document.querySelectorAll(`[data-lab-play="${k}"]`).forEach(btn=>btn.disabled=count>=max);
  });
  document.querySelectorAll(".lab-play").forEach(btn=>btn.addEventListener("click",()=>{
    const key=btn.dataset.labPlay,item=listeningLab[key]; if(!item||!labCanPlay(key,item.max))return;
    if(speakLab(item.text))labRegisterPlay(key,item.max);
  }));
  document.querySelector('[data-lab-check="gist"]')?.addEventListener("click",()=>{
    const p=document.querySelector('input[name="lab-gist"]:checked'),fb=document.getElementById("labFeedback-gist");
    if(!p){fb.className="activity-summary neutral";fb.textContent="Choose the main message first.";return;}
    const ok=Number(p.value)===listeningLab.gist.c;
    fb.className=`activity-summary ${ok?"correct":"wrong"}`;
    fb.textContent=ok?"Correct ✓ You ignored the distracting technical detail and captured the operational message.":"Not quite. Listen for the decision and next action, not individual technical words.";
    markLabComplete("gist",ok);
  });
  document.querySelectorAll("[data-decode-play]").forEach(btn=>btn.addEventListener("click",()=>{
    const d=decodingLab.find(x=>x.id===btn.dataset.decodePlay); if(d)speakLab(d.text);
  }));
  document.getElementById("decodingCheck")?.addEventListener("click",()=>{
    let correct=0;
    decodingLab.forEach(d=>{
      const p=document.querySelector(`input[name="decode-${d.id}"]:checked`);
      if(p&&Number(p.value)===d.c)correct++;
    });
    const pass=correct===decodingLab.length,fb=document.getElementById("labFeedback-decoding");
    fb.className=`activity-summary ${pass?"correct":"wrong"}`;
    fb.textContent=`${correct} / ${decodingLab.length} correct${pass?" — decoding stage complete ✓":" — replay the phrases and listen for the whole chunk, not each word separately."}`;
    markLabComplete("decoding",pass);
  });
  document.getElementById("dictationCheck")?.addEventListener("click",()=>{
    const value=normaliseLabText(document.getElementById("dictationInput").value);
    const ok=listeningLab.dictation.accepted.map(normaliseLabText).includes(value);
    const fb=document.getElementById("labFeedback-dictation");
    fb.className=`activity-summary ${ok?"correct":"wrong"}`;
    fb.textContent=ok?"Correct ✓ Notice the reduced form haven't and the chunk evidence of lateral movement.":`Target phrase: “${listeningLab.dictation.display}”`;
    markLabComplete("dictation",ok);
  });
  document.getElementById("notesCheck")?.addEventListener("click",()=>{
    const raw=normaliseLabText(document.getElementById("notesInput").value);
    let hits=0;
    document.getElementById("notesFacts").innerHTML=listeningLab.notes.facts.map(f=>{
      const found=f.keywords.some(k=>raw.includes(normaliseLabText(k))); if(found)hits++;
      return `<div class="key-fact ${found?"found":"missed"}"><strong>${f.label}</strong><span>${found?"✓ ":""}${f.value}</span></div>`;
    }).join("");
    const pass=hits>=4,fb=document.getElementById("labFeedback-notes");
    fb.className=`activity-summary ${pass?"correct":"wrong"}`;
    fb.textContent=`You captured ${hits} / 5 key facts${pass?" — good operational note-taking ✓":" — aim for at least four. On the next listen, hunt only for the missing categories."}`;
    markLabComplete("notes",pass);
  });
  document.querySelectorAll(".order-up,.order-down").forEach(btn=>btn.addEventListener("click",()=>{
    const row=btn.closest(".order-row"),list=row.parentElement;
    if(btn.classList.contains("order-up")&&row.previousElementSibling)list.insertBefore(row,row.previousElementSibling);
    if(btn.classList.contains("order-down")&&row.nextElementSibling)list.insertBefore(row.nextElementSibling,row);
    [...list.children].forEach((r,i)=>r.querySelector(".order-rank").textContent=i+1);
  }));
  document.getElementById("callCheck")?.addEventListener("click",()=>{
    const rows=[...document.querySelectorAll("#callOrdering .order-row")];
    const order=rows.map(r=>r.dataset.orderItem);
    let correct=0;order.forEach((x,i)=>{if(x===listeningLab.call.order[i])correct++;});
    const pass=correct===listeningLab.call.order.length,fb=document.getElementById("labFeedback-call");
    fb.className=`activity-summary ${pass?"correct":"wrong"}`;
    fb.textContent=pass?"Timeline correct ✓ You reconstructed the incident call from sequence and actions.":`${correct} / ${listeningLab.call.order.length} steps are in the right position. Replay once and listen for initially / then / after that / at this stage / next.`;
    markLabComplete("call",pass);
  });
  document.getElementById("labSpeed")?.addEventListener("change",resetLabPlaysForSpeedChange);
  document.getElementById("labVoice")?.addEventListener("change",resetLabPlaysForSpeedChange);
}
window.speechSynthesis?.addEventListener?.("voiceschanged",()=>{});
document.getElementById("resetLabBtn")?.addEventListener("click",()=>{
  if(!confirm("Reset Listening Lab progress and play counts?"))return;
  localStorage.removeItem(labStateKey);
  document.querySelectorAll("#listening-lab input[type=radio]").forEach(i=>i.checked=false);
  const d=document.getElementById("dictationInput");if(d)d.value="";
  const n=document.getElementById("notesInput");if(n)n.value="";
  ["gist","decoding","dictation","notes","call"].forEach(k=>{
    const fb=document.getElementById(`labFeedback-${k}`);if(fb){fb.textContent="";fb.className="activity-summary";}
  });
  const facts=document.getElementById("notesFacts");if(facts)facts.innerHTML="";
  renderLab();
});
renderLab();


initPhrasebook();
