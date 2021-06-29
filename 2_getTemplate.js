// Send emails from sheet data
function sendEmails(draftId) {

    // get the draft Gmail message to use as a template
    const emailTemplate = getTemplate(draftId);
  
    // get the data from the passed sheet
    const dataRange = sheet.getDataRange();
  
    // fetch displayed values for each row in the Range 
    const data = dataRange.getDisplayValues();
  
    // assuming row 1 contains our column headings
    const heads = data.shift();
  
    // get the index of column named 'Email Status'
    const statusColIdx = heads.indexOf('Email Status') + 1;
  
    // get the index of column named 'Thread Id'
    const threadColIdx = heads.indexOf('Thread Id') + 1;
  
    // convert 2d array into object array
    const obj = data.map(r => (heads.reduce((o, k, i) => (o[k] = r[i] || '', o), {})));
  
    // array of status dates
    const statusDate = [];
  
    // array of thread ids
    const threadId = [];
  
    // loop through all the rows of data
    getRowData(emailTemplate, obj, statusDate, threadId);
  
    // update the Sheet with new date sent
    sheet.getRange(2, statusColIdx, statusDate.length).setValues(statusDate);
  
    // update the Sheet with new date sent
    sheet.getRange(2, threadColIdx, threadId.length).setValues(threadId);
  };