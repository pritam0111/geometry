function CalculateTriangleArea(){
   const oneField = document.getElementById('triangle-base') ;
   const twoField = oneField.value ;
   const base = parseFloat(twoField);
   console.log(base);
    
    const heightField = document.getElementById('triangle-height');

    const threeField = heightField.value;
    const height = parseFloat(threeField);
    console.log(height);
    const area = .5 * height * base ;
    console.log(area);
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}