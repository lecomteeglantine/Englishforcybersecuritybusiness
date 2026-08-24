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
  const details={grammar,cyber,listening,pronunciation}; localStorage.setItem("ebackontrack-v2",JSON.stringify({results,details})); recordFullDiagnosticSnapshot(results,details); updateSmartHomeMode();
initV16AppExperience(); renderProfile(results,details); renderTrainingPlan(results,details); if(typeof renderGrammarRepair==="function")renderGrammarRepair(); if(typeof renderDashboard==="function")renderDashboard(); showSection("results");
});

document.getElementById("resetBtn").addEventListener("click",()=>{if(!confirm("Reset all answers and local diagnostic results?"))return;localStorage.removeItem("ebackontrack-v2");localStorage.removeItem("ebackontrack-v3-progress");localStorage.removeItem("ebackontrack-v10-progress");document.querySelectorAll("#diagnostic input[type=radio]").forEach(i=>i.checked=false);document.querySelectorAll("#diagnostic textarea").forEach(t=>t.value="");document.querySelectorAll("#diagnostic select").forEach(s=>s.value="");document.getElementById("wordCount").textContent="0";document.getElementById("resultsEmpty").hidden=false;document.getElementById("resultsContent").hidden=true;document.getElementById("planUnlocked").hidden=true;document.getElementById("planLocked").hidden=false;updateSmartHomeMode();renderDashboard();document.getElementById("home")?.scrollIntoView({behavior:"smooth",block:"start"});});

try{const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));if(saved?.results&&saved?.details)renderProfile(saved.results,saved.details);}catch(e){}






// V17 · My Data & Progress Vault
const vaultMetaKey="ebackontrack-v17-vault-meta";
const vaultSchemaVersion=1;

const vaultGroups=[
  {
    id:"diagnostic",icon:"◎",title:"Diagnostic & current profile",
    description:"Initial diagnostic answers/results, current profile and personalised module progress.",
    keys:["ebackontrack-v2","ebackontrack-v3-progress","ebackontrack-v10-progress"]
  },
  {
    id:"daily",icon:"▦",title:"Daily Dashboard",
    description:"Chosen session length, completed daily routine steps and recent practice days.",
    keys:["ebackontrack-v8-dashboard"]
  },
  {
    id:"phrasebook",icon:"A",title:"Phrasebook",
    description:"Saved cyber chunks, favourites, spaced-review levels and due dates.",
    keys:["ebackontrack-v6-phrasebook"]
  },
  {
    id:"listening",icon:"◖",title:"Listening Lab",
    description:"Completed listening tasks and local play counters.",
    keys:["ebackontrack-v5-listening"]
  },
  {
    id:"speaking",icon:"●",title:"Speaking Lab",
    description:"Attempt counts, speaking minutes and challenge types. Audio is never stored here.",
    keys:["ebackontrack-v7-speaking"]
  },
  {
    id:"writing",icon:"✎",title:"Writing Lab",
    description:"Task type, date, word count and self-check metadata. Draft text is not stored.",
    keys:["ebackontrack-v12-writing"]
  },
  {
    id:"grammar",icon:"G",title:"Grammar Repair",
    description:"Completed repair units, attempts and closed-task accuracy.",
    keys:["ebackontrack-v9-grammar"]
  },
  {
    id:"pronunciation",icon:"◉",title:"Pronunciation Lab",
    description:"Completed units, shadowing counts and closed-task accuracy. Audio is not stored.",
    keys:["ebackontrack-v13-pronunciation"]
  },
  {
    id:"resources",icon:"↗",title:"Authentic Resources",
    description:"Saved/completed resource status and formats used.",
    keys:["ebackontrack-v14-resources"]
  },
  {
    id:"simulator",icon:"C",title:"Client Simulator",
    description:"Completed scenarios and mission metadata. Handover/email text and audio are not stored.",
    keys:["ebackontrack-v15-client-simulator"]
  },
  {
    id:"work",icon:"W",title:"My Work English",
    description:"Work-based mission metadata and any anonymised scenarios you explicitly chose to save. Writing drafts are not stored.",
    keys:["ebackontrack-v18-work-lab"]
  },
  {
    id:"accessibility",icon:"Aa",title:"Accessibility preferences",
    description:"Text size, contrast, spacing, font, links and motion preferences for this device.",
    keys:["ebackontrack-v16-accessibility"]
  }
];

let pendingVaultImport=null;

function loadVaultMeta(){
  try{
    const raw=JSON.parse(localStorage.getItem(vaultMetaKey))||{};
    return {lastBackup:raw.lastBackup||null,lastImport:raw.lastImport||null};
  }catch(e){return {lastBackup:null,lastImport:null};}
}
function saveVaultMeta(meta){localStorage.setItem(vaultMetaKey,JSON.stringify(meta));}
function vaultKnownKeys(){
  return [...new Set(vaultGroups.flatMap(g=>g.keys))];
}
function vaultActiveGroup(group){
  return group.keys.some(key=>localStorage.getItem(key)!==null);
}
function vaultGroupBytes(group){
  return group.keys.reduce((sum,key)=>{
    const value=localStorage.getItem(key);
    return sum+(value?new Blob([key,value]).size:0);
  },0);
}
function humanBytes(bytes){
  if(bytes<1024)return `${bytes} B`;
  if(bytes<1024*1024)return `${(bytes/1024).toFixed(bytes<10240?1:0)} KB`;
  return `${(bytes/(1024*1024)).toFixed(1)} MB`;
}
function formatVaultDate(ts,short=false){
  if(!ts)return "Never";
  const d=new Date(ts);
  return d.toLocaleDateString(undefined,short
    ?{day:"2-digit",month:"short"}
    :{day:"2-digit",month:"short",year:"numeric"});
}
function vaultGroupDetail(group){
  const active=group.keys.filter(k=>localStorage.getItem(k)!==null);
  if(!active.length)return "No local data";
  return `${active.length} local record${active.length===1?"":"s"} · ${humanBytes(vaultGroupBytes(group))}`;
}
function renderVaultStats(){
  const active=vaultGroups.filter(vaultActiveGroup);
  const bytes=vaultGroups.reduce((sum,g)=>sum+vaultGroupBytes(g),0);
  const meta=loadVaultMeta();
  document.getElementById("vaultDataGroups").textContent=active.length;
  document.getElementById("vaultLastBackup").textContent=meta.lastBackup?formatVaultDate(meta.lastBackup,true):"Never";
  document.getElementById("vaultStorageEstimate").textContent=humanBytes(bytes);
  document.getElementById("vaultInventoryCount").textContent=`${active.length} active group${active.length===1?"":"s"}`;

  const title=document.getElementById("vaultBackupTitle");
  const message=document.getElementById("vaultBackupMessage");
  const badge=document.getElementById("vaultBackupBadge");
  if(!meta.lastBackup){
    title.textContent="No backup recorded on this device yet";
    message.textContent="Your training data is still local and usable. A backup simply gives you a portable recovery copy.";
    badge.textContent="Not backed up";badge.classList.remove("fresh");
  }else{
    const days=Math.floor((Date.now()-meta.lastBackup)/(1000*60*60*24));
    title.textContent=`Last backup: ${formatVaultDate(meta.lastBackup)}`;
    if(days<=14){
      message.textContent="You have a recent portable copy of the progress currently stored on this device.";
      badge.textContent="Recent backup";badge.classList.add("fresh");
    }else{
      message.textContent=`That backup is ${days} days old. Export a new copy if you have done significant work since then.`;
      badge.textContent=`${days} days ago`;badge.classList.remove("fresh");
    }
  }
}
function renderVaultInventory(){
  const target=document.getElementById("vaultInventory");if(!target)return;
  target.innerHTML=vaultGroups.map(group=>{
    const active=vaultActiveGroup(group);
    return `<article class="vault-inventory-card ${active?"":"empty"}">
      <div class="vault-inventory-card-top">
        <span class="vault-inventory-icon">${group.icon}</span>
        <span class="vault-inventory-state ${active?"active":""}">${active?"Stored":"Empty"}</span>
      </div>
      <h4>${group.title}</h4>
      <p>${group.description}</p>
      <div class="vault-inventory-detail">${vaultGroupDetail(group)}</div>
      ${active?`<button type="button" data-vault-clear="${group.id}">Erase this category</button>`:""}
    </article>`;
  }).join("");
  target.querySelectorAll("[data-vault-clear]").forEach(btn=>btn.addEventListener("click",()=>clearVaultGroup(btn.dataset.vaultClear)));
}
function collectVaultData(){
  const data={};
  vaultKnownKeys().forEach(key=>{
    const value=localStorage.getItem(key);
    if(value!==null)data[key]=value;
  });
  return data;
}
function triggerVaultDownload(filename,text,type){
  const blob=new Blob([text],{type});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function exportVaultBackup(){
  const payload={
    app:"English, Back on Track",
    appVersion:"17",
    schemaVersion:vaultSchemaVersion,
    createdAt:new Date().toISOString(),
    data:collectVaultData()
  };
  const stamp=new Date().toISOString().slice(0,10);
  triggerVaultDownload(`english-back-on-track-backup-${stamp}.json`,JSON.stringify(payload,null,2),"application/json");
  const meta=loadVaultMeta();meta.lastBackup=Date.now();saveVaultMeta(meta);
  renderProgressVault();
  if(typeof showAppToast==="function")showAppToast("Private progress backup downloaded.");
}
function safeJSON(key){
  try{return JSON.parse(localStorage.getItem(key)||"null");}catch(e){return null;}
}
function buildVaultSummary(){
  const diag=safeJSON("ebackontrack-v2");
  const plan=safeJSON("ebackontrack-v3-progress")||{};
  const dashboard=safeJSON("ebackontrack-v8-dashboard")||{};
  const phrase=typeof phraseStats==="function"?phraseStats():{saved:0,due:0,active:0};
  const listen=typeof listeningLabCompletedCount==="function"?listeningLabCompletedCount():0;
  const speak=typeof loadSpeakingState==="function"?loadSpeakingState():{attempts:0,seconds:0,modes:[]};
  const writing=typeof loadWritingState==="function"?loadWritingState():{attempts:[]};
  const grammar=typeof loadGrammarRepairState==="function"?loadGrammarRepairState():{completed:[],attempts:0};
  const pron=typeof loadPronunciationLabState==="function"?loadPronunciationLabState():{completed:[],shadowAttempts:0};
  const resources=typeof loadAuthenticResourceState==="function"?loadAuthenticResourceState():{completed:[],saved:[]};
  const sim=typeof loadClientSimState==="function"?loadClientSimState():{attempts:[],completed:[]};
  const progress=typeof loadProgressCheckState==="function"?ensureProgressBaseline():{history:[],current:null};
  const lines=[];
  lines.push("ENGLISH, BACK ON TRACK — PROGRESS SNAPSHOT");
  lines.push(`Generated: ${new Date().toLocaleString()}`);
  lines.push("");
  if(diag?.results){
    lines.push("CURRENT PROFILE");
    ["grammar","cyber","listening","pronunciation","speaking","writing"].forEach(k=>{
      if(diag.results[k]!==undefined)lines.push(`- ${progressSkillLabel(k)}: ${diag.results[k]}%`);
    });
    lines.push("");
  }else{
    lines.push("CURRENT PROFILE");
    lines.push("- Initial diagnostic not completed.");
    lines.push("");
  }
  lines.push("TRAINING ACTIVITY");
  lines.push(`- Personalised modules completed: ${(plan.completed||[]).length}`);
  lines.push(`- Listening Lab: ${listen}/5 tasks completed`);
  lines.push(`- Speaking Lab: ${speak.attempts||0} attempts`);
  lines.push(`- Writing Lab: ${(writing.attempts||[]).length} attempts`);
  lines.push(`- Grammar Repair: ${(grammar.completed||[]).length} units completed`);
  lines.push(`- Pronunciation Lab: ${(pron.completed||[]).length} units completed`);
  lines.push(`- Phrasebook: ${phrase.saved||0} saved · ${phrase.due||0} due · ${phrase.active||0} active`);
  lines.push(`- Authentic resources completed: ${(resources.completed||[]).length}`);
  lines.push(`- Client simulations completed: ${(sim.completed||[]).length}`);
  const work=typeof loadWorkEnglishState==="function"?loadWorkEnglishState():{attempts:[],saved:[]};
  lines.push(`- Work-based missions completed: ${(work.attempts||[]).length}`);
  lines.push(`- Anonymised work scenarios saved locally: ${(work.saved||[]).length}`);
  lines.push(`- Progress checkpoints/re-diagnostics: ${(progress.history||[]).length}`);
  lines.push("");
  lines.push("PRIVACY");
  lines.push("- This summary contains progress metadata only.");
  lines.push("- Audio recordings and writing drafts are not stored by the app and are not included.");
  return lines.join("\n");
}
function exportVaultSummary(){
  const stamp=new Date().toISOString().slice(0,10);
  triggerVaultDownload(`english-back-on-track-progress-${stamp}.txt`,buildVaultSummary(),"text/plain;charset=utf-8");
  if(typeof showAppToast==="function")showAppToast("Readable progress summary downloaded.");
}
async function copyVaultSummary(){
  const text=buildVaultSummary();
  try{
    await navigator.clipboard.writeText(text);
    if(typeof showAppToast==="function")showAppToast("Progress summary copied to clipboard.");
  }catch(e){
    const ta=document.createElement("textarea");ta.value=text;document.body.appendChild(ta);ta.select();
    document.execCommand("copy");ta.remove();
    if(typeof showAppToast==="function")showAppToast("Progress summary copied to clipboard.");
  }
}
function validateVaultPayload(payload){
  if(!payload || typeof payload!=="object")return {ok:false,error:"This file is not a valid backup object."};
  if(payload.app!=="English, Back on Track")return {ok:false,error:"This file was not created by English, Back on Track."};
  if(!payload.data || typeof payload.data!=="object")return {ok:false,error:"The backup contains no readable data section."};
  const allowed=new Set(vaultKnownKeys());
  const accepted=Object.keys(payload.data).filter(key=>allowed.has(key)&&typeof payload.data[key]==="string");
  if(!accepted.length)return {ok:false,error:"No compatible progress categories were found in this backup."};
  return {ok:true,accepted};
}
function vaultGroupsInBackup(keys){
  const set=new Set(keys);
  return vaultGroups.filter(g=>g.keys.some(k=>set.has(k)));
}
function openVaultImportPreview(payload,accepted){
  pendingVaultImport={payload,accepted};
  const groups=vaultGroupsInBackup(accepted);
  const date=payload.createdAt?new Date(payload.createdAt):null;
  document.getElementById("vaultImportPreview").innerHTML=`
    <div class="vault-import-meta">
      <div><span>Backup version</span><strong>V${payload.appVersion||"unknown"}</strong></div>
      <div><span>Created</span><strong>${date&&!isNaN(date)?date.toLocaleDateString():"Unknown"}</strong></div>
      <div><span>Compatible records</span><strong>${accepted.length}</strong></div>
    </div>
    <div>
      <p class="small-label">CATEGORIES TO RESTORE</p>
      <div class="vault-import-groups">${groups.map(g=>`<span>${g.title}</span>`).join("")}</div>
    </div>`;
  const dialog=document.getElementById("vaultImportDialog");
  dialog.hidden=false;document.body.style.overflow="hidden";
  document.getElementById("confirmVaultImportBtn")?.focus();
}
function closeVaultImportDialog(){
  document.getElementById("vaultImportDialog").hidden=true;
  document.body.style.overflow="";
  document.getElementById("importVaultFile").value="";
  pendingVaultImport=null;
}
async function handleVaultFile(file){
  if(!file)return;
  try{
    if(file.size>2*1024*1024)throw new Error("This backup is unexpectedly large.");
    const text=await file.text();
    const payload=JSON.parse(text);
    const validation=validateVaultPayload(payload);
    if(!validation.ok)throw new Error(validation.error);
    openVaultImportPreview(payload,validation.accepted);
  }catch(e){
    document.getElementById("importVaultFile").value="";
    if(typeof showAppToast==="function")showAppToast(`Backup not imported: ${e.message}`,5000);
  }
}
function confirmVaultImport(){
  if(!pendingVaultImport)return;
  const {payload,accepted}=pendingVaultImport;
  accepted.forEach(key=>localStorage.setItem(key,payload.data[key]));
  const meta=loadVaultMeta();meta.lastImport=Date.now();saveVaultMeta(meta);
  closeVaultImportDialog();
  if(typeof showAppToast==="function")showAppToast("Backup restored. Reloading the app…",2200);
  setTimeout(()=>location.reload(),900);
}
function clearVaultGroup(id){
  const group=vaultGroups.find(g=>g.id===id);if(!group)return;
  const message=`Erase ${group.title} data from this browser?\n\nThis cannot be undone unless you have exported a backup.`;
  if(!confirm(message))return;
  group.keys.forEach(key=>localStorage.removeItem(key));
  renderProgressVault();
  if(typeof renderDashboard==="function")renderDashboard();
  if(typeof showAppToast==="function")showAppToast(`${group.title} data erased from this browser.`);
}
function eraseAllVaultData(){
  if(!confirm("Erase ALL English, Back on Track training data from this browser?\n\nThis includes diagnostic results, labs, Phrasebook, progress history, simulator history and accessibility settings. Export a backup first if you may want to restore it."))return;
  if(!confirm("Final confirmation: permanently erase all local app data on this device?"))return;
  [...vaultKnownKeys(),vaultMetaKey].forEach(key=>localStorage.removeItem(key));
  if(typeof showAppToast==="function")showAppToast("All local training data erased. Reloading…",2200);
  setTimeout(()=>location.reload(),900);
}
function renderProgressVault(){
  if(!document.getElementById("progress-vault"))return;
  renderVaultStats();renderVaultInventory();
}
function initProgressVault(){
  if(!document.getElementById("progress-vault"))return;
  document.getElementById("exportVaultBtn")?.addEventListener("click",exportVaultBackup);
  document.getElementById("exportSummaryBtn")?.addEventListener("click",exportVaultSummary);
  document.getElementById("copySummaryBtn")?.addEventListener("click",copyVaultSummary);
  document.getElementById("importVaultFile")?.addEventListener("change",e=>handleVaultFile(e.target.files?.[0]));
  document.getElementById("confirmVaultImportBtn")?.addEventListener("click",confirmVaultImport);
  document.querySelectorAll("[data-vault-dialog-close]").forEach(el=>el.addEventListener("click",closeVaultImportDialog));
  document.getElementById("eraseAllVaultBtn")?.addEventListener("click",eraseAllVaultData);
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&!document.getElementById("vaultImportDialog")?.hidden)closeVaultImportDialog();
  });
  renderProgressVault();
}


// V10 · Progress checkpoints & re-diagnostic
const progressCheckStateKey="ebackontrack-v10-progress";

const checkpointGrammarPool=[
  {q:"The analyst ___ the suspicious process at 09:12, and we ___ the host since then.",a:["stopped / monitored","stopped / have been monitoring","has stopped / monitored","has stopped / are monitored"],c:1,tag:"Present & perfect forms"},
  {q:"We ___ no further authentication attempts since the account was disabled.",a:["saw","haven't seen","don't saw","hadn't saw"],c:1,tag:"Past vs present perfect"},
  {q:"If the user ___ the login, we'll close the alert as benign.",a:["confirms","will confirm","confirmed","would confirm"],c:0,tag:"Conditionals"},
  {q:"If the token had been revoked earlier, the session ___ active for so long.",a:["wouldn't remain","wouldn't have remained","won't remain","didn't remained"],c:1,tag:"Advanced conditionals"},
  {q:"The activity ___ be legitimate, but the location makes it unusual.",a:["could","must to","can't to","has"],c:0,tag:"Modals & uncertainty"},
  {q:"The attacker ___ the password before MFA was reset.",a:["may have obtained","may obtained","might obtaining","could to obtain"],c:0,tag:"Past modals"},
  {q:"The affected mailbox ___ while we investigate the forwarding rule.",a:["should monitor","should be monitored","should monitoring","should been monitor"],c:1,tag:"Passive voice"},
  {q:"The client's security team asked us ___ the IOC list.",a:["update","to update","updating to","updated"],c:1,tag:"Verb patterns"},
  {q:"Could you tell me why the service account ___ from that IP address?",a:["did authenticate","authenticated","does authenticated","authenticate did"],c:1,tag:"Question structure"},
  {q:"We still don't know ___ the PowerShell command was authorised.",a:["whether","that if","which","what if"],c:0,tag:"Clause structure"},
  {q:"The new control generated ___ false positives than the previous rule.",a:["less","fewer","few","little"],c:1,tag:"Quantifiers"},
  {q:"This exposure is considerably ___ than the initial report suggested.",a:["lower","more low","lowest than","less lower"],c:0,tag:"Comparison"},
  {q:"The analyst ___ reviewed the case is joining the call now.",a:["which","who","whose","where"],c:1,tag:"Relative clauses"},
  {q:"We recommend that the client ___ all active sessions.",a:["revokes","revoke","revoked","will revoke"],c:1,tag:"Formal structures"},
  {q:"I'll update the ticket as soon as the client ___ the activity.",a:["will confirm","confirms","would confirm","confirmed will"],c:1,tag:"Future time clauses"},
  {q:"The incident bridge starts ___ 14:30 UTC.",a:["on","at","in","to"],c:1,tag:"Prepositions"},
  {q:"Neither the proxy logs nor the endpoint data ___ evidence of download activity.",a:["shows","show","showing","has shows"],c:1,tag:"Agreement"},
  {q:"By the time the IR team arrived, the SOC ___ the affected credentials.",a:["had already revoked","has already revoked","already revokes","was already revoke"],c:0,tag:"Past forms"}
];

const checkpointCyberPool=[
  {q:"A detection fires because an approved vulnerability scanner runs as scheduled. The best classification is…",a:["confirmed compromise","false positive or benign positive","data exfiltration","privilege escalation"],c:1,tag:"SOC terminology"},
  {q:"What is the strongest reason to escalate a case?",a:["The alert name sounds serious.","Evidence suggests privileged access and the potential impact is high.","The ticket has been open for ten minutes.","The client asked a general question."],c:1,tag:"Escalation"},
  {q:"Which handover note is most useful?",a:["Still investigating.","Three endpoints affected; two isolated; persistence not confirmed; next step: review scheduled tasks.","Looks bad, please check.","Ticket 2451."],c:1,tag:"SOC workflow"},
  {q:"Which sentence separates evidence from hypothesis best?",a:["The attacker definitely used PowerShell.","The command could be malicious, but we still need to confirm whether it was authorised.","PowerShell means compromise.","This must maybe be malicious."],c:1,tag:"Client communication"},
  {q:"Which action is containment rather than remediation?",a:["Isolating an endpoint to stop spread","Patching the root vulnerability permanently","Writing the final report","Attributing the threat actor"],c:0,tag:"Incident response"},
  {q:"Which is the clearest plain-English explanation of lateral movement?",a:["MITRE TA0008 happened.","The attacker may be trying to move from one internal system to another.","The east-west vector executed.","The network is laterally compromised."],c:1,tag:"Plain English"},
  {q:"A file hash, domain and IP address linked to malicious activity are examples of…",a:["SLA metrics","IOCs","RTO values","RBAC roles"],c:1,tag:"Threat intelligence"},
  {q:"Why should one matching IP address not be treated as confirmed attribution?",a:["IPs never matter.","Infrastructure can be reused, shared or misleading; more evidence is needed.","Attribution is always impossible.","Only malware names can identify actors."],c:1,tag:"Threat intelligence"},
  {q:"Which sentence gives a proportionate remediation recommendation?",a:["Rebuild everything immediately.","Prioritise patching the exposed service and restrict access until the change is complete.","Do nothing because exploitation is unconfirmed.","Delete all logs after patching."],c:1,tag:"Recommendations"},
  {q:"Which phrase is best when the client asks for certainty you do not have?",a:["I can guarantee there was no access.","Our current assessment is that the activity was contained, but the review is still ongoing.","Probably safe, don't worry.","No idea."],c:1,tag:"Client communication"},
  {q:"Privilege escalation refers to…",a:["an attacker obtaining higher access rights","a ticket being raised to P1","adding more SOC analysts","increasing a CVSS score"],c:0,tag:"Attack lifecycle"},
  {q:"Which factor most directly lowers likelihood while leaving technical severity unchanged?",a:["The vulnerable service is not internet-facing and access is restricted.","The CVE has a high score.","The report is short.","The analyst is experienced."],c:0,tag:"Risk language"},
  {q:"Which is a useful opening for a cautious root-cause statement?",a:["The cause obviously was…","Our current assessment is that initial access was most likely achieved through…","We know for certain maybe…","The cause is guaranteed."],c:1,tag:"Reporting"},
  {q:"You did not hear the account name on a call. Best response?",a:["Repeat.","Sorry, could you say the account name again, please?","I don't listen.","Send better audio."],c:1,tag:"Meetings"},
  {q:"What should happen first in alert triage?",a:["Assume compromise and rebuild.","Validate the alert, gather context and assess severity.","Close every low-severity alert.","Contact law enforcement."],c:1,tag:"SOC terminology"},
  {q:"Which statement about vulnerability and compromise is accurate?",a:["A vulnerability proves compromise.","A vulnerability is a weakness; compromise requires evidence that it was successfully abused.","Critical vulnerabilities are always exploited.","Only low-severity vulnerabilities need investigation."],c:1,tag:"Risk language"},
  {q:"Which sequence is most logical in incident response?",a:["Contain → investigate → remediate → learn","Attribute → delete logs → close → detect","Remediate → detect → ignore → contain","Report → patch → detect → triage"],c:0,tag:"Incident response"},
  {q:"Which sentence challenges an assumption diplomatically?",a:["You're wrong.","I'm not sure the evidence supports that conclusion yet.","That's nonsense.","Absolutely not."],c:1,tag:"Meetings"}
];

const checkpointPronunciationPool=[
  {q:"The -ed ending in 'isolated' is pronounced…",a:["/t/","/d/","/ɪd/","silent"],c:2,tag:"-ed endings"},
  {q:"The final -s in 'alerts' is pronounced…",a:["/s/","/z/","/ɪz/","silent"],c:0,tag:"-s endings"},
  {q:"The final -s in 'rules' is pronounced…",a:["/s/","/z/","/ɪz/","silent"],c:1,tag:"-s endings"},
  {q:"Where is the main stress in 'investigation'?",a:["IN-ves-ti-ga-tion","in-VES-ti-ga-tion","in-ves-ti-GA-tion","in-ves-ti-ga-TION"],c:2,tag:"Word stress"},
  {q:"Where is the main stress in 'remediation'?",a:["RE-me-di-a-tion","re-ME-di-a-tion","re-me-di-A-tion","re-me-di-a-TION"],c:2,tag:"Word stress"},
  {q:"In natural speech, 'did you' often sounds closest to…",a:["did / you","didja","dee-you","did-yoo-uh"],c:1,tag:"Connected speech"},
  {q:"In 'We still need MORE EVIDENCE', which words should carry the main stress?",a:["we / still","need / the","more / evidence","every word equally"],c:2,tag:"Sentence stress"},
  {q:"Which delivery is easiest to follow in a client update?",a:["Every word equally stressed.","Meaningful chunks with key content words stressed.","Maximum speed with no pauses.","One long flat sentence."],c:1,tag:"Intelligibility"}
];

const checkpointListeningPool=[
  {text:"We've confirmed that the suspicious session used valid credentials, but the source IP belongs to a corporate VPN provider. We're checking whether the user connected through that service before we classify the alert.",q:"Why has the alert not been classified yet?",a:["The logs are missing.","The team needs to verify whether the VPN use was legitimate.","The account has already been compromised.","The client wants to close the ticket."],c:1,tag:"Alert qualification"},
  {text:"The endpoint has been isolated and the malicious process is no longer running. That reduces the immediate risk, but we still need to determine how the file reached the device and whether the same attachment was sent elsewhere.",q:"What is still outstanding?",a:["Isolating the endpoint","Stopping the process","Finding the delivery path and wider scope","Confirming the endpoint exists"],c:2,tag:"Incident update"},
  {text:"I wouldn't attribute this to the campaign yet. The domain is similar, but the malware behaviour is different and we don't have enough overlap in the techniques. I'd describe the link as low confidence for now.",q:"How confident is the speaker in the attribution?",a:["Very confident","Moderately confident","Low confidence","Completely certain"],c:2,tag:"Threat intelligence"},
  {text:"Can I just clarify one point? If we block the entire address range, we may affect legitimate traffic from several partner organisations. Could we start with the confirmed malicious addresses and widen the block only if we see further activity?",q:"What is the speaker recommending?",a:["Block everything immediately.","Take a narrower first action and expand only if needed.","Ignore the malicious addresses.","Disconnect all partner organisations."],c:1,tag:"Meeting comprehension"},
  {text:"The patch is available, but production cannot be restarted until tonight's maintenance window. In the meantime, access has been restricted to the administrative subnet and additional monitoring is in place.",q:"What temporary mitigation is being used?",a:["The service has been permanently removed.","Access is restricted and monitoring increased.","The patch has already been deployed.","All users have administrator access."],c:1,tag:"Risk explanation"},
  {text:"Quick handover: the user confirmed the first login was theirs, but they did not recognise the second one from twenty minutes later. We revoked the sessions, reset the password and opened a wider identity review.",q:"What triggered the wider review?",a:["Both logins were legitimate.","The user did not recognise the second login.","The password reset failed.","The manager requested a new device."],c:1,tag:"Handover"}
];

function cloneProgressSnapshot(snapshot){
  return snapshot ? JSON.parse(JSON.stringify(snapshot)) : null;
}
function weakestProgressSkill(results){
  if(!results)return null;
  return Object.entries(results).sort((a,b)=>a[1]-b[1])[0]?.[0]||null;
}
function progressSkillLabel(key){
  const labels={grammar:"Grammar",cyber:"Cyber English",listening:"Listening",pronunciation:"Pronunciation",speaking:"Speaking",writing:"Writing"};
  return labels[key]||key;
}
function loadProgressCheckState(){
  try{
    const raw=JSON.parse(localStorage.getItem(progressCheckStateKey))||{};
    return {baseline:raw.baseline||null,current:raw.current||null,history:Array.isArray(raw.history)?raw.history:[]};
  }catch(e){return {baseline:null,current:null,history:[]};}
}
function saveProgressCheckState(state){
  localStorage.setItem(progressCheckStateKey,JSON.stringify(state));
}
function ensureProgressBaseline(){
  const state=loadProgressCheckState();
  if(state.baseline&&state.current)return state;
  try{
    const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));
    if(saved?.results&&saved?.details){
      const snap={date:Date.now(),type:"initial",results:cloneProgressSnapshot(saved.results),details:cloneProgressSnapshot(saved.details)};
      state.baseline=state.baseline||snap;
      state.current=state.current||cloneProgressSnapshot(snap);
      saveProgressCheckState(state);
    }
  }catch(e){}
  return state;
}
function recordFullDiagnosticSnapshot(results,details){
  const state=loadProgressCheckState();
  const snap={date:Date.now(),type:state.baseline?"full":"initial",results:cloneProgressSnapshot(results),details:cloneProgressSnapshot(details)};
  if(!state.baseline){
    state.baseline=cloneProgressSnapshot(snap);
    state.current=cloneProgressSnapshot(snap);
  }else{
    state.history.push(cloneProgressSnapshot(snap));
    state.current=cloneProgressSnapshot(snap);
  }
  saveProgressCheckState(state);
  if(typeof renderProgressCheck==="function")renderProgressCheck();
}
function mergeSectionTags(previousSection,newSection){
  const merged=cloneProgressSnapshot(previousSection)||{score:0,answered:0,total:0,pct:0,tags:{}};
  merged.tags=merged.tags||{};
  Object.entries(newSection.tags||{}).forEach(([tag,v])=>{
    merged.tags[tag]=merged.tags[tag]||{score:0,total:0};
    merged.tags[tag].score+=v.score;
    merged.tags[tag].total+=v.total;
  });
  return merged;
}
function checkpointSelect(pool,area,count,attemptIndex){
  const state=ensureProgressBaseline();
  const current=state.current;
  const details=current?.details?.[area];
  const weakTags=details?.tags
    ? Object.entries(details.tags).map(([name,v])=>({name,pct:Math.round(v.score/v.total*100)})).sort((a,b)=>a.pct-b.pct).map(x=>x.name)
    : [];
  const selected=[];
  const shifted=[...pool.slice(attemptIndex%pool.length),...pool.slice(0,attemptIndex%pool.length)];
  weakTags.forEach(tag=>{
    if(selected.length>=count)return;
    const item=shifted.find(x=>x.tag===tag&&!selected.includes(x));
    if(item)selected.push(item);
  });
  shifted.forEach(item=>{if(selected.length<count&&!selected.includes(item))selected.push(item);});
  return selected.slice(0,count);
}

let activeCheckpoint={
  grammar:[],cyber:[],pronunciation:[],listening:[],plays:[]
};

