const findDraftId = () => {

    let d = GmailApp.getDrafts();
  
    for (i = 0; i < d.length; i++) {
  
      let draft = d[i];
      let draftId = draft.getId();
      let draftById = GmailApp.getDraft(draftId);
      let subject = draftById.getMessage().getSubject();
      console.log(`subject: ${subject} | id: ${draftId}`);
    }
  }