/*


        Создать функцию getRGB();
        rgb - цветопередача на экранах мониторов
        px - минимальный квадратик на экране который можно заполнить одним цветом
        
        rgb(0-255,0-255,0-255)
        rgb(255,0,0) = red
        rgb(0,255,0) = lime
        rgb(0,128,0) = green
        rgb(0,0,255) = blue

        1 байт = 8 бит
        1 бит = 0 || 1

        00000000
        01010101
        11111111

        00000001 = 1
        00000010 = 2
        00000011 = 3
        00000100 = 4
        00000101 = 5
*/
   function getRGB() {
       let red = getNumber(256);
       let green = getNumber(256);
       let blue = getNumber(256);
       let str = `rgb(${red}.${green}.${blue})`
       return str;
   }
   console.log(getRGB());

   let color = `background-color: ${getRGB()};`;
   console.log(color);

   document.body.style = color;

   