function renderCheckpointClosed(targetId,prefix,items){
  const target=document.getElementById(targetId);
  target.innerHTML=items.map((item,i)=>`<fieldset class="question-card">
    <legend>${i+1}. ${item.q}</legend>
    <div class="option-grid">${item.a.map((opt,j)=>`<label class="option"><input type="radio" name="${prefix}-${i}" value="${j}"><span>${opt}</span></label>`).join("")}</div>
  </fieldset>`).join("");
}
function renderCheckpointListening(){
  const target=document.getElementById("checkpointListeningQuestions");
  activeCheckpoint.plays=Array(activeCheckpoint.listening.length).fill(0);
  target.innerHTML=activeCheckpoint.listening.map((item,i)=>`<article class="checkpoint-audio-card">
    <div class="checkpoint-audio-head">
      <div><p class="small-label">AUDIO ${i+1}</p><h4>Listen, then answer.</h4></div>
      <div><button class="listen-button" type="button" data-checkpoint-listen="${i}">▶ Play</button><span class="play-count" id="checkpointPlayCount-${i}">0 / 2</span></div>
    </div>
    <fieldset class="question-card">
      <legend>${item.q}</legend>
      <div class="option-grid">${item.a.map((opt,j)=>`<label class="option"><input type="radio" name="checkpoint-listening-${i}" value="${j}"><span>${opt}</span></label>`).join("")}</div>
    </fieldset>
  </article>`).join("");
  target.querySelectorAll("[data-checkpoint-listen]").forEach(btn=>btn.addEventListener("click",()=>{
    const i=Number(btn.dataset.checkpointListen);
    if(activeCheckpoint.plays[i]>=2)return;
    const item=activeCheckpoint.listening[i];
    if(!("speechSynthesis" in window))return;
    const u=new SpeechSynthesisUtterance(item.text);
    u.lang=i%2===0?"en-GB":"en-US";
    u.rate=1.04+(i*.015);
    speechSynthesis.cancel();speechSynthesis.speak(u);
    activeCheckpoint.plays[i]++;
    document.getElementById(`checkpointPlayCount-${i}`).textContent=`${activeCheckpoint.plays[i]} / 2`;
    if(activeCheckpoint.plays[i]>=2)btn.disabled=true;
  }));
}
function scoreCheckpointItems(prefix,items){
  let score=0,answered=0;const tags={};
  items.forEach((item,i)=>{
    tags[item.tag]=tags[item.tag]||{score:0,total:0};tags[item.tag].total++;
    const picked=document.querySelector(`input[name="${prefix}-${i}"]:checked`);
    if(picked){
      answered++;
      if(Number(picked.value)===item.c){score++;tags[item.tag].score++;}
    }
  });
  return {score,answered,total:items.length,pct:Math.round(score/items.length*100),tags};
}
function startQuickCheckpoint(){
  const state=ensureProgressBaseline();
  if(!state.baseline){
    document.getElementById("progressNoBaseline").hidden=false;
    document.getElementById("diagnostic").scrollIntoView({behavior:"smooth"});
    return;
  }
  const attemptIndex=state.history.filter(x=>x.type==="quick").length;
  activeCheckpoint.grammar=checkpointSelect(checkpointGrammarPool,"grammar",6,attemptIndex*2);
  activeCheckpoint.cyber=checkpointSelect(checkpointCyberPool,"cyber",6,attemptIndex*3);
  activeCheckpoint.pronunciation=checkpointSelect(checkpointPronunciationPool,"pronunciation",4,attemptIndex);
  const listenStart=(attemptIndex*2)%checkpointListeningPool.length;
  const shifted=[...checkpointListeningPool.slice(listenStart),...checkpointListeningPool.slice(0,listenStart)];
  activeCheckpoint.listening=shifted.slice(0,4);

  renderCheckpointClosed("checkpointGrammarQuestions","checkpoint-grammar",activeCheckpoint.grammar);
  renderCheckpointClosed("checkpointCyberQuestions","checkpoint-cyber",activeCheckpoint.cyber);
  renderCheckpointClosed("checkpointPronunciationQuestions","checkpoint-pronunciation",activeCheckpoint.pronunciation);
  renderCheckpointListening();
  document.getElementById("checkpointSpeakingRating").value="";
  document.getElementById("checkpointWritingRating").value="";
  document.getElementById("checkpointSubmitFeedback").textContent="";
  document.getElementById("checkpointSubmitFeedback").className="activity-summary";
  document.getElementById("checkpointWorkspace").hidden=false;
  document.getElementById("checkpointResults").hidden=true;
  document.querySelector(".progress-overview-grid").hidden=true;
  document.querySelector(".progress-history-card").hidden=true;
  document.getElementById("checkpointWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
}
function closeQuickCheckpoint(){
  document.getElementById("checkpointWorkspace").hidden=true;
  document.getElementById("checkpointResults").hidden=true;
  document.querySelector(".progress-overview-grid").hidden=false;
  document.querySelector(".progress-history-card").hidden=false;
  renderProgressCheck();
  document.getElementById("progress-check").scrollIntoView({behavior:"smooth",block:"start"});
}
function currentCheckpointDetails(oldDetails,grammar,cyber,listening,pronunciation){
  return {
    grammar:mergeSectionTags(oldDetails.grammar,grammar),
    cyber:mergeSectionTags(oldDetails.cyber,cyber),
    listening:mergeSectionTags(oldDetails.listening,listening),
    pronunciation:mergeSectionTags(oldDetails.pronunciation,pronunciation)
  };
}
function submitQuickCheckpoint(){
  const state=ensureProgressBaseline();
  if(!state.current)return;
  const grammar=scoreCheckpointItems("checkpoint-grammar",activeCheckpoint.grammar);
  const cyber=scoreCheckpointItems("checkpoint-cyber",activeCheckpoint.cyber);
  const listening=scoreCheckpointItems("checkpoint-listening",activeCheckpoint.listening);
  const pronunciation=scoreCheckpointItems("checkpoint-pronunciation",activeCheckpoint.pronunciation);
  const all=[grammar,cyber,listening,pronunciation];
  const unanswered=all.reduce((sum,x)=>sum+(x.total-x.answered),0);
  const fb=document.getElementById("checkpointSubmitFeedback");
  if(unanswered){
    fb.className="activity-summary neutral";
    fb.textContent=`Answer all 20 closed items first. ${unanswered} answer${unanswered===1?" is":"s are"} still missing.`;
    return;
  }

  const previous=state.current.results;
  const checkpointScores={grammar:grammar.pct,cyber:cyber.pct,listening:listening.pct,pronunciation:pronunciation.pct};
  const results={...previous};
  Object.entries(checkpointScores).forEach(([key,pct])=>{
    results[key]=Math.round(previous[key]*0.4+pct*0.6);
  });
  const speakingRating=Number(document.getElementById("checkpointSpeakingRating").value||0);
  const writingRating=Number(document.getElementById("checkpointWritingRating").value||0);
  if(speakingRating)results.speaking=speakingRating*20;
  if(writingRating)results.writing=writingRating*20;

  const details=currentCheckpointDetails(state.current.details,grammar,cyber,listening,pronunciation);
  const snap={
    date:Date.now(),type:"quick",
    results:cloneProgressSnapshot(results),
    details:cloneProgressSnapshot(details),
    rawScores:checkpointScores
  };
  state.history.push(cloneProgressSnapshot(snap));
  state.current=cloneProgressSnapshot(snap);
  saveProgressCheckState(state);

  // Existing site components continue to read this key, so update the current profile there too.
  localStorage.setItem("ebackontrack-v2",JSON.stringify({results,details}));

  renderProfile(results,details);
  renderTrainingPlan(results,details);
  renderGrammarRepair();
  renderDashboard();
  updateSmartHomeMode();
  renderProgressCheck();

  const baseline=state.baseline.results;
  const labels=["grammar","cyber","listening","pronunciation","speaking","writing"];
  document.getElementById("checkpointResultCards").innerHTML=labels.map(key=>{
    const delta=results[key]-baseline[key];
    const sign=delta>0?"+":"";
    return `<article class="checkpoint-result-card">
      <span>${progressSkillLabel(key)}</span>
      <strong>${results[key]}%</strong>
      <small>Baseline ${baseline[key]}% · ${sign}${delta} points</small>
    </article>`;
  }).join("");

  const sorted=labels.map(key=>({key,delta:results[key]-baseline[key]})).sort((a,b)=>b.delta-a.delta);
  const improved=sorted.filter(x=>x.delta>=5);
  const weaker=sorted.filter(x=>x.delta<=-5);
  const priority=weakestProgressSkill(results);
  const summary=[];
  if(improved.length)summary.push(`<li><strong>Improved:</strong> ${improved.map(x=>`${progressSkillLabel(x.key)} ${x.delta>0?"+":""}${x.delta}`).join(", ")}.</li>`);
  if(weaker.length)summary.push(`<li><strong>Needs attention:</strong> ${weaker.map(x=>`${progressSkillLabel(x.key)} ${x.delta}`).join(", ")}.</li>`);
  summary.push(`<li><strong>New top priority:</strong> ${progressSkillLabel(priority)}.</li>`);
  summary.push(`<li>The Dashboard, starter plan and Grammar Repair queue now use this updated profile.</li>`);
  document.getElementById("checkpointChangeSummary").innerHTML=`<h3>What changed?</h3><ul>${summary.join("")}</ul>`;

  document.getElementById("checkpointWorkspace").hidden=true;
  document.getElementById("checkpointResults").hidden=false;
  document.getElementById("checkpointResults").scrollIntoView({behavior:"smooth",block:"start"});
}
function checkpointReadiness(){
  const plan=planStorage();
  const completedModules=plan.completed.length;
  const speaking=loadSpeakingState().attempts;
  const writing=loadWritingState().attempts.length;
  const pronunciation=loadPronunciationLabState().completed.length;
  const resources=loadAuthenticResourceState().completed.length;
  const simulations=loadClientSimState().completed.length;
  const workMissions=loadWorkEnglishState().attempts.length;
  const grammar=loadGrammarRepairState().completed.length;
  const listening=listeningLabCompletedCount();
  const evidence=completedModules+Math.min(2,Math.floor(speaking/3))+Math.min(1,Math.floor(writing/2))+Math.min(1,Math.floor(pronunciation/2))+Math.min(1,Math.floor(resources/2))+Math.min(2,simulations)+Math.min(1,workMissions)+Math.min(2,grammar)+Math.min(2,Math.floor(listening/2));
  return {completedModules,speaking,writing,pronunciation,resources,simulations,workMissions,grammar,listening,evidence};
}
function renderProgressSkillComparison(state){
  const target=document.getElementById("progressSkillComparison");if(!target)return;
  if(!state.baseline||!state.current){target.innerHTML=`<div class="progress-empty">No baseline yet.</div>`;return;}
  const keys=["grammar","cyber","listening","pronunciation","speaking","writing"];
  const base=state.baseline.results,current=state.current.results;
  target.innerHTML=keys.map(key=>{
    const delta=current[key]-base[key],cls=delta>2?"up":delta<-2?"down":"flat",sign=delta>0?"+":"";
    return `<div class="progress-skill-row">
      <div class="progress-skill-name"><strong>${progressSkillLabel(key)}</strong><span>${base[key]}% baseline → ${current[key]}% now</span></div>
      <div class="progress-bars">
        <div class="progress-mini-bar baseline"><span style="width:${base[key]}%"></span></div>
        <div class="progress-mini-bar current"><span style="width:${current[key]}%"></span></div>
      </div>
      <div class="progress-delta ${cls}">${sign}${delta} pts</div>
    </div>`;
  }).join("");
}
function progressHistoryEntries(state){
  const baseline=state.baseline;
  const snapshots=[baseline,...state.history].filter(Boolean).sort((a,b)=>b.date-a.date);
  return snapshots;
}
function renderProgressHistory(state){
  const target=document.getElementById("progressHistory");if(!target)return;
  const entries=progressHistoryEntries(state);
  if(!entries.length){target.innerHTML=`<div class="progress-empty">Your first diagnostic will appear here.</div>`;return;}
  target.innerHTML=entries.map(entry=>{
    const d=new Date(entry.date);
    const date=d.toLocaleDateString(undefined,{day:"2-digit",month:"short",year:"numeric"});
    const type=entry.type==="initial"?"Initial diagnostic":entry.type==="full"?"Full re-diagnostic":"Quick checkpoint";
    const priority=progressSkillLabel(weakestProgressSkill(entry.results));
    const scores=["grammar","cyber","listening","pronunciation"].map(k=>entry.results[k]).reduce((a,b)=>a+b,0)/4;
    return `<article class="progress-history-entry">
      <div class="progress-history-date">${date}</div>
      <div><strong>${type}</strong><span>Core profile average: ${Math.round(scores)}%</span></div>
      <span class="history-priority">${priority}</span>
    </article>`;
  }).join("");
}
function renderProgressCheck(){
  if(!document.getElementById("progress-check"))return;
  const state=ensureProgressBaseline();
  const noBaseline=!state.baseline;
  document.getElementById("progressNoBaseline").hidden=!noBaseline;
  document.getElementById("progressUnlocked").hidden=noBaseline;
  if(noBaseline){
    document.getElementById("progressCheckCount").textContent="0";
    document.getElementById("progressImprovedSkills").textContent="0";
    document.getElementById("progressCurrentPriority").textContent="—";
    return;
  }
  renderProgressSkillComparison(state);
  renderProgressHistory(state);

  const checks=state.history.filter(x=>x.type==="quick"||x.type==="full");
  const base=state.baseline.results,current=state.current.results;
  const improved=Object.keys(base).filter(k=>current[k]-base[k]>=5).length;
  const priority=weakestProgressSkill(current);
  document.getElementById("progressCheckCount").textContent=checks.length;
  document.getElementById("progressImprovedSkills").textContent=improved;
  document.getElementById("progressCurrentPriority").textContent=progressSkillLabel(priority);

  const last=checks.length?checks[checks.length-1]:null;
  document.getElementById("progressLastCheckLabel").textContent=last
    ? `Last check ${new Date(last.date).toLocaleDateString(undefined,{day:"2-digit",month:"short"})}`
    :"Baseline only";

  const ready=checkpointReadiness();
  const title=document.getElementById("checkpointReadinessTitle");
  if(ready.evidence>=4)title.textContent="A checkpoint would be useful now.";
  else if(checks.length)title.textContent="Check again after a little more practice.";
  else title.textContent="You can check whenever you want.";
  document.getElementById("checkpointReadinessBody").innerHTML=`
    <div class="readiness-item"><span>Personalised modules completed</span><strong>${ready.completedModules}</strong></div>
    <div class="readiness-item"><span>Speaking Lab attempts</span><strong>${ready.speaking}</strong></div>
    <div class="readiness-item"><span>Writing Lab attempts</span><strong>${ready.writing}</strong></div>
    <div class="readiness-item"><span>Pronunciation units completed</span><strong>${ready.pronunciation}</strong></div>
    <div class="readiness-item"><span>Authentic resources completed</span><strong>${ready.resources}</strong></div>
    <div class="readiness-item"><span>Client simulations completed</span><strong>${ready.simulations}</strong></div>
    <div class="readiness-item"><span>Work-based missions completed</span><strong>${ready.workMissions}</strong></div>
    <div class="readiness-item"><span>Grammar Repair units completed</span><strong>${ready.grammar}</strong></div>
    <div class="readiness-item"><span>Listening Lab tasks completed</span><strong>${ready.listening} / 5</strong></div>`;
}
function startFullRediagnostic(){
  const state=ensureProgressBaseline();
  if(!state.baseline){
    document.getElementById("diagnostic").scrollIntoView({behavior:"smooth"});
    return;
  }
  document.getElementById("diagnostic").scrollIntoView({behavior:"smooth",block:"start"});
  showSection("grammar");
}
function initProgressChecks(){
  if(!document.getElementById("progress-check"))return;
  ensureProgressBaseline();
  document.getElementById("startQuickCheckpointBtn")?.addEventListener("click",startQuickCheckpoint);
  document.getElementById("closeCheckpointBtn")?.addEventListener("click",closeQuickCheckpoint);
  document.getElementById("submitQuickCheckpointBtn")?.addEventListener("click",submitQuickCheckpoint);
  document.getElementById("closeCheckpointResultsBtn")?.addEventListener("click",closeQuickCheckpoint);
  document.getElementById("startFullRediagnosticBtn")?.addEventListener("click",startFullRediagnostic);
  renderProgressCheck();
}


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







// V11 · Smart returning-user home
function smartHomeSavedProfile(){
  try{
    const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));
    return saved?.results&&saved?.details ? saved : null;
  }catch(e){return null;}
}
function smartHomeSummaryText(saved){
  if(!saved?.results)return "Your current profile is loaded.";
  const weak=weakestSkill(saved.results);
  const next=nextIncompleteModuleData();
  const due=phraseStats().due;
  const parts=[`Current focus: ${weak.label}`];
  if(next&&!next.completed)parts.push(`next module: ${next.module.title}`);
  if(due)parts.push(`${due} Phrasebook review${due===1?"":"s"} due`);
  return parts.join(" · ");
}
function updateSmartHomeMode(){
  const saved=smartHomeSavedProfile();
  const returning=!!saved;
  document.body.classList.toggle("returning-user",returning);

  const brand=document.getElementById("homeBrandLink");
  if(brand){
    brand.href=returning?"#dashboard":"#home";
    brand.setAttribute("aria-label",returning?"English, Back on Track dashboard":"English, Back on Track home");
  }

  const row=document.getElementById("smartHomeRow");
  if(row){
    row.hidden=!returning;
    const summary=document.getElementById("smartHomeSummary");
    if(summary&&returning)summary.textContent=smartHomeSummaryText(saved);
  }

  // On a fresh visit with no explicit deep link, the Dashboard is physically the first visible section.
  // We intentionally do not force-scroll when a URL hash is present.
}
function bindDashboardDirectResume(){
  document.querySelectorAll("[data-dashboard-resume-module]").forEach(btn=>{
    if(btn.dataset.resumeBound==="1")return;
    btn.dataset.resumeBound="1";
    btn.addEventListener("click",()=>{
      const key=btn.dataset.dashboardResumeModule;
      if(!key)return;
      document.getElementById("my-plan")?.scrollIntoView({behavior:"smooth",block:"start"});
      setTimeout(()=>openTrainingModule(key),180);
    });
  });
}


// V8 · Daily dashboard
const dashboardStateKey="ebackontrack-v8-dashboard";

function loadDashboardState(){
  try{
    const raw=JSON.parse(localStorage.getItem(dashboardStateKey))||{};
    return {budget:Number(raw.budget||15), days:raw.days||{}};
  }catch(e){return {budget:15,days:{}};}
}
function saveDashboardState(state){
  localStorage.setItem(dashboardStateKey,JSON.stringify(state));
}
function todayKey(){
  const d=new Date();
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
function lastSevenKeys(){
  const out=[], now=new Date();
  for(let i=0;i<7;i++){
    const d=new Date(now); d.setDate(now.getDate()-i);
    out.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`);
  }
  return out;
}
function greetingForNow(){
  const h=new Date().getHours();
  if(h<12) return "Good morning.";
  if(h<18) return "Good afternoon.";
  return "Good evening.";
}
function dashboardMessage(seed){
  const lines=[
    "Today, the site will turn your priorities into a short, realistic session.",
    "Useful English beats perfect English. Let's work on what you actually need.",
    "The point is not to do everything. The point is to do the right next things.",
    "Short focused work today is worth more than vague intentions about 'practising English'.",
    "You do not need a marathon session — you need a session you will actually do."
  ];
  return lines[seed % lines.length];
}
function weakestSkill(results){
  if(!results) return {key:"diagnostic", label:"Diagnostic"};
  const labels={grammar:"Grammar",cyber:"Cyber English",listening:"Listening",pronunciation:"Pronunciation",speaking:"Speaking",writing:"Writing"};
  const sorted=Object.entries(results).sort((a,b)=>a[1]-b[1]);
  return {key:sorted[0][0], label:labels[sorted[0][0]]};
}
function currentPlanKeysFromStorage(){
  try{
    const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));
    if(saved?.results&&saved?.details) return chooseOperationalModules(saved.results,saved.details);
  }catch(e){}
  return [];
}
function nextIncompleteModuleData(){
  const keys=currentPlanKeysFromStorage();
  const state=planStorage();
  for(const key of keys){
    if(!state.completed.includes(key) && trainingModules[key]){
      return {key, module:trainingModules[key], stages:moduleStageCount(state,key), attempts:state.attempts?.[key]||0};
    }
  }
  if(keys.length && trainingModules[keys[0]]){
    const key=keys[0];
    return {key, module:trainingModules[key], stages:moduleStageCount(state,key), attempts:state.attempts?.[key]||0, completed:true};
  }
  return null;
}
function listeningLabCompletedCount(){
  const state=getLabState();
  const keys=["gist","decoding","dictation","notes","call"];
  return keys.filter(k=>state.completed[k]).length;
}
function dashboardReasonCards(results,details){
  const cards=[];
  const weak=weakestSkill(results);
  if(!results){
    cards.push({title:"No diagnostic yet",text:"The first useful step is to run the initial diagnostic so the site can stop guessing."});
  }else{
    cards.push({title:`Main priority: ${weak.label}`,text:`Your diagnostic currently gives the lowest score to ${weak.label.toLowerCase()}, so today's routine gives it extra space.`});
    if(results.listening<75) cards.push({title:"Listening needs structured work",text:"That usually means gist, decoding and note-taking rather than simply 'more English audio'."});
    if(loadAuthenticResourceState().completed.length<3) cards.push({title:"Authentic input is still limited",text:"The resource hub adds recent real-world cybersecurity English so training is not confined to synthetic exercises."});
    if(loadClientSimState().completed.length===0 && loadSpeakingState().attempts>=2 && loadWritingState().attempts.length>=1) cards.push({title:"Integration is the next step",text:"The Client Call Simulator now combines oral briefing, unexpected questions, new evidence, recommendation, handover and follow-up writing."});
    if(loadWorkEnglishState().attempts.length===0 && loadClientSimState().completed.length>=1) cards.push({title:"Transfer the skill to your own work",text:"My Work English can turn one anonymised professional situation into a local multi-skill mission without uploading the scenario anywhere."});
    if(results.speaking<75) cards.push({title:"Speaking needs activation",text:"The goal is to move useful language from recognition to spontaneous use."});
    if(results.writing<75) cards.push({title:"Writing needs consolidation",text:"Short client-facing writing is now trained through incident updates, handovers, risk explanations and follow-ups."});
    if(results.grammar<75) cards.push({title:"Accuracy still matters",text:"But it is built into cyber tasks, not treated as isolated textbook drilling."});
    if(results.pronunciation<75) cards.push({title:"Intelligibility needs targeted work",text:"The Pronunciation Lab now focuses on stress, endings, connected speech and chunking rather than trying to erase an accent."});
    const detailsWeak = details?.cyber ? tagWeaknesses(details.cyber,1)[0]?.name : null;
    if(detailsWeak) cards.push({title:"Cyber focus",text:`Your current plan is also shaped by ${detailsWeak.toLowerCase()}.`});
  }
  const due=phraseStats().due;
  if(due>0) cards.push({title:"Review is due",text:`You have ${due} Phrasebook card${due===1?"":"s"} due, so the routine includes short spaced review.`});
  const vaultMeta=loadVaultMeta();
  const vaultHasData=vaultGroups.some(vaultActiveGroup);
  const vaultAge=vaultMeta.lastBackup?Math.floor((Date.now()-vaultMeta.lastBackup)/(1000*60*60*24)):null;
  if(vaultHasData && (!vaultMeta.lastBackup || vaultAge>30)) cards.push({title:"Your progress is only on this device",text:"My Data can export a private backup before you change browser, clear site data or move to another device."});
  return cards.slice(0,4);
}
function buildRoutineTasks(minutes){
  let results=null, details=null;
  try{
    const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));
    if(saved?.results){results=saved.results; details=saved.details;}
  }catch(e){}
  const due=phraseStats();
  const nextModule=nextIncompleteModuleData();
  const weak=weakestSkill(results);
  const tasks=[];
  const durationPresets = {
    10:[3,2,3,2],
    15:[4,3,5,3],
    20:[5,4,7,4]
  };
  const durations = durationPresets[minutes] || durationPresets[15];
  const add=(task)=>{ if(!tasks.find(x=>x.id===task.id)) tasks.push(task); };

  if(!results){
    add({id:"diagnostic",tag:"START",title:"Complete the initial diagnostic",desc:"Without it, the site cannot prioritise the right skills for you.",duration:durations[0],anchor:"#diagnostic",cta:"Open diagnostic"});
    add({id:"listening-lab",tag:"LISTENING",title:"Try one Listening Lab task",desc:"Do one gist task and focus on the message, not every single word.",duration:durations[1],anchor:"#listening-lab",cta:"Open Listening Lab"});
    add({id:"phrasebook-starter",tag:"PHRASEBOOK",title:"Add the starter Phrasebook pack",desc:"Save some cyber expressions now so spaced review can begin.",duration:durations[2],anchor:"#phrasebook",cta:"Open Phrasebook"});
    add({id:"speaking-start",tag:"SPEAKING",title:"Do one quick speaking challenge",desc:"Give a 30-second answer without writing full sentences first.",duration:durations[3],anchor:"#speaking-lab",cta:"Open Speaking Lab"});
    return {results,details,tasks:tasks.slice(0,4)};
  }

  if(results.listening < 75 || listeningLabCompletedCount() < 3){
    add({id:"listening",tag:"LISTENING",title:"Listening Lab",desc:`Do one ${results.listening < 65 ? "gist + decoding" : "note-taking or incident-call"} task. Your listening score is ${results.listening}%.`,duration:durations[0],anchor:"#listening-lab",cta:"Open Listening Lab"});
  }
  if(due.due > 0 || due.saved === 0){
    add({id:"phrasebook",tag:"PHRASEBOOK",title:due.saved===0?"Start your Phrasebook":"Review due phrases",desc:due.saved===0?"Add useful chunks and begin spaced review.":"Review a few due cards and keep the useful chunks active.",duration:durations[1],anchor:"#phrasebook",cta:"Open Phrasebook"});
  }
  if(loadAuthenticResourceState().completed.length < 3){
    add({id:"authentic-input",tag:"REAL ENGLISH",title:"Authentic resource",desc:"Use one recent cybersecurity article, report, video or podcast actively: gist → facts → language → output.",duration:durations[Math.min(tasks.length,durations.length-1)],anchor:"#resources-hub",cta:"Open Authentic Resources"});
  }
  if(results.speaking < 75 || loadSpeakingState().attempts < 5){
    add({id:"speaking",tag:"SPEAKING",title:"Speaking Lab",desc:`Do one ${results.speaking < 65 ? "quick response or explain-it-simply" : "incident update or client roleplay"} task.`,duration:durations[2],anchor:"#speaking-lab",cta:"Open Speaking Lab"});
  }
  if(results.writing < 75 || loadWritingState().attempts.length < 3){
    add({id:"writing",tag:"WRITING",title:"Writing Lab",desc:`Do one short ${results.writing < 65 ? "client incident email or handover" : "risk explanation or meeting follow-up"} and self-edit it before comparing with the model.`,duration:durations[Math.min(tasks.length,durations.length-1)],anchor:"#writing-lab",cta:"Open Writing Lab"});
  }
  if(nextModule){
    add({id:"module",tag:"PLAN",title:`Continue: ${nextModule.module.title}`,desc:`Resume your personalised plan. Current progress: ${nextModule.stages} / 5 stages in this module.`,duration:durations[3],anchor:"#my-plan",cta:"Open my plan"});
  }
  if(results.grammar < 75){
    add({id:"grammar-repair",tag:"ACCURACY",title:"Repair one recurring grammar issue",desc:"Open the adaptive Grammar Repair Lab and fix one pattern selected from your diagnostic.",duration:durations[3],anchor:"#grammar-lab",cta:"Open Grammar Repair"});
  }
  if(results.pronunciation < 75 && tasks.length < 4){
    add({id:"pron",tag:"PRONUNCIATION",title:"Pronunciation & Intelligibility Lab",desc:"Train the pronunciation feature your diagnostic currently flags: stress, endings, connected speech or chunking.",duration:durations[3],anchor:"#pronunciation-lab",cta:"Open Pronunciation Lab"});
  }
  if(tasks.length < 4 && loadClientSimState().completed.length===0 && loadSpeakingState().attempts>=2 && loadWritingState().attempts.length>=1 && listeningLabCompletedCount()>=2){
    add({id:"client-sim",tag:"SIMULATION",title:"Run a full client call",desc:"Combine listening, speaking, uncertainty, decision-making, handover and follow-up in one end-to-end incident mission.",duration:durations[Math.min(tasks.length,durations.length-1)],anchor:"#client-simulator",cta:"Open Client Simulator"});
  }
  if(tasks.length < 4 && loadWorkEnglishState().attempts.length===0 && (loadClientSimState().completed.length>=1 || (loadSpeakingState().attempts>=3 && loadWritingState().attempts.length>=2))){
    add({id:"work-english",tag:"YOUR WORK",title:"Train on one anonymised work situation",desc:"Turn a real professional situation into a local speaking, writing, grammar and pronunciation mission.",duration:durations[Math.min(tasks.length,durations.length-1)],anchor:"#work-english-lab",cta:"Open My Work English"});
  }
  if(tasks.length < 4 && typeof checkpointReadiness==="function" && checkpointReadiness().evidence>=4){
    add({id:"progress-check",tag:"CHECKPOINT",title:"Take a quick progress check",desc:"You have done enough targeted practice for a fresh snapshot to be useful.",duration:durations[Math.min(tasks.length, durations.length-1)],anchor:"#progress-check",cta:"Open Progress Check"});
  }
  if(tasks.length < 4) add({id:"quick-review",tag:"REVIEW",title:"Use Emergency English before you stop",desc:"Open the quick survival phrases and rehearse two or three aloud.",duration:durations[Math.min(tasks.length, durations.length-1)],anchor:"#speaking-lab",cta:"Open Speaking Lab"});

  return {results,details,tasks:tasks.slice(0,4)};
}
function dashboardCompletionInfo(tasks){
  const state=loadDashboardState(), day=state.days[todayKey()] || {completed:[]};
  const completed = day.completed || [];
  const totalMin = tasks.reduce((sum,t)=>sum+t.duration,0);
  const doneCount = tasks.filter(t=>completed.includes(t.id)).length;
  const doneMin = tasks.filter(t=>completed.includes(t.id)).reduce((sum,t)=>sum+t.duration,0);
  return {doneCount,total:tasks.length,totalMin,doneMin};
}
function markDashboardTask(taskId, done){
  const state=loadDashboardState(), key=todayKey();
  state.days[key]=state.days[key] || {completed:[], sessionComplete:false};
  const list=new Set(state.days[key].completed || []);
  if(done) list.add(taskId);
  else list.delete(taskId);
  state.days[key].completed=[...list];
  state.days[key].sessionComplete=false;
  saveDashboardState(state);
  renderDashboard();
}
function markRoutineSessionComplete(tasks){
  const state=loadDashboardState(), key=todayKey();
  state.days[key]=state.days[key] || {completed:[], sessionComplete:false};
  state.days[key].completed = tasks.map(t=>t.id);
  state.days[key].sessionComplete = true;
  saveDashboardState(state);
  renderDashboard();
}
function weekPracticeSummary(){
  const state=loadDashboardState();
  const keys=lastSevenKeys();
  const activeDays = keys.filter(k => (state.days[k]?.completed || []).length > 0).length;
  const completeDays = keys.filter(k => state.days[k]?.sessionComplete).length;
  return {activeDays, completeDays};
}
function renderQuickLinks(){
  const target=document.getElementById("dashboardQuickLinks"); if(!target) return;
  const links=[
    {anchor:"#my-plan", title:"My personalised plan", sub:"Resume the selected cyber modules"},
    {anchor:"#client-simulator", title:"Client Call Simulator", sub:"Full incident mission from briefing to follow-up"},
    {anchor:"#work-english-lab", title:"My Work English", sub:"Turn anonymised real situations into local practice"},
    {anchor:"#resources-hub", title:"Authentic Resources", sub:"Recent real-world cyber English with short tasks"},
    {anchor:"#listening-lab", title:"Listening Lab", sub:"Gist, decoding, dictation and note-taking"},
    {anchor:"#speaking-lab", title:"Speaking Lab", sub:"Quick responses, client questions and roleplay"},
    {anchor:"#pronunciation-lab", title:"Pronunciation Lab", sub:"Stress, endings, connected speech, chunking and shadowing"},
    {anchor:"#writing-lab", title:"Writing Lab", sub:"Client emails, handovers, risk and remediation"},
    {anchor:"#grammar-lab", title:"Grammar Repair", sub:"Adaptive repair based on diagnostic weak points"},
    {anchor:"#progress-check", title:"Progress Check", sub:"Fresh checkpoint and baseline comparison"},
    {anchor:"#progress-vault", title:"My Data & Backup", sub:"Export, restore or inspect local progress"},
    {anchor:"#phrasebook", title:"Phrasebook", sub:"Chunks, favourites and spaced review"}
  ];
  target.innerHTML = `<div class="dashboard-mini-list">${
    links.map(link=>`<a class="dashboard-mini-link" href="${link.anchor}"><span>${link.title}<small>${link.sub}</small></span><span>→</span></a>`).join("")
  }</div>`;
}
function renderDashboardNextStep(results){
  const target=document.getElementById("dashboardNextStep"); if(!target) return;
  const nextModule=nextIncompleteModuleData();
  if(!results){
    target.innerHTML=`<div class="next-step-box"><strong>Start with the diagnostic</strong><span>The dashboard can only personalise your work once the initial diagnostic is complete.</span><a class="primary-button" href="#diagnostic">Open diagnostic</a></div>`;
    return;
  }
  if(nextModule && !nextModule.completed){
    target.innerHTML=`<div class="next-step-box"><strong>${nextModule.module.title}</strong><span>${nextModule.module.short}</span><span>${nextModule.stages} / 5 stages completed · ${nextModule.attempts} checkpoint attempt${nextModule.attempts===1?"":"s"}</span><button class="dashboard-direct-resume" type="button" data-dashboard-resume-module="${nextModule.key}">Resume exactly where I left off →</button></div>`;
    bindDashboardDirectResume();
    return;
  }
  const due=phraseStats();
  if(due.due > 0){
    target.innerHTML=`<div class="next-step-box"><strong>Phrasebook review is due</strong><span>You have ${due.due} card${due.due===1?"":"s"} ready for spaced review.</span><a class="primary-button" href="#phrasebook">Open Phrasebook</a></div>`;
    return;
  }
  if(loadClientSimState().completed.length===0 && loadSpeakingState().attempts>=2 && loadWritingState().attempts.length>=1){
    target.innerHTML=`<div class="next-step-box"><strong>Put everything together</strong><span>You have enough component practice to try a full client-call simulation from initial alert to written follow-up.</span><a class="primary-button" href="#client-simulator">Open Client Simulator</a></div>`;
    return;
  }
  target.innerHTML=`<div class="next-step-box"><strong>Speaking activation</strong><span>Your next useful step is to do one Speaking Lab task and force a few chunks into active use.</span><a class="primary-button" href="#speaking-lab">Open Speaking Lab</a></div>`;
}
function renderDashboard(){
  const state=loadDashboardState();
  const budgetSelect=document.getElementById("dashboardBudget");
  if(budgetSelect && Number(budgetSelect.value)!==state.budget) budgetSelect.value=String(state.budget);

  const today = new Date();
  document.getElementById("dashboardGreeting").textContent = greetingForNow();
  document.getElementById("dashboardSubcopy").textContent = dashboardMessage(today.getDate());

  const build = buildRoutineTasks(state.budget);
  const {tasks, results, details} = build;
  const completion = dashboardCompletionInfo(tasks);
  const week = weekPracticeSummary();
  const weak = weakestSkill(results);

  document.getElementById("routineTotalMinutes").textContent = `${completion.totalMin} min`;
  document.getElementById("dashboardTodayProgress").textContent = `${completion.doneCount} / ${completion.total}`;
  document.getElementById("dashboardTodaySub").textContent = `${completion.doneMin} of ${completion.totalMin} minutes logged`;
  document.getElementById("dashboardWeekProgress").textContent = `${week.activeDays} day${week.activeDays===1?"":"s"}`;
  document.getElementById("dashboardWeekSub").textContent = `${week.completeDays} full routine${week.completeDays===1?"":"s"} completed in the last 7 days`;
  document.getElementById("dashboardPrioritySkill").textContent = weak.label;
  document.getElementById("dashboardPrioritySub").textContent = results ? `Lowest current score: ${results[weak.key]}%` : "Complete the diagnostic first";
  document.getElementById("dashboardReviewDue").textContent = String(phraseStats().due);
  document.getElementById("dashboardReviewSub").textContent = phraseStats().saved ? `${phraseStats().saved} saved in total` : "No phrases saved yet";

  const firstTask = tasks[0];
  document.getElementById("dashboardMission").innerHTML = firstTask
    ? `<strong>Today's mission:</strong><span>${firstTask.title} first — then keep the rest short and realistic.</span>`
    : `<strong>Today's mission:</strong><span>Build your routine to get started.</span>`;

  const completedSet = new Set((loadDashboardState().days[todayKey()]?.completed)||[]);
  const routineList=document.getElementById("routineList");
  routineList.innerHTML = tasks.length ? tasks.map((task, i)=>`
    <article class="routine-step ${completedSet.has(task.id) ? 'done' : ''}">
      <div class="routine-step-top">
        <div>
          <span class="routine-step-tag">${task.tag} · ${task.duration} min</span>
          <h4>${i+1}. ${task.title}</h4>
          <p>${task.desc}</p>
        </div>
      </div>
      <div class="routine-step-actions">
        <a class="secondary-button" href="${task.anchor}">${task.cta}</a>
        <button class="routine-check ${completedSet.has(task.id) ? 'is-done' : ''}" type="button" data-dashboard-task="${task.id}">
          ${completedSet.has(task.id) ? '✓ Done' : 'Mark done'}
        </button>
      </div>
    </article>`).join("") : `<div class="dashboard-empty">No routine could be generated yet.</div>`;

  routineList.querySelectorAll("[data-dashboard-task]").forEach(btn=>btn.addEventListener("click",()=>{
    const id=btn.dataset.dashboardTask, done=!completedSet.has(id);
    markDashboardTask(id, done);
  }));

  renderDashboardNextStep(results);
  renderQuickLinks();
  updateSmartHomeMode();

  const reasons=document.getElementById("dashboardFocusReasons");
  reasons.innerHTML = dashboardReasonCards(results,details).map(card=>`
    <article class="focus-reason">
      <strong>${card.title}</strong>
      <span>${card.text}</span>
    </article>`).join("");

  document.getElementById("markRoutineDoneBtn").onclick = ()=>markRoutineSessionComplete(tasks);
}
function initDashboard(){
  if(!document.getElementById("dashboard")) return;
  const state=loadDashboardState();
  const budgetSelect=document.getElementById("dashboardBudget");
  if(budgetSelect){
    budgetSelect.value=String(state.budget);
    budgetSelect.addEventListener("change",()=>{
      const st=loadDashboardState();
      st.budget=Number(budgetSelect.value||15);
      saveDashboardState(st);
      renderDashboard();
    });
  }
  document.getElementById("refreshRoutineBtn")?.addEventListener("click",renderDashboard);
  renderDashboard();
}














