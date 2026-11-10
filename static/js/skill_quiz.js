// ============================================================
// CAREER COMPASS - SKILL ASSESSMENT QUIZ
// 5 Skills | 3 Difficulty Levels | Random Questions
// ============================================================

// Each question format:
// [Question, [Option A, B, C, D], Correct Option Index, Explanation]

const questionBank = {

    // ========================================================
    // PYTHON
    // ========================================================

    "Python": {

        "Beginner": [
            ["Which keyword defines a function in Python?",
                ["function", "def", "define", "fun"], 1,
                "Python uses the def keyword to define a function."],

            ["What is the output of print(2 ** 3)?",
                ["6", "8", "9", "5"], 1,
                "The ** operator calculates exponentiation: 2 to the power of 3 is 8."],

            ["Which data type stores True or False?",
                ["int", "str", "bool", "list"], 2,
                "The bool data type stores True and False values."],

            ["Which symbol starts a single-line comment in Python?",
                ["//", "#", "/*", "--"], 1,
                "Python uses # for single-line comments."],

            ["Which collection is ordered and changeable?",
                ["Tuple", "String", "List", "Integer"], 2,
                "Lists preserve order and can be modified."],

            ["What is the output of print(10 // 3)?",
                ["3.33", "3", "1", "4"], 1,
                "The // operator performs floor division."],

            ["Which function displays output in Python?",
                ["show()", "displayText()", "print()", "write()"], 2,
                "The print() function displays information."],

            ["Which operator checks equality?",
                ["=", "==", "!=", "==="], 1,
                "The == operator compares two values for equality."],

            ["What is the index of the first list item?",
                ["1", "-1", "0", "Depends on the list"], 2,
                "Python list indexing starts at 0."],

            ["Which keyword is used for a conditional statement?",
                ["when", "if", "check", "condition"], 1,
                "The if keyword executes code when a condition is true."]
        ],

        "Intermediate": [
            ["What does len([10, 20, 30]) return?",
                ["2", "3", "30", "Error"], 1,
                "len() returns the number of items in a collection."],

            ["Which keyword handles an exception?",
                ["catch", "try", "check", "error"], 1,
                "The try block contains code that may raise an exception."],

            ["What is the result of [x * 2 for x in [1, 2, 3]]?",
                ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "Error"], 1,
                "This list comprehension doubles every element."],

            ["Which collection stores unique values?",
                ["List", "Tuple", "Set", "String"], 2,
                "A set stores unique elements."],

            ["How are dictionary values accessed?",
                ["By key", "Only by position", "By class name", "By data type"], 0,
                "Dictionaries use keys to access their associated values."],

            ["What does append() do to a list?",
                ["Removes the first item", "Adds an item to the end", "Sorts the list", "Clears the list"], 1,
                "append() adds one item to the end of a list."],

            ["What does range(5) generate?",
                ["1 to 5", "0 to 5", "0 to 4", "1 to 4"], 2,
                "range(5) generates numbers from 0 through 4."],

            ["Which keyword creates a class?",
                ["object", "class", "struct", "model"], 1,
                "The class keyword defines a class in Python."],

            ["What does break do inside a loop?",
                ["Skips one iteration", "Ends the loop", "Restarts the loop", "Pauses the program"], 1,
                "break immediately exits the nearest loop."],

            ["What does a function return if it has no return statement?",
                ["0", "False", "None", "An empty string"], 2,
                "A Python function returns None by default."]
        ],

        "Advanced": [
            ["What is a Python decorator commonly used for?",
                ["Deleting functions", "Extending function behavior", "Creating loops", "Installing packages"], 1,
                "Decorators wrap functions to extend or modify their behavior."],

            ["What does yield do in a generator?",
                ["Ends the program", "Produces a value and pauses execution", "Creates a class", "Raises an exception"], 1,
                "yield produces a value while preserving the generator's execution state."],

            ["What is a closure?",
                ["A closed file", "A function retaining access to its enclosing scope", "A loop", "A class without methods"], 1,
                "A closure retains access to variables from its lexical environment."],

            ["Which method is associated with creating an object instance?",
                ["__start__", "__new__", "__loop__", "__make__"], 1,
                "__new__ creates an instance; __init__ initializes it."],

            ["What does a context manager commonly manage?",
                ["Only variables", "Resource setup and cleanup", "Only inheritance", "Only loops"], 1,
                "Context managers help manage resources, commonly using the with statement."],

            ["What is the purpose of *args in a function?",
                ["Accept multiple positional arguments", "Accept only keywords", "Create a class", "Return a list automatically"], 0,
                "*args collects extra positional arguments into a tuple."],

            ["What does **kwargs collect?",
                ["Extra positional arguments", "Extra keyword arguments", "Only integers", "Return values"], 1,
                "**kwargs collects extra keyword arguments into a dictionary."],

            ["What is the purpose of __init__()?",
                ["Destroy an object", "Initialize an instance", "Import a module", "Start a loop"], 1,
                "__init__ initializes an instance after it has been created."],

            ["What is a lambda function?",
                ["An anonymous function expression", "A class constructor only", "A loop", "A package manager"], 0,
                "lambda creates a small anonymous function expression."],

            ["What does the GIL traditionally restrict in standard CPython builds?",
                ["All networking", "Simultaneous execution of Python bytecode by multiple threads", "All file access", "Database connections"], 1,
                "The traditional CPython GIL limits simultaneous Python bytecode execution by threads."]
        ]
    },

    // ========================================================
    // JAVA
    // ========================================================

    "Java": {

        "Beginner": [
            ["Which keyword declares a class in Java?",
                ["define", "class", "struct", "object"], 1,
                "The class keyword declares a Java class."],

            ["What is the usual entry point of a Java application?",
                ["start()", "run()", "main()", "init()"], 2,
                "A standard Java application begins in the main method."],

            ["Which primitive type stores whole numbers?",
                ["int", "boolean", "char", "float only"], 0,
                "int is a primitive type for integer values."],

            ["Which keyword creates an object?",
                ["this", "new", "make", "create"], 1,
                "The new keyword creates an object."],

            ["Which symbol ends most Java statements?",
                [":", ".", ";", ","], 2,
                "Most Java statements end with a semicolon."],

            ["Which type stores true or false?",
                ["int", "boolean", "String", "char"], 1,
                "boolean stores true or false."],

            ["Which method displays text in the console?",
                ["print.console()", "System.out.println()", "console.show()", "display()"], 1,
                "System.out.println() prints text followed by a new line."],

            ["Which keyword creates a constant-like variable reference?",
                ["fixed", "const", "final", "static only"], 2,
                "final prevents reassignment of a variable after initialization."],

            ["Java source code is normally saved with which extension?",
                [".py", ".html", ".java", ".js"], 2,
                "Java source files use the .java extension."],

            ["Which operator adds two numbers?",
                ["+", "&", "%", "=="], 0,
                "The + operator performs addition for numeric operands."]
        ],

        "Intermediate": [
            ["Which concept allows one class to inherit from another?",
                ["Encapsulation", "Inheritance", "Compilation", "Casting"], 1,
                "Inheritance lets a class extend another class."],

            ["Which keyword prevents a class from being extended?",
                ["static", "private", "final", "void"], 2,
                "A final class cannot be subclassed."],

            ["Which collection does not allow duplicate elements?",
                ["ArrayList", "Set", "List", "Queue"], 1,
                "Set represents a collection of unique elements."],

            ["What is method overloading?",
                ["Same name with different parameter lists", "Deleting a method", "Changing a variable", "Creating a package"], 0,
                "Overloaded methods share a name but have different parameter lists."],

            ["Which structure handles exceptions?",
                ["try-catch", "if-else only", "for-while", "switch-case"], 0,
                "try-catch is commonly used for exception handling."],

            ["Which keyword refers to the current object?",
                ["super", "this", "self", "current"], 1,
                "this refers to the current object."],

            ["Which keyword is used to implement an interface?",
                ["extends", "inherits", "implements", "interface"], 2,
                "A class uses implements to implement an interface."],

            ["Which access modifier provides the broadest normal accessibility?",
                ["private", "protected", "public", "default"], 2,
                "public members can be accessed from anywhere permitted by the program's module and package rules."],

            ["Which collection is based on a resizable array?",
                ["ArrayList", "TreeSet", "HashMap", "TreeMap"], 0,
                "ArrayList implements a resizable array."],

            ["Which keyword is used to create a subclass?",
                ["implements", "extends", "inherits", "superclass"], 1,
                "A Java class uses extends to inherit from another class."]
        ],

        "Advanced": [
            ["Which interface commonly defines a task for a thread?",
                ["Runnable", "Serializable", "Comparable", "Cloneable"], 0,
                "Runnable defines a task through its run() method."],

            ["What does volatile primarily provide?",
                ["Serialization", "Visibility guarantees for a variable across threads", "Database access", "Inheritance"], 1,
                "volatile helps ensure visibility of updates to a variable across threads."],

            ["Which interface represents key-value mappings?",
                ["Set", "Map", "Queue", "Stack"], 1,
                "Map stores mappings from keys to values."],

            ["What does a Java Stream support?",
                ["Declarative data processing", "Automatic class creation", "Database creation only", "Disabling garbage collection"], 0,
                "Streams support operations that process data sequences."],

            ["Which keyword explicitly invokes a superclass constructor?",
                ["this", "parent", "super", "base"], 2,
                "super() invokes a superclass constructor."],

            ["What is polymorphism?",
                ["One name or interface supporting different implementations", "Deleting objects", "Creating comments", "Sorting files"], 0,
                "Polymorphism allows a common interface to represent different implementations."],

            ["Which keyword marks a method that belongs to the class rather than an instance?",
                ["static", "final", "volatile", "transient"], 0,
                "A static method belongs to the class."],

            ["What is the purpose of generics?",
                ["Compile-time type safety and reusable type-aware code", "Automatic networking", "Creating threads only", "Replacing constructors"], 0,
                "Generics provide stronger type checking and reusable components."],

            ["Which mechanism automatically reclaims unreachable objects?",
                ["Constructor", "Garbage collection", "Serialization", "Inheritance"], 1,
                "Java garbage collection reclaims memory from objects that are no longer reachable."],

            ["What does synchronization help control?",
                ["Access to shared resources among threads", "HTML layout", "Package names", "Variable spelling"], 0,
                "Synchronization helps coordinate access to shared state among threads."]
        ]
    },

    // ========================================================
    // SQL
    // ========================================================

    "SQL": {

        "Beginner": [
            ["Which SQL command retrieves data?",
                ["GET", "SELECT", "OPEN", "FETCHALL"], 1,
                "SELECT retrieves data from tables."],

            ["Which clause filters rows?",
                ["ORDER BY", "WHERE", "GROUP BY", "SELECT"], 1,
                "WHERE filters rows according to a condition."],

            ["Which command inserts new rows?",
                ["INSERT", "UPDATE", "ALTER", "DROP"], 0,
                "INSERT adds new records to a table."],

            ["Which clause sorts results?",
                ["SORT", "ARRANGE", "ORDER BY", "GROUP BY"], 2,
                "ORDER BY sorts the query result."],

            ["Which function counts rows?",
                ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"], 1,
                "COUNT(*) counts rows, including rows containing NULL values."],

            ["Which command changes existing records?",
                ["UPDATE", "SELECT", "CREATE", "GRANT"], 0,
                "UPDATE modifies existing records."],

            ["Which command removes selected rows?",
                ["DELETE", "REMOVE TABLE", "CLEAR", "ERASE"], 0,
                "DELETE removes rows from a table."],

            ["Which SQL keyword removes duplicate result rows?",
                ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"], 1,
                "SELECT DISTINCT returns unique result rows."],

            ["Which operator checks a range of values?",
                ["BETWEEN", "RANGE", "WITHIN", "AMONG"], 0,
                "BETWEEN tests whether a value falls within a specified range."],

            ["Which command creates a new table?",
                ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "BUILD TABLE"], 2,
                "CREATE TABLE defines a new table."]
        ],

        "Intermediate": [
            ["Which JOIN returns matching rows from both tables?",
                ["INNER JOIN", "CROSS JOIN", "FULL JOIN", "SELF JOIN"], 0,
                "INNER JOIN returns rows matching the join condition in both tables."],

            ["Which clause filters grouped results?",
                ["WHERE", "HAVING", "ORDER BY", "LIMIT"], 1,
                "HAVING filters groups after GROUP BY."],

            ["What is a primary key?",
                ["A key allowing duplicates", "A unique row identifier", "A sorting command", "A temporary table"], 1,
                "A primary key uniquely identifies each row and cannot contain NULL values."],

            ["Which function calculates an average?",
                ["MEAN()", "AVG()", "AVERAGE()", "MID()"], 1,
                "AVG() calculates the average of non-NULL values."],

            ["What does a foreign key help enforce?",
                ["Referential integrity", "Sorting", "Text formatting", "Row numbering"], 0,
                "A foreign key links related tables and helps maintain referential integrity."],

            ["Which operator combines conditions when both must be true?",
                ["OR", "AND", "NOT", "LIKE"], 1,
                "AND requires both conditions to be true."],

            ["What does GROUP BY do?",
                ["Groups rows with matching values", "Deletes duplicates from a table", "Sorts every column automatically", "Creates a database"], 0,
                "GROUP BY forms groups for aggregate calculations."],

            ["Which condition checks for missing NULL values?",
                ["= NULL", "IS NULL", "EQUALS NULL", "CHECK NULL"], 1,
                "IS NULL tests whether an expression is NULL."],

            ["What does a LEFT JOIN return?",
                ["Only right table rows", "All left rows and matching right rows", "Only identical tables", "No unmatched left rows"], 1,
                "LEFT JOIN preserves every row from the left table."],

            ["What is a subquery?",
                ["A query inside another query", "A database password", "A table index", "A column name"], 0,
                "A subquery is a query nested inside another SQL statement."]
        ],

        "Advanced": [
            ["What is a correlated subquery?",
                ["A subquery referencing the outer query", "A query independent of the outer query", "A table without columns", "An index"], 0,
                "A correlated subquery references values from the outer query."],

            ["What is a common purpose of an index?",
                ["Improve lookup performance", "Always reduce table size", "Remove all duplicates", "Replace all constraints"], 0,
                "Indexes can improve retrieval speed but require storage and may slow writes."],

            ["What does COMMIT do?",
                ["Finalizes transaction changes", "Deletes the database", "Creates a view", "Sorts rows"], 0,
                "COMMIT finalizes a transaction's changes."],

            ["What does a window function allow?",
                ["Calculations across related rows without collapsing them into one row per group", "Deleting all grouped rows", "Creating databases", "Renaming tables automatically"], 0,
                "Window functions calculate over related rows while retaining individual rows."],

            ["Which normal form addresses transitive dependencies of non-key attributes?",
                ["1NF", "2NF", "3NF", "0NF"], 2,
                "Third Normal Form addresses transitive dependencies of non-key attributes."],

            ["What is a CTE commonly introduced with?",
                ["WITH", "CREATE TEMP", "START", "DEFINE"], 0,
                "A common table expression is introduced with WITH."],

            ["What does ROLLBACK generally do?",
                ["Undoes uncommitted transaction changes", "Permanently saves changes", "Creates an index", "Adds a new column"], 0,
                "ROLLBACK reverses uncommitted changes in a transaction."],

            ["Which ACID property means a transaction is all-or-nothing?",
                ["Consistency", "Isolation", "Atomicity", "Durability"], 2,
                "Atomicity means a transaction completes entirely or does not take effect."],

            ["What is a database view?",
                ["A saved query presented as a virtual table", "A physical keyboard", "A programming loop", "A backup file only"], 0,
                "A view is a named query presented like a virtual table."],

            ["What does ROW_NUMBER() commonly return?",
                ["A sequential number within a window partition", "A random database key", "The number of tables", "A column's average"], 0,
                "ROW_NUMBER() assigns sequential numbers within each window partition."]
        ]
    },

    // ========================================================
    // HTML / CSS
    // ========================================================

    "HTML/CSS": {

        "Beginner": [
            ["Which HTML tag creates a hyperlink?",
                ["<link>", "<a>", "<href>", "<url>"], 1,
                "The anchor tag <a> creates hyperlinks."],

            ["Which tag represents the highest-level standard heading?",
                ["<h6>", "<head>", "<h1>", "<heading>"], 2,
                "<h1> represents the highest-level standard heading."],

            ["Which CSS property changes text color?",
                ["font-style", "text-color", "color", "background"], 2,
                "The color property sets text color."],

            ["Which CSS property sets an element's background color?",
                ["background-color", "font-color", "text-fill", "fill-text"], 0,
                "background-color sets the background color."],

            ["Which HTML element embeds an image?",
                ["<picture-file>", "<img>", "<image>", "<src>"], 1,
                "The <img> element embeds an image."],

            ["Which tag creates a paragraph?",
                ["<para>", "<p>", "<text>", "<paragraph>"], 1,
                "The <p> element represents a paragraph."],

            ["Which CSS property changes text size?",
                ["font-size", "text-style", "size-font", "font-weight"], 0,
                "font-size controls text size."],

            ["Which HTML attribute specifies an image source?",
                ["href", "alt", "src", "link"], 2,
                "The src attribute specifies the image resource."],

            ["Which CSS selector targets a class named card?",
                ["#card", ".card", "card()", "*card"], 1,
                "A period followed by a class name selects class elements."],

            ["Which HTML tag creates an unordered list?",
                ["<ol>", "<ul>", "<li>", "<list>"], 1,
                "<ul> creates an unordered list."]
        ],

        "Intermediate": [
            ["What is Flexbox primarily designed for?",
                ["Database queries", "One-dimensional layouts", "Server routing", "Image compression"], 1,
                "Flexbox lays out items in a row or column."],

            ["Which selector targets id='header'?",
                [".header", "#header", "*header", "header#"], 1,
                "The # selector targets an ID."],

            ["Which image attribute provides alternative text?",
                ["title", "alt", "src", "href"], 1,
                "The alt attribute provides alternative text."],

            ["Which box-sizing value includes padding and border in declared width?",
                ["content-box", "border-box", "inline-box", "fixed-box"], 1,
                "border-box includes content, padding and border in the declared dimensions."],

            ["What helps create layouts for different viewport sizes?",
                ["Media queries", "SQL queries", "HTML comments", "Meta classes"], 0,
                "Media queries apply CSS according to viewport or device conditions."],

            ["Which HTML element represents navigation links?",
                ["<navigate>", "<nav>", "<links>", "<menu-link>"], 1,
                "The <nav> element represents a navigation section."],

            ["Which CSS property controls space inside an element's border?",
                ["margin", "padding", "outline", "gap only"], 1,
                "Padding is the space between the content and its border."],

            ["Which CSS property controls space outside an element's border?",
                ["padding", "margin", "border-spacing only", "text-indent"], 1,
                "Margin creates space outside an element's border."],

            ["Which HTML attribute connects a label to a form control by ID?",
                ["target", "for", "connect", "name"], 1,
                "A label's for attribute can reference a form control's ID."],

            ["Which CSS display value creates a grid formatting context?",
                ["display: grid", "display: table-only", "position: grid", "layout: grid"], 0,
                "display: grid creates a CSS Grid container."]
        ],

        "Advanced": [
            ["What is CSS specificity used for?",
                ["Resolving competing CSS declarations", "Compressing images", "Creating HTML elements", "Running JavaScript"], 0,
                "Specificity helps determine which competing selector takes precedence."],

            ["What does position: sticky generally do?",
                ["Always removes an element", "Allows an element to stick after a scrolling threshold", "Creates a grid", "Disables scrolling"], 1,
                "Sticky positioning combines normal flow with threshold-based sticking."],

            ["Which CSS layout system handles two-dimensional rows and columns?",
                ["Float", "Grid", "Inline", "Clearfix"], 1,
                "CSS Grid is designed for two-dimensional layouts."],

            ["What is the purpose of aria-label?",
                ["Provide an accessible name", "Set a CSS color", "Create a database key", "Run a JavaScript loop"], 0,
                "aria-label provides an accessible name when needed."],

            ["What are CSS custom properties useful for?",
                ["Reusable CSS values", "Database tables", "Replacing HTML", "Running Python"], 0,
                "Custom properties store reusable values, often called CSS variables."],

            ["Which pseudo-class targets an element when the pointer is over it?",
                [":focus", ":hover", ":checked", ":visited"], 1,
                ":hover applies styles while a pointing device hovers over an element."],

            ["What is the purpose of semantic HTML?",
                ["Give content meaningful structure", "Automatically create CSS", "Replace every image", "Run database queries"], 0,
                "Semantic HTML describes the meaning and role of content."],

            ["Which CSS unit is relative to the root element's font size?",
                ["px", "rem", "vh", "cm"], 1,
                "rem is relative to the root element's font size."],

            ["What does the CSS cascade help determine?",
                ["Which declarations apply when rules conflict", "The order of database records", "The number of HTML files", "The JavaScript call stack"], 0,
                "The cascade resolves competing declarations using origin, importance, layers, specificity and order."],

            ["Which attribute is important for responsive viewport configuration?",
                ["charset only", "name='viewport'", "role='responsive'", "class='mobile'"], 1,
                "The viewport meta tag helps control the layout viewport on mobile devices."]
        ]
    },

    // ========================================================
    // JAVASCRIPT
    // ========================================================

    "JavaScript": {

        "Beginner": [
            ["Which keyword declares a reassignable block-scoped variable?",
                ["const", "let", "fixed", "define"], 1,
                "let declares a block-scoped variable that can be reassigned."],

            ["Which operator checks strict equality?",
                ["=", "==", "===", "!="], 2,
                "=== compares without type coercion."],

            ["Which method writes a message to the browser console?",
                ["console.log()", "print.console()", "message()", "browser.write()"], 0,
                "console.log() writes a message to the console."],

            ["Which array method adds an item to the end?",
                ["pop()", "shift()", "push()", "slice()"], 2,
                "push() adds items to the end of an array."],

            ["Which keyword declares a function?",
                ["func", "function", "method", "define"], 1,
                "The function keyword declares a function."],

            ["Which symbol starts a single-line JavaScript comment?",
                ["#", "//", "<!--", "**"], 1,
                "// begins a single-line JavaScript comment."],

            ["Which method converts a string to lowercase?",
                ["toLowerCase()", "lower()", "lowerCase()", "toSmall()"], 0,
                "toLowerCase() returns a lowercase version of a string."],

            ["Which value represents the absence of an assigned value?",
                ["undefined", "zero", "false", "empty"], 0,
                "undefined commonly indicates that a value has not been assigned."],

            ["Which statement repeats code while a condition is true?",
                ["repeat", "loop-if", "while", "during"], 2,
                "A while loop repeats while its condition evaluates to true."],

            ["Which method selects the first element matching a CSS selector?",
                ["document.querySelector()", "document.findCSS()", "window.selectHTML()", "html.getStyle()"], 0,
                "querySelector() returns the first matching element."]
        ],

        "Intermediate": [
            ["What does Array.map() return?",
                ["A new transformed array", "Always a number", "Only the original array", "A Boolean only"], 0,
                "map() creates a new array from callback return values."],

            ["What does === compare?",
                ["Only variable names", "Strict equality without type coercion", "Object size only", "Text length only"], 1,
                "=== compares values without converting their types."],

            ["Which method parses a JSON string?",
                ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"], 1,
                "JSON.parse() converts valid JSON text into a JavaScript value."],

            ["What does a Promise represent?",
                ["An eventual asynchronous result", "A CSS style", "An HTML tag", "A variable declaration"], 0,
                "A Promise represents the eventual completion or failure of an asynchronous operation."],

            ["Which keyword declares a block-scoped variable that cannot be reassigned?",
                ["var", "let", "const", "static"], 2,
                "const prevents reassignment of the variable binding."],

            ["What does Array.filter() do?",
                ["Creates an array of elements passing a test", "Changes all values to strings", "Sorts automatically", "Deletes the original array"], 0,
                "filter() returns a new array containing elements that pass a test."],

            ["What does typeof 42 return?",
                ["integer", "number", "float", "numeric"], 1,
                "typeof 42 returns the string 'number'."],

            ["Which method converts a JavaScript value to JSON text?",
                ["JSON.parse()", "JSON.stringify()", "JSON.toText()", "JSON.encodeText()"], 1,
                "JSON.stringify() serializes a JavaScript value into JSON text."],

            ["Which event commonly occurs when a button is clicked?",
                ["submit only", "click", "hovered", "pressed-only"], 1,
                "The click event fires when an element is clicked."],

            ["Which syntax defines an arrow function?",
                ["function =>", "->", "=>", "::"], 2,
                "The => token defines an arrow function."]
        ],

        "Advanced": [
            ["What is a closure?",
                ["A function with access to its surrounding lexical scope", "A closed browser tab", "A CSS selector", "A loop only"], 0,
                "A closure retains access to variables from its lexical environment."],

            ["What does async/await help with?",
                ["Writing readable asynchronous code", "Creating CSS grids", "Declaring HTML attributes", "Sorting databases automatically"], 0,
                "async/await provides a readable syntax for working with Promises."],

            ["What is event bubbling?",
                ["An event propagating from the target toward ancestors", "A page reload", "An event always being cancelled", "A color change"], 0,
                "In bubbling, events propagate from the target up through ancestors."],

            ["What is a JavaScript module used for?",
                ["Organizing reusable code with imports and exports", "Replacing the browser", "Creating only CSS", "Saving passwords automatically"], 0,
                "Modules organize code and expose functionality through imports and exports."],

            ["Which method creates an array containing elements that pass a condition?",
                ["map()", "filter()", "reduce()", "join()"], 1,
                "filter() returns elements that pass the provided test."],

            ["What does Promise.all() do when given an array of Promises?",
                ["Fulfills when all fulfill, or rejects when one rejects", "Always resolves immediately", "Runs only the first Promise", "Converts all results to strings"], 0,
                "Promise.all() fulfills when all input Promises fulfill and rejects if an input Promise rejects."],

            ["What is the DOM?",
                ["A programming language", "A tree-like representation of a document", "A database protocol", "A CSS unit"], 1,
                "The Document Object Model represents a document as objects that scripts can inspect and modify."],

            ["What is the purpose of event delegation?",
                ["Handle descendant events through a shared ancestor listener", "Disable all events", "Create CSS classes", "Prevent all bubbling"], 0,
                "Event delegation uses a shared ancestor to handle events from descendant elements."],

            ["What does the spread syntax ... commonly do with an iterable?",
                ["Expands its elements", "Deletes its elements", "Sorts elements", "Converts every element to a string"], 0,
                "Spread syntax expands iterable elements into a new context, such as an array literal or function call."],

            ["What does Object.freeze() do to an object?",
                ["Prevents changes to its own properties at the top level", "Deletes the object", "Deep-freezes all nested objects automatically", "Converts it to JSON"], 0,
                "Object.freeze() prevents changes to the object's own properties, but does not automatically freeze nested objects."]
        ]
    }
};


