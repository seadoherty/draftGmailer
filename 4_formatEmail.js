// Build and send the email with content
function formatEmail(emailTemplate, dataObj, statusDate, threadId) {

    const msgObj = hydrateTemplate(emailTemplate.message, dataObj);
  
    GmailApp.sendEmail(dataObj['Recipient'], msgObj.subject, msgObj.text, {
      htmlBody: msgObj.html,
      attachments: emailTemplate.attachments
    });
  
    // Wait a second to ensure the search is run after the sent message is populated
    Utilities.sleep(1000);
    const label = GmailApp.getUserLabelByName('Test');
    const threads = GmailApp.search('to:' + dataObj['Recipient'] + ' in:sent subject:' + msgObj.subject, 0, 1);
  
    // Add a label to the sent message
    threads[0].addLabel(label);
    const tId = threads[0].getId();
    const messageDate = threads[0].getLastMessageDate(); // Get sent Date
  
    // Update the status column with email sent date
    statusDate.push([Utilities.formatDate(new Date(messageDate), 'America/New_York', 'MMMM dd, yyyy HH:mm:ss Z')]);
  
    // Update the thread id array with id
    threadId.push([tId]);
  };