// V18 · My Work English Lab
const workEnglishStateKey="ebackontrack-v18-work-lab";

const workLabTypeMeta={
  client:{
    label:"CLIENT UPDATE",
    title:"Explain the situation and protect the level of certainty",
    questions:[
      "How confident are you in that assessment?",
      "What evidence would change your conclusion?",
      "Does this mean the incident is contained?",
      "What should we do in the next 30 minutes?"
    ],
    writingTitle:"Send a short client follow-up",
    writing:"Write 70–120 words: current status → action already taken → what remains uncertain → next step / next update."
  },
  incident:{
    label:"INCIDENT INVESTIGATION",
    title:"Turn investigation facts into a clear operational update",
    questions:[
      "What is confirmed, and what is still only a hypothesis?",
      "What is the main outstanding investigation step?",
      "Could this still be a false positive?",
      "What would make you escalate this case?"
    ],
    writingTitle:"Write an investigation update",
    writing:"Write 70–120 words for the case record: trigger → evidence → action → outstanding question → next investigation step."
  },
  handover:{
    label:"SOC HANDOVER",
    title:"Transfer the case without losing the reasoning",
    questions:[
      "What should the next analyst check first?",
      "Which conclusion should the next analyst avoid making too early?",
      "What evidence is still missing?",
      "What has already been ruled out?"
    ],
    writingTitle:"Write the handover",
    writing:"Write 60–100 words: trigger → evidence → actions completed → outstanding point → next analyst action."
  },
  risk:{
    label:"RISK / REMEDIATION",
    title:"Explain severity, likelihood and action in plain English",
    questions:[
      "How urgent is this in practical terms?",
      "What makes the likelihood higher or lower?",
      "What temporary mitigation would you use if the preferred fix is delayed?",
      "Can you guarantee this recommendation removes the risk?"
    ],
    writingTitle:"Write a remediation recommendation",
    writing:"Write 70–120 words: issue → likelihood/exposure → impact → immediate recommendation → fallback / next step."
  },
  internal:{
    label:"INTERNAL TECHNICAL DISCUSSION",
    title:"Be precise without turning the update into a wall of jargon",
    questions:[
      "What is the strongest evidence for your current hypothesis?",
      "What would you rule out next?",
      "Which assumption are we making here?",
      "What should another team do with this information?"
    ],
    writingTitle:"Write an internal technical note",
    writing:"Write 60–110 words: finding → evidence → interpretation → uncertainty → action requested."
  }
};

const workAudienceLabels={
  "client-nontechnical":"Non-technical client",
  "client-technical":"Technical client",
  "soc":"SOC / analyst colleague",
  "manager":"Manager / decision-maker",
  "mixed":"Mixed audience"
};

const workPhraseGroups={
  client:["client-current-assessment","client-what-we-know","client-not-confirmed","inc-next-update","inc-keep-posted","meeting-understood"],
  incident:["soc-at-this-stage","soc-rule-out","inc-so-far","inc-currently-reviewing","inc-outstanding","handover-next-analyst"],
  handover:["handover-next-analyst","inc-outstanding","inc-currently-reviewing","soc-rule-out","inc-so-far","inc-next-update"],
  risk:["risk-likelihood-depends","risk-no-exploitation","rem-immediate","rem-fallback","risk-immediate-reduced","client-doesnt-mean"],
  internal:["soc-at-this-stage","soc-rule-out","inc-currently-reviewing","meeting-no-jump","meeting-come-back","meet-put-another-way"]
};

const workGrammarMap={
  perfect:{
    title:"Timeline control: Past vs Present Perfect",
    prompt:"Use Past Simple for finished timestamped actions; use Present Perfect for findings that matter now or a time period that is still open.",
    examples:["We isolated the endpoint at 09:20.","We have found no evidence of lateral movement so far."]
  },
  conditionals:{
    title:"Conditionals for action and consequence",
    prompt:"Use a real future conditional for the next operational step; use a hypothetical conditional when discussing a possible scenario rather than a confirmed event.",
    examples:["If we identify additional activity, we'll widen the investigation.","If the account were still active, the exposure would be higher."]
  },
  modals:{
    title:"Modals for uncertainty and evidence",
    prompt:"Match certainty to evidence: may / might / could for possibility; must only when the evidence strongly supports the conclusion.",
    examples:["The activity could be legitimate, but we still need to confirm it.","The attacker may have obtained valid credentials."]
  },
  passive:{
    title:"Passive voice for incident processes",
    prompt:"Use the passive when the action/result matters more than the actor, especially in incident timelines and remediation updates.",
    examples:["The endpoint has been isolated.","The affected credentials should be rotated."]
  },
  structure:{
    title:"Question and clause structure",
    prompt:"Keep indirect questions and embedded clauses in normal statement word order.",
    examples:["Could you confirm whether the login was expected?","We still don't know why the rule was created."]
  },
  verbs:{
    title:"Verb patterns for recommendations",
    prompt:"Use recommend + -ing or recommend that + base verb; use ask + person + to + verb.",
    examples:["We recommend rotating the affected credentials.","We recommend that the client restrict access temporarily."]
  },
  precision:{
    title:"Precision with quantifiers and agreement",
    prompt:"Be careful with countable technical items (alerts, accounts, endpoints) versus uncountable concepts (traffic, evidence, activity).",
    examples:["We saw fewer failed logins after the block.","There is not enough evidence to confirm attribution."]
  },
  comparison:{
    title:"Comparisons for risk and severity",
    prompt:"Compare likelihood, severity or exposure explicitly instead of relying on vague words such as 'bigger' or 'worse'.",
    examples:["The likelihood is higher because the service is internet-facing.","This control is less effective than full credential rotation."]
  },
  prepositions:{
    title:"High-frequency work prepositions",
    prompt:"Rehearse common professional combinations rather than translating prepositions from French.",
    examples:["responsible for the review","at 09:20 UTC","on Monday","move to the next stage"]
  }
};

const workPronMap={
  wordStress:{
    title:"Word stress in long technical words",
    prompt:"Make the stressed syllable clearly stronger so the listener recognises the word quickly.",
    lines:["authentication","investigation","remediation","vulnerability"]
  },
  sentenceStress:{
    title:"Sentence stress: make the key fact land",
    prompt:"Stress the information that changes the client's understanding, not every word equally.",
    lines:["We have NO evidence of lateral movement.","The SECOND login was not recognised."]
  },
  edEndings:{
    title:"-ed endings in incident timelines",
    prompt:"Keep past actions audible: /t/, /d/ or /ɪd/ depending on the final sound.",
    lines:["blocked /t/","confirmed /d/","detected /ɪd/","isolated /ɪd/"]
  },
  sEndings:{
    title:"Final -s for technical meaning",
    prompt:"Keep plural and third-person endings audible so counts and technical meanings remain clear.",
    lines:["alerts /s/","logs /z/","addresses /ɪz/","patches /ɪz/"]
  },
  connectedSpeech:{
    title:"Connected speech in meetings",
    prompt:"Recognise and produce natural linking without sacrificing key technical words.",
    lines:["Could you run that by me again?","We've been reviewing the logs since the alert came in."]
  },
  chunking:{
    title:"Chunk long updates into meaning groups",
    prompt:"Pause at operational boundaries: finding / scope / action / uncertainty / next step.",
    lines:["At this stage / we have no evidence of lateral movement / but the investigation is ongoing.","The account has been disabled / as a precaution / while we review recent sign-ins."]
  },
  soundClarity:{
    title:"Sound clarity that affects intelligibility",
    prompt:"Keep key contrasts and final consonants clear rather than trying to remove your accent.",
    lines:["live / leave","host","risk","breach"]
  }
};

function loadWorkEnglishState(){
  try{
    const raw=JSON.parse(localStorage.getItem(workEnglishStateKey))||{};
    return {
      attempts:Array.isArray(raw.attempts)?raw.attempts:[],
      saved:Array.isArray(raw.saved)?raw.saved:[]
    };
  }catch(e){return {attempts:[],saved:[]};}
}
function saveWorkEnglishState(state){
  localStorage.setItem(workEnglishStateKey,JSON.stringify(state));
}
function workWordCount(text){
  const clean=(text||"").trim();
  return clean?clean.split(/\s+/).filter(Boolean).length:0;
}
function currentWorkForm(){
  return {
    type:document.getElementById("workSituationType").value,
    audience:document.getElementById("workAudience").value,
    goal:document.getElementById("workGoal").value.trim(),
    facts:document.getElementById("workFacts").value.trim(),
    keyTerms:document.getElementById("workKeyTerms").value.trim()
  };
}
function workScenarioFingerprint(data){
  const text=[data.type,data.audience,data.goal,data.facts,data.keyTerms].join("|").toLowerCase();
  let hash=0;
  for(let i=0;i<text.length;i++)hash=((hash<<5)-hash+text.charCodeAt(i))|0;
  return Math.abs(hash).toString(36);
}
function scanWorkPrivacy(){
  const text=[document.getElementById("workGoal").value,document.getElementById("workFacts").value,document.getElementById("workKeyTerms").value].join("\n");
  const checks=[
    {label:"email address",re:/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i},
    {label:"IPv4 address",re:/\b(?:\d{1,3}\.){3}\d{1,3}\b/},
    {label:"URL",re:/https?:\/\/|www\./i},
    {label:"possible domain name",re:/\b[a-z0-9-]+\.(?:com|net|org|io|fr|co\.uk|internal|local)\b/i},
    {label:"possible ticket / long identifier",re:/\b[A-Z]{2,8}[-_]\d{3,}\b|\b\d{8,}\b/},
    {label:"credential-like text",re:/password\s*[:=]|passwd\s*[:=]|api[_ -]?key\s*[:=]|token\s*[:=]/i}
  ];
  const warnings=checks.filter(c=>c.re.test(text)).map(c=>c.label);
  const target=document.getElementById("workPrivacyResults");
  if(!text.trim()){
    target.innerHTML=`<div class="work-privacy-result warn"><span>⚠</span><div>Add an anonymised situation before running the scan.</div></div>`;
    return warnings;
  }
  if(warnings.length){
    target.innerHTML=warnings.map(x=>`<div class="work-privacy-result warn"><span>⚠</span><div>Possible ${x} detected. Check whether it should be removed or generalised.</div></div>`).join("");
  }else{
    target.innerHTML=`<div class="work-privacy-result ok"><span>✓</span><div>No obvious email, IP, URL, domain, long identifier or credential pattern detected. You still need to judge confidentiality yourself.</div></div>`;
  }
  return warnings;
}
function workGrammarTarget(){
  try{
    const state=ensureProgressBaseline();
    const details=state?.current?.details?.grammar;
    if(details?.tags){
      const weakness=Object.entries(details.tags)
        .map(([tag,v])=>({tag,pct:Math.round(v.score/v.total*100)}))
        .sort((a,b)=>a.pct-b.pct);
      const map=typeof grammarTagToUnit!=="undefined"?grammarTagToUnit:{};
      for(const w of weakness){
        const unit=map[w.tag];
        if(unit&&workGrammarMap[unit])return unit;
      }
    }
  }catch(e){}
  return "modals";
}
function workPronTarget(){
  try{
    const queue=pronunciationPriorityQueue();
    if(queue?.length&&workPronMap[queue[0]])return queue[0];
  }catch(e){}
  return "sentenceStress";
}
function workPhraseItems(type){
  const ids=workPhraseGroups[type]||workPhraseGroups.client;
  return ids.map(id=>findPhraseItem(id)).filter(Boolean).slice(0,5);
}
function workTypeTitle(type){return workLabTypeMeta[type]?.label||"WORK SITUATION";}
function workQuestion(data){
  const list=workLabTypeMeta[data.type]?.questions||workLabTypeMeta.client.questions;
  const seed=parseInt(workScenarioFingerprint(data),36)||1;
  return list[seed%list.length];
}
function workBriefPrompt(data){
  const audience=workAudienceLabels[data.audience]||"your listener";
  const templates={
    client:`Give ${audience.toLowerCase()} a 60-second update. Structure it as: what happened → what is confirmed → what is still uncertain → what has been done → what happens next.`,
    incident:`Brief ${audience.toLowerCase()} on the investigation. Prioritise evidence, scope, action already taken and the next outstanding check.`,
    handover:`Give a concise oral handover to ${audience.toLowerCase()}: trigger → evidence → actions → outstanding question → next analyst action.`,
    risk:`Explain the risk to ${audience.toLowerCase()}: issue → likelihood/exposure → potential impact → recommendation → fallback if the preferred action is delayed.`,
    internal:`Give ${audience.toLowerCase()} a technical update that is precise but easy to follow: finding → evidence → interpretation → uncertainty → requested action.`
  };
  return templates[data.type]||templates.client;
}
function workWritingChecks(type){
  const common=[
    "The reader can identify the main message quickly.",
    "I separated facts from uncertainty.",
    "I stated a concrete action or next step.",
    "I removed detail that the reader does not need."
  ];
  if(type==="handover")common[3]="The next analyst knows exactly what to check next.";
  if(type==="risk")common[1]="I separated technical severity from likelihood / exposure.";
  return common;
}
function renderWorkLabStats(){
  const s=loadWorkEnglishState();
  const types=new Set(s.attempts.map(x=>x.type));
  document.getElementById("workLabAttempts").textContent=s.attempts.length;
  document.getElementById("workLabSaved").textContent=s.saved.length;
  document.getElementById("workLabTypes").textContent=`${types.size} / 5`;
  document.getElementById("workSavedCount").textContent=s.saved.length;
}
function renderSavedWorkScenarios(){
  const target=document.getElementById("workSavedList");if(!target)return;
  const s=loadWorkEnglishState();
  if(!s.saved.length){
    target.innerHTML=`<div class="work-saved-empty">No anonymised scenario saved yet.</div>`;
    return;
  }
  target.innerHTML=s.saved.slice().reverse().map(item=>`
    <article class="work-saved-item">
      <div class="work-saved-item-top">
        <div><strong>${workTypeTitle(item.type)}</strong><small>${workAudienceLabels[item.audience]||item.audience} · ${new Date(item.date).toLocaleDateString()}</small></div>
      </div>
      <small>${item.goal||"Work-based practice scenario"}</small>
      <div class="work-saved-item-actions">
        <button type="button" data-work-load="${item.id}">Load</button>
        <button type="button" data-work-delete="${item.id}">Delete</button>
      </div>
    </article>`).join("");
  target.querySelectorAll("[data-work-load]").forEach(btn=>btn.addEventListener("click",()=>loadSavedWorkScenario(btn.dataset.workLoad)));
  target.querySelectorAll("[data-work-delete]").forEach(btn=>btn.addEventListener("click",()=>deleteSavedWorkScenario(btn.dataset.workDelete)));
}
function saveCurrentWorkScenario(data){
  const state=loadWorkEnglishState();
  const fingerprint=workScenarioFingerprint(data);
  const existing=state.saved.find(x=>x.fingerprint===fingerprint);
  if(existing)return existing.id;
  const item={...data,id:`work-${Date.now()}`,date:Date.now(),fingerprint};
  state.saved.push(item);
  if(state.saved.length>30)state.saved=state.saved.slice(-30);
  saveWorkEnglishState(state);
  renderWorkLabStats();renderSavedWorkScenarios();
  return item.id;
}
function loadSavedWorkScenario(id){
  const item=loadWorkEnglishState().saved.find(x=>x.id===id);if(!item)return;
  document.getElementById("workSituationType").value=item.type;
  document.getElementById("workAudience").value=item.audience;
  document.getElementById("workGoal").value=item.goal||"";
  document.getElementById("workFacts").value=item.facts||"";
  document.getElementById("workKeyTerms").value=item.keyTerms||"";
  document.getElementById("workPrivacyConfirm").checked=false;
  document.getElementById("saveWorkScenario").checked=true;
  renderWorkFactMetrics();scanWorkPrivacy();
  document.querySelector(".work-builder-card").scrollIntoView({behavior:"smooth",block:"start"});
}
function deleteSavedWorkScenario(id){
  if(!confirm("Delete this anonymised work scenario from local storage?"))return;
  const state=loadWorkEnglishState();
  state.saved=state.saved.filter(x=>x.id!==id);
  saveWorkEnglishState(state);renderWorkLabStats();renderSavedWorkScenarios();
}
function renderWorkFactMetrics(){
  const text=document.getElementById("workFacts").value;
  document.getElementById("workFactsWords").textContent=workWordCount(text);
  document.getElementById("workFactsChars").textContent=text.length;
}
function loadSafeWorkExample(){
  document.getElementById("workSituationType").value="client";
  document.getElementById("workAudience").value="client-nontechnical";
  document.getElementById("workGoal").value="Explain the current assessment without overclaiming and give the next investigation step.";
  document.getElementById("workFacts").value="09:20 — unusual privileged login\nactive session revoked\nuser does not recognise the login\nno evidence of lateral movement so far\nidentity logs still under review\nnext client update planned after log review";
  document.getElementById("workKeyTerms").value="privileged account, containment, lateral movement, identity logs";
  document.getElementById("workPrivacyConfirm").checked=false;
  renderWorkFactMetrics();scanWorkPrivacy();
}
let activeWorkMissionData=null;
let activeWorkMissionProgress={};
let workTimerInterval=null;

function emptyWorkMissionProgress(){
  return {brief:false,question:false,language:false,accuracy:false,pronunciation:false,writing:false};
}
function updateWorkMissionProgress(){
  const n=Object.values(activeWorkMissionProgress).filter(Boolean).length;
  document.getElementById("workMissionProgressText").textContent=`${n} / 6`;
  document.getElementById("workMissionProgressBar").style.width=`${Math.round(n/6*100)}%`;
  Object.entries(activeWorkMissionProgress).forEach(([key,done])=>{
    document.querySelector(`[data-work-task-card="${key}"]`)?.classList.toggle("completed",done);
    const btn=document.querySelector(`[data-work-complete="${key}"]`);
    if(btn){
      btn.classList.toggle("done",done);
      if(done)btn.textContent="✓ Completed";
    }
  });
  const log=document.getElementById("logWorkMissionBtn");
  const title=document.getElementById("workMissionFinishTitle");
  const text=document.getElementById("workMissionFinishText");
  if(n===6){
    log.disabled=false;
    title.textContent="Work-based mission fully covered ✓";
    text.textContent="You used your own anonymised professional context across speaking, language, accuracy, pronunciation and writing.";
  }else{
    log.disabled=true;
    title.textContent=`${6-n} practice step${6-n===1?"":"s"} still to complete`;
    text.textContent="This tracks practice coverage, not a language grade.";
  }
}
function markWorkTask(task){
  if(task==="writing"){
    const words=workWordCount(document.getElementById("workWritingDraft").value);
    const checks=[...document.querySelectorAll("[data-work-writing-check]")].filter(x=>x.checked).length;
    if(words<45){
      const fb=document.getElementById("workMissionFeedback");
      fb.className="activity-summary neutral";fb.textContent="Write at least 45 words before marking the writing task complete.";return;
    }
    if(checks<3){
      const fb=document.getElementById("workMissionFeedback");
      fb.className="activity-summary neutral";fb.textContent="Confirm at least three writing checks before completing this task.";return;
    }
  }
  activeWorkMissionProgress[task]=true;updateWorkMissionProgress();
}
function renderWorkPhraseSuggestions(type){
  const items=workPhraseItems(type);
  const target=document.getElementById("workPhraseSuggestions");
  target.innerHTML=items.map(item=>{
    const saved=!!loadPhraseState().items[item.id];
    return `<div class="work-phrase-suggestion">
      <div><strong>${item.phrase}</strong><small>${item.category}</small></div>
      <button type="button" data-work-phrase="${item.id}">${saved?"✓ Saved":"+ Phrasebook"}</button>
    </div>`;
  }).join("");
  target.querySelectorAll("[data-work-phrase]").forEach(btn=>btn.addEventListener("click",()=>{
    addPhrase(btn.dataset.workPhrase);renderWorkPhraseSuggestions(type);
  }));
}
function renderWorkAccuracy(){
  const key=workGrammarTarget(),g=workGrammarMap[key]||workGrammarMap.modals;
  document.getElementById("workGrammarTitle").textContent=g.title;
  document.getElementById("workGrammarPrompt").textContent=g.prompt;
  document.getElementById("workGrammarExamples").innerHTML=g.examples.map(x=>`<div class="work-grammar-example">${x}</div>`).join("");
}
function renderWorkPronunciation(){
  const key=workPronTarget(),p=workPronMap[key]||workPronMap.sentenceStress;
  document.getElementById("workPronTitle").textContent=p.title;
  document.getElementById("workPronPrompt").textContent=p.prompt;
  document.getElementById("workPronLines").innerHTML=p.lines.map((line,i)=>`
    <div class="work-pron-line"><span>${line}</span><button type="button" data-work-pron-hear="${i}" aria-label="Hear target">🔊</button></div>`).join("");
  document.querySelectorAll("[data-work-pron-hear]").forEach(btn=>btn.addEventListener("click",()=>{
    speakPron(p.lines[Number(btn.dataset.workPronHear)].replace(/\s\/\s/g,", "));
  }));
}
function buildWorkMission(){
  const data=currentWorkForm();
  const fb=document.getElementById("workBuildFeedback");
  if(!data.goal || data.goal.length<12){
    fb.className="activity-summary neutral";fb.textContent="Add a clear communication goal first.";return;
  }
  if(workWordCount(data.facts)<10){
    fb.className="activity-summary neutral";fb.textContent="Add at least a few anonymised factual notes before building the mission.";return;
  }
  if(!document.getElementById("workPrivacyConfirm").checked){
    fb.className="activity-summary neutral";fb.textContent="Confirm the anonymisation/privacy check before using the scenario.";return;
  }
  const warnings=scanWorkPrivacy();
  if(warnings.length){
    fb.className="activity-summary neutral";
    fb.textContent="Sensitive-looking patterns are still present. Review the privacy warnings before continuing.";
    return;
  }
  if(document.getElementById("saveWorkScenario").checked)saveCurrentWorkScenario(data);

  activeWorkMissionData=data;
  activeWorkMissionProgress=emptyWorkMissionProgress();
  clearInterval(workTimerInterval);

  const meta=workLabTypeMeta[data.type];
  document.getElementById("workMissionTypeLabel").textContent=meta.label;
  document.getElementById("workMissionTitle").textContent=meta.title;
  document.getElementById("workMissionGoal").textContent=data.goal;
  document.getElementById("workMissionAudience").textContent=workAudienceLabels[data.audience]||data.audience;
  document.getElementById("workBriefPrompt").textContent=workBriefPrompt(data);
  document.getElementById("workBriefNotes").value="";
  document.getElementById("workBriefNotesCount").textContent="0";
  document.getElementById("workUnexpectedQuestion").textContent=workQuestion(data);
  document.getElementById("workQuestionGuidance").textContent=data.audience==="soc"
    ?"Answer in 30–45 seconds: evidence → interpretation → uncertainty → next check."
    :"Answer in 30–45 seconds: clarify if needed → what is known → what is not known → practical next step.";
  renderWorkPhraseSuggestions(data.type);
  renderWorkAccuracy();
  renderWorkPronunciation();
  document.getElementById("workWritingTitle").textContent=meta.writingTitle;
  document.getElementById("workWritingPrompt").textContent=meta.writing;
  document.getElementById("workWritingDraft").value="";
  document.getElementById("workWritingWords").textContent="0";
  document.getElementById("workWritingChecklist").innerHTML=workWritingChecks(data.type).map((x,i)=>`
    <label><input type="checkbox" data-work-writing-check="${i}"><span>${x}</span></label>`).join("");
  document.getElementById("workMissionFeedback").textContent="";
  document.getElementById("workMissionFeedback").className="activity-summary";
  document.querySelectorAll("[data-work-complete]").forEach(btn=>{
    btn.classList.remove("done");
    const labels={
      brief:"✓ I delivered it aloud",
      question:"✓ I answered aloud",
      language:"✓ I rehearsed at least three chunks",
      accuracy:"✓ I used the target pattern",
      pronunciation:"✓ I rehearsed the target aloud",
      writing:"✓ Writing task complete"
    };
    btn.textContent=labels[btn.dataset.workComplete];
  });
  document.getElementById("logWorkMissionBtn").disabled=true;
  document.getElementById("logWorkMissionBtn").textContent="Log work-based mission";
  document.getElementById("workBriefTimer").textContent="01:00";
  updateWorkMissionProgress();

  document.getElementById("workMission").hidden=false;
  document.querySelector(".work-lab-grid").hidden=true;
  document.getElementById("workMission").scrollIntoView({behavior:"smooth",block:"start"});
}
function closeWorkMission(){
  clearInterval(workTimerInterval);
  document.getElementById("workMission").hidden=true;
  document.querySelector(".work-lab-grid").hidden=false;
  activeWorkMissionData=null;
  renderWorkEnglishLab();
  document.getElementById("work-english-lab").scrollIntoView({behavior:"smooth",block:"start"});
}
function startWorkBriefTimer(){
  clearInterval(workTimerInterval);
  let left=60;
  const el=document.getElementById("workBriefTimer");
  el.textContent="01:00";
  workTimerInterval=setInterval(()=>{
    left--;
    el.textContent=`00:${String(Math.max(0,left)).padStart(2,"0")}`;
    if(left<=0){clearInterval(workTimerInterval);el.textContent="00:00";}
  },1000);
}
function logWorkMission(){
  if(!activeWorkMissionData || Object.values(activeWorkMissionProgress).filter(Boolean).length<6)return;
  const state=loadWorkEnglishState();
  state.attempts.push({
    date:Date.now(),
    type:activeWorkMissionData.type,
    audience:activeWorkMissionData.audience,
    fingerprint:workScenarioFingerprint(activeWorkMissionData),
    writingWords:workWordCount(document.getElementById("workWritingDraft").value)
  });
  if(state.attempts.length>100)state.attempts=state.attempts.slice(-100);
  saveWorkEnglishState(state);
  document.getElementById("logWorkMissionBtn").disabled=true;
  document.getElementById("logWorkMissionBtn").textContent="Mission logged ✓";
  const fb=document.getElementById("workMissionFeedback");
  fb.className="activity-summary correct";
  fb.textContent="Work-based mission logged ✓ The scenario text is only stored if you explicitly selected “Save this anonymised scenario locally”. The writing draft itself was not saved.";
  renderWorkLabStats();
  if(typeof renderDashboard==="function")renderDashboard();
  if(typeof renderProgressCheck==="function")renderProgressCheck();
  if(typeof renderProgressVault==="function")renderProgressVault();
}
function renderWorkEnglishLab(){
  if(!document.getElementById("work-english-lab"))return;
  renderWorkLabStats();renderSavedWorkScenarios();renderWorkFactMetrics();
}
function initWorkEnglishLab(){
  if(!document.getElementById("work-english-lab"))return;
  document.getElementById("workFacts")?.addEventListener("input",renderWorkFactMetrics);
  document.getElementById("loadWorkExampleBtn")?.addEventListener("click",loadSafeWorkExample);
  document.getElementById("scanWorkPrivacyBtn")?.addEventListener("click",scanWorkPrivacy);
  document.getElementById("buildWorkMissionBtn")?.addEventListener("click",buildWorkMission);
  document.getElementById("closeWorkMissionBtn")?.addEventListener("click",closeWorkMission);
  document.getElementById("workBriefNotes")?.addEventListener("input",e=>document.getElementById("workBriefNotesCount").textContent=e.target.value.length);
  document.getElementById("workBriefTimerBtn")?.addEventListener("click",startWorkBriefTimer);
  document.getElementById("workHearQuestionBtn")?.addEventListener("click",()=>phraseSpeak(document.getElementById("workUnexpectedQuestion").textContent));
  document.getElementById("workWritingDraft")?.addEventListener("input",e=>document.getElementById("workWritingWords").textContent=workWordCount(e.target.value));
  document.querySelectorAll("[data-work-complete]").forEach(btn=>btn.addEventListener("click",()=>markWorkTask(btn.dataset.workComplete)));
  document.getElementById("logWorkMissionBtn")?.addEventListener("click",logWorkMission);
  renderWorkEnglishLab();
}


// V15 · Full Client Call Simulator
const clientSimStateKey="ebackontrack-v15-client-simulator";

