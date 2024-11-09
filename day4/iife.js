// Immediately invoked functione expression
// used when like we need imeediate database connection when we open the setup
// synatx ()() =>

(function message(){
    console.log('db connected')
})();

(() => {
    console.log('db connected two');
    
}) ();