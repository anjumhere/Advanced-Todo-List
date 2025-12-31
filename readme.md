<h1>Todo Application</h1>

<h2>Overview</h2>
<p>
This project is a Todo application built using HTML, CSS, and Vanilla JavaScript.
It is designed as a practical exercise to apply core JavaScript concepts while
building a functional, interactive, and reusable application.
</p>

<h2>Purpose of the Project</h2>
<p>
The primary purpose of this project is to strengthen understanding of JavaScript
fundamentals by working on a real-world use case. Instead of focusing on isolated
code snippets, this project brings together multiple concepts such as state
management, DOM manipulation, event handling, and data persistence.
</p>
<p>
The project focuses on writing clean, readable JavaScript while maintaining a
clear separation between structure, styling, and logic.
</p>

<h2>Who Can Benefit From This Project</h2>
<p>
This project is especially useful for:
</p>
<ul>
  <li>Beginners learning JavaScript who want a complete working example</li>
  <li>Developers practicing DOM manipulation and event-driven programming</li>
  <li>Anyone looking to understand how application state works in Vanilla JavaScript</li>
  <li>Students preparing personal projects for portfolios or learning exercises</li>
</ul>

<h2>Features</h2>
<ul>
  <li>Add new tasks</li>
  <li>Edit tasks using inline editing (no prompt dialogs)</li>
  <li>Delete tasks</li>
  <li>Mark tasks as completed</li>
  <li>Clear all existing tasks using a dedicated Clear Stats button</li>
  <li>Display total, pending, and completed task counts</li>
  <li>Persist data using localStorage</li>
  <li>Restore tasks automatically on page reload</li>
  <li>Keyboard support using the Enter key to add and save tasks</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>HTML for structure</li>
  <li>CSS for layout, styling, and UI refinement</li>
  <li>Vanilla JavaScript for logic and interactivity</li>
  <li>Browser localStorage for data persistence</li>
</ul>

<h2>Screenshot of the Project</h2>
<img src="images/screenshot.png" alt="Todo Application Screenshot">

<h2>Project Structure</h2>
<pre>
todo-app/
│
├── index.html
├── style.css
├── stats.css
├── script.js
└── README.md
</pre>

<h2>How the Application Works</h2>
<p>
Each task is stored as an object containing the task text and its completion status.
All tasks are maintained in a single array that represents the current application state.
</p>
<p>
Whenever a task is added, edited, completed, deleted, or cleared, the application
updates the state, re-renders the user interface, and synchronizes the data with
localStorage to ensure persistence.
</p>

<h2>Task Statistics</h2>
<p>
The application dynamically calculates and displays:
</p>
<ul>
  <li>Total number of tasks</li>
  <li>Number of pending tasks</li>
  <li>Number of completed tasks</li>
</ul>
<p>
These statistics are recalculated on every update to ensure accuracy and consistency.
</p>

<h2>Learning Outcomes</h2>
<p>
By working on this project, developers gain hands-on experience with:
</p>
<ul>
  <li>Managing application state in JavaScript</li>
  <li>Using array methods such as push, filter, and splice</li>
  <li>Handling user events efficiently</li>
  <li>Implementing inline editing without browser prompts</li>
  <li>Persisting and restoring data using browser storage</li>
  <li>Structuring JavaScript code in a clean and maintainable way</li>
</ul>

<h2>Possible Improvements</h2>
<p>
The project can be extended further by adding:
</p>
<ul>
  <li>Task filters (All, Pending, Completed)</li>
  <li>Undo functionality for deleted or cleared tasks</li>
  <li>Improved accessibility and keyboard navigation</li>
  <li>Dark mode support</li>
  <li>Animations for task interactions</li>
</ul>

<h2>Author</h2>
<p>
Adnan Anjum
</p>
