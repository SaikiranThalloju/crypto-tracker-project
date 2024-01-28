export const convertDate = (number) =>{
    var myDate = new Date(number);
    return myDate.getDate() + "/" + parseInt(myDate.getMonth() + 1);
}