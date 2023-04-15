let ValidateUsername = (username) => {
    let regex = /^[a-zA-Z0-9_.-]*$/gm;

    let m;
    if ((m = regex.exec(username)) !== null) {
        return m.length > 0;
    }
}
 let ValidateEmail =(email)=>{
     let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     let m;
     if ((m = regex.exec(email)) !== null) {
         return m.length > 0;
     }
 }


module.exports = {
    ValidateUsername,
    ValidateEmail
}