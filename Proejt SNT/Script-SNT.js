function new_panel(Panel){
    document.getElementById("Menu").style.display = "none";
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
    var request = new XMLHttpRequest();
    var URLrequest = "https://github.com/LiketoIssue/Web-test/blob/main/Proejt%20SNT/Chapiter.json";
    request.open("GET", URLrequest);
    request.responseType = "json";
    request.send();

    let File;
    request.onload = function(){File = request.response;}
    
    document.getElementById("FileArea").innerHTML = "<button>"+File[Type][0]+"</button>";
}

function Mreturn(){
    document.getElementById("Menu").style.display = "block";
    document.getElementById("SherchPanel").style.display = "none";
}
