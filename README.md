
# Doctor Locator

#### An Epicodus independent project in Javascript and API building, 06.30.17

#### **By Pete Lazuran**

## Description

This web application will allow a user to call upon an API to search for a doctor to treat their symptoms.

|Behavior| Input (User Action/Selection) |Output|
|---|:---:|:---:|
|User can seach for doctors to treat their issue | user input: "headache" | "Harry Reahl, MD" "Address:9427 SW Barnes Rd, Portland, 97225" "Phone:5035551150" |


## Setup/Installation Requirements

To download and run this project:
1. Clone this repository to your desktop.
2. To access the API:
 * visit https://developer.betterdoctor.com/ and request an API key.
 * Open your text editor and create a file in the project directory named '.env'.
 * Type in ' exports.apiKey = "{paste in your API key here}"; ' and save the file.
3. Run {$ npm install} and {$ bower install} in your terminal to gather required packages.
4. Run {$ gulp build} and then {$ gulp serve} to view the project in a web browser via a localhost.


## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact me through through Github.

## Known Bugs

Because of the double for loop in the getDoctors prototype the program gets several duplicate entries. The API just seems to contain duplicates. Method for filtering the allDoctors array is needed.

## Technologies Used

* Javascript
* API keys
* JSON
* HTML
* CSS
* Bootstrap
* SASS

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Pete Lazuran**
