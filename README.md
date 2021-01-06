# Day-Planner
Our assigment was to create a calendar application that allows a user to save events for each hour of the day that is color coded based on if the time is in the past, present, or future. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. We needed to use Moment.js to work with dates andd times. When the user refreshes the page the evens should still be displayed on the page. 

## Getting Started
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file

## Technologies Used
- HTML -used to create elements on the DOM
- CSS- styles html elements on page
- Git- version control system to track changes to source code
- GitHub- hosts repository that can be deployed to GitHub Pages
- BootStrap CSS Framework- Quickly design and customize responsive mobile-first sites using front-end open source toolkit, featuring SASS variables and mixins, responsive grid system, and prebuilt components.
- JavaScript- Programming language that is used to prompt the user and generate a random password based on the user's inputs. 
- jQuery- jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.

## Screenshot
![Alt Text](https://raw.githubusercontent.com/austinwoo123/Day-Planner/main/Assets/05-third-party-apis-homework-demo.gif)

## Code Snippet
```
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    //retrieve id of parent //
    var time = $(this).parent().attr("id");
    //retrive description from sibling of button //
    var description = $(this).siblings(".description").val()
    console.log(time)
    console.log(description)
    // putting the description into local storage //
    localStorage.setItem(time, description);
```

This code targets each of the save buttons to wait for the user to click on. This will activate a function to retrieve the entered events and put it into the local storage of the user's browser/mobile device. 

```
 <div class="card" mb-2>
      <div class="row" id="9">
        <p id="time-block" class="text-body col-1">9 AM</p>
        <textarea class="col-10 description"></textarea>
        <button class="saveBtn col-1">Save</button>

      </div>
    </div>
```
This code shows the basic structure of how I designed each of the time blocks in the Day Planner starting from 9am-5pm. There is a text area for the user to enter a description of an event that they want. There is also an added save button, which allows the user to store the information that they choose.

## Deployed Link

* [https://austinwoo123.github.io/Day-Planner/Develop/index.html]

## Authors
Austin Woo
- [Link to Portfolio Site](https://github.com/austinwoo123/Day-Planner)
- [Link to Github](https://github.com/austinwoo123)
- [Link to LinkedIn](https://www.linkedin.com/in/awoo95/)

## License

This project is licensed under the UC Berkeley Extension