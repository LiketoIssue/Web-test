function new_panel(Panel){
    document.getElementById("Menu").style.display = "none";
    document.getElementById("COM").style.display = "none";
    document.getElementById("SherchPanel").style.display = "block";
    document.getElementById("NameSPanel").innerText = Panel;
    document.getElementById("NameSPanel").style.backgroundColor
    let Type;
    switch(Panel){
        case 'Français':
            document.getElementById("NameSPanel").style.backgroundColor = "#00ff6c";
            Type = 'Français';
            break;
        case 'Anglais':
            document.getElementById("NameSPanel").style.backgroundColor = "#8700ff";
            Type = 'Anglais';
            break;
        case 'Espagnol':
            document.getElementById("NameSPanel").style.backgroundColor = "#ffb600";
            Type = 'Espagnol';
            break;
        case 'Allemand':
            document.getElementById("NameSPanel").style.backgroundColor = "#317941";
            Type = 'Allemand';
            break;
        case 'Math':
            document.getElementById("NameSPanel").style.backgroundColor = "#ff0f00";
            Type = 'Math';
            break;
        case 'Physique':
            document.getElementById("NameSPanel").style.backgroundColor = "#b2ff00";
            Type = 'Physique';
            break;
        case 'Histoire':
            document.getElementById("NameSPanel").style.backgroundColor = "#00b2ff";
            Type = 'Histoire';
            break;
        case 'Géographie':
            document.getElementById("NameSPanel").style.backgroundColor = "#0008ff";
            Type = 'Géographie';
            break;
        case 'Education moral et civique':
            document.getElementById("NameSPanel").style.backgroundColor = "#885c09";
            Type = 'Education moral et civique';
            break;
        case 'Sience economique et sociale':
            document.getElementById("NameSPanel").style.backgroundColor = "#606bca";
            Type = 'Sience economique et sociale';
            break;
        case 'Sience numérique et technologique':
            document.getElementById("NameSPanel").style.backgroundColor = "#60cabd";
            Type = 'Sience numérique et technologique';
            break;
        case 'Sience de la vie et de la terre':
            document.getElementById("NameSPanel").style.backgroundColor = "#7fff68";
            Type = 'Sience de la vie et de la terre';
            break;
        default:
            break;
    }

    fetch("https://raw.githubusercontent.com/LiketoIssue/Web-test/main/Proejt%20SNT/Chapiter.json").then(response => {
        if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
        }
        return response.json();
    }).then(data => {
        console.log("Données reçues :", data);
        
        document.getElementById("FileArea").innerHTML = '<button class="BBack" onclick="Mback()">Menu</button>\n<p class="TitleM"><ins><strong>Chapitre</ins></strong></p>';
        for(const NameFile of data[Type]["chapitre"]){document.getElementById("FileArea").innerHTML += '<button class="Bchapiter" onclick="ChapiterContent('+data[Type]["chapitre"].indexOf(NameFile)+',\u0027'+Type+'\u0027)">'+NameFile+"</button>"}
    }).catch(error => {
        console.error("Erreur lors du chargement du JSON :", error);
    });
}

function Mback(Self){
    document.getElementById("Menu").style.display = "flex";
    document.getElementById("COM").style.display = "flex";
    document.getElementById(Self).style.display = "none";
}

function Mreturn(){
    document.getElementById("FileArea").style.display = "block";
    document.getElementById("CHC").style.display = "none";
}

function ChapiterContent(Index, Type){
    document.getElementById("FileArea").style.display = "none";
    document.getElementById("CHC").style.display = "block";

    fetch("https://raw.githubusercontent.com/LiketoIssue/Web-test/main/Proejt%20SNT/Chapiter.json").then(response => {
        if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
        }
        return response.json();
    }).then(data => {
        console.log("Données reçues :", data);
        
        document.getElementById("CHC").innerHTML = '<button class="BBack" onclick="Mreturn()">Retour</button>\n<p class="TitleM"><ins><strong>Cour</ins></strong></p>';
        for(const NElement of data[Type]["content"][Index]){
            if(NElement.substr(0,5) == "https"){document.getElementById("CHC").innerHTML += '<img src='+NElement+' alt="img">'}
            else {document.getElementById("CHC").innerHTML += '<p class="TXTcour">'+NElement+'</p>'}
        }
    }).catch(error => {
        console.error("Erreur lors du chargement du JSON :", error);
    });
}

function AddCt(){
    document.getElementById("Menu").style.display = "none";
    document.getElementById("COM").style.display = "none";
    document.getElementById("AddContent").style.display = "block";
}