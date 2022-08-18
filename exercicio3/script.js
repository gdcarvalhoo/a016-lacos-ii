/* # Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
```
 */

for (let [i,j] of ["Gangplank", "Nidalee", "Bardo", "Vel'koz", "Cassiopeia"].entries()){ 
    console.log((i+1),j)
    }