const clientSimScenarios={
  privileged:{
    code:"CASE 01",
    title:"Privileged-account anomaly",
    subtitle:"An unfamiliar sign-in has triggered a high-severity identity alert.",
    tags:["Identity","Client update","Uncertainty"],
    facts:[
      ["09:18 UTC","Successful sign-in on a privileged account from an unfamiliar location."],
      ["Current action","Active session revoked and password reset initiated."],
      ["Evidence","No confirmed data exfiltration or lateral movement at this stage."],
      ["Open question","Was the sign-in legitimate, and was the account used elsewhere?"]
    ],
    phraseIds:["client-current-assessment","inc-so-far","inc-next-update","soc-rule-out"],
    clientQuestions:[
      "So are you saying the account has definitely been compromised?",
      "Can you guarantee that no data was accessed?",
      "Why did the SOC not block the login before it succeeded?"
    ],
    intel:[
      "The user confirms that they did not make the unfamiliar sign-in.",
      "Identity logs show that the same session accessed one administrative portal, but no additional successful logins have been identified."
    ],
    intelCheck:{
      q:"How should your assessment change after these updates?",
      a:[
        "The incident is now confirmed to involve unauthorised account use, but wider compromise still needs investigation.",
        "Data exfiltration is now confirmed.",
        "The alert can be closed as a false positive.",
        "The evidence proves which threat actor is responsible."
      ],c:0,
      explain:"The user's confirmation strengthens the compromise assessment, but it does not prove data theft, lateral movement or attribution."
    },
    decision:{
      q:"What is the best immediate recommendation now?",
      a:[
        "Re-enable the account because the password has been reset.",
        "Continue identity scoping, review privileged activity and keep the affected access contained until the account-use timeline is understood.",
        "Rebuild every endpoint in the organisation.",
        "Tell the client the incident is resolved."
      ],c:1,
      explain:"The response should stay proportionate: contain the account, scope privileged activity and keep investigating before declaring resolution."
    },
    handover:"Write a 45–100 word handover for the next analyst. Include the alert trigger, what the user confirmed, actions already taken, the administrative-portal access and the next identity-scoping step.",
    handoverChecks:[
      "I included the trigger and useful time reference.",
      "I separated confirmed account compromise from unconfirmed wider impact.",
      "I listed the containment actions already taken.",
      "I gave the next analyst a precise outstanding task."
    ],
    followup:"Write a 70–130 word client follow-up after the call. Explain the current status, what has been contained, what is still being reviewed and when the client will receive the next update.",
    followupChecks:[
      "The first sentence gives the current status clearly.",
      "I did not claim that data theft or wider compromise is confirmed.",
      "I stated what has already been done.",
      "I gave a clear next investigation step and communication point."
    ],
    model:`Subject: Update on privileged-account incident

We have now confirmed unauthorised use of the affected privileged account. The active session has been revoked and the password reset process has been initiated.

Identity logs show access to one administrative portal. At this stage, we have found no evidence of additional successful logins, lateral movement or data exfiltration.

We are continuing to review privileged-account activity and related identity telemetry to determine the full scope. We will provide the next update once that review is complete, or earlier if significant new findings are identified.`
  },

  powershell:{
    code:"CASE 02",
    title:"Suspicious PowerShell on an endpoint",
    subtitle:"An EDR alert shows script execution from a downloaded archive.",
    tags:["Endpoint","Investigation","Handover"],
    facts:[
      ["08:42 UTC","High-severity PowerShell detection on one finance workstation."],
      ["Current action","Endpoint isolated from the network."],
      ["Evidence","Execution confirmed; persistence and lateral movement not confirmed."],
      ["Open question","How did the archive reach the device, and did other users receive it?"]
    ],
    phraseIds:["soc-at-this-stage","inc-isolated","inc-currently-reviewing","handover-next-analyst"],
    clientQuestions:[
      "If the endpoint is isolated, does that mean the incident is finished?",
      "Could this just be legitimate administration?",
      "How many other devices do you think are affected?"
    ],
    intel:[
      "Email telemetry identifies a message with the same archive sent to four additional employees.",
      "Two recipients opened the message, but no matching PowerShell execution has been detected on their endpoints so far."
    ],
    intelCheck:{
      q:"What is the most accurate revised assessment?",
      a:[
        "The scope may extend beyond one workstation because the delivery email reached additional users, but execution is currently confirmed on only one endpoint.",
        "Five endpoints are definitely compromised.",
        "The original endpoint can be reconnected immediately.",
        "The email evidence proves data exfiltration."
      ],c:0,
      explain:"Delivery scope has widened, but endpoint compromise must still be evidenced separately."
    },
    decision:{
      q:"What should be prioritised next?",
      a:[
        "Reconnect the isolated workstation to see what happens.",
        "Search the tenant for the message and indicators, review the two recipients who opened it, and keep the confirmed endpoint contained.",
        "Delete all email telemetry.",
        "Wait for another EDR alert before doing anything."
      ],c:1,
      explain:"The new evidence justifies wider email and endpoint scoping while maintaining containment of the confirmed host."
    },
    handover:"Write a handover covering the EDR trigger, isolation, email-delivery finding, current endpoint scope and the precise checks the next analyst should perform.",
    handoverChecks:[
      "I distinguished email delivery from confirmed endpoint execution.",
      "I included containment already performed.",
      "I named the two recipients requiring further review.",
      "I gave a specific next search or telemetry task."
    ],
    followup:"Write a client email explaining that the investigation scope has widened from one endpoint to the phishing delivery chain, without claiming that all recipients are compromised.",
    followupChecks:[
      "I explained why the scope widened.",
      "I distinguished delivered/opened messages from confirmed malicious execution.",
      "I stated what remains contained.",
      "I gave the next investigation step and next update expectation."
    ],
    model:`Subject: Update on suspicious PowerShell investigation

The investigation has identified the likely delivery route for the suspicious archive. The same email was sent to four additional employees, and two recipients opened the message.

Malicious PowerShell execution is currently confirmed on one workstation only, which remains isolated. We have not identified matching execution on the other endpoints so far.

We are widening the investigation to review the additional recipients, related email activity and endpoint telemetry. We will update you again once this scoping work is complete or if further execution is confirmed.`
  },

  vulnerability:{
    code:"CASE 03",
    title:"Critical vulnerability before the maintenance window",
    subtitle:"A severe vulnerability affects a client service that cannot be patched immediately.",
    tags:["Risk","Remediation","Plain English"],
    facts:[
      ["Vulnerability","Critical remote-code-execution flaw with public technical details."],
      ["Exposure","Service is externally reachable but protected by restricted administrative access."],
      ["Current evidence","No exploitation indicators observed in available telemetry."],
      ["Constraint","Patch is available, but production deployment is scheduled for tonight."]
    ],
    phraseIds:["risk-no-exploitation","risk-likelihood-depends","rem-immediate","rem-fallback"],
    clientQuestions:[
      "If the vulnerability is critical, doesn't that mean we've already been hacked?",
      "Can you guarantee we're safe until tonight?",
      "Why can't we just ignore it if you haven't seen exploitation?"
    ],
    intel:[
      "Threat intelligence reports active exploitation of the vulnerability against internet-facing targets.",
      "A WAF rule can temporarily restrict the vulnerable endpoint without taking the entire service offline."
    ],
    intelCheck:{
      q:"What changes most after the new intelligence?",
      a:[
        "The technical severity is unchanged, but the likelihood is now higher because active exploitation is occurring in the wild.",
        "Compromise is now confirmed in the client's environment.",
        "The vulnerability is no longer relevant because a WAF exists.",
        "The patch is unnecessary."
      ],c:0,
      explain:"External exploitation changes likelihood, not the evidence of compromise inside this specific environment."
    },
    decision:{
      q:"What is the best recommendation until tonight's patch?",
      a:[
        "Do nothing because exploitation is unconfirmed locally.",
        "Apply the temporary WAF restriction, increase monitoring for exploitation indicators and deploy the patch in the maintenance window.",
        "Delete the service immediately with no business discussion.",
        "Guarantee that the WAF completely removes the risk."
      ],c:1,
      explain:"A temporary compensating control plus enhanced monitoring is proportionate until the definitive remediation can be deployed."
    },
    handover:"Write a SOC/risk handover summarising the vulnerability, current exposure, lack of confirmed exploitation, new threat intelligence, temporary mitigation and monitoring priorities.",
    handoverChecks:[
      "I separated technical severity from evidence of local exploitation.",
      "I recorded that active exploitation is occurring externally.",
      "I documented the temporary control and patch plan.",
      "I gave the next analyst concrete monitoring priorities."
    ],
    followup:"Write a client follow-up explaining why the risk assessment changed, what temporary mitigation is being applied and what remains planned for the maintenance window.",
    followupChecks:[
      "I explained severity versus likelihood in plain English.",
      "I did not say active exploitation elsewhere proves local compromise.",
      "I explained the temporary mitigation.",
      "I confirmed the definitive remediation and monitoring plan."
    ],
    model:`Subject: Updated risk assessment and temporary mitigation

Our assessment has changed following new threat intelligence showing active exploitation of the vulnerability against internet-facing targets. This increases the likelihood of attempted exploitation, although we still have no evidence that the client's service has been compromised.

As an immediate mitigation, we recommend applying the available WAF restriction and increasing monitoring for relevant exploitation indicators. The definitive remediation remains deployment of the vendor patch during tonight's maintenance window.

We will continue monitoring and will report immediately if any evidence of exploitation is identified.`
  },

  phishing:{
    code:"CASE 04",
    title:"Credential phishing and mailbox access",
    subtitle:"A user entered credentials into a phishing page and a suspicious mailbox rule has been found.",
    tags:["Phishing","Identity","Client communication"],
    facts:[
      ["Initial report","User confirms entering credentials into a suspicious website."],
      ["Current action","Password reset and active sessions revoked."],
      ["Mailbox","One suspicious forwarding rule has been removed."],
      ["Open question","Was the mailbox accessed before containment, and was the phishing campaign broader?"]
    ],
    phraseIds:["client-what-we-know","client-not-confirmed","inc-outstanding","rem-going-forward"],
    clientQuestions:[
      "Does the forwarding rule prove that emails were stolen?",
      "How can you be sure the attacker no longer has access?",
      "Should we tell every employee that their mailbox is compromised?"
    ],
    intel:[
      "Mailbox audit logs confirm that the forwarding rule was created during the suspicious session.",
      "A tenant-wide search identifies the same phishing URL in messages delivered to eleven additional users; no other credential submission is confirmed yet."
    ],
    intelCheck:{
      q:"What is now confirmed?",
      a:[
        "The compromised session created the forwarding rule, and the phishing campaign reached additional users; broader credential compromise is not yet confirmed.",
        "All twelve users are compromised.",
        "Every forwarded message was exfiltrated.",
        "The campaign can be closed because the password was reset."
      ],c:0,
      explain:"The audit log connects the rule to the suspicious session, while the tenant search expands campaign scope without proving eleven more compromises."
    },
    decision:{
      q:"What should happen next?",
      a:[
        "Review mailbox access and forwarding activity, search the tenant campaign-wide, notify/guide exposed users and monitor for additional credential use.",
        "Restore the suspicious forwarding rule for evidence.",
        "Reset every employee password regardless of exposure.",
        "Close the investigation immediately."
      ],c:0,
      explain:"The response should scope mailbox impact and campaign reach while targeting users and signals supported by evidence."
    },
    handover:"Write a handover that clearly separates confirmed credential theft, confirmed mailbox-rule creation, possible data access and the wider phishing campaign.",
    handoverChecks:[
      "I stated what the user confirmed.",
      "I linked the mailbox rule to the suspicious session without overclaiming data theft.",
      "I documented the wider campaign scope.",
      "I gave a precise next mailbox/identity investigation step."
    ],
    followup:"Write a client follow-up explaining what is confirmed, what remains unknown, what has been contained and how the wider phishing campaign is being scoped.",
    followupChecks:[
      "I separated mailbox access from confirmed data exfiltration.",
      "I stated the containment actions.",
      "I explained why the campaign scope has widened.",
      "I gave clear next actions for the affected and exposed users."
    ],
    model:`Subject: Update on phishing and mailbox investigation

We have confirmed that the affected user entered credentials into the phishing site and that the suspicious mailbox forwarding rule was created during the resulting unauthorised session. The password has been reset, active sessions revoked and the rule removed.

We have not yet confirmed the extent of mailbox access or any data exfiltration. A wider search has identified the same phishing URL in messages sent to eleven additional users, but no further credential submission has been confirmed so far.

We are continuing mailbox, identity and campaign-wide scoping and will provide an updated assessment once those checks are complete.`
  }
};

