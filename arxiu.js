//Fase 1
var Nomchar = new Array("D", "A", "V", "I", "D");
var i, p, x;
var Len = Nomchar.length;

document.write("Mostrem els valors de l'Array:");
document.write("<ul>");
for (i = 0; i < Len; i++)
{
    document.write(Nomchar[i] + "<br>");
}
document.write("</ul>");

//Fase 2
var missatge;
var Nom = 
[
    ['D', 'Con'],
    ['A', 'Voc'],
    ['V', 'Con'],
    ['I', 'Voc'],
    ['D', 'Con']
//    ['8', 'Num']
];
Len = Nom.length;

document.write("Indiquem quin tipus de lletra és cadascuna:" + "<br>");
for (i = 0; i < Len; i++)
{
    if (Nom[i][1] == "Num")
    {
        missatge = 'Els noms de persones no contenen números';
        document.write("(" + Nom[i][0] + ")" + missatge + "<br>");
    }
    else
    {
        if (Nom[i][1] == "Voc")
        {
            missatge = 'Vocal';
        }
        else
        {
            missatge = 'Consonant';
        }
        document.write("(" + Nom[i][0] + ")" + missatge + "<br>");
    }
        
}
//Fase 3
document.write("Guardem les lletres del Nom i determinem quants cops apareixen" + "<br>");
var Dict = new Array();
var trobat = false;
var Leng;

for (i = 0; i < Len; i++)
{
    Leng = Dict.length;
    if (Nom[i][1] !== "Num")
    {
        trobat = false;
        for (p = 0; p < Leng; p++)
        {
            if ((Dict[p][0]) == (Nom[i][0]))
            {
                Dict[p][1] = Dict[p][1] + 1;
                trobat = true;
                break;
            }
        }
        if (trobat == false)
        {
            Dict.push([Nom[i][0], 1]);
        }
    }
}
for (i = 0; i < Leng; i++)
{
    document.write("La lletra " + Dict[i][0] + " apareix " + Dict[i][1] + " vegades" + "<br>");
}
//Fase 4
document.write("Ara juntem Nom i Cognom en una sola Array i la mostrem" + "<br>");
var Espai = 
[
    [' ', 'Esp']
]
var Cognom = 
[
    ['M', 'Con'],
    ['A', 'Voc'],
    ['N', 'Con'],
    ['Y', 'Con'],
    ['A', 'Voc']
];

var Complert = Nom.concat(Espai, Cognom);
var Elem = Complert.length;
for (i = 0; i < Elem; i++)
{
    document.write(Complert[i][0]);
}

