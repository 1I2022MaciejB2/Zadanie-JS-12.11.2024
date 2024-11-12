const jednostka = prompt('Podaj jednostkę (km, mi): ')
const wartosc = parseFloat(prompt('Podaj przeliczaną wartość: '))

if(isNaN(wartosc))
{
    document.write('Podana wartość nie jest liczbą.')
}
else
{
    switch(jednostka) 
    {
        case "km":
    
            document.write(`${wartosc} km to ${wartosc * 0.625} mil`);
            break;
    
        case "mi":
        
            document.write(`${wartosc} mil to ${wartosc * 1.61} km`)
            break;
    
        default:
            document.write('Niepoprawna jednostka, podaj "km" dla kilometrów i "mi" dla mil.');
            break;
    }
}