function loadClientSimState(){
  try{
    const raw=JSON.parse(localStorage.getItem(clientSimStateKey))||{};
    return {
      attempts:Array.isArray(raw.attempts)?raw.attempts:[],
      completed:Array.isArray(raw.completed)?raw.completed:[]
    };
  }catch(e){return {attempts:[],completed:[]};}
}
function saveClientSimState(state){
  localStorage.setItem(clientSimStateKey,JSON.stringify(state));
}
function clientSimStats(){
  const s=loadClientSimState();
  const best=s.attempts.length?Math.max(...s.attempts.map(x=>x.coverage||0)):null;
  return {attempts:s.attempts.length,completed:s.completed.length,best};
}
function renderClientSimStats(){
  const s=clientSimStats();
  document.getElementById("clientSimAttempts").textContent=s.attempts;
  document.getElementById("clientSimCompleted").textContent=s.completed.length;
  document.getElementById("clientSimBest").textContent=s.best===null?"—":`${s.best}/7`;
}
function renderClientSimScenarios(){
  const state=loadClientSimState();
  const grid=document.getElementById("clientSimScenarioGrid");if(!grid)return;
  grid.innerHTML=Object.entries(clientSimScenarios).map(([id,s])=>{
    const done=state.completed.includes(id);
    return `<button class="client-sim-scenario-card ${done?"completed":""}" type="button" data-client-sim="${id}">
      <span class="case-code">${s.code}</span>
      <h4>${s.title}</h4>
      <p>${s.subtitle}</p>
      <div class="scenario-tags">${s.tags.map(x=>`<span>${x}</span>`).join("")}</div>
      <span class="scenario-action">${done?"Run again":"Start mission"} →</span>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-client-sim]").forEach(btn=>btn.addEventListener("click",()=>startClientSim(btn.dataset.clientSim)));
}
let activeClientSimId=null;
let activeClientSimQuestion="";
let activeClientSimProgress={};
let activeClientSimIntelRevealed=0;
let activeClientSimDecisionRetries=0;
let activeClientSimLogged=false;
let clientSimRecorder=null;
let clientSimChunks=[];
let clientSimStream=null;
let clientSimRecordingStage=null;
let clientSimTimerInterval=null;
const clientSimAudioUrls={};

function emptyClientSimProgress(){
  return {opening:false,client:false,intel:false,decision:false,handover:false,followup:false,debrief:false};
}
function countClientSimCoverage(){
  return Object.values(activeClientSimProgress).filter(Boolean).length;
}
function updateClientSimCoverage(){
  const n=countClientSimCoverage();
  document.getElementById("clientSimCoverageText").textContent=`${n} / 7`;
  document.getElementById("clientSimCoverageBar").style.width=`${Math.round(n/7*100)}%`;
  Object.entries(activeClientSimProgress).forEach(([key,done])=>{
    document.querySelector(`[data-sim-stage-indicator="${key}"]`)?.classList.toggle("done",done);
    document.getElementById(`simStage-${key}`)?.classList.toggle("completed",done);
  });
  const finalTitle=document.getElementById("clientSimFinalTitle");
  const finalText=document.getElementById("clientSimFinalText");
  const logBtn=document.getElementById("logClientSimMissionBtn");
  if(n===7){
    finalTitle.textContent="Mission fully covered ✓";
    finalText.textContent="You completed all seven operational communication stages. This is mission coverage, not a proficiency grade.";
    logBtn.disabled=false;
  }else{
    finalTitle.textContent=`${7-n} stage${7-n===1?"":"s"} still to complete`;
    finalText.textContent="Finish the remaining stages before logging the mission.";
    logBtn.disabled=true;
  }
}
function markClientSimStage(stage,value=true){
  activeClientSimProgress[stage]=value;
  updateClientSimCoverage();
}
function simWordCount(text){
  const clean=(text||"").trim();
  return clean?clean.split(/\s+/).filter(Boolean).length:0;
}
function formatSimTime(seconds){
  return `${String(Math.floor(seconds/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;
}
function startClientSimTimer(stage,duration){
  clearInterval(clientSimTimerInterval);
  let left=duration;
  const el=document.getElementById(`simTimer-${stage}`);
  if(!el)return;
  el.textContent=formatSimTime(left);
  clientSimTimerInterval=setInterval(()=>{
    left--;
    el.textContent=formatSimTime(Math.max(0,left));
    if(left<=0){
      clearInterval(clientSimTimerInterval);
      el.textContent="00:00";
    }
  },1000);
}
async function startClientSimRecording(stage,duration){
  try{
    if(clientSimRecorder?.state==="recording")clientSimRecorder.stop();
    clearInterval(clientSimTimerInterval);
    clientSimStream=await navigator.mediaDevices.getUserMedia({audio:true});
    clientSimChunks=[];
    clientSimRecordingStage=stage;
    clientSimRecorder=new MediaRecorder(clientSimStream);
    clientSimRecorder.ondataavailable=e=>clientSimChunks.push(e.data);
    clientSimRecorder.onstop=()=>{
      const blob=new Blob(clientSimChunks,{type:"audio/webm"});
      if(clientSimAudioUrls[stage])URL.revokeObjectURL(clientSimAudioUrls[stage]);
      clientSimAudioUrls[stage]=URL.createObjectURL(blob);
      const audio=document.getElementById(`simAudio-${stage}`);
      if(audio){audio.src=clientSimAudioUrls[stage];audio.hidden=false;}
      clientSimStream?.getTracks().forEach(t=>t.stop());
      document.querySelector(`[data-sim-record="${stage}"]`)?.removeAttribute("disabled");
      const stop=document.querySelector(`[data-sim-stop="${stage}"]`);if(stop)stop.disabled=true;
      document.getElementById(`simRecordStatus-${stage}`).textContent="Recording ready. Listen back once, then decide whether the operational message was clear. Nothing was uploaded.";
      clearInterval(clientSimTimerInterval);
    };
    clientSimRecorder.start();
    document.querySelector(`[data-sim-record="${stage}"]`).disabled=true;
    document.querySelector(`[data-sim-stop="${stage}"]`).disabled=false;
    document.getElementById(`simRecordStatus-${stage}`).textContent="Recording… keep going if you hesitate.";
    startClientSimTimer(stage,duration);
    setTimeout(()=>{
      if(clientSimRecorder?.state==="recording"&&clientSimRecordingStage===stage)clientSimRecorder.stop();
    },duration*1000);
  }catch(e){
    document.getElementById(`simRecordStatus-${stage}`).textContent="Microphone access was not granted. Do the turn aloud anyway and use the completion button below.";
  }
}
function stopClientSimRecording(stage){
  if(clientSimRecorder?.state==="recording"&&clientSimRecordingStage===stage)clientSimRecorder.stop();
}
function renderClientSimPhraseBank(scenario){
  const target=document.getElementById("clientSimPhraseBank");
  target.innerHTML=scenario.phraseIds.map(id=>{
    const item=findPhraseItem(id);if(!item)return "";
    const saved=!!loadPhraseState().items[id];
    return `<div class="client-sim-phrase">
      <div><strong>${item.phrase}</strong><small>${item.category}</small></div>
      <button type="button" data-client-sim-phrase="${id}">${saved?"✓ Saved":"+ Phrasebook"}</button>
    </div>`;
  }).join("");
  target.querySelectorAll("[data-client-sim-phrase]").forEach(btn=>btn.addEventListener("click",()=>{
    addPhrase(btn.dataset.clientSimPhrase);renderClientSimPhraseBank(scenario);
  }));
}
function renderClientSimIntel(scenario){
  document.getElementById("clientSimIntelCards").innerHTML=scenario.intel.map((text,i)=>`
    <div class="client-sim-intel-card hidden-intel" data-client-sim-intel="${i}">
      <span>LIVE UPDATE ${i+1}</span>
      <strong>${text}</strong>
    </div>`).join("");
  activeClientSimIntelRevealed=0;
  document.getElementById("revealClientSimIntelBtn").disabled=false;
  document.getElementById("revealClientSimIntelBtn").textContent="Reveal first update →";
  document.getElementById("clientSimIntelCheck").hidden=true;
  document.getElementById("clientSimRevisedUpdate").hidden=true;
}
function revealClientSimIntel(){
  const s=clientSimScenarios[activeClientSimId];if(!s)return;
  if(activeClientSimIntelRevealed<s.intel.length){
    document.querySelector(`[data-client-sim-intel="${activeClientSimIntelRevealed}"]`)?.classList.remove("hidden-intel");
    activeClientSimIntelRevealed++;
  }
  const btn=document.getElementById("revealClientSimIntelBtn");
  if(activeClientSimIntelRevealed<s.intel.length){
    btn.textContent="Reveal next update →";
  }else{
    btn.disabled=true;btn.textContent="All live updates revealed ✓";
    document.getElementById("clientSimIntelCheck").hidden=false;
    document.getElementById("clientSimRevisedUpdate").hidden=false;
  }
}
function renderClientSimChecks(targetId,checks,prefix){
  document.getElementById(targetId).innerHTML=checks.map((x,i)=>`
    <label><input type="checkbox" data-${prefix}-check="${i}"><span>${x}</span></label>`).join("");
}
function startClientSim(id){
  const s=clientSimScenarios[id];if(!s)return;
  activeClientSimId=id;
  activeClientSimProgress=emptyClientSimProgress();
  activeClientSimDecisionRetries=0;
  activeClientSimLogged=false;
  activeClientSimQuestion=s.clientQuestions[Math.floor(Math.random()*s.clientQuestions.length)];
  clearInterval(clientSimTimerInterval);

  document.getElementById("clientSimCaseLabel").textContent=s.code;
  document.getElementById("clientSimCaseTitle").textContent=s.title;
  document.getElementById("clientSimCaseSubtitle").textContent=s.subtitle;
  document.getElementById("clientSimInitialFacts").innerHTML=s.facts.map(([label,text])=>`
    <div class="client-sim-fact"><span>${label}</span><strong>${text}</strong></div>`).join("");
  document.getElementById("clientSimOpeningNotes").value="";
  document.getElementById("clientSimOpeningNoteCount").textContent="0";
  renderClientSimPhraseBank(s);

  document.getElementById("clientSimClientQuestion").textContent=activeClientSimQuestion;
  renderClientSimIntel(s);
  document.getElementById("clientSimIntelQuestion").textContent=s.intelCheck.q;
  document.getElementById("clientSimIntelOptions").innerHTML=s.intelCheck.a.map((x,i)=>`
    <label><input type="radio" name="client-sim-intel-${id}" value="${i}"><span>${x}</span></label>`).join("");
  document.getElementById("clientSimIntelFeedback").textContent="";
  document.getElementById("clientSimIntelFeedback").className="activity-summary";

  document.getElementById("clientSimDecisionQuestion").textContent=s.decision.q;
  document.getElementById("clientSimDecisionOptions").innerHTML=s.decision.a.map((x,i)=>`
    <label><input type="radio" name="client-sim-decision-${id}" value="${i}"><span>${x}</span></label>`).join("");
  document.getElementById("clientSimDecisionFeedback").textContent="";
  document.getElementById("clientSimDecisionFeedback").className="activity-summary";

  document.getElementById("clientSimHandoverPrompt").textContent=s.handover;
  document.getElementById("clientSimHandoverText").value="";
  document.getElementById("clientSimHandoverWords").textContent="0";
  renderClientSimChecks("clientSimHandoverChecks",s.handoverChecks,"sim-handover");
  document.getElementById("clientSimHandoverFeedback").textContent="";
  document.getElementById("clientSimHandoverFeedback").className="activity-summary";

  document.getElementById("clientSimFollowupPrompt").textContent=s.followup;
  document.getElementById("clientSimFollowupText").value="";
  document.getElementById("clientSimFollowupWords").textContent="0";
  renderClientSimChecks("clientSimFollowupChecks",s.followupChecks,"sim-followup");
  document.getElementById("clientSimFollowupModel").textContent=s.model;
  document.getElementById("clientSimFollowupModel").hidden=true;
  document.getElementById("revealClientSimModelBtn").disabled=false;
  document.getElementById("revealClientSimModelBtn").textContent="Reveal model after drafting";
  document.getElementById("clientSimFollowupFeedback").textContent="";
  document.getElementById("clientSimFollowupFeedback").className="activity-summary";

  document.querySelectorAll("[data-sim-debrief]").forEach(x=>x.checked=false);
  document.getElementById("clientSimDebriefFeedback").textContent="";
  document.getElementById("clientSimDebriefFeedback").className="activity-summary";
  document.getElementById("clientSimLogFeedback").textContent="";
  document.getElementById("clientSimLogFeedback").className="activity-summary";

  ["opening","client","intel"].forEach(stage=>{
    const audio=document.getElementById(`simAudio-${stage}`);
    audio.hidden=true;audio.removeAttribute("src");
    document.getElementById(`simRecordStatus-${stage}`).textContent=stage==="opening"
      ?"Recording is optional and stays on this device."
      :stage==="client"
        ?"Try not to write the answer first."
        :"Use a clear transition to explain what changed.";
    document.getElementById(`simTimer-${stage}`).textContent=stage==="opening"?"01:15":stage==="client"?"00:45":"01:00";
    const complete=document.querySelector(`[data-sim-complete="${stage}"]`);
    complete.classList.remove("done");
    complete.textContent=stage==="opening"?"✓ I delivered the opening update aloud":
      stage==="client"?"✓ I answered the client aloud":"✓ I delivered the revised update aloud";
  });

  document.getElementById("clientSimWorkspace").hidden=false;
  document.getElementById("clientSimScenarioGrid").hidden=true;
  document.querySelector(".client-sim-selector-head").hidden=true;
  updateClientSimCoverage();
  document.getElementById("clientSimWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
}
function closeClientSim(){
  clearInterval(clientSimTimerInterval);
  if(clientSimRecorder?.state==="recording")clientSimRecorder.stop();
  document.getElementById("clientSimWorkspace").hidden=true;
  document.getElementById("clientSimScenarioGrid").hidden=false;
  document.querySelector(".client-sim-selector-head").hidden=false;
  activeClientSimId=null;
  renderClientSimScenarios();renderClientSimStats();
  document.getElementById("client-simulator").scrollIntoView({behavior:"smooth",block:"start"});
}
function completeClientSimOralTurn(stage){
  markClientSimStage(stage,true);
  const btn=document.querySelector(`[data-sim-complete="${stage}"]`);
  if(btn){btn.classList.add("done");btn.textContent="✓ Oral turn completed";}
}
function checkClientSimIntel(){
  const s=clientSimScenarios[activeClientSimId];if(!s)return;
  const picked=document.querySelector(`input[name="client-sim-intel-${activeClientSimId}"]:checked`);
  const fb=document.getElementById("clientSimIntelFeedback");
  if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose an assessment first.";return;}
  const ok=Number(picked.value)===s.intelCheck.c;
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${s.intelCheck.explain}`:`Best assessment: “${s.intelCheck.a[s.intelCheck.c]}” — ${s.intelCheck.explain}`;
}
function checkClientSimDecision(){
  const s=clientSimScenarios[activeClientSimId];if(!s)return;
  const picked=document.querySelector(`input[name="client-sim-decision-${activeClientSimId}"]:checked`);
  const fb=document.getElementById("clientSimDecisionFeedback");
  if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose a recommendation first.";return;}
  const ok=Number(picked.value)===s.decision.c;
  activeClientSimDecisionRetries++;
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${s.decision.explain}`:`Not yet. Best recommendation: “${s.decision.a[s.decision.c]}” — ${s.decision.explain}`;
  if(ok)markClientSimStage("decision",true);
}
function validateClientSimHandover(){
  const words=simWordCount(document.getElementById("clientSimHandoverText").value);
  const checks=[...document.querySelectorAll("[data-sim-handover-check]")];
  const checked=checks.filter(x=>x.checked).length;
  const fb=document.getElementById("clientSimHandoverFeedback");
  if(words<45){
    fb.className="activity-summary neutral";fb.textContent="The handover is too thin to transfer the case. Aim for at least 45 words.";return;
  }
  if(checked<3){
    fb.className="activity-summary neutral";fb.textContent="Confirm at least three handover criteria first.";return;
  }
  fb.className="activity-summary correct";
  fb.textContent=`Handover validated ✓ ${words} words · ${checked}/${checks.length} operational checks.`;
  markClientSimStage("handover",true);
}
function revealClientSimModel(){
  const words=simWordCount(document.getElementById("clientSimFollowupText").value);
  const fb=document.getElementById("clientSimFollowupFeedback");
  if(words<40){
    fb.className="activity-summary neutral";fb.textContent="Draft your own follow-up first. The model is locked until you have genuinely attempted it.";return;
  }
  document.getElementById("clientSimFollowupModel").hidden=false;
  document.getElementById("revealClientSimModelBtn").disabled=true;
  document.getElementById("revealClientSimModelBtn").textContent="Model revealed ✓";
}
function validateClientSimFollowup(){
  const words=simWordCount(document.getElementById("clientSimFollowupText").value);
  const checks=[...document.querySelectorAll("[data-sim-followup-check]")];
  const checked=checks.filter(x=>x.checked).length;
  const fb=document.getElementById("clientSimFollowupFeedback");
  if(words<70){
    fb.className="activity-summary neutral";fb.textContent="The follow-up needs enough information to close the communication loop. Aim for at least 70 words.";return;
  }
  if(checked<3){
    fb.className="activity-summary neutral";fb.textContent="Confirm at least three client-writing criteria first.";return;
  }
  fb.className="activity-summary correct";
  fb.textContent=`Follow-up validated ✓ ${words} words · ${checked}/${checks.length} checks.`;
  markClientSimStage("followup",true);
}
function validateClientSimDebrief(){
  const checks=[...document.querySelectorAll("[data-sim-debrief]")];
  const n=checks.filter(x=>x.checked).length;
  const fb=document.getElementById("clientSimDebriefFeedback");
  if(n<4){
    fb.className="activity-summary neutral";fb.textContent=`${n}/5 criteria confirmed. Aim for at least four before closing the mission.`;return;
  }
  fb.className="activity-summary correct";
  fb.textContent=`Debrief complete ✓ ${n}/5 operational communication criteria confirmed.`;
  markClientSimStage("debrief",true);
}
function logClientSimMission(){
  if(activeClientSimLogged)return;
  const coverage=countClientSimCoverage();
  if(coverage<7)return;
  const state=loadClientSimState();
  state.attempts.push({
    date:Date.now(),
    scenario:activeClientSimId,
    coverage,
    decisionAttempts:activeClientSimDecisionRetries,
    handoverWords:simWordCount(document.getElementById("clientSimHandoverText").value),
    followupWords:simWordCount(document.getElementById("clientSimFollowupText").value)
  });
  if(!state.completed.includes(activeClientSimId))state.completed.push(activeClientSimId);
  if(state.attempts.length>100)state.attempts=state.attempts.slice(-100);
  saveClientSimState(state);
  activeClientSimLogged=true;
  document.getElementById("logClientSimMissionBtn").disabled=true;
  document.getElementById("logClientSimMissionBtn").textContent="Mission logged ✓";
  const fb=document.getElementById("clientSimLogFeedback");
  fb.className="activity-summary correct";
  fb.textContent="Mission logged ✓ Only completion metadata was saved. Audio, handover text and email text were not stored.";
  renderClientSimStats();
  if(typeof renderDashboard==="function")renderDashboard();
  if(typeof renderProgressCheck==="function")renderProgressCheck();
}
function initClientCallSimulator(){
  if(!document.getElementById("client-simulator"))return;
  renderClientSimScenarios();renderClientSimStats();
  document.getElementById("surpriseClientSimBtn")?.addEventListener("click",()=>{
    const keys=Object.keys(clientSimScenarios);startClientSim(keys[Math.floor(Math.random()*keys.length)]);
  });
  document.getElementById("closeClientSimBtn")?.addEventListener("click",closeClientSim);
  document.getElementById("clientSimOpeningNotes")?.addEventListener("input",e=>{
    document.getElementById("clientSimOpeningNoteCount").textContent=e.target.value.length;
  });
  document.getElementById("clientSimHearQuestionBtn")?.addEventListener("click",()=>phraseSpeak(activeClientSimQuestion));
  document.querySelectorAll("[data-sim-timer-start]").forEach(btn=>btn.addEventListener("click",()=>startClientSimTimer(btn.dataset.simTimerStart,Number(btn.dataset.duration))));
  document.querySelectorAll("[data-sim-record]").forEach(btn=>btn.addEventListener("click",()=>startClientSimRecording(btn.dataset.simRecord,Number(btn.dataset.duration))));
  document.querySelectorAll("[data-sim-stop]").forEach(btn=>btn.addEventListener("click",()=>stopClientSimRecording(btn.dataset.simStop)));
  document.querySelectorAll("[data-sim-complete]").forEach(btn=>btn.addEventListener("click",()=>completeClientSimOralTurn(btn.dataset.simComplete)));
  document.getElementById("revealClientSimIntelBtn")?.addEventListener("click",revealClientSimIntel);
  document.getElementById("checkClientSimIntelBtn")?.addEventListener("click",checkClientSimIntel);
  document.getElementById("checkClientSimDecisionBtn")?.addEventListener("click",checkClientSimDecision);
  document.getElementById("clientSimHandoverText")?.addEventListener("input",e=>document.getElementById("clientSimHandoverWords").textContent=simWordCount(e.target.value));
  document.getElementById("clientSimFollowupText")?.addEventListener("input",e=>document.getElementById("clientSimFollowupWords").textContent=simWordCount(e.target.value));
  document.getElementById("completeClientSimHandoverBtn")?.addEventListener("click",validateClientSimHandover);
  document.getElementById("revealClientSimModelBtn")?.addEventListener("click",revealClientSimModel);
  document.getElementById("completeClientSimFollowupBtn")?.addEventListener("click",validateClientSimFollowup);
  document.getElementById("validateClientSimDebriefBtn")?.addEventListener("click",validateClientSimDebrief);
  document.getElementById("logClientSimMissionBtn")?.addEventListener("click",logClientSimMission);
}


// V14 · Authentic Resources Hub
const authenticResourceStateKey="ebackontrack-v14-resources";

const authenticResources=[
  {
    id:"orange-navigator-2026",
    format:"report",year:2026,date:"04 Dec 2025",publisher:"Orange Cyberdefense",
    title:"Security Navigator 2026 — key findings",
    topic:"Threat intelligence",level:"B2+",time:"6–8 min",
    url:"https://newsroom.orange.com/securitynavigator2026-413193/?lang=eng",
    why:"Highly relevant operational threat intelligence: incident volume, cyber extortion, supply-chain exposure and the industrialisation of cybercrime.",
    before:"From the title alone, predict three trends you expect a European cyberdefence provider to highlight.",
    gist:{q:"Which idea best captures the report's overall message?",a:["Cybercrime is becoming less organised and less scalable.","Cybercrime is increasingly industrialised, interconnected and strategically significant.","Most modern cyber incidents are purely accidental.","Threat intelligence is becoming unnecessary because automation solves attribution."],c:1},
    language:[
      ["threat landscape","the overall environment of current and emerging threats"],
      ["cyber extortion","using disruption or stolen data to pressure a victim into paying"],
      ["supply chain","the network of suppliers and partners that can create indirect exposure"]
    ],
    languagePrompt:"Notice how professional reports describe trends without claiming that every organisation faces exactly the same risk.",
    after:"Give a 60-second briefing to a manager: identify one trend, one piece of evidence and one practical implication.",
    afterLinks:["speaking","phrasebook"]
  },
  {
    id:"ncsc-recovery-2026",
    format:"article",year:2026,date:"28 Jul 2026",publisher:"UK National Cyber Security Centre",
    title:"When cyber attacks happen: helping organisations recover",
    topic:"Incident response",level:"B2",time:"5–7 min",
    url:"https://www.ncsc.gov.uk/blogs/when-cyber-attacks-happen-helping-organisations-recover",
    why:"Clear professional English about incident preparation, realistic exercises, recovery and building response muscle memory.",
    before:"What is the difference between having an incident-response plan and being genuinely ready to use it?",
    gist:{q:"What does the NCSC argue organisations should do in addition to documenting plans?",a:["Avoid all simulations because they create unnecessary risk.","Practise realistic response and recovery procedures so teams build operational muscle memory.","Replace incident-response teams with automated tools.","Focus only on public communications."],c:1},
    language:[
      ["build muscle memory","practise a response until key actions become more automatic"],
      ["rehearse procedures","practise procedures before a real incident"],
      ["recover from disruption","restore operations after an incident"]
    ],
    languagePrompt:"Look for action verbs used to describe preparedness and recovery.",
    after:"Explain to a client why tabletop documentation alone is not enough. Use one analogy and one concrete recommendation.",
    afterLinks:["speaking","writing"]
  },
  {
    id:"australia-zimbra-2026",
    format:"article",year:2026,date:"24 Jul 2026",publisher:"Australian Signals Directorate / cyber.gov.au",
    title:"Russian state-supported actors target Zimbra users",
    topic:"Phishing & identity",level:"B2+",time:"6–8 min",
    url:"https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories/russian-state-supported-cyber-actors-conduct-phishing-campaign-targeting-users-of-zimbra-collaboration-suite",
    why:"A current government advisory with concise threat description, tactics and concrete mitigation language.",
    before:"Predict which controls an advisory about credential-stealing phishing is likely to recommend first.",
    gist:{q:"What is the main purpose of the campaign described in the advisory?",a:["To improve email filtering.","To steal credentials and gain unauthorised access.","To deploy security patches automatically.","To measure user awareness without accessing systems."],c:1},
    language:[
      ["gain unauthorised access","enter an account or system without permission"],
      ["mitigation measures","actions intended to reduce likelihood or impact"],
      ["suspicious login requests","authentication prompts or attempts that may indicate malicious activity"]
    ],
    languagePrompt:"Notice how official advisories move from threat description to key actions.",
    after:"Write a 70-word internal SOC note summarising the threat and the two most important mitigations.",
    afterLinks:["writing","phrasebook"]
  },
  {
    id:"reuters-ai-incidents-2026",
    format:"article",year:2026,date:"28 Jul 2026",publisher:"Reuters",
    title:"Responding to AI-native security incidents",
    topic:"AI & security",level:"C1",time:"6–8 min",
    url:"https://www.reuters.com/legal/legalindustry/new-day-has-dawned-responding-ai-native-security-incidents--pracin-2026-07-28/",
    why:"Useful for discussing how incident response changes when AI systems are both attack tools and attack targets.",
    before:"What would make an AI-native security incident harder to investigate than a conventional account compromise?",
    gist:{q:"Why can AI-native incidents be difficult for traditional incident-response processes?",a:["They never involve data.","They can involve model manipulation, training data or AI assets that do not fit conventional breach patterns.","They always produce obvious malware alerts.","They remove the need for legal and forensic expertise."],c:1},
    language:[
      ["probabilistic behaviour","behaviour expressed in likelihoods rather than deterministic rules"],
      ["forensic analysis","systematic investigation of evidence after an incident"],
      ["notification obligations","legal or regulatory requirements to report an incident"]
    ],
    languagePrompt:"Notice the language used to distinguish established incident-response concepts from emerging uncertainty.",
    after:"Give a 90-second explanation to a non-AI specialist: why might an AI incident require a different response plan?",
    afterLinks:["speaking","grammar"]
  },
  {
    id:"techradar-mtta-2026",
    format:"article",year:2026,date:"Aug 2026",publisher:"TechRadar Pro",
    title:"Cybersecurity needs a new KPI: Mean Time to Adapt",
    topic:"Risk & resilience",level:"B2+",time:"5–6 min",
    url:"https://www.techradar.com/pro/cybersecurity-needs-a-new-kpi-its-time-to-measure-our-ability-to-adapt",
    why:"Strong business-facing English for explaining SOC metrics, resilience and the limits of traditional MTTD/MTTR measures.",
    before:"What can a metric such as MTTD measure well — and what might it fail to capture?",
    gist:{q:"What additional capability does the proposed MTTA metric aim to measure?",a:["How many alerts an analyst closes per hour.","How quickly an organisation recognises change and adapts its security response.","How long employees spend in security training.","How much a SOC costs each month."],c:1},
    language:[
      ["response latency","delay between detection and effective action"],
      ["adapt to the threat landscape","change controls or behaviour as threats evolve"],
      ["cyber resilience","ability to withstand, respond to and recover from cyber disruption"]
    ],
    languagePrompt:"Notice the business vocabulary used to turn technical performance into organisational risk.",
    after:"Explain MTTA in plain English to a client and give one example of what 'adaptation' could mean after a new threat emerges.",
    afterLinks:["speaking","writing"]
  },
  {
    id:"unit42-frontier-ai-2026",
    format:"article",year:2026,date:"Apr 2026",publisher:"Unit 42 / Palo Alto Networks",
    title:"Fracturing Software Security With Frontier AI Models",
    topic:"AI & security",level:"C1",time:"7–9 min",
    url:"https://unit42.paloaltonetworks.com/ai-software-security-risks/",
    why:"Current threat-research language on AI-enabled attack speed, software exposure and the need for defenders to adapt.",
    before:"How could frontier AI change both the speed and scale of vulnerability discovery?",
    gist:{q:"What transition does the article describe?",a:["AI permanently guarantees attackers will dominate defenders.","Attackers may gain speed and scale while defenders adapt their own AI-enabled capabilities.","Software vulnerabilities will disappear because AI can write code.","Threat intelligence becomes irrelevant when AI models are used."],c:1},
    language:[
      ["attack at scale","carry out malicious activity across many targets efficiently"],
      ["previously undetected exposure","a weakness that had not been identified before"],
      ["adapt their defences","change protective controls in response to new capability"]
    ],
    languagePrompt:"Look for cautious predictive language: likely, may, transition, future, need to adapt.",
    after:"Use modals of probability to give a 60-second assessment of how AI may change incident-response pressure.",
    afterLinks:["grammar","speaking"]
  },
  {
    id:"unit42-ir-2025",
    format:"report",year:2025,date:"2025",publisher:"Unit 42 / Palo Alto Networks",
    title:"2025 Global Incident Response Report",
    topic:"Incident response",level:"B2+",time:"8 min excerpt",
    url:"https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report-2025",
    why:"Data-driven incident-response English covering business disruption, cloud attacks and the speed of exfiltration.",
    before:"Which matters more in a fast intrusion: perfect attribution or rapid containment? Give one reason.",
    gist:{q:"Which trend is highlighted in the report?",a:["Threat actors are generally moving more slowly than before.","Data exfiltration can happen extremely quickly, leaving defenders little response time.","Business disruption is now rare in incident response.","Cloud attacks are decreasing in sophistication."],c:1},
    language:[
      ["business disruption","interruption or degradation of normal organisational operations"],
      ["data exfiltration","unauthorised transfer of data out of an environment"],
      ["minimal time to detect and respond","a very short window for defenders to act"]
    ],
    languagePrompt:"Notice how numerical evidence is translated into operational urgency.",
    after:"Give an incident-response briefing using one statistic from the report and explain what the statistic should change operationally.",
    afterLinks:["speaking","writing"]
  },
  {
    id:"microsoft-defense-2025",
    format:"report",year:2025,date:"2025",publisher:"Microsoft Threat Intelligence",
    title:"Microsoft Digital Defense Report 2025",
    topic:"SOC operations",level:"C1",time:"8 min selected pages",
    url:"https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Microsoft-Digital-Defense-Report-2025.pdf",
    why:"Large-scale threat data with useful language around dwell time, detection, SOC capability and incident-response readiness.",
    before:"What does 'dwell time' tell a security team about an intrusion?",
    gist:{q:"Why does the report emphasise incident-response preparation?",a:["Because attackers always remain undetected for years.","Because faster attack chains mean organisations need clear roles, communication and response capability before an incident occurs.","Because prevention makes response unnecessary.","Because SOC teams should avoid threat hunting."],c:1},
    language:[
      ["dwell time","time an attacker remains in an environment before detection"],
      ["reactive engagement","response work initiated after an incident has been detected"],
      ["incident-response posture","the organisation's level of preparedness to handle an incident"]
    ],
    languagePrompt:"Focus on the vocabulary used to describe speed, preparedness and organisational capability.",
    after:"Explain dwell time to a non-technical manager and give two reasons why shorter attacker timelines create pressure on a SOC.",
    afterLinks:["speaking","phrasebook"]
  },
  {
    id:"ncsc-retail-2025",
    format:"article",year:2025,date:"04 May 2025",publisher:"UK National Cyber Security Centre",
    title:"Incidents impacting retailers — recommendations from the NCSC",
    topic:"SOC operations",level:"B2",time:"6–8 min",
    url:"https://www.ncsc.gov.uk/blog-post/incidents-impacting-retailers",
    why:"Practical defensive recommendations on MFA, risky logins, privileged accounts, helpdesk resets and SOC enrichment.",
    before:"Imagine an attacker is abusing legitimate credentials. Which SOC signals become especially important?",
    gist:{q:"Which recommendation is specifically relevant to SOC monitoring?",a:["Ignore logins from VPN ranges.","Identify atypical login sources and enrich source information.","Disable all employee accounts permanently.","Stop using threat intelligence."],c:1},
    language:[
      ["risky login","a sign-in flagged as potentially compromised or unusual"],
      ["privileged account","an account with elevated rights"],
      ["source enrichment","adding contextual information to an IP, domain or other signal"]
    ],
    languagePrompt:"Notice how the article uses strong recommendation language without turning every point into an absolute rule.",
    after:"Give a 60-second SOC recommendation to a retailer: choose three controls and explain why each matters.",
    afterLinks:["speaking","grammar"]
  },
  {
    id:"google-ti-overview-2025",
    format:"video",year:2025,date:"04 Aug 2025",publisher:"Mandiant & Google Cloud Security",
    title:"Google Threat Intelligence Platform Overview",
    topic:"Threat intelligence",level:"B2+",time:"short video",
    url:"https://www.youtube.com/watch?v=RsEg-D9EMdg",
    why:"Authentic product-demo English around IoCs, threat profiles, vulnerability intelligence and investigation workflows.",
    before:"What information would you expect an analyst to want when investigating an unfamiliar IoC?",
    gist:{q:"Which capability is part of the platform overview?",a:["Private IoC investigation and threat intelligence analysis","Physical building access control","Payroll administration","Video-conference scheduling"],c:0},
    language:[
      ["investigate an IoC","analyse an indicator of compromise for context and relevance"],
      ["threat profile","a structured view of threats relevant to an organisation"],
      ["attack surface","systems and exposures that could potentially be targeted"]
    ],
    languagePrompt:"Listen for verbs used to explain an analyst workflow: investigate, navigate, manage, integrate, surface.",
    after:"Recreate the demo in words: explain in 45 seconds how an analyst could move from an IoC to a useful threat-intelligence decision.",
    afterLinks:["speaking","pronunciation"]
  },
  {
    id:"google-ti-demo-2025",
    format:"video",year:2025,date:"02 Apr 2025",publisher:"Google Cloud",
    title:"How Google Threat Intelligence provides visibility into threats",
    topic:"Threat intelligence",level:"B2+",time:"short demo",
    url:"https://www.youtube.com/watch?v=tsapiYreajk",
    why:"Useful listening for threat-intelligence explanations, risk relevance and summarising complex reports for security teams.",
    before:"Why is 'more threat intelligence' not automatically useful to every organisation?",
    gist:{q:"What is one role described for Gemini in Threat Intelligence?",a:["Replacing all analysts without review","Surfacing threats relevant to a risk profile and summarising complex reports","Disabling all external traffic automatically","Creating employee passwords"],c:1},
    language:[
      ["relevant to your risk profile","important in relation to a specific organisation's exposure"],
      ["surface a threat","bring important threat information to an analyst's attention"],
      ["summarise complex reporting","turn a long technical report into a shorter usable overview"]
    ],
    languagePrompt:"Listen for how the speaker connects product capability to analyst benefit rather than listing features only.",
    after:"Explain the difference between raw threat data and actionable threat intelligence in 60 seconds.",
    afterLinks:["speaking","writing"]
  },
  {
    id:"cyber-today-2026",
    format:"podcast",year:2026,date:"02 Feb 2026",publisher:"Cybersecurity Today",
    title:"Google proxy takedown, AI-agent hijack and SSO attacks",
    topic:"Threat intelligence",level:"C1",time:"11 min · use 00:52–04:46",
    url:"https://music.youtube.com/podcast/WtryeeXjTOU",
    why:"Fast authentic news-style listening with several short cyber stories and compressed spoken English.",
    before:"For this excerpt, listen for only two things: what was disrupted, and what weakness or abuse made the story possible.",
    gist:{q:"What kind of listening strategy is most useful for this multi-story news format?",a:["Transcribe every word before deciding what the story is about.","Identify the story topic, actor/action and consequence before worrying about details.","Pause after every individual word.","Ignore transitions between stories."],c:1},
    language:[
      ["disrupt a network","take action that prevents malicious infrastructure from operating normally"],
      ["abuse single sign-on","misuse SSO systems or trust relationships for malicious access"],
      ["security flaw","a weakness that can create exploitable risk"]
    ],
    languagePrompt:"Listen for headline language and transitions that tell you when one story ends and the next begins.",
    after:"Give a 45-second newsroom-style summary of one story from the excerpt: event → significance → one defensive implication.",
    afterLinks:["listening","speaking"]
  }
];

function loadAuthenticResourceState(){
  try{
    const raw=JSON.parse(localStorage.getItem(authenticResourceStateKey))||{};
    return {
      completed:Array.isArray(raw.completed)?raw.completed:[],
      saved:Array.isArray(raw.saved)?raw.saved:[],
      formats:raw.formats||{}
    };
  }catch(e){return {completed:[],saved:[],formats:{}};}
}
function saveAuthenticResourceState(state){
  localStorage.setItem(authenticResourceStateKey,JSON.stringify(state));
}
function resourceById(id){return authenticResources.find(r=>r.id===id);}
function resourceFormatLabel(format){
  return ({article:"Article",report:"Report",video:"Video",podcast:"Podcast"})[format]||format;
}
function resourceStateStats(){
  const s=loadAuthenticResourceState();
  return {done:s.completed.length,saved:s.saved.length,types:Object.keys(s.formats).filter(k=>s.formats[k]>0).length};
}
function renderResourceStats(){
  const s=resourceStateStats();
  document.getElementById("resourceDoneCount").textContent=s.done;
  document.getElementById("resourceSavedCount").textContent=s.saved;
  document.getElementById("resourceTypesCount").textContent=`${s.types} / 4`;
}
function toggleResourceSaved(id){
  const s=loadAuthenticResourceState(),set=new Set(s.saved);
  set.has(id)?set.delete(id):set.add(id);
  s.saved=[...set];saveAuthenticResourceState(s);renderResourceHub();
}
function resourceOfDay(){
  const d=new Date();
  const index=(d.getFullYear()*31+d.getMonth()*7+d.getDate())%authenticResources.length;
  return authenticResources[index];
}
function renderResourceOfDay(){
  const r=resourceOfDay();
  document.getElementById("resourceOfDayTitle").textContent=r.title;
  document.getElementById("resourceOfDayMeta").textContent=`${r.publisher} · ${resourceFormatLabel(r.format)} · ${r.date} · ${r.time}`;
  document.getElementById("resourceOfDayWhy").textContent=r.why;
  document.getElementById("resourceOfDaySourceBtn").href=r.url;
  document.getElementById("resourceOfDayTaskBtn").onclick=()=>openResourceTask(r.id);
}
function renderResourceHub(){
  if(!document.getElementById("resources-hub"))return;
  const state=loadAuthenticResourceState();
  const search=(document.getElementById("resourceSearch")?.value||"").toLowerCase().trim();
  const format=document.getElementById("resourceFormatFilter")?.value||"all";
  const topic=document.getElementById("resourceTopicFilter")?.value||"all";
  const savedOnly=!!document.getElementById("resourceSavedOnly")?.checked;
  const filtered=authenticResources.filter(r=>{
    const hay=[r.title,r.publisher,r.topic,r.why,r.format,...r.language.flat()].join(" ").toLowerCase();
    return (!search||hay.includes(search)) &&
      (format==="all"||r.format===format) &&
      (topic==="all"||r.topic===topic) &&
      (!savedOnly||state.saved.includes(r.id));
  });
  document.getElementById("resourceResultCount").textContent=`${filtered.length} resource${filtered.length===1?"":"s"}`;
  document.getElementById("resourceLibrary").innerHTML=filtered.length?filtered.map(r=>{
    const done=state.completed.includes(r.id),saved=state.saved.includes(r.id);
    return `<article class="resource-card ${done?"completed":""}">
      <div class="resource-card-top">
        <span class="resource-format">${resourceFormatLabel(r.format)}</span>
        <span class="resource-year">${r.year}</span>
      </div>
      <h4>${r.title}</h4>
      <div class="resource-publisher">${r.publisher}</div>
      <p>${r.why}</p>
      <div class="resource-tags"><span>${r.topic}</span><span>${r.level}</span></div>
      <div class="resource-card-footer">
        <div class="resource-meta-line">${r.date} · ${r.time}${done?" · ✓ completed":""}</div>
        <div class="resource-card-actions">
          <button class="secondary-button" type="button" data-resource-task="${r.id}">Open task</button>
          <a class="text-link" href="${r.url}" target="_blank" rel="noopener noreferrer">Source ↗</a>
          <button class="secondary-button resource-save-btn ${saved?"saved":""}" type="button" data-resource-save="${r.id}">${saved?"★ Saved":"☆ Save"}</button>
        </div>
      </div>
    </article>`;
  }).join(""):`<div class="dashboard-empty">No resource matches these filters.</div>`;
  document.querySelectorAll("[data-resource-task]").forEach(btn=>btn.addEventListener("click",()=>openResourceTask(btn.dataset.resourceTask)));
  document.querySelectorAll("[data-resource-save]").forEach(btn=>btn.addEventListener("click",()=>toggleResourceSaved(btn.dataset.resourceSave)));
  renderResourceStats();renderResourceOfDay();
}
let currentAuthenticResourceId=null;
let currentResourceGistPassed=false;

function resourceAfterButtons(r){
  const map={
    speaking:['#speaking-lab',"Open Speaking Lab"],
    writing:['#writing-lab',"Open Writing Lab"],
    phrasebook:['#phrasebook',"Open Phrasebook"],
    grammar:['#grammar-lab',"Open Grammar Repair"],
    pronunciation:['#pronunciation-lab',"Open Pronunciation Lab"],
    listening:['#listening-lab',"Open Listening Lab"]
  };
  return r.afterLinks.map(k=>{
    const item=map[k];return item?`<a class="secondary-button" href="${item[0]}">${item[1]} →</a>`:"";
  }).join("");
}
function renderResourceLanguage(r){
  const target=document.getElementById("resourceLanguageBank");
  target.innerHTML=r.language.map(([phrase,meaning],i)=>{
    const found=findPhraseByText(phrase);
    const saved=found&&loadPhraseState().items[found.id];
    return `<div class="resource-language-item">
      <div><strong>${phrase}</strong><small>${meaning}</small></div>
      ${found?`<button type="button" data-resource-phrase="${found.id}">${saved?"✓ Saved":"+ Phrasebook"}</button>`:`<button type="button" data-resource-hear="${i}">🔊</button>`}
    </div>`;
  }).join("");
  target.querySelectorAll("[data-resource-phrase]").forEach(btn=>btn.addEventListener("click",()=>{
    addPhrase(btn.dataset.resourcePhrase);renderResourceLanguage(r);
  }));
  target.querySelectorAll("[data-resource-hear]").forEach(btn=>btn.addEventListener("click",()=>{
    phraseSpeak(r.language[Number(btn.dataset.resourceHear)][0]);
  }));
}
function openResourceTask(id){
  const r=resourceById(id);if(!r)return;
  currentAuthenticResourceId=id;currentResourceGistPassed=false;
  document.getElementById("resourceTaskSource").textContent=`${resourceFormatLabel(r.format)} · ${r.publisher}`;
  document.getElementById("resourceTaskTitle").textContent=r.title;
  document.getElementById("resourceTaskMeta").textContent=`${r.date} · ${r.time} · ${r.level}`;
  document.getElementById("resourceTaskTags").innerHTML=`<span class="module-tag">${r.topic}</span><span class="module-tag">${r.year}</span>`;
  document.getElementById("resourceTaskPublisher").textContent=r.publisher;
  document.getElementById("resourceTaskExternalLink").href=r.url;
  document.getElementById("resourceBeforeTask").textContent=r.before;
  document.getElementById("resourceBeforeInput").value="";
  document.getElementById("resourceDuringQuestion").textContent=r.gist.q;
  document.getElementById("resourceDuringOptions").innerHTML=r.gist.a.map((opt,i)=>`
    <label><input type="radio" name="resource-gist-${r.id}" value="${i}"><span>${opt}</span></label>`).join("");
  document.getElementById("resourceDuringFeedback").textContent="";
  document.getElementById("resourceDuringFeedback").className="activity-summary";
  document.getElementById("resourceLanguagePrompt").textContent=r.languagePrompt;
  renderResourceLanguage(r);
  document.getElementById("resourceAfterTask").textContent=r.after;
  document.getElementById("resourceAfterLinks").innerHTML=resourceAfterButtons(r);
  document.querySelectorAll("[data-resource-check]").forEach(x=>x.checked=false);
  document.getElementById("resourceCompleteFeedback").textContent="";
  document.getElementById("resourceCompleteFeedback").className="activity-summary";
  document.getElementById("resourceTaskStatus").textContent="Authentic input";
  document.getElementById("resourceTaskWorkspace").hidden=false;
  document.getElementById("resourceLibrary").hidden=true;
  document.querySelector(".resource-toolbar").hidden=true;
  document.querySelector(".resource-library-head").hidden=true;
  document.querySelector(".resource-of-day-card").hidden=true;
  document.querySelector(".resource-routine-card").hidden=true;
  document.getElementById("resourceTaskWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
}
function closeResourceTask(){
  document.getElementById("resourceTaskWorkspace").hidden=true;
  document.getElementById("resourceLibrary").hidden=false;
  document.querySelector(".resource-toolbar").hidden=false;
  document.querySelector(".resource-library-head").hidden=false;
  document.querySelector(".resource-of-day-card").hidden=false;
  document.querySelector(".resource-routine-card").hidden=false;
  currentAuthenticResourceId=null;renderResourceHub();
  document.getElementById("resources-hub").scrollIntoView({behavior:"smooth",block:"start"});
}
function checkResourceGist(){
  const r=resourceById(currentAuthenticResourceId);if(!r)return;
  const picked=document.querySelector(`input[name="resource-gist-${r.id}"]:checked`);
  const fb=document.getElementById("resourceDuringFeedback");
  if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose an answer first.";return;}
  const ok=Number(picked.value)===r.gist.c;
  currentResourceGistPassed=ok;
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?"Correct ✓ You have the operational gist.":`Not quite. Best answer: ${r.gist.a[r.gist.c]}`;
}
function completeAuthenticResource(){
  const r=resourceById(currentAuthenticResourceId);if(!r)return;
  const checks=[...document.querySelectorAll("[data-resource-check]")];
  const n=checks.filter(x=>x.checked).length;
  const fb=document.getElementById("resourceCompleteFeedback");
  if(!currentResourceGistPassed){
    fb.className="activity-summary neutral";fb.textContent="Get the gist question right first.";return;
  }
  if(n<3){
    fb.className="activity-summary neutral";fb.textContent="Confirm at least three of the four resource-use checks first.";return;
  }
  const s=loadAuthenticResourceState();
  if(!s.completed.includes(r.id))s.completed.push(r.id);
  s.formats[r.format]=(s.formats[r.format]||0)+1;
  saveAuthenticResourceState(s);
  document.getElementById("resourceTaskStatus").textContent="Completed ✓";
  fb.className="activity-summary correct";
  fb.textContent="Resource completed ✓ The source status is saved locally; no article, video or written response has been copied into storage.";
  renderResourceStats();
  if(typeof renderDashboard==="function")renderDashboard();
  if(typeof renderProgressCheck==="function")renderProgressCheck();
}
function initAuthenticResourcesHub(){
  if(!document.getElementById("resources-hub"))return;
  ["resourceSearch","resourceFormatFilter","resourceTopicFilter","resourceSavedOnly"].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener(id==="resourceSearch"?"input":"change",renderResourceHub);
  });
  document.getElementById("closeResourceTaskBtn")?.addEventListener("click",closeResourceTask);
  document.getElementById("checkResourceDuringBtn")?.addEventListener("click",checkResourceGist);
  document.getElementById("completeResourceTaskBtn")?.addEventListener("click",completeAuthenticResource);
  renderResourceHub();
}


// V13 · Pronunciation & Intelligibility Lab
const pronunciationLabStateKey="ebackontrack-v13-pronunciation";

const pronunciationUnits={
  wordStress:{
    tag:"WORD STRESS",
    diagTags:["Word stress"],
    title:"Word stress in cyber vocabulary",
    short:"Make long technical words recognisable the first time you say them.",
    rule:"English listeners use stressed syllables as anchors. In long technical words, getting the main stress right matters more than pronouncing every unstressed vowel perfectly.",
    examples:[
      ["security","se-CUR-i-ty"],
      ["vulnerability","vul-ner-a-BIL-i-ty"],
      ["authentication","au-then-ti-CA-tion"],
      ["investigation","in-ves-ti-GA-tion"],
      ["remediation","re-me-di-A-tion"],
      ["administrator","ad-MIN-is-tra-tor"]
    ],
    notice:{q:"Where is the main stress in “vulnerability”?",a:["VUL-ner-a-bil-i-ty","vul-NER-a-bil-i-ty","vul-ner-a-BIL-i-ty","vul-ner-a-bil-i-TY"],c:2,explain:"The main stress falls on BIL: vul-ner-a-BIL-i-ty."},
    choose:{q:"Which version will make “authentication” easier to recognise?",a:["AU-then-ti-ca-tion","au-then-ti-CA-tion","au-THEN-ti-ca-tion","every syllable equally strong"],c:1,explain:"A clear stressed CA gives the listener the right rhythmic anchor."},
    shadow:"The authentication logs show suspicious activity on one administrator account.",
    checks:["I made the stressed syllables noticeably stronger.","I reduced the less important syllables instead of stressing everything.","The final syllables remained audible.","I could say the sentence in meaningful chunks."],
    client:"Say this as a client update: “We are reviewing the authentication logs as part of the investigation.”",
    clientLine:"We are reviewing the authentication logs as part of the investigation."
  },
  sentenceStress:{
    tag:"SENTENCE STRESS",
    diagTags:["Sentence stress"],
    title:"Sentence stress: make the key information land",
    short:"Guide the listener towards the words that carry the operational message.",
    rule:"Content words normally carry more stress than grammar words. Move the strongest stress when you need to contrast or correct information: no evidence YET; one ACCOUNT, not three; isolated, not rebuilt.",
    examples:[
      ["We need to ISOLATE the endpoint.","Action is new/important."],
      ["We have NO evidence of exfiltration.","Negative finding is important."],
      ["The SECOND login was not recognised.","Contrast the second login."],
      ["We need MORE evidence before attribution.","Amount of evidence is the focus."]
    ],
    notice:{q:"In “We still need MORE EVIDENCE”, which words should carry the strongest information stress?",a:["we / still","need / the","more / evidence","every word equally"],c:2,explain:"MORE EVIDENCE carries the key new information."},
    choose:{q:"The client thinks three accounts are affected, but only one is. Which stress pattern helps correct them?",a:["ONLY ONE account is affected.","Only one ACCOUNT is AFFECTED with every word equal.","only one account is affected with no stress.","Every syllable should be equally loud."],c:0,explain:"Strong stress on ONLY ONE highlights the correction."},
    shadow:"At this stage, we have NO evidence of lateral movement, but the review is still ONGOING.",
    checks:["I stressed the key content words more than small grammar words.","My strongest stress matched the message I wanted to highlight.","I did not speak with flat, equal stress.","The sentence still sounded calm rather than dramatic."],
    client:"Correct this assumption aloud: the client thinks compromise is confirmed, but it is not.",
    clientLine:"We have confirmed suspicious activity, but we have NOT confirmed compromise."
  },
  edEndings:{
    tag:"-ED ENDINGS",
    diagTags:["-ed endings"],
    title:"-ed endings: keep past actions audible",
    short:"Make incident timelines easier to follow by pronouncing past-tense endings clearly.",
    rule:"-ed is /t/ after an unvoiced sound (blocked), /d/ after a voiced sound (logged), and /ɪd/ after /t/ or /d/ (detected, isolated). The ending is grammatical information: swallowing it can blur the timeline.",
    examples:[
      ["blocked","/t/"],
      ["breached","/t/"],
      ["logged","/d/"],
      ["confirmed","/d/"],
      ["detected","/ɪd/"],
      ["isolated","/ɪd/"]
    ],
    notice:{q:"The -ed ending in “isolated” is pronounced…",a:["/t/","/d/","/ɪd/","silent"],c:2,explain:"The base ends in /t/, so -ed adds a syllable: /ɪd/."},
    choose:{q:"Which pair has the same -ed sound?",a:["blocked / detected","confirmed / logged","isolated / breached","detected / confirmed"],c:1,explain:"Confirmed and logged both end with /d/."},
    shadow:"We detected suspicious activity, blocked the connection and isolated the endpoint.",
    checks:["I pronounced detected and isolated with an extra /ɪd/ syllable.","I kept the final /t/ in blocked audible.","I did not add an extra syllable to every -ed verb.","The sequence of past actions was easy to hear."],
    client:"Give this timeline aloud with clear endings.",
    clientLine:"We identified the account, revoked the session and isolated the affected device."
  },
  sEndings:{
    tag:"-S ENDINGS",
    diagTags:["-s endings"],
    title:"Final -s: plurals that carry technical meaning",
    short:"Keep singular/plural and third-person endings audible in fast technical English.",
    rule:"Final -s is /s/ after an unvoiced sound (alerts), /z/ after a voiced sound (logs, rules), and /ɪz/ after sibilant sounds (patches, addresses). In cyber English, losing final -s can change the operational meaning.",
    examples:[
      ["alerts","/s/"],
      ["accounts","/s/"],
      ["logs","/z/"],
      ["rules","/z/"],
      ["patches","/ɪz/"],
      ["addresses","/ɪz/"]
    ],
    notice:{q:"The final -s in “logs” is pronounced…",a:["/s/","/z/","/ɪz/","silent"],c:1,explain:"The final sound of log is voiced, so plural -s is /z/."},
    choose:{q:"Which word has an /ɪz/ ending?",a:["alerts","logs","patches","rules"],c:2,explain:"Patches ends in a sibilant sound, so -es adds /ɪz/."},
    shadow:"The alerts show repeated logins from several addresses, and the rules need reviewing.",
    checks:["I kept plural endings audible.","I used /z/ rather than /s/ in logs and rules.","I gave patches/addresses an extra /ɪz/ syllable when needed.","My final consonants stayed clear at natural speed."],
    client:"Say this clearly enough that singular and plural are unambiguous.",
    clientLine:"The logs show three failed logins from two unfamiliar addresses."
  },
  connectedSpeech:{
    tag:"CONNECTED SPEECH",
    diagTags:["Connected speech"],
    title:"Connected speech without losing the message",
    short:"Recognise and produce common spoken reductions in meetings and incident calls.",
    rule:"Natural English links words and reduces unstressed forms. You do not need to imitate every reduction, but recognising them stops phrases like could you, did you and should have from sounding like unknown vocabulary.",
    examples:[
      ["could you","often → couldja"],
      ["did you","often → didja"],
      ["should have","often → should've"],
      ["we have been","often → we've been"],
      ["there has been","often → there's been"],
      ["want to","often → wanna in informal speech; keep want to in formal client speech"]
    ],
    notice:{q:"In natural speech, “could you” often sounds closest to…",a:["could / you","couldja","cold you","could yoo-uh"],c:1,explain:"The /d/ and /j/ often merge in connected speech."},
    choose:{q:"Which skill matters most here?",a:["Forcing every word to remain isolated.","Recognising reduced forms while keeping your own message clear.","Using slang in every client call.","Speaking as quickly as possible."],c:1,explain:"Understanding natural reductions matters more than copying them aggressively."},
    shadow:"Could you send it over when you get a chance? We've been reviewing the logs since the alert came in.",
    checks:["I linked words without rushing.","Small grammar words were lighter than key content words.","I could still hear the ends of important technical words.","My rhythm sounded like chunks rather than isolated words."],
    client:"Ask for clarification naturally, then buy one second of thinking time.",
    clientLine:"Could you run that by me again? Let me think that through for a second."
  },
  chunking:{
    tag:"CHUNKING",
    diagTags:["Intelligibility"],
    title:"Chunking: make long updates easy to follow",
    short:"Break technical sentences into meaning groups instead of producing one long stream.",
    rule:"Pause at meaning boundaries, not after random words. A useful client update often chunks as: finding / scope / action / uncertainty / next step. Short pauses improve comprehension without making speech unnaturally slow.",
    examples:[
      ["We've identified suspicious activity / on one endpoint / and we're reviewing the logs.","finding / scope / next action"],
      ["At this stage / we have no evidence of lateral movement / but the investigation is ongoing.","time frame / finding / uncertainty"],
      ["The account has been disabled / as a precaution / while we review recent sign-ins.","action / reason / ongoing work"],
      ["If we find additional activity / we'll widen the investigation / and update you immediately.","condition / action / communication"]
    ],
    notice:{q:"Which chunking is easiest to follow?",a:["We'veidentified/suspiciousactivityononeendpoint.","We've identified suspicious activity / on one endpoint / and we're reviewing the logs.","We've / identified suspicious / activity on / one endpoint.","Every word separated by a long pause."],c:1,explain:"The pauses match meaning groups rather than individual words."},
    choose:{q:"Where is the most useful first boundary in “At this stage we have no evidence of lateral movement but the investigation is ongoing”?",a:["At / this stage we have…","At this stage / we have no evidence…","At this stage we / have no evidence…","No pause anywhere."],c:1,explain:"At this stage works as one framing chunk."},
    shadow:"At this stage / we have no evidence of lateral movement / but the investigation is still ongoing.",
    checks:["My pauses matched meaning groups.","I did not pause after random short words.","Each chunk had one clear stressed idea.","I kept the final word of each chunk audible."],
    client:"Deliver this three-part update as three clear chunks.",
    clientLine:"The account has been disabled / there is no evidence of further access / and we'll update you after the log review."
  },
  soundClarity:{
    tag:"SOUND CLARITY",
    diagTags:["Intelligibility"],
    title:"Sound clarity: contrasts that can change the word",
    short:"Target only a few sound contrasts and final consonants that can affect intelligibility.",
    rule:"A French accent is not the problem. Train contrasts only when they can make a common word hard to recognise: /ɪ/ vs /iː/ (live/leave), TH in threat/this, /h/ in host, and final consonants in risk, patch, breach and log.",
    examples:[
      ["live / leave","/lɪv/ vs /liːv/"],
      ["ship / sheep","/ʃɪp/ vs /ʃiːp/"],
      ["threat / this","/θ/ vs /ð/"],
      ["host","keep the initial /h/ audible"],
      ["risk","keep final /sk/ audible"],
      ["breach","keep final /tʃ/ audible"]
    ],
    notice:{q:"Which contrast could change the word a listener hears?",a:["live / leave","security / SECURITY with identical sounds","SOC / SOC","log / log"],c:0,explain:"The vowel contrast /ɪ/ vs /iː/ distinguishes live and leave."},
    choose:{q:"What is the most useful pronunciation goal for “host” in a technical call?",a:["Remove the /h/.","Keep the initial /h/ audible so the word is recognised quickly.","Add a vowel before /h/.","Stress every letter."],c:1,explain:"A clear initial /h/ helps distinguish the word quickly in running speech."},
    shadow:"The live host is still at risk, so leave the endpoint isolated until the patch is applied.",
    checks:["I kept live and leave distinct.","I pronounced the /h/ in host.","I kept final consonants in risk and patch audible.","I prioritised clarity rather than exaggerating every sound."],
    client:"Say the line once slowly, then at normal speed without losing the final consonants.",
    clientLine:"The host is still at risk, but the patch should reduce the exposure."
  }
};

const rehearsalPool=[
  ["At this stage, we have NO evidence of lateral movement.","Stress the negative finding, but keep the tone calm."],
  ["We've IDENTIFIED suspicious activity / on ONE endpoint.","Chunk the scope clearly."],
  ["The account has been temporarily DISABLED as a precaution.","Make the final -ed audible."],
  ["We will provide the NEXT UPDATE / once the log review is complete.","Stress the communication promise."],
  ["Could you run that by me again?","Link naturally; do not over-pronounce every word."],
  ["The ALERTS show repeated LOGINS from two unfamiliar ADDRESSES.","Keep all plural endings audible."],
  ["The vulnerability is severe / but there is currently NO evidence of exploitation.","Separate severity from evidence."],
  ["We DETECTED the activity at 09:20 / and ISOLATED the endpoint shortly afterwards.","Keep /ɪd/ endings clear."],
  ["Our current ASSESSMENT is that the activity was CONTAINED.","Use stress to guide the listener."],
  ["If we find ADDITIONAL activity / we'll widen the INVESTIGATION.","Chunk condition and consequence."],
  ["The AUTHENTICATION logs are still being reviewed.","Keep the stress in au-then-ti-CA-tion."],
  ["We need MORE evidence / before we make an attribution.","Do not flatten the sentence."]
];

function loadPronunciationLabState(){
  try{
    const raw=JSON.parse(localStorage.getItem(pronunciationLabStateKey))||{};
    return {
      completed:Array.isArray(raw.completed)?raw.completed:[],
      shadowAttempts:Number(raw.shadowAttempts||0),
      closedCorrect:Number(raw.closedCorrect||0),
      closedTotal:Number(raw.closedTotal||0),
      rehearsals:Number(raw.rehearsals||0),
      unitAttempts:raw.unitAttempts||{}
    };
  }catch(e){
    return {completed:[],shadowAttempts:0,closedCorrect:0,closedTotal:0,rehearsals:0,unitAttempts:{}};
  }
}
function savePronunciationLabState(state){
  localStorage.setItem(pronunciationLabStateKey,JSON.stringify(state));
}
function pronVoiceFor(lang){
  const voices=window.speechSynthesis?.getVoices?.()||[];
  return voices.find(v=>v.lang===lang) ||
         voices.find(v=>v.lang?.toLowerCase().startsWith(lang.toLowerCase().split("-")[0])) ||
         null;
}
function speakPron(text){
  if(!("speechSynthesis" in window))return false;
  const lang=document.getElementById("pronVoice")?.value||"en-GB";
  const rate=Number(document.getElementById("pronSpeed")?.value||0.98);
  const u=new SpeechSynthesisUtterance(text.replace(/\s*\/\s*/g,", "));
  u.lang=lang;u.rate=rate;
  const voice=pronVoiceFor(lang);if(voice)u.voice=voice;
  speechSynthesis.cancel();speechSynthesis.speak(u);
  return true;
}
function savedPronDiagnostic(){
  try{
    const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));
    if(saved?.details?.pronunciation)return saved.details.pronunciation;
  }catch(e){}
  return null;
}
function pronUnitSignal(id){
  const diag=savedPronDiagnostic(),unit=pronunciationUnits[id];
  if(!diag)return {pct:null,label:"Starter unit",className:""};
  const vals=unit.diagTags.map(tag=>{
    const v=diag.tags?.[tag];
    return v?Math.round(v.score/v.total*100):null;
  }).filter(v=>v!==null);
  if(!vals.length)return {pct:null,label:"No signal",className:""};
  const pct=Math.min(...vals);
  if(pct<55)return {pct,label:`${pct}% · priority`,className:"critical"};
  if(pct<75)return {pct,label:`${pct}% · review`,className:"review"};
  return {pct,label:`${pct}% · maintain`,className:"good"};
}
function pronunciationPriorityQueue(){
  const diag=savedPronDiagnostic();
  const fallback=["wordStress","sentenceStress","chunking","connectedSpeech"];
  if(!diag)return fallback;
  const weakness=Object.entries(diag.tags||{})
    .map(([name,v])=>({name,pct:Math.round(v.score/v.total*100)}))
    .sort((a,b)=>a.pct-b.pct);
  const queue=[];
  weakness.forEach(w=>{
    Object.entries(pronunciationUnits).forEach(([id,u])=>{
      if(u.diagTags.includes(w.name)&&!queue.includes(id))queue.push(id);
    });
  });
  ["wordStress","sentenceStress","edEndings","sEndings","connectedSpeech","chunking","soundClarity"].forEach(id=>{
    if(!queue.includes(id))queue.push(id);
  });
  return queue.slice(0,4);
}
function renderPronStats(){
  const s=loadPronunciationLabState();
  document.getElementById("pronUnitsComplete").textContent=s.completed.length;
  document.getElementById("pronShadowAttempts").textContent=s.shadowAttempts;
  document.getElementById("pronClosedAccuracy").textContent=s.closedTotal?`${Math.round(s.closedCorrect/s.closedTotal*100)}%`:"—";
}
function renderPronunciationLab(){
  if(!document.getElementById("pronunciation-lab"))return;
  const diag=savedPronDiagnostic();
  document.getElementById("pronPriorityTitle").textContent=diag
    ?"Pronunciation selected from your diagnostic"
    :"Starter priority queue until the diagnostic is complete";
  const state=loadPronunciationLabState();
  const queue=pronunciationPriorityQueue();
  document.getElementById("pronPriorityQueue").innerHTML=queue.map((id,i)=>{
    const u=pronunciationUnits[id],sig=pronUnitSignal(id),done=state.completed.includes(id);
    return `<button class="pron-priority-card ${done?"completed":""}" type="button" data-pron-unit="${id}">
      <div class="pron-card-top">
        <span class="pron-rank">${i+1}</span>
        <span class="pron-signal ${sig.className}">${done?"✓ complete":sig.label}</span>
      </div>
      <h4>${u.title}</h4>
      <p>${u.short}</p>
      <span class="pron-card-action">${done?"Review again":"Start training"} →</span>
    </button>`;
  }).join("");
  document.getElementById("pronUnitLibrary").innerHTML=Object.entries(pronunciationUnits).map(([id,u])=>{
    const sig=pronUnitSignal(id),done=state.completed.includes(id);
    return `<button class="pron-library-card ${done?"completed":""}" type="button" data-pron-unit="${id}">
      <div class="pron-card-top"><span class="pron-signal ${sig.className}">${done?"✓ complete":sig.label}</span></div>
      <h4>${u.title}</h4><p>${u.short}</p>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-pron-unit]").forEach(btn=>btn.addEventListener("click",()=>openPronUnit(btn.dataset.pronUnit)));
  renderPronStats();
  renderRehearsal();
}
let currentPronUnitId=null;
let currentPronClosed={notice:null,choose:null};
let pronMediaRecorder=null;
let pronAudioChunks=[];
let pronPlaybackUrl=null;
let pronRecordedThisUnit=false;

function renderPronExamples(unit){
  const target=document.getElementById("pronExampleBank");
  target.innerHTML=unit.examples.map(([term,note],i)=>`
    <div class="pron-example">
      <div><strong>${term}</strong><small>${note}</small></div>
      <button type="button" data-pron-example="${i}" aria-label="Hear example">🔊</button>
    </div>`).join("");
  target.querySelectorAll("[data-pron-example]").forEach(btn=>btn.addEventListener("click",()=>{
    const item=unit.examples[Number(btn.dataset.pronExample)];
    speakPron(item[0]);
  }));
}
function renderPronOptions(targetId,name,item){
  document.getElementById(targetId).innerHTML=item.a.map((opt,i)=>`
    <label><input type="radio" name="${name}" value="${i}"><span>${opt}</span></label>`).join("");
}
function openPronUnit(id){
  const u=pronunciationUnits[id];if(!u)return;
  currentPronUnitId=id;
  currentPronClosed={notice:null,choose:null};
  pronRecordedThisUnit=false;
  const sig=pronUnitSignal(id);
  document.getElementById("pronUnitTag").textContent=u.tag;
  document.getElementById("pronUnitTitle").textContent=u.title;
  document.getElementById("pronUnitSubtitle").textContent=u.short;
  document.getElementById("pronDiagnosticSignal").textContent=sig.pct===null?"—":`${sig.pct}%`;
  document.getElementById("pronDiagnosticNote").textContent=sig.pct===null?"No diagnostic signal yet":sig.label.replace(/^\d+%\s*·\s*/,"");
  document.getElementById("pronRuleText").textContent=u.rule;
  renderPronExamples(u);

  document.getElementById("pronNoticeQuestion").textContent=u.notice.q;
  renderPronOptions("pronNoticeOptions",`pron-notice-${id}`,u.notice);
  document.getElementById("pronChooseQuestion").textContent=u.choose.q;
  renderPronOptions("pronChooseOptions",`pron-choose-${id}`,u.choose);

  document.getElementById("pronShadowLine").textContent=u.shadow;
  document.getElementById("pronShadowChecks").innerHTML=u.checks.map((x,i)=>`
    <label><input type="checkbox" data-pron-shadow-check="${i}"><span>${x}</span></label>`).join("");
  document.getElementById("pronClientPrompt").textContent=u.client;
  document.getElementById("pronClientHelp").textContent=u.clientLine;
  ["pronNoticeFeedback","pronChooseFeedback","pronCompleteFeedback"].forEach(fid=>{
    const f=document.getElementById(fid);f.textContent="";f.className="activity-summary";
  });
  const playback=document.getElementById("pronPlayback");
  playback.hidden=true;playback.removeAttribute("src");
  document.getElementById("pronRecordStatus").textContent="The recording stays on this device and disappears when the page is reloaded.";
  document.getElementById("pronWorkspaceStatus").textContent="Training";
  document.getElementById("pronWorkspace").hidden=false;
  document.querySelector(".pron-priority-shell").hidden=true;
  document.querySelector(".pron-library-shell").hidden=true;
  document.querySelector(".client-rehearsal-card").hidden=true;
  document.querySelector(".pronunciation-philosophy").hidden=true;
  document.getElementById("pronWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
}
function closePronWorkspace(){
  if(pronMediaRecorder?.state==="recording")pronMediaRecorder.stop();
  document.getElementById("pronWorkspace").hidden=true;
  document.querySelector(".pron-priority-shell").hidden=false;
  document.querySelector(".pron-library-shell").hidden=false;
  document.querySelector(".client-rehearsal-card").hidden=false;
  document.querySelector(".pronunciation-philosophy").hidden=false;
  currentPronUnitId=null;
  renderPronunciationLab();
  document.getElementById("pronunciation-lab").scrollIntoView({behavior:"smooth",block:"start"});
}
function checkPronClosed(kind){
  if(!currentPronUnitId)return;
  const u=pronunciationUnits[currentPronUnitId],item=u[kind];
  const picked=document.querySelector(`input[name="pron-${kind}-${currentPronUnitId}"]:checked`);
  const fb=document.getElementById(kind==="notice"?"pronNoticeFeedback":"pronChooseFeedback");
  if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose an answer first.";return;}
  const ok=Number(picked.value)===item.c;
  currentPronClosed[kind]=ok;
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${item.explain}`:`Best answer: “${item.a[item.c]}” — ${item.explain}`;
}
async function startPronRecording(){
  if(!currentPronUnitId)return;
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    pronAudioChunks=[];
    pronMediaRecorder=new MediaRecorder(stream);
    pronMediaRecorder.ondataavailable=e=>pronAudioChunks.push(e.data);
    pronMediaRecorder.onstop=()=>{
      const blob=new Blob(pronAudioChunks,{type:"audio/webm"});
      if(pronPlaybackUrl)URL.revokeObjectURL(pronPlaybackUrl);
      pronPlaybackUrl=URL.createObjectURL(blob);
      const audio=document.getElementById("pronPlayback");
      audio.src=pronPlaybackUrl;audio.hidden=false;
      stream.getTracks().forEach(t=>t.stop());
      document.getElementById("pronRecordBtn").disabled=false;
      document.getElementById("pronStopBtn").disabled=true;
      document.getElementById("pronRecordStatus").textContent="Listen back and check the four intelligibility criteria. Nothing has been uploaded.";
      pronRecordedThisUnit=true;
      const state=loadPronunciationLabState();
      state.shadowAttempts++;
      savePronunciationLabState(state);
      renderPronStats();
    };
    pronMediaRecorder.start();
    document.getElementById("pronRecordBtn").disabled=true;
    document.getElementById("pronStopBtn").disabled=false;
    document.getElementById("pronRecordStatus").textContent="Recording… shadow the model immediately and keep going.";
  }catch(e){
    document.getElementById("pronRecordStatus").textContent="Microphone access was not granted. You can still shadow aloud and complete the self-check manually.";
  }
}
function stopPronRecording(){
  if(pronMediaRecorder?.state==="recording")pronMediaRecorder.stop();
}
function completePronUnit(){
  if(!currentPronUnitId)return;
  const correct=Object.values(currentPronClosed).filter(Boolean).length;
  const answered=Object.values(currentPronClosed).filter(v=>v!==null).length;
  const checks=[...document.querySelectorAll("[data-pron-shadow-check]")];
  const checked=checks.filter(x=>x.checked).length;
  const fb=document.getElementById("pronCompleteFeedback");
  if(answered<2){
    fb.className="activity-summary neutral";fb.textContent="Complete the two closed tasks first.";return;
  }
  if(correct<1){
    fb.className="activity-summary wrong";fb.textContent="Review the target and get at least one of the two closed tasks right before completing the unit.";return;
  }
  if(checked<3){
    fb.className="activity-summary neutral";fb.textContent="Shadow the target aloud and confirm at least three intelligibility checks.";return;
  }
  const state=loadPronunciationLabState();
  state.closedCorrect+=correct;
  state.closedTotal+=2;
  state.unitAttempts[currentPronUnitId]=(state.unitAttempts[currentPronUnitId]||0)+1;
  if(!state.completed.includes(currentPronUnitId))state.completed.push(currentPronUnitId);
  savePronunciationLabState(state);
  document.getElementById("pronWorkspaceStatus").textContent="Unit complete ✓";
  fb.className="activity-summary correct";
  fb.textContent=`Unit complete ✓ ${correct}/2 closed tasks correct · ${checked}/${checks.length} intelligibility checks confirmed. Use the same feature in your next Speaking Lab task.`;
  renderPronStats();
  if(typeof renderDashboard==="function")renderDashboard();
  if(typeof renderProgressCheck==="function")renderProgressCheck();
}
let currentRehearsalSet=[];
function renderRehearsal(){
  const target=document.getElementById("clientRehearsalLines");if(!target)return;
  if(!currentRehearsalSet.length){
    const seed=(new Date().getDate()+loadPronunciationLabState().rehearsals)%rehearsalPool.length;
    const rotated=[...rehearsalPool.slice(seed),...rehearsalPool.slice(0,seed)];
    currentRehearsalSet=rotated.slice(0,5);
  }
  target.innerHTML=currentRehearsalSet.map(([line,focus],i)=>`
    <div class="rehearsal-line">
      <span>${i+1}</span>
      <div><strong>${line}</strong><small>${focus}</small></div>
      <button type="button" data-rehearsal-hear="${i}" aria-label="Hear line">🔊</button>
    </div>`).join("");
  target.querySelectorAll("[data-rehearsal-hear]").forEach(btn=>btn.addEventListener("click",()=>{
    speakPron(currentRehearsalSet[Number(btn.dataset.rehearsalHear)][0]);
  }));
}
function newRehearsalSet(){
  const start=Math.floor(Math.random()*rehearsalPool.length);
  const rotated=[...rehearsalPool.slice(start),...rehearsalPool.slice(0,start)];
  currentRehearsalSet=rotated.slice(0,5);
  renderRehearsal();
}
function logRehearsal(){
  const state=loadPronunciationLabState();
  state.rehearsals++;
  savePronunciationLabState(state);
  document.getElementById("logRehearsalBtn").textContent="Rehearsal logged ✓";
  setTimeout(()=>document.getElementById("logRehearsalBtn").textContent="Log rehearsal complete",1600);
  if(typeof renderDashboard==="function")renderDashboard();
}
function initPronunciationLab(){
  if(!document.getElementById("pronunciation-lab"))return;
  document.getElementById("refreshPronQueueBtn")?.addEventListener("click",renderPronunciationLab);
  document.getElementById("closePronWorkspaceBtn")?.addEventListener("click",closePronWorkspace);
  document.getElementById("checkPronNoticeBtn")?.addEventListener("click",()=>checkPronClosed("notice"));
  document.getElementById("checkPronChooseBtn")?.addEventListener("click",()=>checkPronClosed("choose"));
  document.getElementById("pronHearShadowBtn")?.addEventListener("click",()=>{
    if(currentPronUnitId)speakPron(pronunciationUnits[currentPronUnitId].shadow);
  });
  document.getElementById("pronHearClientBtn")?.addEventListener("click",()=>{
    if(currentPronUnitId)speakPron(pronunciationUnits[currentPronUnitId].clientLine);
  });
  document.getElementById("pronRecordBtn")?.addEventListener("click",startPronRecording);
  document.getElementById("pronStopBtn")?.addEventListener("click",stopPronRecording);
  document.getElementById("completePronUnitBtn")?.addEventListener("click",completePronUnit);
  document.getElementById("newRehearsalBtn")?.addEventListener("click",newRehearsalSet);
  document.getElementById("logRehearsalBtn")?.addEventListener("click",logRehearsal);
  renderPronunciationLab();
}


// V12 · Writing Lab
const writingStateKey="ebackontrack-v12-writing";

const writingModes={
  incidentEmail:{
    label:"CLIENT INCIDENT EMAIL",
    title:"Give a clear incident update without overclaiming",
    min:90,max:130,
    prompts:[
      "A high-severity alert was triggered by a privileged account signing in from an unfamiliar location at 09:18 UTC. The active session has been revoked and the account password reset. So far, there is no evidence of data exfiltration. Identity and endpoint logs are still being reviewed. The client should receive the next update by 12:00 UTC.",
      "Suspicious PowerShell activity was detected on two endpoints. Both devices have been isolated. Execution is confirmed, but persistence and lateral movement have not been confirmed. The investigation continues and the next client update is planned in two hours.",
      "An alert identified repeated failed authentication attempts followed by one successful login. The user does not recognise the successful login. Sessions have been revoked and MFA re-registration is in progress. A wider identity review has started."
    ],
    structure:[
      ["1","Lead with the event","What was detected and when?"],
      ["2","State action already taken","Containment first, without unnecessary detail."],
      ["3","Separate known from unknown","What have you confirmed? What are you still checking?"],
      ["4","Set the next expectation","What happens next and when will the client hear from you?"]
    ],
    phrases:["We detected suspicious activity at approximately…","The account has been temporarily disabled as a precaution.","So far, we have found no evidence of…","We are currently reviewing…","We will provide the next update once…"],
    repair:{
      q:"Which sentence is the clearest client-facing update?",
      a:["We have a very bad high severity thing but maybe nothing happened.","A high-severity alert was triggered, but we have not confirmed any impact at this stage.","There is definitely no compromise because we did not see data theft.","We are investigating all the cyber stuff currently."],
      c:1,
      explain:"It states the event and keeps the level of certainty accurate."
    },
    checklist:[
      "The first sentence tells the reader why I am writing.",
      "I clearly separated confirmed facts from what is still being investigated.",
      "I stated what action has already been taken.",
      "I gave a concrete next step or next update time.",
      "I avoided unnecessary jargon or explained it."
    ],
    model:`Subject: Update on high-severity authentication alert

We detected suspicious activity on a privileged account at approximately 09:18 UTC. The active session has been revoked and the account password has been reset as a precaution.

So far, we have found no evidence of data exfiltration. We are currently reviewing identity and endpoint logs to determine whether any additional activity occurred.

We will provide the next update by 12:00 UTC, or earlier if the investigation identifies any significant new findings.`
  },
  handover:{
    label:"SOC HANDOVER",
    title:"Transfer the case without losing the investigation",
    min:60,max:100,
    prompts:[
      "Alert at 07:42 UTC for unusual PowerShell on workstation FIN-WS-044. User confirmed they were not running administrative scripts. Endpoint isolated at 08:03. EDR shows execution from a downloaded archive. No persistence identified yet. Next analyst must review email telemetry and check whether the attachment reached other users.",
      "Multiple failed logins against svc-backup followed by a successful authentication from a new IP. Sessions revoked. Source IP also appears in two low-confidence threat-intelligence feeds. No endpoint activity identified yet. Outstanding: confirm with infrastructure team whether any maintenance used the account.",
      "Possible phishing-led credential theft. User clicked a link and entered credentials. Password reset and MFA sessions revoked. Mailbox rules checked: one suspicious forwarding rule removed. Outstanding: search for the same sender and URL across the tenant."
    ],
    structure:[
      ["1","Time + trigger","When did the alert arrive and why?"],
      ["2","Evidence","What has actually been confirmed?"],
      ["3","Actions","What has already been done?"],
      ["4","Outstanding","What exactly should the next analyst do?"]
    ],
    phrases:["The alert came in at…","I checked…, which showed…","We ruled out…","The main outstanding point is…","The next analyst should check…"],
    repair:{
      q:"Which handover line is most operationally useful?",
      a:["Still investigating, please continue.","The main outstanding point is whether the attachment was delivered to other users; check email telemetry next.","This alert looks interesting.","Maybe phishing. Good luck."],
      c:1,
      explain:"A good handover identifies the unresolved question and the next concrete action."
    },
    checklist:[
      "I included the trigger and a useful time reference.",
      "I reported evidence rather than speculation.",
      "I listed actions already completed.",
      "I gave the next analyst a precise outstanding task.",
      "The handover can be scanned quickly."
    ],
    model:`07:42 UTC — Alert for unusual PowerShell activity on FIN-WS-044. The user confirmed they were not running administrative scripts. The endpoint was isolated at 08:03.

EDR shows that the process was launched from a downloaded archive. No persistence has been identified so far.

The main outstanding point is the delivery method. The next analyst should review email telemetry and check whether the same attachment was sent to other users.`
  },
  risk:{
    label:"RISK IN PLAIN ENGLISH",
    title:"Explain why something matters without turning it into a CVE lecture",
    min:70,max:110,
    prompts:[
      "A critical remote-code-execution vulnerability affects software used by the client. The affected service is not internet-facing and administrative access is restricted. No exploitation has been observed. A patch is available and can be deployed tonight.",
      "A legacy privileged account does not have MFA. It is used only by one internal automation service, but its password has not been rotated recently. Explain why the risk should still be addressed.",
      "A vulnerability scanner reports a high-severity weakness on several endpoints, but all affected systems are isolated from the internet. Explain severity versus actual exposure."
    ],
    structure:[
      ["1","Name the weakness","What is the issue in simple terms?"],
      ["2","Explain likelihood","What makes exploitation more or less likely here?"],
      ["3","Explain impact","What could realistically happen?"],
      ["4","Give the practical conclusion","What should be prioritised?"]
    ],
    phrases:["The vulnerability increases the risk because…","There is currently no evidence that it has been exploited.","The likelihood depends on…","The potential impact would be…","Our recommendation is to prioritise remediation because…"],
    repair:{
      q:"Which explanation best separates severity from current exposure?",
      a:["The CVSS score is critical, therefore compromise is certain.","The vulnerability is severe, but the current exposure is reduced because the service is not internet-facing.","The vulnerability is high so the risk is always exactly high.","There is no risk because we have not seen exploitation."],
      c:1,
      explain:"Technical severity and actual likelihood/exposure are related but not identical."
    },
    checklist:[
      "I explained the issue without assuming technical knowledge.",
      "I separated severity from likelihood/exposure.",
      "I described a realistic impact rather than a dramatic worst case.",
      "I gave a proportionate recommendation.",
      "I avoided saying that vulnerability automatically means compromise."
    ],
    model:`The vulnerability is technically severe because it could allow remote code execution. However, the current likelihood of exploitation is reduced because the affected service is not internet-facing and administrative access is restricted.

There is currently no evidence that the vulnerability has been exploited in this environment. The potential impact would nevertheless be significant if an attacker gained access.

Our recommendation is to deploy the available patch during tonight's maintenance window and continue monitoring until remediation is complete.`
  },
  remediation:{
    label:"REMEDIATION RECOMMENDATION",
    title:"Prioritise actions and explain why",
    min:70,max:110,
    prompts:[
      "A privileged account may have been exposed. Active sessions have already been revoked. Recommend immediate, short-term and longer-term actions.",
      "A vulnerable internet-facing service cannot be patched until tomorrow. Recommend a temporary mitigation and what should happen after the patch.",
      "An incident showed that several legacy admin accounts are outside MFA coverage. Recommend a remediation sequence without suggesting that everything must be fixed simultaneously."
    ],
    structure:[
      ["1","Immediate action","What reduces the current risk now?"],
      ["2","Priority action","What should happen next and why?"],
      ["3","Fallback if delayed","What if the preferred fix cannot happen yet?"],
      ["4","Longer-term improvement","What reduces recurrence?"]
    ],
    phrases:["As an immediate containment measure, we recommend…","In the short term, it would be advisable to…","The priority should be… because…","If this cannot be completed today, we recommend…","Going forward, we recommend…"],
    repair:{
      q:"Which recommendation sounds proportionate and professional?",
      a:["You must rebuild the whole environment immediately.","The priority should be to rotate the exposed credentials because the account may still be usable by an attacker.","Maybe change something when possible.","We guarantee this action will prevent all future incidents."],
      c:1,
      explain:"It prioritises one action and links it to a concrete risk."
    },
    checklist:[
      "I clearly ranked the actions.",
      "I explained why the first priority comes first.",
      "I included a fallback if the preferred action cannot happen immediately.",
      "I separated immediate containment from longer-term improvement.",
      "I avoided absolute guarantees."
    ],
    model:`As an immediate containment measure, we recommend keeping all active sessions for the affected account revoked.

The priority should then be to rotate the credentials because they may still be known to an attacker. In the short term, it would also be advisable to review recent authentication activity for signs of reuse.

If the credential rotation cannot be completed immediately, restrict the account's access temporarily. Going forward, we recommend reviewing privileged-account MFA coverage and rotation policies.`
  },
  followup:{
    label:"MEETING FOLLOW-UP",
    title:"Turn a call into clear actions, owners and deadlines",
    min:80,max:120,
    prompts:[
      "After a client call: the SOC will send the IOC list by 15:00; the client identity team will confirm whether the unusual login was expected; the endpoint team will keep one device isolated; everyone will reconvene tomorrow at 09:30 UTC.",
      "After an incident-review call: client will patch the exposed service tonight; SOC will maintain increased monitoring for 48 hours; cloud team will review access logs; final written summary due Friday.",
      "After a risk meeting: infrastructure team will restrict external access today; application owner will test the patch tomorrow morning; SOC will verify whether exploitation indicators are present; decision on production deployment by 14:00."
    ],
    structure:[
      ["1","One-line summary","What was agreed overall?"],
      ["2","Action + owner","Who does what?"],
      ["3","Deadline","When is each key action due?"],
      ["4","Next contact","When do you reconvene or report?"]
    ],
    phrases:["To summarise today's call…","We agreed that…","Our team will…","Could you please confirm…","We'll send you a written update by…"],
    repair:{
      q:"Which follow-up line gives the clearest ownership?",
      a:["The logs need checking soon.","The cloud team will review the access logs by 12:00 UTC tomorrow.","Someone should probably look at the logs.","Access logs are a topic."],
      c:1,
      explain:"Useful follow-ups make action, owner and deadline explicit."
    },
    checklist:[
      "I summarised the overall outcome before the detailed actions.",
      "Each important action has a clear owner.",
      "I included deadlines where they matter.",
      "I stated the next meeting or update point.",
      "The email is easy to scan."
    ],
    model:`Subject: Follow-up and actions from today's incident call

To summarise today's call, we agreed on the following actions:

- Our SOC team will send the current IOC list by 15:00 UTC.
- Your identity team will confirm whether the unusual login was expected.
- The endpoint team will keep the affected device isolated while the review continues.

We will reconvene tomorrow at 09:30 UTC to review the identity findings and any additional endpoint evidence.

Please let us know if the identity review identifies any new activity before then.`
  }
};

function loadWritingState(){
  try{
    const raw=JSON.parse(localStorage.getItem(writingStateKey))||{};
    return {attempts:Array.isArray(raw.attempts)?raw.attempts:[]};
  }catch(e){return {attempts:[]};}
}
function saveWritingState(state){
  localStorage.setItem(writingStateKey,JSON.stringify(state));
}
function writingStats(){
  const state=loadWritingState();
  const types=new Set(state.attempts.map(x=>x.mode));
  const avg=state.attempts.length?Math.round(state.attempts.reduce((s,x)=>s+(x.words||0),0)/state.attempts.length):null;
  return {attempts:state.attempts.length,types:types.size,avg};
}
function renderWritingStats(){
  const s=writingStats();
  const a=document.getElementById("writingAttemptCount");
  const b=document.getElementById("writingTaskTypes");
  const c=document.getElementById("writingAvgLength");
  if(a)a.textContent=s.attempts;
  if(b)b.textContent=`${s.types} / 5`;
  if(c)c.textContent=s.avg===null?"—":s.avg;
}
let currentWritingMode=null;
let currentWritingPromptIndex=0;
let currentWritingRepairPassed=false;

function writingMetrics(text){
  const clean=(text||"").trim();
  const words=clean?clean.split(/\s+/).filter(Boolean).length:0;
  const sentences=clean?(clean.match(/[.!?]+(?=\s|$)/g)||[]).length:0;
  return {words,sentences:Math.max(sentences, clean?1:0)};
}
function renderWritingLiveMetrics(){
  if(!currentWritingMode)return;
  const mode=writingModes[currentWritingMode];
  const metrics=writingMetrics(document.getElementById("writingDraft").value);
  document.getElementById("writingWordCount").textContent=metrics.words;
  document.getElementById("writingSentenceCount").textContent=metrics.sentences;
  const fb=document.getElementById("writingLengthFeedback");
  if(metrics.words===0){
    fb.className="writing-length-feedback";
    fb.textContent=`Target: ${mode.min}–${mode.max} words.`;
  }else if(metrics.words<mode.min){
    fb.className="writing-length-feedback short";
    fb.textContent=`${mode.min-metrics.words} words below the suggested minimum. Make sure the message contains the operational essentials.`;
  }else if(metrics.words>mode.max){
    fb.className="writing-length-feedback long";
    fb.textContent=`${metrics.words-mode.max} words above the suggested maximum. Look for detail the reader does not need.`;
  }else{
    fb.className="writing-length-feedback good";
    fb.textContent="Good length for this format ✓";
  }
}
function renderWritingPhrases(mode){
  const bank=document.getElementById("writingPhraseBank");
  bank.innerHTML=mode.phrases.map(phrase=>{
    const found=findPhraseByText(phrase);
    const saved=found&&loadPhraseState().items[found.id];
    return `<div class="writing-phrase">
      <span>${phrase}</span>
      ${found?`<button type="button" data-writing-save-phrase="${found.id}">${saved?"✓ Saved":"+ Phrasebook"}</button>`:""}
    </div>`;
  }).join("");
  bank.querySelectorAll("[data-writing-save-phrase]").forEach(btn=>btn.addEventListener("click",()=>{
    addPhrase(btn.dataset.writingSavePhrase);
    renderWritingPhrases(writingModes[currentWritingMode]);
  }));
}
function renderWritingMode(modeId,newPrompt=false){
  const mode=writingModes[modeId];if(!mode)return;
  currentWritingMode=modeId;
  if(newPrompt)currentWritingPromptIndex=(currentWritingPromptIndex+1)%mode.prompts.length;
  else currentWritingPromptIndex=Math.floor(Math.random()*mode.prompts.length);
  currentWritingRepairPassed=false;

  document.getElementById("writingModeLabel").textContent=mode.label;
  document.getElementById("writingPromptTitle").textContent=mode.title;
  document.getElementById("writingScenario").textContent=mode.prompts[currentWritingPromptIndex];
  document.getElementById("writingTargetLength").textContent=`${mode.min}–${mode.max}`;
  document.getElementById("writingStructure").innerHTML=mode.structure.map(([n,title,sub])=>`
    <div class="writing-structure-step"><span>${n}</span><div><strong>${title}</strong><small>${sub}</small></div></div>`).join("");
  renderWritingPhrases(mode);

  document.getElementById("writingRepairPrompt").textContent=mode.repair.q;
  document.getElementById("writingRepairOptions").innerHTML=mode.repair.a.map((opt,i)=>`
    <label><input type="radio" name="writing-repair-${modeId}" value="${i}"><span>${opt}</span></label>`).join("");
  document.getElementById("writingRepairFeedback").textContent="";
  document.getElementById("writingRepairFeedback").className="activity-summary";

  document.getElementById("writingChecklist").innerHTML=mode.checklist.map((x,i)=>`
    <label><input type="checkbox" data-writing-check="${i}"><span>${x}</span></label>`).join("");
  document.getElementById("writingDraft").value="";
  document.getElementById("writingModelAnswer").hidden=true;
  document.getElementById("writingModelAnswer").textContent=mode.model;
  document.getElementById("revealWritingModelBtn").disabled=false;
  document.getElementById("revealWritingModelBtn").textContent="Reveal model answer";
  document.getElementById("writingAttemptFeedback").textContent="";
  document.getElementById("writingAttemptFeedback").className="activity-summary";
  document.getElementById("writingStatusPill").textContent="Drafting";
  renderWritingLiveMetrics();
}
function openWritingMode(modeId){
  renderWritingMode(modeId,false);
  document.getElementById("writingWorkspace").hidden=false;
  document.getElementById("writingModeGrid").hidden=true;
  document.querySelector(".writing-task-selector").hidden=true;
  document.getElementById("writingWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
}
function closeWritingMode(){
  document.getElementById("writingWorkspace").hidden=true;
  document.getElementById("writingModeGrid").hidden=false;
  document.querySelector(".writing-task-selector").hidden=false;
  currentWritingMode=null;
  document.getElementById("writing-lab").scrollIntoView({behavior:"smooth",block:"start"});
}
function checkWritingRepair(){
  if(!currentWritingMode)return;
  const mode=writingModes[currentWritingMode];
  const picked=document.querySelector(`input[name="writing-repair-${currentWritingMode}"]:checked`);
  const fb=document.getElementById("writingRepairFeedback");
  if(!picked){
    fb.className="activity-summary neutral";
    fb.textContent="Choose a sentence first.";
    return;
  }
  const ok=Number(picked.value)===mode.repair.c;
  currentWritingRepairPassed=ok;
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${mode.repair.explain}`:`Best option: “${mode.repair.a[mode.repair.c]}” — ${mode.repair.explain}`;
}
function revealWritingModel(){
  if(!currentWritingMode)return;
  const draft=writingMetrics(document.getElementById("writingDraft").value);
  const fb=document.getElementById("writingAttemptFeedback");
  if(draft.words<20){
    fb.className="activity-summary neutral";
    fb.textContent="Write your own draft first. The model is deliberately locked until you have actually attempted the task.";
    return;
  }
  document.getElementById("writingModelAnswer").hidden=false;
  document.getElementById("revealWritingModelBtn").disabled=true;
  document.getElementById("revealWritingModelBtn").textContent="Model revealed ✓";
}
function logWritingAttempt(){
  if(!currentWritingMode)return;
  const mode=writingModes[currentWritingMode];
  const metrics=writingMetrics(document.getElementById("writingDraft").value);
  const checks=[...document.querySelectorAll("[data-writing-check]")];
  const checked=checks.filter(x=>x.checked).length;
  const fb=document.getElementById("writingAttemptFeedback");

  if(metrics.words<30){
    fb.className="activity-summary neutral";
    fb.textContent="Write a real draft before logging the attempt.";
    return;
  }
  if(checked<3){
    fb.className="activity-summary neutral";
    fb.textContent="Complete the self-edit and check at least three criteria first.";
    return;
  }
  if(!currentWritingRepairPassed){
    fb.className="activity-summary neutral";
    fb.textContent="Complete the wording repair task before logging this attempt.";
    return;
  }

  const state=loadWritingState();
  state.attempts.push({
    date:Date.now(),
    mode:currentWritingMode,
    words:metrics.words,
    checks:checked,
    inRange:metrics.words>=mode.min&&metrics.words<=mode.max
  });
  if(state.attempts.length>100)state.attempts=state.attempts.slice(-100);
  saveWritingState(state);
  renderWritingStats();
  document.getElementById("writingStatusPill").textContent="Attempt logged ✓";
  fb.className="activity-summary correct";
  fb.textContent=`Attempt logged ✓ ${metrics.words} words · ${checked}/${checks.length} self-edit checks. The draft text itself was not saved.`;
  if(typeof renderDashboard==="function")renderDashboard();
  if(typeof renderProgressCheck==="function")renderProgressCheck();
}
function initWritingLab(){
  if(!document.getElementById("writing-lab"))return;
  document.querySelectorAll("[data-writing-mode]").forEach(btn=>btn.addEventListener("click",()=>openWritingMode(btn.dataset.writingMode)));
  document.getElementById("surpriseWritingBtn")?.addEventListener("click",()=>{
    const keys=Object.keys(writingModes);
    openWritingMode(keys[Math.floor(Math.random()*keys.length)]);
  });
  document.getElementById("closeWritingBtn")?.addEventListener("click",closeWritingMode);
  document.getElementById("writingDraft")?.addEventListener("input",renderWritingLiveMetrics);
  document.getElementById("checkWritingRepairBtn")?.addEventListener("click",checkWritingRepair);
  document.getElementById("revealWritingModelBtn")?.addEventListener("click",revealWritingModel);
  document.getElementById("logWritingAttemptBtn")?.addEventListener("click",logWritingAttempt);
  document.getElementById("newWritingPromptBtn")?.addEventListener("click",()=>renderWritingMode(currentWritingMode,true));
  renderWritingStats();
}


// V9 · Grammar Repair Lab
const grammarRepairStateKey="ebackontrack-v9-grammar";

const grammarRepairUnits={
  perfect:{
    title:"Timeline control: Past & Perfect forms",
    short:"Stop mixing finished events, current findings and ongoing investigation.",
    tags:["Present & perfect forms","Past vs present perfect","Past forms"],
    rule:"Use Past Simple for a finished event at a finished time. Use Present Perfect for findings or actions connected to now, especially with so far / already / yet. Use Present Perfect Continuous for activity continuing up to now.",
    patterns:[
      ["PAST SIMPLE","We isolated the endpoint at 09:20."],
      ["PRESENT PERFECT","We have found no evidence of exfiltration so far."],
      ["PRESENT PERFECT CONTINUOUS","We have been reviewing the logs since 10:00."],
      ["PAST PERFECT","The account had already been disabled when the client joined."]
    ],
    error:{q:"Which repair is correct?",a:["We didn't find any evidence of exfiltration so far.","We haven't found any evidence of exfiltration so far.","We haven't find any evidence of exfiltration so far.","We don't found any evidence of exfiltration so far."],c:1,explain:"So far connects the past investigation to the present, so Present Perfect is the natural choice."},
    choose:{q:"The alert fired at 08:45. Which update is best at 10:00?",a:["We detected suspicious activity at 08:45 and we have isolated the host.","We have detected suspicious activity at 08:45 and isolated the host now.","We detect suspicious activity at 08:45 and have isolate the host.","We were detected suspicious activity at 08:45."],c:0,explain:"Past Simple anchors the detection at 08:45; Present Perfect can report a completed action with a present result."},
    transform:{prompt:"Repair this sentence: “We didn't see lateral movement so far.”",accepted:["we haven't seen lateral movement so far","we have not seen lateral movement so far","we haven't seen any lateral movement so far","we have not seen any lateral movement so far"],target:"We haven't seen any lateral movement so far.",explain:"Use Present Perfect with so far."},
    production:{prompt:"Write a two-sentence incident update: sentence 1 = what happened at a specific time; sentence 2 = what you have found so far.",checks:["I used Past Simple for the timed event.","I used Present Perfect for the current finding.","My two sentences describe the same incident.","I did not use a finished-time expression with Present Perfect."]}
  },
  conditionals:{
    title:"Conditionals & future time clauses",
    short:"Explain consequences, controls and counterfactual risk accurately.",
    tags:["Conditionals","Advanced conditionals","Future time clauses"],
    rule:"Use present tense after if / when / as soon as for real future conditions. Use would + verb for hypothetical present/future situations. Use would have + past participle for unreal past consequences.",
    patterns:[
      ["REAL FUTURE","If we find lateral movement, we'll widen the investigation."],
      ["FUTURE TIME CLAUSE","I'll update you as soon as the review is complete."],
      ["HYPOTHETICAL","If the service were exposed, the risk would be higher."],
      ["UNREAL PAST","If MFA had been enabled, the attacker might not have gained access."]
    ],
    error:{q:"Which sentence is correct?",a:["If we will find evidence, we will escalate.","If we find evidence, we will escalate.","If we found evidence tomorrow, we will escalate.","If we find evidence, we escalate yesterday."],c:1,explain:"Do not normally use will in the if-clause of a real future condition."},
    choose:{q:"You are discussing a missed control in a post-incident review. Which is best?",a:["If MFA was enabled, the attacker won't gain access.","If MFA had been enabled, the attacker might not have gained access so easily.","If MFA will be enabled, the attacker didn't gain access.","If MFA has enabled, the attacker would not access."],c:1,explain:"This is an unreal past condition, so use if + past perfect and would/might have + past participle."},
    transform:{prompt:"Repair this sentence: “I'll send the report as soon as the investigation will be complete.”",accepted:["i'll send the report as soon as the investigation is complete","i will send the report as soon as the investigation is complete"],target:"I'll send the report as soon as the investigation is complete.",explain:"Future time clauses normally use present tense, not will."},
    production:{prompt:"Write two sentences: one real future consequence if new evidence appears, and one unreal past consequence about a control that was missing.",checks:["My real future sentence uses present tense after if.","My real future result uses will / may / might appropriately.","My unreal past condition uses had + past participle.","My unreal past result uses would/might/could have + past participle."]}
  },
  modals:{
    title:"Modals: uncertainty, obligation & past inference",
    short:"Sound cautious when evidence is incomplete and firm when action is required.",
    tags:["Modals & uncertainty","Modals & obligation","Past modals"],
    rule:"Use may / might / could for possibility, must / can't for strong inference, and may/might/could have + past participle for past possibilities. Use mustn't for prohibition, not lack of necessity.",
    patterns:[
      ["POSSIBILITY","The activity may be malicious."],
      ["PAST POSSIBILITY","The attacker may have used valid credentials."],
      ["PROHIBITION","You mustn't delete the evidence yet."],
      ["NO NECESSITY","You don't have to rebuild the server at this stage."]
    ],
    error:{q:"Which sentence communicates uncertainty correctly?",a:["The attacker may used valid credentials.","The attacker may have used valid credentials.","The attacker must to have used valid credentials.","The attacker could using valid credentials."],c:1,explain:"Past modal structure = modal + have + past participle."},
    choose:{q:"The evidence is incomplete. Which client sentence is best?",a:["This must definitely be the attacker.","This could be malicious, but we need more evidence.","This may definitely prove compromise.","This can't perhaps be legitimate."],c:1,explain:"Could expresses possibility without overclaiming."},
    transform:{prompt:"Repair this sentence: “The logs suggest the attacker may used a valid account.”",accepted:["the logs suggest the attacker may have used a valid account","the logs suggest that the attacker may have used a valid account"],target:"The logs suggest that the attacker may have used a valid account.",explain:"Use may have used for a possible past action."},
    production:{prompt:"Write a two-sentence client note: one cautious hypothesis about what may have happened, then one firm action the client must or must not take.",checks:["I used a modal + have + past participle for the past hypothesis.","I did not present the hypothesis as a confirmed fact.","I used must / mustn't accurately for the required action.","The recommendation is professionally realistic."]}
  },
  passive:{
    title:"Passive voice for incidents & processes",
    short:"Focus on the affected asset or action when the actor is unknown or unimportant.",
    tags:["Passive voice"],
    rule:"Passive = be + past participle. Choose the tense on be: was isolated, has been isolated, needs to be tested. Use the passive when the action/result matters more than who performed it.",
    patterns:[
      ["PAST PASSIVE","The endpoint was isolated at 09:30."],
      ["PRESENT PERFECT PASSIVE","The account has been disabled."],
      ["MODAL PASSIVE","The host should be rebuilt."],
      ["NEEDS + PASSIVE","The patch needs to be tested first."]
    ],
    error:{q:"Which sentence is correctly passive?",a:["The endpoint was isolate from the network.","The endpoint was isolated from the network.","The endpoint has isolating from the network.","The endpoint isolated by from the network."],c:1,explain:"Passive requires be + past participle: was isolated."},
    choose:{q:"You do not need to emphasise who performed the action. Which update is clearest?",a:["Our analyst Sophie isolated the host, and this is about Sophie.","The host has been isolated as a precaution.","There has isolated the host.","The host has isolate as precaution."],c:1,explain:"The passive keeps the focus on the host and the completed containment action."},
    transform:{prompt:"Rewrite in the passive: “The team temporarily disabled the account.”",accepted:["the account was temporarily disabled by the team","the account was temporarily disabled","the account has been temporarily disabled by the team","the account has been temporarily disabled"],target:"The account was temporarily disabled.",explain:"The actor is not essential, so the short passive is natural."},
    production:{prompt:"Write two short incident-update sentences using the passive: one completed containment action and one action that still needs to be done.",checks:["I used be + past participle correctly.","My first passive reports a completed action.","My second passive describes an outstanding action or recommendation.","The passive improves focus rather than making the sentence vague."]}
  },
  structure:{
    title:"Sentence structure: questions, clauses & relatives",
    short:"Build clear questions and connect technical information without French word order.",
    tags:["Question structure","Clause structure","Relative clauses"],
    rule:"Indirect questions keep statement word order: Could you tell me when the user changed the password? Use whether for yes/no uncertainty. Relative clauses let you attach precise information: the analyst who handled the alert; two accounts, both of which…",
    patterns:[
      ["INDIRECT QUESTION","Could you tell me when the user changed the password?"],
      ["WHETHER","We don't know whether the credentials were used."],
      ["WHO","The analyst who handled the alert is off shift."],
      ["OF WHICH","We found two accounts, both of which had admin rights."]
    ],
    error:{q:"Which indirect question is correct?",a:["Could you tell me when did the user change the password?","Could you tell me when the user changed the password?","Could you tell me when changed the user the password?","Could you tell me when does the user changed the password?"],c:1,explain:"After Could you tell me…, use statement word order, not do/does/did inversion."},
    choose:{q:"Which sentence is clearest and grammatically correct?",a:["We don't know that the credentials were used or not.","We don't know whether the credentials were used.","We don't know which the credentials were used.","We don't know whether were used the credentials."],c:1,explain:"Whether introduces an unresolved yes/no alternative."},
    transform:{prompt:"Repair this sentence: “Can you tell me where can I find the authentication logs?”",accepted:["can you tell me where i can find the authentication logs","could you tell me where i can find the authentication logs"],target:"Can you tell me where I can find the authentication logs?",explain:"Indirect question = question opener + statement word order."},
    production:{prompt:"Write one polite indirect question to a client asking for information, then one sentence using who / which / whether to add detail.",checks:["My indirect question uses statement word order after the opener.","I did not add unnecessary do/does/did inversion.","My second sentence uses who / which / whether accurately.","Both sentences would sound natural in a client exchange."]}
  },
  verbs:{
    title:"Verb patterns & formal recommendations",
    short:"Avoid French-style verb constructions in requests and recommendations.",
    tags:["Verb patterns","Formal structures"],
    rule:"Common patterns matter: need to review, ask someone to send, recommend + -ing, or formal recommend that + base verb. After recommend that, formal English can use the base form: We recommend that the client disable the service.",
    patterns:[
      ["NEED TO","We need to review the logs."],
      ["ASK + PERSON + TO","We asked the client to send the logs."],
      ["RECOMMEND + -ING","We recommend isolating the host."],
      ["RECOMMEND THAT + BASE","We recommend that the client disable the service."]
    ],
    error:{q:"Which sentence is correct?",a:["We need review the logs.","We need to review the logs.","We need reviewing to the logs.","We need to reviewing the logs."],c:1,explain:"Need is followed by to + infinitive in this structure."},
    choose:{q:"Which formal recommendation is correct?",a:["We recommend that the client disables the service immediately.","We recommend that the client disable the service immediately.","We recommend the client to disables the service.","We recommend that the client will disable immediately."],c:1,explain:"Formal recommend that can take the base verb: recommend that the client disable."},
    transform:{prompt:"Repair this sentence: “The client asked us confirm the timeline.”",accepted:["the client asked us to confirm the timeline","the client asked us to confirm the incident timeline"],target:"The client asked us to confirm the timeline.",explain:"Ask + person + to + infinitive."},
    production:{prompt:"Write one request and one recommendation about an incident: use ask + person + to in one sentence and recommend that + base verb or recommend + -ing in the other.",checks:["My request uses ask + person + to + infinitive.","My recommendation uses a correct recommend pattern.","I did not use a French-style infinitive construction.","Both actions fit an incident-response context."]}
  },
  precision:{
    title:"Precision: quantifiers & agreement",
    short:"Make technical statements grammatically precise when quantities and subjects get complicated.",
    tags:["Quantifiers","Agreement"],
    rule:"Use fewer with countable nouns and less with uncountable nouns. Enough comes before a noun. With neither…nor, agreement usually follows the nearer subject; but keep technical sentences simple when possible.",
    patterns:[
      ["FEWER + COUNTABLE","We saw fewer failed login attempts."],
      ["LESS + UNCOUNTABLE","There is less traffic than usual."],
      ["ENOUGH + NOUN","There isn't enough evidence yet."],
      ["PLURAL SUBJECT","Neither the logs nor the alerts show persistence."]
    ],
    error:{q:"Which sentence is correct?",a:["We have less failed login attempts than yesterday.","We have fewer failed login attempts than yesterday.","We have fewest failed login attempts than yesterday.","We have fewer failed login attempt than yesterday."],c:1,explain:"Attempts are countable plural, so use fewer."},
    choose:{q:"Which sentence is best?",a:["There isn't many evidence to confirm compromise.","There isn't enough evidence to confirm compromise.","There aren't enough evidence to confirm compromise.","There isn't several evidence to confirm compromise."],c:1,explain:"Evidence is uncountable; enough evidence is the natural structure."},
    transform:{prompt:"Repair this sentence: “There aren't enough evidence to attribute the activity.”",accepted:["there isn't enough evidence to attribute the activity","there is not enough evidence to attribute the activity"],target:"There isn't enough evidence to attribute the activity.",explain:"Evidence is uncountable, so use singular agreement."},
    production:{prompt:"Write two short findings: one comparing a countable security event with yesterday, and one saying that the investigation still lacks sufficient evidence.",checks:["I used fewer with a countable plural noun.","I treated evidence as uncountable.","I used enough in the correct position.","My statements are concise and operational."]}
  },
  comparison:{
    title:"Comparisons for risk & severity",
    short:"Compare exposure, likelihood and impact without malformed comparative structures.",
    tags:["Comparison"],
    rule:"Use more + adjective for many longer adjectives, adjective-er for many short adjectives, than after a comparative, and as…as for equality. In cyber risk, higher/lower risk and more/less likely are especially useful.",
    patterns:[
      ["MORE + ADJECTIVE","This control is more effective than the previous one."],
      ["HIGHER / LOWER","The exposure is lower than we first thought."],
      ["MORE / LESS LIKELY","Exploitation is more likely on internet-facing systems."],
      ["NOT AS…AS","The impact is not as severe as initially reported."]
    ],
    error:{q:"Which sentence is correct?",a:["This control is more effective that the previous one.","This control is more effective than the previous one.","This control is most effective than the previous one.","This control is more effectively than previous."],c:1,explain:"Comparatives take than: more effective than."},
    choose:{q:"Which sentence communicates the revised risk clearly?",a:["The current exposure is not as high as we first thought.","The current exposure is not as high than we first thought.","The current exposure is less higher that before.","The current exposure is not so higher as we first thought."],c:0,explain:"Not as + adjective + as is the correct equality comparison."},
    transform:{prompt:"Repair this sentence: “The incident was more serious that initially reported.”",accepted:["the incident was more serious than initially reported","the incident was more serious than was initially reported"],target:"The incident was more serious than initially reported.",explain:"Comparative + than."},
    production:{prompt:"Write two risk-comparison sentences: compare the current exposure with the initial assessment, then compare two remediation options.",checks:["I used than correctly after a comparative.","I used a natural risk adjective such as high, severe, likely or effective.","My comparison makes the business meaning clearer.","I avoided double comparatives such as more higher."]}
  },
  prepositions:{
    title:"Prepositions that recur at work",
    short:"Fix small errors that make otherwise good professional English sound less natural.",
    tags:["Prepositions"],
    rule:"Learn high-frequency chunks rather than translating prepositions from French: responsible for, at 11 p.m., on Thursday, in March, move to Thursday, during the investigation.",
    patterns:[
      ["RESPONSIBLE FOR","We are responsible for monitoring the environment."],
      ["AT + CLOCK TIME","The maintenance window starts at 11 p.m."],
      ["ON + DAY","The review is on Thursday."],
      ["MOVE TO","The meeting has been moved to Thursday afternoon."]
    ],
    error:{q:"Which sentence is correct?",a:["We are responsible of monitoring these events.","We are responsible for monitoring these events.","We are responsible to monitoring these events.","We are responsible with monitoring these events."],c:1,explain:"The fixed phrase is responsible for + noun / -ing."},
    choose:{q:"Which scheduling sentence is natural?",a:["The review has been moved at Thursday afternoon.","The review has been moved to Thursday afternoon.","The review has been moved in Thursday afternoon.","The review has been moved for Thursday afternoon."],c:1,explain:"Move an event to a new time/date."},
    transform:{prompt:"Repair this sentence: “The maintenance window starts on 11 p.m.”",accepted:["the maintenance window starts at 11 pm","the maintenance window starts at 11 p.m","the maintenance window starts at 11 p.m."],target:"The maintenance window starts at 11 p.m.",explain:"Use at with clock times."},
    production:{prompt:"Write two work sentences using two different target chunks from this unit (for example responsible for, at + time, on + day, moved to).",checks:["I used two different preposition chunks.","I did not translate the preposition directly from French.","The time/date preposition matches the expression.","Both sentences are plausible in my work context."]}
  }
};

const grammarTagToUnit={};
Object.entries(grammarRepairUnits).forEach(([unitId,unit])=>unit.tags.forEach(tag=>grammarTagToUnit[tag]=unitId));

function loadGrammarRepairState(){
  try{
    const raw=JSON.parse(localStorage.getItem(grammarRepairStateKey))||{};
    return {
      completed:Array.isArray(raw.completed)?raw.completed:[],
      attempts:Number(raw.attempts||0),
      closedCorrect:Number(raw.closedCorrect||0),
      closedTotal:Number(raw.closedTotal||0),
      unitAttempts:raw.unitAttempts||{}
    };
  }catch(e){return {completed:[],attempts:0,closedCorrect:0,closedTotal:0,unitAttempts:{}};}
}
function saveGrammarRepairState(state){
  localStorage.setItem(grammarRepairStateKey,JSON.stringify(state));
}
function normaliseGrammarAnswer(s){
  return (s||"").toLowerCase()
    .replace(/[’]/g,"'")
    .replace(/[.,!?;:]+$/g,"")
    .replace(/\s+/g," ")
    .trim();
}
function savedGrammarDiagnostic(){
  try{
    const saved=JSON.parse(localStorage.getItem("ebackontrack-v2"));
    if(saved?.results&&saved?.details?.grammar) return saved;
  }catch(e){}
  return null;
}
function grammarUnitSignal(unitId){
  const saved=savedGrammarDiagnostic();
  if(!saved) return {pct:null,label:"Starter unit",className:""};
  const unit=grammarRepairUnits[unitId];
  const tagResults=unit.tags.map(tag=>{
    const v=saved.details.grammar.tags?.[tag];
    return v ? Math.round(v.score/v.total*100) : null;
  }).filter(v=>v!==null);
  if(!tagResults.length) return {pct:null,label:"No signal",className:""};
  const pct=Math.min(...tagResults);
  if(pct<55) return {pct,label:`${pct}% · priority`,className:"critical"};
  if(pct<75) return {pct,label:`${pct}% · review`,className:"review"};
  return {pct,label:`${pct}% · maintain`,className:"good"};
}
function grammarRepairQueue(){
  const saved=savedGrammarDiagnostic();
  const fallback=["perfect","modals","conditionals","structure"];
  if(!saved) return fallback;
  const weaknesses=tagWeaknesses(saved.details.grammar,19);
  const queue=[];
  weaknesses.forEach(w=>{
    const id=grammarTagToUnit[w.name];
    if(id&&!queue.includes(id)) queue.push(id);
  });
  Object.keys(grammarRepairUnits).forEach(id=>{if(!queue.includes(id))queue.push(id);});
  return queue.slice(0,4);
}
function grammarRepairStats(){
  const state=loadGrammarRepairState();
  const accuracy=state.closedTotal?Math.round(state.closedCorrect/state.closedTotal*100):null;
  return {completed:state.completed.length,attempts:state.attempts,accuracy};
}
function updateGrammarRepairStats(){
  const s=grammarRepairStats();
  const a=document.getElementById("grammarRepairTopics");
  const b=document.getElementById("grammarRepairAttempts");
  const c=document.getElementById("grammarRepairAccuracy");
  if(a)a.textContent=s.completed;
  if(b)b.textContent=s.attempts;
  if(c)c.textContent=s.accuracy===null?"—":`${s.accuracy}%`;
}
function renderGrammarRepair(){
  if(!document.getElementById("grammar-lab"))return;
  const diagnostic=savedGrammarDiagnostic();
  document.getElementById("grammarNoDiagnostic").hidden=!!diagnostic;
  document.getElementById("grammarQueueTitle").textContent=diagnostic
    ?"Priority grammar, selected from your diagnostic"
    :"Starter repair queue until the diagnostic is complete";
  const state=loadGrammarRepairState();
  const queue=grammarRepairQueue();
  const q=document.getElementById("grammarRepairQueue");
  q.innerHTML=queue.map((id,i)=>{
    const u=grammarRepairUnits[id],signal=grammarUnitSignal(id),done=state.completed.includes(id);
    return `<button class="grammar-priority-card ${done?"completed":""}" type="button" data-grammar-unit="${id}">
      <div class="grammar-card-top">
        <span class="grammar-priority-rank">${i+1}</span>
        <span class="grammar-signal ${signal.className}">${done?"✓ repaired":signal.label}</span>
      </div>
      <h4>${u.title}</h4>
      <p>${u.short}</p>
      <div class="grammar-card-tags">${u.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      <span class="grammar-card-action">${done?"Review again":"Start repair"} →</span>
    </button>`;
  }).join("");

  const lib=document.getElementById("grammarUnitLibrary");
  lib.innerHTML=Object.entries(grammarRepairUnits).map(([id,u])=>{
    const signal=grammarUnitSignal(id),done=state.completed.includes(id);
    return `<button class="grammar-library-card ${done?"completed":""}" type="button" data-grammar-unit="${id}">
      <div class="grammar-card-top">
        <span class="grammar-signal ${signal.className}">${done?"✓ repaired":signal.label}</span>
      </div>
      <h4>${u.title}</h4>
      <p>${u.short}</p>
      <div class="grammar-card-tags">${u.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-grammar-unit]").forEach(btn=>btn.addEventListener("click",()=>openGrammarUnit(btn.dataset.grammarUnit)));
  updateGrammarRepairStats();
}
let currentGrammarUnitId=null;
let grammarClosedResults={error:null,choose:null,transform:null};

function renderGrammarOptions(targetId,name,items){
  const target=document.getElementById(targetId);
  target.innerHTML=items.map((opt,i)=>`<label><input type="radio" name="${name}" value="${i}"><span>${opt}</span></label>`).join("");
}
function openGrammarUnit(id){
  const u=grammarRepairUnits[id]; if(!u)return;
  currentGrammarUnitId=id;
  grammarClosedResults={error:null,choose:null,transform:null};
  const signal=grammarUnitSignal(id);
  document.getElementById("grammarUnitDiagnosticLabel").textContent=signal.pct===null?"STARTER REPAIR":"DIAGNOSTIC TARGET";
  document.getElementById("grammarUnitTitle").textContent=u.title;
  document.getElementById("grammarUnitSubtitle").textContent=u.short;
  document.getElementById("grammarUnitDiagnosticScore").textContent=signal.pct===null?"—":`${signal.pct}%`;
  document.getElementById("grammarUnitDiagnosticNote").textContent=signal.pct===null?"No diagnostic signal yet":signal.label.replace(/^\d+%\s*·\s*/,"");
  document.getElementById("grammarRuleText").textContent=u.rule;
  document.getElementById("grammarPatternBank").innerHTML=u.patterns.map(([label,example])=>`<div class="grammar-pattern"><strong>${label}</strong><span>${example}</span></div>`).join("");

  document.getElementById("grammarErrorQuestion").textContent=u.error.q;
  renderGrammarOptions("grammarErrorOptions",`grammar-error-${id}`,u.error.a);
  document.getElementById("grammarChooseQuestion").textContent=u.choose.q;
  renderGrammarOptions("grammarChooseOptions",`grammar-choose-${id}`,u.choose.a);

  document.getElementById("grammarTransformPrompt").textContent=u.transform.prompt;
  document.getElementById("grammarTransformInput").value="";
  document.getElementById("grammarProductionPrompt").textContent=u.production.prompt;
  document.getElementById("grammarProductionInput").value="";
  document.getElementById("grammarProductionChecks").innerHTML=u.production.checks.map((x,i)=>`<label><input type="checkbox" id="grammar-prod-${id}-${i}"><span>${x}</span></label>`).join("");

  ["grammarErrorFeedback","grammarChooseFeedback","grammarTransformFeedback","grammarRepairFeedback"].forEach(fid=>{
    const f=document.getElementById(fid); f.className="activity-summary"; f.textContent="";
  });
  document.getElementById("grammarWorkspaceStatus").textContent="Repair in progress";
  document.getElementById("grammarWorkspace").hidden=false;
  document.querySelector(".grammar-queue-shell").hidden=true;
  document.querySelector(".grammar-library-shell").hidden=true;
  document.querySelector(".grammar-philosophy").hidden=true;
  document.getElementById("grammarWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
}
function closeGrammarWorkspace(){
  document.getElementById("grammarWorkspace").hidden=true;
  document.querySelector(".grammar-queue-shell").hidden=false;
  document.querySelector(".grammar-library-shell").hidden=false;
  document.querySelector(".grammar-philosophy").hidden=false;
  currentGrammarUnitId=null;
  renderGrammarRepair();
  document.getElementById("grammar-lab").scrollIntoView({behavior:"smooth",block:"start"});
}
function recordGrammarClosedResult(kind,correct){
  grammarClosedResults[kind]=correct;
}
function checkGrammarError(){
  if(!currentGrammarUnitId)return;
  const u=grammarRepairUnits[currentGrammarUnitId];
  const picked=document.querySelector(`input[name="grammar-error-${currentGrammarUnitId}"]:checked`);
  const fb=document.getElementById("grammarErrorFeedback");
  if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose an answer first.";return;}
  const ok=Number(picked.value)===u.error.c;
  recordGrammarClosedResult("error",ok);
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${u.error.explain}`:`Not quite. Best answer: “${u.error.a[u.error.c]}” — ${u.error.explain}`;
}
function checkGrammarChoose(){
  if(!currentGrammarUnitId)return;
  const u=grammarRepairUnits[currentGrammarUnitId];
  const picked=document.querySelector(`input[name="grammar-choose-${currentGrammarUnitId}"]:checked`);
  const fb=document.getElementById("grammarChooseFeedback");
  if(!picked){fb.className="activity-summary neutral";fb.textContent="Choose an answer first.";return;}
  const ok=Number(picked.value)===u.choose.c;
  recordGrammarClosedResult("choose",ok);
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${u.choose.explain}`:`Not quite. Best answer: “${u.choose.a[u.choose.c]}” — ${u.choose.explain}`;
}
function checkGrammarTransform(){
  if(!currentGrammarUnitId)return;
  const u=grammarRepairUnits[currentGrammarUnitId];
  const value=normaliseGrammarAnswer(document.getElementById("grammarTransformInput").value);
  const accepted=u.transform.accepted.map(normaliseGrammarAnswer);
  const ok=accepted.includes(value);
  recordGrammarClosedResult("transform",ok);
  const fb=document.getElementById("grammarTransformFeedback");
  if(!value){fb.className="activity-summary neutral";fb.textContent="Type your repaired sentence first.";return;}
  fb.className=`activity-summary ${ok?"correct":"wrong"}`;
  fb.textContent=ok?`Correct ✓ ${u.transform.explain}`:`Target: “${u.transform.target}” — ${u.transform.explain}`;
}
function completeGrammarRepair(){
  if(!currentGrammarUnitId)return;
  const u=grammarRepairUnits[currentGrammarUnitId];
  const closedValues=Object.values(grammarClosedResults);
  const completedClosed=closedValues.filter(v=>v!==null).length;
  const correctClosed=closedValues.filter(Boolean).length;
  const checks=[...document.querySelectorAll(`#grammarProductionChecks input[type="checkbox"]`)];
  const checked=checks.filter(x=>x.checked).length;
  const production=document.getElementById("grammarProductionInput").value.trim();
  const fb=document.getElementById("grammarRepairFeedback");

  if(completedClosed<3){
    fb.className="activity-summary neutral";
    fb.textContent="Complete the three closed repair tasks first.";
    return;
  }
  if(correctClosed<2){
    fb.className="activity-summary wrong";
    fb.textContent=`${correctClosed} / 3 closed tasks correct. Review the rule and repair at least two before completing the unit.`;
    return;
  }
  if(production.length<20 || checked<3){
    fb.className="activity-summary neutral";
    fb.textContent="Use the target grammar in the short work task and check at least three criteria before completing the unit.";
    return;
  }

  const state=loadGrammarRepairState();
  state.attempts++;
  state.closedCorrect+=correctClosed;
  state.closedTotal+=3;
  state.unitAttempts[currentGrammarUnitId]=(state.unitAttempts[currentGrammarUnitId]||0)+1;
  if(!state.completed.includes(currentGrammarUnitId))state.completed.push(currentGrammarUnitId);
  saveGrammarRepairState(state);
  document.getElementById("grammarWorkspaceStatus").textContent="Repair completed ✓";
  fb.className="activity-summary correct";
  fb.textContent=`Repair completed ✓ ${correctClosed} / 3 closed tasks correct and ${checked} / ${checks.length} production checks confirmed. Reuse this structure in the Speaking Lab or your next cyber module.`;
  updateGrammarRepairStats();
  if(typeof renderDashboard==="function")renderDashboard();
}
function initGrammarRepairLab(){
  if(!document.getElementById("grammar-lab"))return;
  document.getElementById("refreshGrammarQueueBtn")?.addEventListener("click",renderGrammarRepair);
  document.getElementById("closeGrammarWorkspaceBtn")?.addEventListener("click",closeGrammarWorkspace);
  document.getElementById("checkGrammarErrorBtn")?.addEventListener("click",checkGrammarError);
  document.getElementById("checkGrammarChooseBtn")?.addEventListener("click",checkGrammarChoose);
  document.getElementById("checkGrammarTransformBtn")?.addEventListener("click",checkGrammarTransform);
  document.getElementById("completeGrammarRepairBtn")?.addEventListener("click",completeGrammarRepair);
  renderGrammarRepair();
}


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




// V7 · Speaking Lab
const speakingStateKey="ebackontrack-v7-speaking";

const speakingModes={
  quick:{
    label:"QUICK RESPONSE",title:"Answer without building the perfect sentence first",prep:15,duration:30,phraseCount:1,
    categories:["SOC & Alerts","Clients","Meetings"],
    prompts:[
      "A client asks: “What exactly does your SOC monitor?” Give a clear, non-technical answer.",
      "A colleague asks what you do when a new alert arrives. Explain the first steps.",
      "A client asks why one suspicious login is not automatically proof of compromise.",
      "Explain the difference between detecting an event and confirming an incident.",
      "A manager asks what information you need before escalating an alert."
    ]
  },
  explain:{
    label:"EXPLAIN IT SIMPLY",title:"Turn cyber jargon into client English",prep:30,duration:60,phraseCount:2,
    categories:["Clients","Risk","SOC & Alerts"],
    prompts:[
      "Explain to a non-technical client why a critical vulnerability does not automatically mean their system has been compromised.",
      "Explain what a false positive is and why analysts still need to investigate alerts.",
      "Explain lateral movement without assuming the client knows the term.",
      "Explain why MFA reduces risk but does not make an account impossible to compromise.",
      "Explain the difference between likelihood and impact when you assess cyber risk.",
      "Explain why threat-actor attribution is often uncertain even when some indicators match."
    ]
  },
  incident:{
    label:"INCIDENT UPDATE",title:"Give a structured client update",prep:45,duration:90,phraseCount:3,
    categories:["Incidents","Clients","Risk"],
    prompts:[
      "09:20 UTC: unusual sign-in on a privileged account. The session has been disabled. No evidence of lateral movement or data exfiltration so far. Identity and endpoint logs are still being reviewed. Give the client an update and set the next communication point.",
      "Several endpoints generated suspicious PowerShell alerts. Two devices have been isolated. The team has confirmed execution but not persistence. Explain what is known, what is still being checked and what happens next.",
      "A service account authenticated from an unfamiliar country. The credentials have been rotated and active sessions revoked. You cannot yet confirm whether the access was malicious. Give a calm 90-second update.",
      "A client-facing web service has a critical vulnerability. There is no evidence of exploitation in the available telemetry. A patch is available but deployment requires a maintenance window. Explain the immediate risk and recommendation."
    ]
  },
  meeting:{
    label:"MEETING UNDER PRESSURE",title:"React naturally when the conversation moves fast",prep:15,duration:45,phraseCount:2,
    categories:["Meetings","Clients","Risk"],
    prompts:[
      "The client says: “So this proves the attacker stole our data.” You do not have evidence of exfiltration. Correct the conclusion diplomatically.",
      "You did not catch which privileged account the client mentioned. Interrupt and clarify without derailing the meeting.",
      "A manager asks for a definite answer on attribution, but the evidence is incomplete. Respond without sounding evasive.",
      "The client asks a detailed question you cannot answer until you check the logs. Buy time professionally and set an expectation.",
      "A colleague uses a very technical explanation and the client looks lost. Step in and reformulate the point in plain English."
    ]
  },
  roleplay:{
    label:"CLIENT ROLEPLAY",title:"Handle a worried client across three turns",prep:30,duration:45,phraseCount:3,
    categories:["Clients","Meetings","Incidents","Risk"],
    prompts:[
      "A privileged-account alert has been escalated. The client is worried that sensitive data may have been stolen.",
      "A critical vulnerability has been announced in software the client uses. They want to know if they have already been compromised.",
      "Several authentication alerts occurred overnight. The client wants an immediate explanation before the investigation is complete."
    ]
  }
};

const roleplaySets=[
  [
    "Is this definitely an attack?",
    "So are you saying our data may already have been stolen?",
    "What exactly do you need us to do right now?"
  ],
  [
    "If the vulnerability is critical, doesn't that mean we're already compromised?",
    "Can you guarantee that nobody exploited it?",
    "What should we prioritise before the maintenance window?"
  ],
  [
    "Why did the SOC not block this immediately?",
    "How much of our environment is actually affected?",
    "When will you be able to give us a firmer answer?"
  ]
];

const unexpectedClientQuestions=[
  "Can you say that in simpler terms?",
  "How confident are you in that assessment?",
  "What evidence would change your conclusion?",
  "Does this mean the incident is contained?",
  "What should we do in the next thirty minutes?",
  "Why are you not able to confirm that yet?",
  "Could this still be a false positive?",
  "What is the worst realistic impact at this stage?",
  "When will we know more?",
  "Which part of the investigation is still outstanding?",
  "Do you need anything from our internal team?",
  "Are you recommending that we take the system offline?"
];

const emergencyGroups=[
  {title:"I didn't catch it",ids:["meet-say-again","meeting-run-by","meet-follow"]},
  {title:"I need thinking time",ids:["meet-think","meeting-come-back","meeting-no-jump"]},
  {title:"Let me clarify",ids:["meeting-understood","meet-put-another-way","meet-does-make-sense"]},
  {title:"Evidence is incomplete",ids:["client-current-assessment","client-what-we-know","client-not-confirmed"]},
  {title:"Reassure without overpromising",ids:["inc-so-far","risk-immediate-reduced","client-doesnt-mean"]},
  {title:"Close with next steps",ids:["inc-next-update","inc-keep-posted","client-written-update"]}
];

let currentSpeakingMode=null;
let currentSpeakingPromptIndex=0;
let currentSpeakingPhraseIds=[];
let currentRoleplaySet=null;
let currentRoleplayTurn=0;
let speakingRecorder=null;
let speakingAudioChunks=[];
let prepTimerInterval=null;
let speakingTimerInterval=null;
let currentRecordedSeconds=0;
let currentAttemptRecordedSeconds=0;
let speakingPlaybackUrl=null;

function loadSpeakingState(){
  try{
    const s=JSON.parse(localStorage.getItem(speakingStateKey))||{};
    return {attempts:s.attempts||0,seconds:s.seconds||0,modes:s.modes||{},lastAttempt:s.lastAttempt||null};
  }catch(e){return {attempts:0,seconds:0,modes:{},lastAttempt:null};}
}
function saveSpeakingState(s){localStorage.setItem(speakingStateKey,JSON.stringify(s));}
function speakingTime(seconds){
  const m=Math.floor(seconds/60),s=seconds%60;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
function renderSpeakingStats(){
  const s=loadSpeakingState();
  const a=document.getElementById("speakingAttempts"),m=document.getElementById("speakingMinutes"),modes=document.getElementById("speakingModes");
  if(a)a.textContent=s.attempts;
  if(m)m.textContent=(s.seconds/60).toFixed(s.seconds>=600?0:1);
  if(modes)modes.textContent=`${Object.keys(s.modes).filter(k=>s.modes[k]>0).length} / 5`;
}
function getSpeakingPhraseIds(mode){
  const cfg=speakingModes[mode],state=loadPhraseState();
  const saved=Object.keys(state.items).filter(id=>{
    const item=findPhraseItem(id);
    return item&&cfg.categories.includes(item.category);
  });
  const fallback=phrasebookItems.filter(item=>cfg.categories.includes(item.category)).map(x=>x.id);
  const pool=[...saved,...fallback.filter(id=>!saved.includes(id))];
  const chosen=[];
  let cursor=(currentSpeakingPromptIndex*2 + (Date.now()%7))%Math.max(1,pool.length);
  while(chosen.length<cfg.phraseCount&&chosen.length<pool.length){
    const id=pool[cursor%pool.length];
    if(!chosen.includes(id))chosen.push(id);
    cursor+=3;
  }
  return chosen;
}
function renderSpeakingPhrases(){
  const box=document.getElementById("speakingRequiredPhrases");if(!box)return;
  const saved=loadPhraseState().items;
  box.innerHTML=currentSpeakingPhraseIds.map(id=>{
    const item=findPhraseItem(id);if(!item)return "";
    return `<label class="speaking-required-phrase">
      <input type="checkbox" data-speaking-phrase-used="${id}">
      <div><strong>${item.phrase}</strong><small>${saved[id]?"From your Phrasebook":"Starter phrase · not saved yet"}</small></div>
      <button class="icon-button" type="button" data-speaking-hear="${id}" aria-label="Hear phrase">🔊</button>
    </label>`;
  }).join("");
  box.querySelectorAll("[data-speaking-hear]").forEach(btn=>btn.addEventListener("click",()=>{
    const item=findPhraseItem(btn.dataset.speakingHear);if(item)phraseSpeak(item.phrase);
  }));
}
function pickPrompt(mode,forceNew=false){
  const cfg=speakingModes[mode];
  if(forceNew)currentSpeakingPromptIndex=(currentSpeakingPromptIndex+1)%cfg.prompts.length;
  else currentSpeakingPromptIndex=Math.floor(Math.random()*cfg.prompts.length);
  if(mode==="roleplay"){
    currentRoleplaySet=roleplaySets[currentSpeakingPromptIndex%roleplaySets.length];
    currentRoleplayTurn=0;
  }
  currentSpeakingPhraseIds=getSpeakingPhraseIds(mode);
}
function roleplayMarkup(){
  if(currentSpeakingMode!=="roleplay"||!currentRoleplaySet)return "";
  return `<div class="roleplay-turns">
    ${currentRoleplaySet.map((q,i)=>`<div class="roleplay-turn ${i===currentRoleplayTurn?"current":i<currentRoleplayTurn?"done":""}">
      <span>CLIENT TURN ${i+1}</span><p>${i<=currentRoleplayTurn?q:"Next question hidden until you respond."}</p>
    </div>`).join("")}
    <button class="secondary-button" id="nextRoleplayTurnBtn" type="button" ${currentRoleplayTurn>=2?"disabled":""}>Reveal next client turn →</button>
  </div>`;
}
function renderSpeakingChallenge(){
  const cfg=speakingModes[currentSpeakingMode];if(!cfg)return;
  const prompt=cfg.prompts[currentSpeakingPromptIndex];
  document.getElementById("speakingModeLabel").textContent=cfg.label;
  document.getElementById("speakingPromptTitle").textContent=cfg.title;
  document.getElementById("speakingPrompt").innerHTML=`${prompt}${roleplayMarkup()}`;
  document.getElementById("prepTimeDisplay").textContent=speakingTime(cfg.prep);
  document.getElementById("speakTimeDisplay").textContent=currentSpeakingMode==="roleplay"?"00:45 / turn":speakingTime(cfg.duration);
  document.getElementById("liveSpeakingTimer").textContent=speakingTime(cfg.duration);
  document.getElementById("speakingStatusPill").textContent="Ready";
  document.getElementById("speakingKeywords").value="";
  document.getElementById("keywordCount").textContent="0";
  document.getElementById("clientQuestionBox").hidden=true;
  document.getElementById("speakingAttemptFeedback").textContent="";
  document.querySelectorAll("[data-speaking-check]").forEach(x=>x.checked=false);
  const playback=document.getElementById("speakingPlayback");
  playback.hidden=true;playback.removeAttribute("src");
  document.getElementById("speakingRecordingStatus").textContent="Microphone access is requested only when you start recording.";
  document.getElementById("speakingRecordBtn").disabled=false;
  document.getElementById("speakingStopBtn").disabled=true;
  const prepBtn=document.getElementById("startPrepBtn");
  prepBtn.disabled=false;prepBtn.textContent="Start preparation timer";
  currentRecordedSeconds=0;currentAttemptRecordedSeconds=0;
  renderSpeakingPhrases();
  bindRoleplayButton();
}
function bindRoleplayButton(){
  document.getElementById("nextRoleplayTurnBtn")?.addEventListener("click",()=>{
    if(currentRoleplayTurn<2){
      currentRoleplayTurn++;
      document.getElementById("speakingPrompt").innerHTML=`${speakingModes.roleplay.prompts[currentSpeakingPromptIndex]}${roleplayMarkup()}`;
      bindRoleplayButton();
      const q=currentRoleplaySet[currentRoleplayTurn];
      phraseSpeak(q);
    }
  });
}
function openSpeakingMode(mode){
  if(!speakingModes[mode])return;
  clearInterval(prepTimerInterval);clearInterval(speakingTimerInterval);
  currentSpeakingMode=mode;pickPrompt(mode);
  const w=document.getElementById("speakingWorkspace");w.hidden=false;
  renderSpeakingChallenge();
  w.scrollIntoView({behavior:"smooth",block:"start"});
}
function closeSpeakingMode(){
  clearInterval(prepTimerInterval);clearInterval(speakingTimerInterval);
  if(speakingRecorder?.state==="recording")speakingRecorder.stop();
  document.getElementById("speakingWorkspace").hidden=true;
  document.getElementById("speaking-lab").scrollIntoView({behavior:"smooth",block:"start"});
}
function startPrepTimer(){
  const cfg=speakingModes[currentSpeakingMode];if(!cfg)return;
  clearInterval(prepTimerInterval);
  let left=cfg.prep;
  const out=document.getElementById("prepTimeDisplay"),btn=document.getElementById("startPrepBtn");
  btn.disabled=true;document.getElementById("speakingStatusPill").textContent="Preparing";
  out.textContent=speakingTime(left);
  prepTimerInterval=setInterval(()=>{
    left--;out.textContent=speakingTime(Math.max(0,left));
    if(left<=0){
      clearInterval(prepTimerInterval);btn.disabled=false;btn.textContent="Preparation finished";
      document.getElementById("speakingStatusPill").textContent="Speak now";
    }
  },1000);
}
async function startSpeakingRecording(){
  const cfg=speakingModes[currentSpeakingMode];if(!cfg)return;
  clearInterval(speakingTimerInterval);
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    speakingAudioChunks=[];
    speakingRecorder=new MediaRecorder(stream);
    speakingRecorder.ondataavailable=e=>speakingAudioChunks.push(e.data);
    speakingRecorder.onstop=()=>{
      currentAttemptRecordedSeconds+=currentRecordedSeconds;
      const blob=new Blob(speakingAudioChunks,{type:"audio/webm"});
      if(speakingPlaybackUrl)URL.revokeObjectURL(speakingPlaybackUrl);
      speakingPlaybackUrl=URL.createObjectURL(blob);
      const playback=document.getElementById("speakingPlayback");
      playback.src=speakingPlaybackUrl;playback.hidden=false;
      document.getElementById("speakingRecordingStatus").textContent="Recording ready. Listen back before you log the attempt. Nothing has been uploaded.";
      stream.getTracks().forEach(t=>t.stop());
      document.getElementById("speakingRecordBtn").disabled=false;
      document.getElementById("speakingStopBtn").disabled=true;
      document.getElementById("speakingStatusPill").textContent="Listen back";
    };
    speakingRecorder.start();
    document.getElementById("speakingRecordBtn").disabled=true;
    document.getElementById("speakingStopBtn").disabled=false;
    document.getElementById("speakingRecordingStatus").textContent="Recording… keep going even if you hesitate.";
    document.getElementById("speakingStatusPill").textContent="Speaking";
    let left=cfg.duration;
    currentRecordedSeconds=0;
    const timer=document.getElementById("liveSpeakingTimer");
    timer.textContent=speakingTime(left);
    speakingTimerInterval=setInterval(()=>{
      left--;currentRecordedSeconds++;
      timer.textContent=speakingTime(Math.max(0,left));
      if(left<=0){
        clearInterval(speakingTimerInterval);
        if(speakingRecorder?.state==="recording")speakingRecorder.stop();
      }
    },1000);
  }catch(e){
    document.getElementById("speakingRecordingStatus").textContent="Microphone access was not granted. You can still do the speaking task aloud and log the attempt manually.";
  }
}
function stopSpeakingRecording(){
  clearInterval(speakingTimerInterval);
  if(speakingRecorder?.state==="recording")speakingRecorder.stop();
}
function unexpectedQuestion(){
  const q=unexpectedClientQuestions[Math.floor(Math.random()*unexpectedClientQuestions.length)];
  document.getElementById("clientQuestionText").textContent=q;
  document.getElementById("clientQuestionBox").hidden=false;
  document.getElementById("clientQuestionSpeakBtn").dataset.question=q;
}
function applySpeakingPhraseReview(){
  const phraseState=loadPhraseState();
  currentSpeakingPhraseIds.forEach(id=>{
    const checkbox=document.querySelector(`[data-speaking-phrase-used="${id}"]`);
    const entry=phraseState.items[id];
    if(entry&&!checkbox?.checked){
      entry.level=Math.max(0,(entry.level||0)-1);
      entry.due=Date.now();
      entry.lastRating="speaking-missed";
    }
  });
  savePhraseState(phraseState);
  renderPhrasebookStats();renderReviewCard();
}
function logSpeakingAttempt(){
  if(!currentSpeakingMode)return;
  const state=loadSpeakingState();
  const checked=document.querySelectorAll("[data-speaking-check]:checked").length;
  const used=document.querySelectorAll("[data-speaking-phrase-used]:checked").length;
  state.attempts++;
  state.seconds+=Math.max(10,currentAttemptRecordedSeconds||currentRecordedSeconds||speakingModes[currentSpeakingMode].duration);
  state.modes[currentSpeakingMode]=(state.modes[currentSpeakingMode]||0)+1;
  state.lastAttempt=Date.now();
  saveSpeakingState(state);
  applySpeakingPhraseReview();
  renderSpeakingStats();
  const totalPhrases=currentSpeakingPhraseIds.length;
  const fb=document.getElementById("speakingAttemptFeedback");
  fb.textContent=`Attempt logged · self-check ${checked}/5 · target phrases used ${used}/${totalPhrases}${used<totalPhrases?" · missed saved phrases are back in your review queue":""}.`;
  document.getElementById("speakingStatusPill").textContent="Attempt logged";
}
function renderEmergencyEnglish(){
  const grid=document.getElementById("emergencyPhraseGrid");if(!grid)return;
  const state=loadPhraseState();
  grid.innerHTML=emergencyGroups.map(group=>`<section class="emergency-group">
    <h3>${group.title}</h3>
    ${group.ids.map(id=>{
      const item=findPhraseItem(id);if(!item)return "";
      const saved=!!state.items[id];
      return `<div class="emergency-phrase">
        <span>${item.phrase}</span>
        <button type="button" data-emergency-speak="${id}" aria-label="Hear phrase">🔊</button>
        <button type="button" data-emergency-save="${id}" aria-label="Save phrase">${saved?"✓":"＋"}</button>
      </div>`;
    }).join("")}
  </section>`).join("");
  grid.querySelectorAll("[data-emergency-speak]").forEach(btn=>btn.addEventListener("click",()=>{
    const item=findPhraseItem(btn.dataset.emergencySpeak);if(item)phraseSpeak(item.phrase);
  }));
  grid.querySelectorAll("[data-emergency-save]").forEach(btn=>btn.addEventListener("click",()=>{
    addPhrase(btn.dataset.emergencySave);renderEmergencyEnglish();
  }));
}
function openEmergency(){
  renderEmergencyEnglish();
  document.getElementById("emergencyModal").hidden=false;
  document.body.style.overflow="hidden";
}
function closeEmergency(){
  document.getElementById("emergencyModal").hidden=true;
  document.body.style.overflow="";
}
function initSpeakingLab(){
  if(!document.getElementById("speaking-lab"))return;
  renderSpeakingStats();
  document.querySelectorAll("[data-speaking-mode]").forEach(btn=>btn.addEventListener("click",()=>openSpeakingMode(btn.dataset.speakingMode)));
  document.getElementById("surpriseSpeakingBtn")?.addEventListener("click",()=>{
    const modes=Object.keys(speakingModes);openSpeakingMode(modes[Math.floor(Math.random()*modes.length)]);
  });
  document.getElementById("closeSpeakingBtn")?.addEventListener("click",closeSpeakingMode);
  document.getElementById("startPrepBtn")?.addEventListener("click",startPrepTimer);
  document.getElementById("speakingRecordBtn")?.addEventListener("click",startSpeakingRecording);
  document.getElementById("speakingStopBtn")?.addEventListener("click",stopSpeakingRecording);
  document.getElementById("clientQuestionBtn")?.addEventListener("click",unexpectedQuestion);
  document.getElementById("clientQuestionSpeakBtn")?.addEventListener("click",e=>phraseSpeak(e.currentTarget.dataset.question||document.getElementById("clientQuestionText").textContent));
  document.getElementById("logSpeakingAttemptBtn")?.addEventListener("click",logSpeakingAttempt);
  document.getElementById("newSpeakingPromptBtn")?.addEventListener("click",()=>{
    pickPrompt(currentSpeakingMode,true);renderSpeakingChallenge();
  });
  document.getElementById("speakingKeywords")?.addEventListener("input",e=>{
    document.getElementById("keywordCount").textContent=e.target.value.length;
  });
  [document.getElementById("emergencyEnglishBtn"),document.getElementById("emergencyEnglishInlineBtn")].filter(Boolean).forEach(b=>b.addEventListener("click",openEmergency));
  document.getElementById("emergencyCloseBtn")?.addEventListener("click",closeEmergency);
  document.querySelector("[data-emergency-close]")?.addEventListener("click",closeEmergency);
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!document.getElementById("emergencyModal")?.hidden)closeEmergency();});
}


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




// V16 · PWA, offline, mobile navigation & accessibility
const accessibilityStateKey="ebackontrack-v16-accessibility";
let deferredInstallPrompt=null;
let appToastTimer=null;

function showAppToast(message,timeout=3200){
  const toast=document.getElementById("appToast");if(!toast)return;
  toast.textContent=message;toast.hidden=false;
  clearTimeout(appToastTimer);
  appToastTimer=setTimeout(()=>toast.hidden=true,timeout);
}
function isStandaloneMode(){
  return window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone===true;
}
function updateInstallStatus(){
  const btn=document.getElementById("installAppBtn");
  const text=document.getElementById("installStatusText");
  if(isStandaloneMode()){
    if(btn){btn.textContent="App installed";btn.disabled=true;}
    if(text)text.textContent="Running in installed-app mode on this device.";
    return;
  }
  if(btn){btn.textContent="Install app";btn.disabled=false;}
  if(text)text.textContent=deferredInstallPrompt
    ?"Installation is available on this device."
    :"Install from your browser menu if no install prompt appears.";
}
function manualInstallInstructions(){
  const ua=navigator.userAgent||"";
  if(/iPad|iPhone|iPod/.test(ua)){
    return "On iPhone/iPad: open the browser Share menu, then choose “Add to Home Screen”.";
  }
  if(/Android/i.test(ua)){
    return "On Android: use the browser menu and choose “Install app” or “Add to Home screen” if the install button is unavailable.";
  }
  return "On desktop: look for “Install” in the browser address bar or browser menu if the install button is unavailable.";
}
function openInstallDialog(){
  const dialog=document.getElementById("installDialog");if(!dialog)return;
  document.getElementById("manualInstallHelp").textContent=manualInstallInstructions();
  document.getElementById("confirmInstallBtn").hidden=isStandaloneMode();
  document.getElementById("installDialogMessage").textContent=isStandaloneMode()
    ?"The app is already installed on this device."
    :"Install the site for quicker access and an app-like experience. GitHub Pages provides the secure HTTPS connection required for installation.";
  dialog.hidden=false;
  document.body.style.overflow="hidden";
  dialog.querySelector(".app-dialog-close")?.focus();
}
function closeAppDialog(which){
  const id=which==="install"?"installDialog":"accessibilityDialog";
  const dialog=document.getElementById(id);if(!dialog)return;
  dialog.hidden=true;
  document.body.style.overflow="";
  if(which==="install")document.getElementById("installAppBtn")?.focus();
  else document.getElementById("accessibilityBtn")?.focus();
}
async function triggerInstall(){
  if(isStandaloneMode()){
    showAppToast("The app is already installed.");
    return;
  }
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    const choice=await deferredInstallPrompt.userChoice;
    deferredInstallPrompt=null;
    updateInstallStatus();
    if(choice?.outcome==="accepted"){
      closeAppDialog("install");
      showAppToast("Installation accepted. The app will use the same local progress.");
    }
    return;
  }
  document.getElementById("manualInstallHelp").textContent=manualInstallInstructions();
  showAppToast("Use your browser's install / Add to Home Screen option.");
}
function updateNetworkStatus(showOnlineToast=false){
  const el=document.getElementById("networkStatus");if(!el)return;
  const offline=!navigator.onLine;
  document.body.classList.toggle("is-offline",offline);
  if(offline){
    el.hidden=false;el.className="network-status offline";
    el.textContent="Offline mode · training content remains available; external resources need a connection.";
    document.getElementById("offlineReadyText").textContent="Offline mode active. Core training remains available.";
  }else{
    document.getElementById("offlineReadyText").textContent="The training app shell is available without a connection after first load.";
    if(showOnlineToast){
      el.hidden=false;el.className="network-status online";el.textContent="Back online.";
      setTimeout(()=>{if(navigator.onLine)el.hidden=true;},2200);
    }else el.hidden=true;
  }
}
function loadAccessibilityState(){
  try{
    const x=JSON.parse(localStorage.getItem(accessibilityStateKey))||{};
    return {
      textScale:String(x.textScale||"100"),
      readableFont:!!x.readableFont,
      highContrast:!!x.highContrast,
      spacious:!!x.spacious,
      underlineLinks:!!x.underlineLinks,
      reduceMotion:!!x.reduceMotion
    };
  }catch(e){
    return {textScale:"100",readableFont:false,highContrast:false,spacious:false,underlineLinks:false,reduceMotion:false};
  }
}
function saveAccessibilityState(state){
  localStorage.setItem(accessibilityStateKey,JSON.stringify(state));
}
function applyAccessibilityState(state=loadAccessibilityState()){
  document.documentElement.dataset.textScale=state.textScale;
  document.body.classList.toggle("a11y-readable-font",state.readableFont);
  document.body.classList.toggle("a11y-high-contrast",state.highContrast);
  document.body.classList.toggle("a11y-spacious",state.spacious);
  document.body.classList.toggle("a11y-underline-links",state.underlineLinks);
  document.body.classList.toggle("a11y-reduce-motion",state.reduceMotion);

  document.querySelectorAll("[data-text-scale]").forEach(btn=>{
    const active=btn.dataset.textScale===state.textScale;
    btn.classList.toggle("active",active);
    btn.setAttribute("aria-pressed",String(active));
  });
  const map={
    a11yReadableFont:"readableFont",
    a11yHighContrast:"highContrast",
    a11ySpacious:"spacious",
    a11yUnderlineLinks:"underlineLinks",
    a11yReduceMotion:"reduceMotion"
  };
  Object.entries(map).forEach(([id,key])=>{
    const el=document.getElementById(id);if(el)el.checked=state[key];
  });
}
function openAccessibilityDialog(){
  applyAccessibilityState();
  const dialog=document.getElementById("accessibilityDialog");if(!dialog)return;
  dialog.hidden=false;
  document.body.style.overflow="hidden";
  dialog.querySelector(".app-dialog-close")?.focus();
}
function updateAccessibilitySetting(key,value){
  const state=loadAccessibilityState();
  state[key]=value;saveAccessibilityState(state);applyAccessibilityState(state);
}
function resetAccessibility(){
  const state={textScale:"100",readableFont:false,highContrast:false,spacious:false,underlineLinks:false,reduceMotion:false};
  saveAccessibilityState(state);applyAccessibilityState(state);showAppToast("Accessibility display settings reset.");
}
function closeMobileNav(){
  const actions=document.getElementById("topActions");
  const btn=document.getElementById("mobileNavBtn");
  if(!actions||!btn)return;
  actions.classList.remove("mobile-open");
  btn.setAttribute("aria-expanded","false");
  btn.querySelector("[aria-hidden]") && (btn.querySelector("[aria-hidden]").textContent="☰");
}
function toggleMobileNav(){
  const actions=document.getElementById("topActions");
  const btn=document.getElementById("mobileNavBtn");
  if(!actions||!btn)return;
  const open=!actions.classList.contains("mobile-open");
  actions.classList.toggle("mobile-open",open);
  btn.setAttribute("aria-expanded",String(open));
  btn.querySelector("[aria-hidden]") && (btn.querySelector("[aria-hidden]").textContent=open?"×":"☰");
}
function interceptOfflineExternalLinks(e){
  const a=e.target.closest("a[href]");
  if(!a || navigator.onLine)return;
  try{
    const url=new URL(a.href,location.href);
    if(url.origin!==location.origin){
      e.preventDefault();
      showAppToast("This external resource needs an internet connection.");
    }
  }catch(err){}
}
async function registerOfflineSupport(){
  if(!("serviceWorker" in navigator))return;
  try{
    const registration=await navigator.serviceWorker.register("./service-worker.js");
    await navigator.serviceWorker.ready;
    document.documentElement.classList.add("service-worker-ready");
    if(navigator.onLine){
      document.getElementById("offlineReadyText").textContent="Offline cache ready on this device.";
    }
    registration.update().catch(()=>{});
  }catch(e){
    document.getElementById("offlineReadyText").textContent="Offline installation is unavailable in this browser context.";
  }
}
function initV16AppExperience(){
  applyAccessibilityState();
  updateNetworkStatus(false);
  updateInstallStatus();
  registerOfflineSupport();

  window.addEventListener("beforeinstallprompt",e=>{
    e.preventDefault();
    deferredInstallPrompt=e;
    updateInstallStatus();
  });
  window.addEventListener("appinstalled",()=>{
    deferredInstallPrompt=null;updateInstallStatus();showAppToast("App installed successfully.");
  });
  window.addEventListener("offline",()=>updateNetworkStatus(false));
  window.addEventListener("online",()=>updateNetworkStatus(true));

  document.getElementById("installAppBtn")?.addEventListener("click",openInstallDialog);
  document.getElementById("confirmInstallBtn")?.addEventListener("click",triggerInstall);
  document.getElementById("accessibilityBtn")?.addEventListener("click",openAccessibilityDialog);
  document.querySelectorAll("[data-app-dialog-close]").forEach(el=>el.addEventListener("click",()=>closeAppDialog(el.dataset.appDialogClose)));

  document.querySelectorAll("[data-text-scale]").forEach(btn=>btn.addEventListener("click",()=>updateAccessibilitySetting("textScale",btn.dataset.textScale)));
  const toggles={
    a11yReadableFont:"readableFont",
    a11yHighContrast:"highContrast",
    a11ySpacious:"spacious",
    a11yUnderlineLinks:"underlineLinks",
    a11yReduceMotion:"reduceMotion"
  };
  Object.entries(toggles).forEach(([id,key])=>{
    document.getElementById(id)?.addEventListener("change",e=>updateAccessibilitySetting(key,e.target.checked));
  });
  document.getElementById("resetAccessibilityBtn")?.addEventListener("click",resetAccessibility);

  document.getElementById("mobileNavBtn")?.addEventListener("click",toggleMobileNav);
  document.querySelectorAll("#topActions a").forEach(a=>a.addEventListener("click",closeMobileNav));
  window.addEventListener("resize",()=>{if(window.innerWidth>820)closeMobileNav();});
  document.addEventListener("click",interceptOfflineExternalLinks);

  document.addEventListener("keydown",e=>{
    if(e.key!=="Escape")return;
    if(!document.getElementById("installDialog")?.hidden)closeAppDialog("install");
    else if(!document.getElementById("accessibilityDialog")?.hidden)closeAppDialog("accessibility");
    else if(document.getElementById("topActions")?.classList.contains("mobile-open"))closeMobileNav();
  });
}


initPhrasebook();
initSpeakingLab();
initWorkEnglishLab();
initClientCallSimulator();
initAuthenticResourcesHub();
initPronunciationLab();
initWritingLab();
initDashboard();
initGrammarRepairLab();
initProgressVault();
initProgressChecks();
updateSmartHomeMode();
