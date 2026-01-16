export class Email {
    
    emailCheck(email:string) {

        for(let i = 0 ; i<email.length ; i++){
            if(email[i] === '@'){
                return true;
            }
        }
        return false;
    }

    spaceCheck(email : string){
    for(let i = 0 ; i<email.length ; i++){
       if(email[i] === ' '){
            return false;
            }
        }
        return true;
    }

    otherCheck(email : string){
        let atIndex = -1;
        for(let i = 0 ; i<email.length ; i++){
            if(email[i] === '@'){
                atIndex = i;
            }
        }
    if(atIndex === 0){
        return false;
    }
    if(atIndex === email.length - 1){
        return false;
    }
    }
}