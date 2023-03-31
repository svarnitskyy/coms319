function isStrongPassword(password){

    if(password.length > 7 && password.indexOf("password") == -1 && password != password.toLowerCase()){
        return true;
    }
    return false;
}
