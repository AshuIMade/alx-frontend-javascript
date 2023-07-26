/**promise function based on parameter success*/
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success === true){
            resolve({'status': 200, 'body': 'Success'});
        }
        else{
            reject(new Error('The fake API is not working currently'));
        }
    })
}