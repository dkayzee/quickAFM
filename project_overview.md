# Quick AFM (Affinity Map)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

UX Project Management Tool. Digital affinity mapping with time box.

Similar to RealtimeBoard and Trello but real-time and time limit.

Meant to be utilized for quick solution.

## Wireframes

https://res.cloudinary.com/dpddrzhis/image/upload/v1551217495/Quick%20Map/20190226_164031.jpg
https://res.cloudinary.com/dpddrzhis/image/upload/v1551217495/Quick%20Map/20190226_164137.jpg

## Priority Matrix

https://res.cloudinary.com/dpddrzhis/image/upload/v1551279100/Quick%20Map/Priority%20Matrix.jpg

### MVP/PostMVP 

#### MVP 

- Render a board component
- Able to create sticky notes
- Manipulate sticky notes by clicking and dragging
- Team building tool

#### PostMVP 

- Delete a sticky note by dragging to a trash can
- Time box option
- Long term management tool

## Architectural Design

https://res.cloudinary.com/dpddrzhis/image/upload/v1551279100/Quick%20Map/Hierarchy.jpg

## ERD

https://res.cloudinary.com/dpddrzhis/image/upload/v1551217495/Quick%20Map/20190226_135552.jpg
https://res.cloudinary.com/dpddrzhis/image/upload/v1551217495/Quick%20Map/20190226_135603.jpg

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Navigation | This will render the logo and log-in / register | 
| Search | Search through the title of the board | 
| Board Component | Zoomable Board component that will render post components |
| Card Component | The sticky notes that will render on the board |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Board Component | H | 3hrs|  |
| Card Component | H | 3hrs|  |
| Navigation | H | 2hrs | |
| Search | H | 1.5hrs | |
| Functionality and Animation Transition | H | 4hrs | |
| Total | H | 13.5hrs|  | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Date | To help keep track of time | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
| Library | What it Does | 
| --- | :---: |  
| BCrypt | User Authenication |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
