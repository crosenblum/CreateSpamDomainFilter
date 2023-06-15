function createDomainBlockFilter(emailAddress,domain) {

  // Create a new filter object
  var filter = Gmail.newFilter();
    
  /* 
      Filters in gmail have criteria
      The criteria is the basis on which the filter is applied (e.g. the rule that enables the filter's action).
      In this case the criteria is that the email is sent from the same address as the sender of the current thread.
  */ 
  filter.criteria = Gmail.newFilterCriteria();
  filter.criteria.from = domain;

  /* 
      Filters in gmail have actions
      The action is what will be performed when the criteria is met.
      In this case the action is that the email is marked as read and archived.
  */
  filter.action = Gmail.newFilterAction();
  filter.action.removeLabelIds = ['INBOX'];
  filter.action.important = false;
  filter.action.notImportant = false;
  filter.action.star = false;
  filter.action.trash = true;
  filter.action.spam = true;

  // Log that the filter was created
  Logger.log("Creating Filter From: [" + emailAddress + "] Domain: [" + domain + "]");

 /*
    get the email address of the person whose account is running the script
    In my case, this would be me. In your case, this will be your email.
    We could also just use the string 'myemail@example.com', but I'm trying to avoid putting my personal email
    in this code.
  */
  var me = Session.getEffectiveUser().getEmail();

  // Create the filter
  var response = Gmail.Users.Settings.Filters.create(filter, me);


}

function getDomainFromEmailAddress(emailAddress) {
  var domainRegex = /@(.+)/;
  var match = domainRegex.exec(emailAddress);
  
  if (match && match.length > 1) {
    return match[1];
  } else {
    return null;
  }
}

function GetSpamMessages() {
  var threads = GmailApp.getSpamThreads();
  
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      
      // get message id
      var messageId = message.getId();

      // now show from
      var emailAddress = message.getFrom().replace(/^.+<([^>]+)>$/, "$1");

      // get domain name
      var domain = getDomainFromEmailAddress(emailAddress);

      // create new filter for this domain
      createDomainBlockFilter(emailAddress,domain);

      // move message to trash
      message.moveToTrash();
      

    }
  }
}
GetSpamMessages();
