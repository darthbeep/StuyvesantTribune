# So this is how to actually use my site and maybe read my code

## The reading my code part

### How it's organized:

Everything gets its own little subfolder, organized by filetype. Why? Because it's easy to know where things are, I wanted everything to be at the same level for reasons involving the use of ../, and atom makes it really easy to work with multiple directories.

##### TODO: Make this explain stuff in detail

## The understanding what my site does part

### Retrieving files:

Most of the work is done by different js functions, usually requesting information from fetchall.php. fetchall.php is a multipurpose php file that returns all articles in the database in the form of a JSON object. JS functions retrieve this and either only care about one article or use it to display lots of them.

### Uploading files

This one involves upload.html and update.php, because we all make mistakes. upload.html is a simple html page with a form that sends info to update.php (edit.html works in a similar way, but can't be accessed directly. It must be linked to by modify.html). It's pretty easy to upload articles because upload.html refreshes every time an article is submitted. This is so that someone with no technical knowledge can easily upload articles to the site.

### Editing and deleting articles.

The look of modify.html is built on bootstrap and prayers. It's a little less user friendly than upload.html and could probably be prettier, but it's a good way to look at articles all in one place. You can edit and delete articles easily from here. Note that pressing delete won't update the page, but it does work. This is also the only way to access edit.html, which lets you edit files easily.
