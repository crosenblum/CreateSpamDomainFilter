
# CreateSpamDomainFilter.js

Gmail App Script as a scheduled task to automatically block all spam emails and domain names.

Help: ChatGPT and other tutorials helped me identify the syntax for my dream of a more automated spam fighter. So I appreciated the help.



## Features

- Can be custom time triggered to run as often as you want
- Any email in your spam filter will be blocked from future emails


## Script Logic

- Check for all emails in the spam folder
- Get both the from email address and it's domain name
- Create New Filter to block all emails from both.
- Move email to trash


## FAQ

#### Question 1 - How do I install this?

- Go to the Google App Script Editor
- https://script.google.com/home/
- Create New Project
- Copy N Paste Script
- Setup Google Authentication so it can access your Gmail Account
- Create Time Triggers to execute this script as often as you wish


## Future Ideas/To Do List

- Global Spam List - To help us all block more spam
- Send Data to Spam Reporting Sites - To reduce amount of spam
- Browser Extension
## Author

- [@crosenblum](https://www.github.com/crosenblum)
