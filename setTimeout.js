console.log(start)
//Set Timout for sure will not run before 5seconds but it is not sure that it
// will run exactly after 5 second if 
//the thread is blaock in other work its callaback has to waitt
setTimeout(()=>{console.log('callback')},5000)
console.log(end)