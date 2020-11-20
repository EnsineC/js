export default function getNumber(max = 11, min = 0) {
    let n = Math.random() * (max - min) + min;
    n = Math.floor(n);
    return n;
}
    let n = getNumber();

    console.log("Число " + getNumber(200) + " " + n);
