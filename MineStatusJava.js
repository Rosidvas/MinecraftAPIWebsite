
const topOne = document.getElementById('topServ1');
const topTwo = document.getElementById('topServ2');
const topThree = document.getElementById('topServ3');


const topServ1players= document.getElementById('topServ1players');

window.onload = getTopservers;


function getTopservers() {
	fetch('https://api.mcsrvstat.us/2/mc.hypixel.net')
	.then(response => response.json())
	.then(data => {
		console.log(data.online)  
        console.log(data.players.max)   
		const mcStatus = data.online;
        const mcLogo = data.icon;
        const mcPlayers = data.players.online;
        const mcPlayerstotal = data.players.max;
        const statusImg = document.getElementById('statusOne');
        const iconImg = document.getElementById('iconOne');
        
        if(mcStatus == true)
        {      
            statusImg.innerHTML = 'Online'; 
        }
        else if(mcStatus == false)
        {
            statusImg.innerHTML = 'Offline';
        }
        iconImg.src = mcLogo;
        topServ1players.innerHTML = ''+mcPlayers,+'/'+mcPlayerstotal+'';
	})
    .catch(error => {
        topServ1players.innerHTML = 'Error: Blocked Network';
    })

    fetch('https://api.mcsrvstat.us/2/play.hivemc.com')
    .then(response => response.json())
	.then(data => {
		console.log(data.online)  
        console.log(data.players.max)   
		const mcStatus = data.online;
        const mcLogo = data.icon;
        const mcPlayers = data.players.online;
        const mcPlayerstotal = data.players.max;
        const statusImg = document.getElementById('statusTwo');
        const iconImg = document.getElementById('iconTwo');
        
        if(mcStatus == true)
        {      
            statusImg.innerHTML = 'Online'; 
        }
        else if(mcStatus == false)
        {
            statusImg.innerHTML = 'Offline';
        }
        iconImg.src = mcLogo;
        topServ2players.innerHTML = ''+mcPlayers,+'/'+mcPlayerstotal+'';
    })
    .catch(error => {
        topServ1players.innerHTML = 'Error: Blocked Network';
    })

    fetch('https://api.mcsrvstat.us/2/eu.mineplex.com')
    .then(response => response.json())
	.then(data => {
        console.log(data)
		console.log(data.online)  
        console.log(data.players.max)   
		const mcStatus = data.online;
        const mcLogo = data.icon;
        const mcPlayers = data.players.online;
        const mcPlayerstotal = data.players.max;
        const statusImg = document.getElementById('statusThree');
        const iconImg = document.getElementById('iconThree');
        
        if(mcStatus == true)
        {      
            statusImg.innerHTML = 'Online'; 
        }
        else if(mcStatus == false)
        {
            statusImg.innerHTML = 'Offline';
        }
        iconImg.src = mcLogo;
        topServ3players.innerHTML = ''+mcPlayers,+'/'+mcPlayerstotal+'';
    })
    .catch(error => {
        topServ1players.innerHTML = 'Error: Blocked Network';
    })
}

const searchBar = document.getElementById('searchBar')
const searchBtn = document.getElementById('serverSearch')


searchBtn.addEventListener('click', serverSearch)

function serverSearch() {
    let ipAdress = searchBar.value
    let adress = ipAdress
    
    fetch(`https://api.mcsrvstat.us/2/${adress}`)
    .then(response => response.json())
	.then(data => {

        console.log(data.online)  
        console.log(data.players.max) 

        const mcStatus = data.online;
        const mcLogo = data.icon;
        const mcPlayers = data.players.online;
        const mcPlayerstotal = data.players.max;
        const statusImg = document.getElementById('statusOne');
        const iconImg = document.getElementById('iconOne');
        
        if(mcStatus == true)
        {      
            statusImg.innerHTML = 'Online'; 
        }
        else if(mcStatus == false)
        {
            statusImg.innerHTML = 'Offline';
        }
        iconImg.src = mcLogo;
        topServ1players.innerHTML = ''+mcPlayers,+'/'+mcPlayerstotal+'';

    })
    .catch(error => {
        alert('unidentified server');
    })
}