// ============================================================
// QUIZ ELEMENTS
// ============================================================

const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const skillSelect = document.getElementById("skill");
const difficultySelect = document.getElementById("difficulty");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const quitBtn = document.getElementById("quit-btn");
const retryBtn = document.getElementById("retry-btn");

let questions = [];
let currentIndex = 0;
let correctCount = 0;
let selectedAnswer = null;
let answerHistory = [];

let currentSkill = "";
let currentDifficulty = "";


// ============================================================
// SHUFFLE ARRAY
// ============================================================

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz() {

    currentSkill = skillSelect.value;
    currentDifficulty = difficultySelect.value;

    const allQuestions =
        questionBank[currentSkill][currentDifficulty];

    // Randomly select 5 unique questions from the selected category.
    questions = shuffle(allQuestions).slice(
        0,
        Math.min(5, allQuestions.length)
    );

    currentIndex = 0;
    correctCount = 0;
    selectedAnswer = null;
    answerHistory = [];

    setupScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    document.getElementById("quiz-label").textContent =
        `${currentSkill} · ${currentDifficulty}`;

    showQuestion();

    quizScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {

    const question = questions[currentIndex];

    selectedAnswer = null;

    document.getElementById("question-count").textContent =
        `Question ${currentIndex + 1} of ${questions.length}`;

    document.getElementById("progress-bar").style.width =
        `${(currentIndex / questions.length) * 100}%`;

    questionText.textContent = question[0];

    optionsContainer.innerHTML = "";

    feedback.textContent = "";
    feedback.classList.add("hidden");

    nextBtn.disabled = true;

    nextBtn.textContent =
        currentIndex === questions.length - 1
            ? "View Results →"
            : "Next Question →";

    question[1].forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "option-btn";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(index) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const question = questions[currentIndex];

    const correctAnswerIndex = question[2];

    const buttons =
        optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach((button, optionIndex) => {

        button.disabled = true;

        if (optionIndex === correctAnswerIndex) {
            button.classList.add("correct");
        }

        if (
            optionIndex === selectedAnswer &&
            selectedAnswer !== correctAnswerIndex
        ) {
            button.classList.add("incorrect");
        }
    });

    const isCorrect =
        selectedAnswer === correctAnswerIndex;

    if (isCorrect) {

        correctCount++;

        feedback.textContent =
            `Correct! ${question[3]}`;

    } else {

        feedback.textContent =
            `Not quite. Correct answer: ` +
            `${question[1][correctAnswerIndex]}. ${question[3]}`;
    }

    feedback.classList.remove("hidden");

    answerHistory.push({
        question: question[0],
        selected: question[1][selectedAnswer],
        correct: question[1][correctAnswerIndex],
        isCorrect: isCorrect,
        explanation: question[3]
    });

    nextBtn.disabled = false;
}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {

    if (selectedAnswer === null) {
        return;
    }

    currentIndex++;

    if (currentIndex < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
}


// ============================================================
// SHOW RESULTS
// ============================================================

function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const total = questions.length;
    const wrongCount = total - correctCount;

    const percentage = total > 0
        ? Math.round((correctCount / total) * 100)
        : 0;
    const scoreCircle = document.querySelector(".score-circle");
    scoreCircle.style.setProperty("--score", `${percentage}%`);

    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("score-percentage").textContent = `${percentage}% `;
    document.getElementById("total-questions").textContent = total;
    document.getElementById("correct-answers").textContent = correctCount;
    document.getElementById("wrong-answers").textContent = wrongCount;

    let message;
    let nextStep;

    if (percentage === 100) {
        message = "Excellent! You answered every question correctly.";
        nextStep = "You have answered all questions correctly. Try a higher difficulty level to challenge yourself.";
    } else if (percentage >= 80) {
        message = "Great work! You have a strong understanding of these topics.";
        nextStep = "Review the questions you missed, then try another quiz to strengthen your knowledge.";
    } else if (percentage >= 60) {
        message = "Good effort! You are making progress.";
        nextStep = "Review the incorrect answers and explanations. Practise these topics before trying again.";
    } else if (percentage >= 40) {
        message = "You're learning! Keep practising.";
        nextStep = "Revise the basics of this skill, study the explanations, and retake the quiz.";
    } else {
        message = "Keep practising! Every attempt helps you learn.";
        nextStep = "Start with beginner-level learning resources and practise the fundamentals before retaking the quiz.";
    }

    document.getElementById("result-message").textContent =
        `${currentSkill} · ${currentDifficulty}: ${message} `;

    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    answerHistory.forEach((item, index) => {
        const review = document.createElement("div");

        review.className = item.isCorrect
            ? "review-item review-correct"
            : "review-item review-wrong";

        const heading = document.createElement("strong");
        heading.textContent = `${index + 1}. ${item.question} `;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent = `Your answer: ${item.selected} `;

        const correctAnswer = document.createElement("p");
        correctAnswer.textContent = `Correct answer: ${item.correct} `;

        const explanation = document.createElement("p");
        explanation.textContent = `Explanation: ${item.explanation} `;

        review.append(heading, yourAnswer, correctAnswer, explanation);
        reviewContainer.appendChild(review);
    });

    let nextStepBox = document.getElementById("next-step-box");

    if (!nextStepBox) {
        nextStepBox = document.createElement("div");
        nextStepBox.id = "next-step-box";
        nextStepBox.className = "next-step-box";
        resultScreen.appendChild(nextStepBox);
    }

    nextStepBox.innerHTML = "";

    const nextHeading = document.createElement("h3");
    nextHeading.textContent = "What Should You Do Next?";

    const nextText = document.createElement("p");
    nextText.textContent = nextStep;

    nextStepBox.append(nextHeading, nextText);

    resultScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ============================================================
// EXIT / RETAKE QUIZ
// ============================================================

function exitQuiz() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");

    setupScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// EVENT LISTENERS
// ============================================================

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

quitBtn.addEventListener("click", exitQuiz);

retryBtn.addEventListener("click", exitQuiz);