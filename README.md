# Password Generator

## Objective
To create a functional password generator with the ability of customizable options that recieves input from a given prompt. 

This project has been uploaded and deployed to GitHub.

## HTML/CSS Updates
No updates were needed for this project.

## JavaScript
* Instructor provided foundational variables and "starter code" for `askUpperCase()`.
   - Any code provided by the instructor has been commented on in the script.js file.
* Added executable functions that prompt the User the type of password desired.
    - `askCharCount()`: Asks the User to pick a number of characters from 8 - 20.
    - `askUppercase()`: Asks if the User will allow Uppercase (A-Z)
    - `askLowercase()`: Asks if the User will allow Lowercase (a-z)
    - `askNumbers()`: Asks if the user will allow Numbers (0-9)
    - `askSpecial()`: Asks if the User will allow Special Characters (!@#$&)
* Created the "Merge or Purge" variables. 
* Created `generatePassword()`. This function takes the number of characters the user requests to have and counts it against a for loop. The selection for Upper/lowercases, numbers, and special characters that fall into the `mergeArray` variable will be used to determine which characters to use at random. Those rejected will be housed in the `purgeArray`.

## Screenshot
![password-screenshot](./Assets/screenshot.jpeg)

To view the page, visit [Password Generator](https://wulfsounds.github.io/password-generator/)