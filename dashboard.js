const members=[
{ref:"001",name:"John Mwangi",prev:20000,p1:3000,p2:2500,loan:10000,penalty:500,interest:1200},
{ref:"002",name:"Mary Wanjiku",prev:15000,p1:2000,p2:2000,loan:5000,penalty:0,interest:800},
{ref:"003",name:"Peter Otieno",prev:18000,p1:1500,p2:1500,loan:7000,penalty:200,interest:900},
{ref:"004",name:"Alice Akinyi",prev:22000,p1:3000,p2:3000,loan:0,penalty:0,interest:0},
{ref:"005",name:"David Kimani",prev:12000,p1:2500,p2:2500,loan:4000,penalty:100,interest:600},
{ref:"006",name:"Grace Njeri",prev:17000,p1:2000,p2:1500,loan:6000,penalty:300,interest:700},
{ref:"007",name:"Samuel Kariuki",prev:19000,p1:2200,p2:2100,loan:8000,penalty:150,interest:1000},
{ref:"008",name:"Ann Chebet",prev:14000,p1:1800,p2:1700,loan:3000,penalty:0,interest:500},
{ref:"009",name:"Brian Mutiso",prev:21000,p1:2600,p2:2400,loan:9000,penalty:400,interest:1100},
{ref:"010",name:"Lucy Atieno",prev:16000,p1:2000,p2:2000,loan:2000,penalty:0,interest:400}
];

const tbody=document.getElementById("tableBody");
let groupTotal=0;

members.forEach((m,i)=>{
let running=m.prev+m.p1+m.p2;
groupTotal+=running;

tbody.innerHTML+=`
<tr>
<td>${m.ref}</td>
<td>${m.name}</td>
<td>${m.prev}</td>
<td>${m.p1}</td>
<td>${m.p2}</td>
<td>${running}</td>
<td>${m.loan}</td>
<td>2026-03-01</td>
<td>${m.penalty}</td>
<td>${m.interest}</td>
<td><button onclick="downloadRow(${i})">PDF</button></td>
</tr>`;
});

document.getElementById("groupBalance").innerText=groupTotal;

// PDF FULL
document.getElementById("downloadAll").onclick=()=>{
const {jsPDF}=window.jspdf;
const doc=new jsPDF();
doc.text("Unity SACCO Report",10,10);
let y=20;

members.forEach(m=>{
doc.text(`${m.ref} ${m.name} Total:${m.prev+m.p1+m.p2}`,10,y);
y+=10;
});
doc.text("Group Balance: "+groupTotal,10,y+10);
doc.save("full_report.pdf");
};

// PDF ROW
function downloadRow(index){
const {jsPDF}=window.jspdf;
const doc=new jsPDF();
let m=members[index];
doc.text("Member Report",10,10);
doc.text(`Name: ${m.name}`,10,20);
doc.text(`Total Contribution: ${m.prev+m.p1+m.p2}`,10,30);
doc.text(`Loan Balance: ${m.loan}`,10,40);
doc.save(`${m.name}.pdf`);
}

// DARK MODE
darkModeBtn.onclick=()=>{
document.body.classList.toggle("dark");
localStorage.setItem("theme",
document.body.classList.contains("dark")?"dark":"light");
};

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

// NAV TOGGLE
menuToggle.onclick=()=>navMenu.classList.toggle("active");

// LOGOUT
logoutBtn.onclick=()=>logoutPopup.style.display="flex";
cancelLogout.onclick=()=>logoutPopup.style.display="none";
confirmLogout.onclick=()=>{
window.location="index.html";
};