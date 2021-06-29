//----Global variables
const sheet = SpreadsheetApp.getActiveSheet();

// Unique Id of Gmail draft, use 99_findDraftId to identify this
const gmailDraftId = 'REPLACE WITH YOUR ID';

//----Create menu items on open
const onOpen = () => {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Send Draft Template')
    .addItem('Send Resume Email', 'resumeEmail')
    .addToUi();
};

const resumeEmail = () => { sendEmails(gmailDraftId) };