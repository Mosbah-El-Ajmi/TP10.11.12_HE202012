var donnees = []
var table = ""

function initialiserPage()
{
	
	document.getElementsByTagName("SECTION")[1].innerHTML = "<table border=1pt><thead><th>Nom</th><th>Prénom</th><th>Numéro</th></thead><tbody id='passage'></tbody></table>";
	
}

function generateTable(formule)
{

	table = table + "<tr><td>"+formule['nom']+"</td><td>"+formule['prénom']+"</td><td>"+formule['numéro']+"</td></tr>";

	
	document.getElementById('passage').innerHTML = table;
}


function ajouterFormulaire(formulaire)
{
	var formule = {}
	var nom = document.getElementById('nom').value;
	var prénom = document.getElementById('prénom').value;
	var numéro = document.getElementById('numéro').value;
	
	formule['nom'] = nom;
	formule['prénom'] = prénom;
	formule['numéro'] = numéro;
	
	
	//test de répétitivité
	if(donnees.length > 0)
	{
		for(let i in donnees)
		{
			if(donnees[i]['nom'] === formule['nom'] && donnees[i]['prénom'] === formule['prénom'] && donnees[i]['numéro'] === formule['numéro'] )
			{
				alert("Déja inscrit!");
				break;
			}
			else if (i == (donnees.length-1))
			{
				donnees.push(formule);
				generateTable(formule);
			}
		}
	}
	//Premier cas
	else
	{
		donnees.push(formule);
		generateTable(formule);
	}
}