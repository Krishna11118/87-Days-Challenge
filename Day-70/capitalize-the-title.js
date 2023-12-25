var capitalizeTitle = function(title) {
    const data = title.split(" ")
    
    data.map( (item, index) => {
       if(item.length > 2) {
           const value = item.toLowerCase()
           data[index] = value.charAt(0).toUpperCase() + value.slice(1);
       }else {
           data[index] = item.toLowerCase();
       }
    })
    
    return data.join(" ")
};