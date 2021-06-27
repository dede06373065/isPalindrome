var isPalindrome = function(x) {
    const limit=2147483648;
    if(x<0){
        return false;
    }else{
        const newX=Number(String(x).split('').reverse().join(''))
        if(newX===x){return true}else{
            return false
        }
    }
};


isPalindrome(121);