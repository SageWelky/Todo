# Project: Todo App

## Description:

### Overview:

A small todo app for organizing projects, tasks, and notes. Saves between sessions using local storage.

### Features:
* Dynamic list of projects
* Each project has its own dynamic list of Todo tasks
* Contextual drop downs for descriptions and notes
* Contextual highlights for active tasks and projects
* Task Modal that autofills for editing tasks
* Projects names and task notes which can be edited with a double click


## Personal Goals for the Project:

### Initial:

I set out, in part, to further my experience using learned design patterns to embody the SOLID principles in my project. Additionally, I sought more practice using webpack so I can understand not only webpack itself, but also as a way of understanding what more modern technologies are automating for me under the hood. Finally, I wanted to understand how using nested objects felt when using local storage (or any json-based storage), especially while using private variables.

### Reflection:

This section of Odin Project (the js course in the js path) feels like the largest increase in threads to weave together, and the biggest step towards understanding how to use the tools we've picked up at a professional grade of quality. As such, it feels natural to stumble on the first couple of tries attempting to reach that bar. Some of the finer points project organization feel easy to grasp on paper, but less intuitive when planning or course correcting the project structure while implementing features.

The biggest strength I had putting the application together was the forethought to consider the data object first, and how it should be moved through the app. Combined with some former experience using MVC for C# projects, I was able to keep my bearings on the whole. However, some unconsidered feature design implications, and difficulty envisioning which code would be best as a helper function, and which code should be seperated out into it's own section left the end result feeling more disorganized than I would have liked considering the goals at outset.

My immediate takeaway is that much of the unwieldy nature of planning and organization stems from inexperience, and that simply making more projects will largely close the gap between my knowledge of design patterns and SOLID principles, and my implementation of them. However, after some reflection I've also come to value the impact of my decision to use private classses more than before. Learning several new skills at once can be overwhelming, so taking the opportunity to press on when scoping out local storage revealed private variables require special consideration, it felt like a mistake initially after wrapping up the project. After a day sitting with it I've come to see that it helped me to understand how to better plan out my functions and project structure. The more facets that interact, the more 'surface area' I get from reflecting on each one; this is the perfect time to embrace problems that arise from taking on extra considerations.

In the future I think I'll still start with creating my data structure first, and still envision how it will flow through the project, but I'll stop to make versions of the data at each step to see how it is ideally accessed and formated, and put a larger emphasis on writing helper functions very early to make state management and single-responsibility principle easier to prioritize. Beyond this, considerations for what information needs to be iterable, and ways certain information needs to be accessed, manipulated, or separated out (such as with the notes section) would help in making smarter decisions about how the data is stored vs what helper functions should be used in order to keep the code as clean as possible.

## What I'd Want To Do Returning To This Project:

I think what someone reading this might be most surprised to learn is that I never hooked up the "status" property to the list view representation of tasks. It can still be saved in local storage and retrieved to be edited by the form, but it does not interact with the custom toggle on todo items. In all honesty this would not be too *difficult* to implement, and serves as part of core feature set of a todo list in most cases. But, I found the feature to sit perfectly in the valley of *time* to implement where I am both very sure I know what it would require, and it taking too much time from the pace I want to get through these projects at. I am very willing to impact that pace for features that would contribute to learning, but this project has taken longer than anticipated, and given me a lot of learning through experience I want to reinforce with the next project while it sits fresh in my mind.

I plan to come back to this project to add this feature, as well as some polishing touches like a date sorter, an indicator for total outstanding tasks for a project, and some other minor things, but for now the main goal was the practice this project provided for a core set of skills more than the todo application actually being feature complete (though that is very important to me too, and I needed the project to be pretty much 99% of the way there).
