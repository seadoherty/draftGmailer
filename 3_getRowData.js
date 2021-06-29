// Loop through all the rows of data
function getRowData(emailTemplate,obj,statusDate,threadId) {  
  
    obj.forEach(function(row, rowIdx){
      
      // only send emails is email_sent cell is blank and not hidden by filter
      if (row["Email Status"] == ''){
        
        try {        
          // prepare email with options and send it
          formatEmail(emailTemplate,row,statusDate,threadId);    
          
        } catch(e) {  
          // update the status column with error
          statusDate.push([e.message]);
        }
        
      } else {
        // update Sheet rows
        statusDate.push([row["Email Status"]]);
        threadId.push([row["Thread Id"]]);
        Logger.log('Nothing sent');
      }
    });  
  };