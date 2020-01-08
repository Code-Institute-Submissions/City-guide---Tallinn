# Codeinstitute Milestone 2 project -  by Madis Tepp

## Interactive City Guide Project created for Tallinn, Estonia

## Purpose: 

Purpose for this project was to create a city guide for Tallinn, Estonia and more specifically to give insider tips for visitors to choose from. Recommendations were chosen by site creator based on personal preference as a local from the city in question. Goal was to create an responsive and interactive page that would be easy and smooth to use and would provide valuable information for anyone visiting the city for the first time.

#### User guide: 

##### Recommendations:

From the top of the page users can choose to click on any of the following links : 
- Events : to provide upcoming events that were deemed interesting and could provide a reason to visit
- Places not to miss : a few top places one should not miss if they visit Tallinn
- Food and Drinks : current favourites of locals for recommended options to get food and drinks
- Nightlife : some site of my favourite places for people looking to have some fun in the evening. Choice was made in a way to cater for different tastes. 

After user clicks on one of the options site is scrolled to have recommendations section in user view. 

To provide a less noisy view for site user they could then click again on the specific recommendations group they are interested in and that opens up the recommendations itself.

For Events site provides a link to home page of the events for purchase of tickets and more information. 
For other recommendations after clicking on the option most interesting user will be displayed the location for their choice on map, also maps will be scrolled in to view.

Maps has also been fitted with a search and auto-complete function that is location bias to Tallinn and provides the option to search for more locations of interest if the ones provided by site owner are not of interest. 


##### Travel section:

Is a mockup of a flight and hotels search function where user can fill in origin and destination of travel and dates from an interactive calendar. Due to lack of travel API this function does not provide any result.


##### Footer:

From the newsletter form a user can provide their email address for a newsletter, which creates and email to site owner with said information. (note: no newsletter is in place so it just generates an email for site owner).

Links to social media open up a new windo with social media platform that user has selected (note: this diverts user to social media landing pages due to lack of actual accounts for the site).




## UX design: 

As a site owner i tried to create a simple and sleek page which would be noise free. Important was to provide some pictures of the city to raise interest in the user and to show of some of the beauty from the city. 
Colors chosen on the site are to create a similarity to the countries flag blue, black and white. Though not exactly those colors were always used to provide a more modern look and feel. 

User stories that i tried to address: 

1. As a site owner i want to increase travel to the city.
2. As a site owner i want to provide people with things to do and see based on experience as a local.
3. As a site owner i want to create a platform where local companies and events could advertise themselves.
4. As a user of the site i want to get some insight to the city.
5. As a user of the site i want to get recommendations for what to do when visiting this city.
6. As a user of the site i want to be able to sign up for the newsletter to get more information in the future.
7. As a user of the site i want the site to be easy to use on different screens sizes.

##### Wireframes: 

Finished site does not exactly match the original wireframes because during site creation new ideas were born that worked better for the final version.

!(../images/wireframes.png)

## Features/Functionality/Techologies: 

Wireframes were created with Balsamiq.

 I used Bootstrap to create a mobile first design for the site. Jquery was used to write some of the Javascript functions. Google fonts was used to the font styles. Social media logos were taken from FontAwesome. 

 Google maps api was used to provide users with a fully functional map and emailJS used to create a working e-mail function for newsletter section.


 ## Testing :

 For this site no automated tests were written as i deemed it un-necessary, given that sufficient tests could be done manually without having a affect on delivery timeline.

 All function of the site were continuously and repeatedly tested over the course of coding the page, any errors or problems that occured were solved during the same process. For final tests once site was ready for implementation below approach was taken. 

 Code has been checked on https://validator.w3.org/  - 7 warnings found which i chose to ignore as now effect on functionality.
 Code has been checked on  https://jigsaw.w3.org/css-validator/  - 0 errors received.
 
 . Tested page on https://www.toptal.com/designers/colorfilter/ to ensure that pages work for colorblind people. Deployed site was tested by using using the page on Firefox, Google Chrome, Explorer and Microsoft Edge. In addition to that page was tested by using it on different devices such as Samsung Galaxy S10, Iphone XR , Samsung Galaxy A5. 
 I used Google development tools extensively through out the entire coding process to ensure that the site would look good and work as planned on different screen sizes. When errors found in the dev tools fixes were done accordingly. 

 Map : maps was tested continuously through the process by submitting different values to the search bar and ensuring that location bias worked as planned. 

 Travel search : also tested many times and ensured that users are not allowed to leave origin / destination field when they would submit the request. Also as per travel industry standard passenger count was limited to 9 people and user is not able to add any more passenger to their request. 



 ### Some of the manual tests performed:

| Action                                         | Expected result                | Corrective action | Passed |
| ---------------------------------------------- |:------------------------------:|------------------:|-------:|
| Clicked on header links on a desktop desktop   | scrolls to recommended section | None              | Yes    |
| Clicked on header links on a mobile            | scrolls to recommended section | None              | Yes    |
| Clicked on all 4 tabs in recommendation section| specified section appears others close| None       | Yes    |
| Clicked on different upcoming events           | open page in a new tab         | None              | Yes    |
| Clicked on all other recommendations provided  | scrolls map to view and displays marker | None     | Yes    |
| Used search function in maps                   | Autocomplete provides locations in Tallinn | None  | Yes    |
| Chose option from autocomplete list            | Marker displayed and zoomed in |  None             | Yes    |
| Use travel search  section                     | To / from mandatory to be filled | None            | Yes    |
| Clicked on outbound / inbound                  | calendar appears to choose date | None             | Yes    |
| Newsletter sign up not filled + enter press    | alert to fill in email provided | None             | Yes    |
| Newsletter sign up filled with valid email     | alert that sign up successful   | None             | Yes   


## Deployment

This site has been deployed using Github, i have deployed the site from master branch.

To review site use link : https://teppm.github.io/City-guide---Tallinn/

Steps to deploy site:

As the repository for sites code has been on Github from the start, deploying this site was fairly easy.

Accessed my sites repository on GitHub

From settings chose to deploy master branch

After these two steps the site was deployed and was live for usage and submition for reviewing.

If you would like to deploy the site yourself, you can use the source code from https://github.com/teppm/personal-portfolio, you can use git clone https://github.com/teppm/personal-portfolio.git.

Currently deployed site will be update if any changes will be made.



## Credits

##### Content:

Original content.

##### Media:

Background pictures credit to:

Unsplash.com

##### Acknowledgements:


Inspiration for this project received by reviewing numerous different award winning websites provided on https://www.awwwards.com/

Bootstrap has been used extensively to create the elements that i had in mind during design phase. Bootstrap elements have though been extensively modified and styled.

Jquery has been used throughout the site functionalities. 

developer.google.com used for bulk of the code and information for maps section of the site.

https://www.w3schools.com/ has been a great help in solving some of the problems i ran into during coding.

https://stackoverflow.com/ used to help with problem solving.

Code Institute Slack channel and channel leads  as well as Tutor support were of great support during coding phase.


## Support: 

Site owner can be contacted for support via github.

