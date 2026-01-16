export class Email {
    
    emailCheck(email:string) {
        for(let i = 0 ; i<email.length ; i++){
            if(email[i] === '@'){
                return true;
            }
        }
        return false;
    }
}