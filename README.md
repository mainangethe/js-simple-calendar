# Simple Calendar
This is a MDN project to help get more experience in using conditionals in JS.  
The objective of the project is to avail months to the user and based on their selection; the page should display the number of days for that month in a grid format.
I added a personal twist by also adding displaying African quotes per month.

> [Visit Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

## Documentation
The project took me a total of: **5 Hourss** to complete.

### HTML Overview
Here we've got an HTML `<select>` element allowing us to choose any of the 12 months in a year.  
There is also another section for populating the days of the month and also displaying an African quote for that specified month.


### CSS Overview
Here we position the `.title` class of content to be at the center of the page horizontally.  
Also the `.calendar` children are floating next to each other.
We are also pre-pending content to the `.quote-author` class.



### JS Overview
In the JavaScript, we are storing a reference to:  
1. `<ul>` element to be the parent of the list of days of the month.
2. `<select>` element to monitor user selection.
3. `.quote-bg` class to change the background of the quotes per month
4. `<p>` element belonging to the `.monthly-quote` class to update the quote.
5. `<p>` element belonging to the `.quote-author` class to update the author of the quote.
6. We also created a hash that stores each month's `{ quote, author and background }`


We have two (2) functions in the code. `quotePicker()` and the `createCalendar()`.

We have an `.onchange` property to the `<select>` element so that when its value is changed, a new function is run to store the user's month choice which it passes to the `quotePicker()` function and also has an `if & else if {}` blocks to provide the correct days of the month to provide to the `createCalendar()` function.


#### How the createCalendar( days ) works
For this function to run, it needs the days of the month argument passed.  
When this function is run, it first clears the content in `<ul>` element.  
Then it runs a `for` loop: within the loops block it creates a new variable that houses a new `<li>` element.
It then appends a '0' for all digits between 1 and 9.
And then adds the digit to the list.
Finally the list is appended back to the same `<ul>` element.
The total number of lists element generated together with the loop limit is set by the days of the month variable.


#### How the quotePicker( month ) works
For this function to run, it needs the selected month the user gave.
We then use a switch statement to manage the different quotes for each month.
Each case updates the quote text, it's author, and a unique background when displaying it to the user.
