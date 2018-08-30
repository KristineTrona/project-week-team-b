import Bear_accetable from "../lib/images/Bear_accetable.svg"
import Bear__good_condition from "../lib/images/Bear_good_condition.svg"
import Bear_used from "../lib/images/Bear_used.svg"
import Bear from "../lib/images/Bear.svg"


export const renderBear = (condition) => {
    switch(condition) {
           
    case "brand new":
      return Bear

    case "as good as new":
      return Bear__good_condition
    
    case "acceptable":
      return Bear_accetable   
      
    case "used":
      return Bear_used

    default:
      return ''  
    }
  }
