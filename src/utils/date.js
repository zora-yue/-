import fillzero from './fillzero';
export default (time)=>{
    let d = new Date();
    d.setTime(time);
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let date = d.getDate();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    return `${year}年${fillzero(month)}月${(date)}日 ${fillzero(hour)}：${fillzero(min)}d：${fillzero(sec)}`;
}