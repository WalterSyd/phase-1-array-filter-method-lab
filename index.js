// Code your solution here
//function to find matching drivers considering names
function findMatching(drivers, query){
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}


//Function to fuzzy matching drivers based on names
function fuzzyMatch(drivers, query){
    return drivers.filter(drivers => drivers.toLowerCase().startsWith(query.toLowerCase()));
}


//Function to match drivers considering the name propery
function matchName(drivers, query){
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(query.toLowerCase()));

}
