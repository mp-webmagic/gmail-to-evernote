function StarredGmailTitleSendToEvernote() {
  var body, channel, messages, threads, url;
  var userLabel = '★ラベル名★'; //Gmail上での処理済みラベル名

  //Gmail
  threads = GmailApp.search('is:starred -label:' + userLabel); //検索条件
  threads.map(function(t) {
    messages = t.getMessages();
    messages.forEach(function(message){
      //NAME <xxx@xxx.com>「メールタイトル」Tue Apr 02 2019 00:00:00 GMT+0900 (JST)
      //https://mail.google.com/mail/u/0/#inbox/XXXXXXXXX
      body = message.getFrom().replace(/</g, '&lt;').replace(/>/g, '&gt;')+ '「' + message.getSubject() + '」' + message.getDate();
      url = 'https://mail.google.com/mail/u/0/#inbox/' + message.getId();
        ifttt(body, url);
    });
  });
  
  //Gmail labeled
  var label = GmailApp.createLabel(userLabel);
  for(var n in threads){
    var thd = threads[n];
    label.addToThread(thd);
  }
  
  function ifttt(message, url) {  
    
    //IFTTT Webhook
    var data = {
      'value1': message,
      'value2': url,
      'value3': ''
    };
    
    var options = {
      'method' : 'post',
      'headers': {
        'Content-Type':'application/json'
      },
      'payload' : JSON.stringify(data)
    };
    
    Logger.log(options);
    
    UrlFetchApp.fetch('★WebhooksのURL★', options); // webhooks url
  } 
  
}


