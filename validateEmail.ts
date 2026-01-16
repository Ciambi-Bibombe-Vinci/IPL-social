export class Email {
    
    emailCheck(email:string) {
        let atIndex = -1;
        let pointIndex = -1;
        for(let i = 0 ; i<email.length ; i++){
            if(email[i] === '@'){
                atIndex = i;
                break;
            }
        }
        if(atIndex === -1){
            return false;
        }
        if(atIndex === 0){
            return false;
        }
        if(atIndex === email.length-1){
            return false;
        }

        for(let i = atIndex + 1 ; i<email.length ; i++){
            if(email[i] === '.'){
                pointIndex = i;
            }
        }

        if(pointIndex === -1){
            return false;
        }
        if(pointIndex === email.length-1){
            return false;
        }
    }

    spaceCheck(email : string){
    for(let i = 0 ; i<email.length ; i++){
       if(email[i] === ' '){
            return false;
            }
        }
        return true;
    }
}