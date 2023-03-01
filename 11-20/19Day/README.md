<h2>#50DaysofJavascriptChallenge - Day 19</h2>

<h3><strong>TODO : </strong> Resistor Color map.</h3>

<h4><strong>Instructions : </strong></h4>
<p> If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need
    to know two things about them: <br>
<ol>
    <li>Each resistor has a resistance value.</li>
    <li>Resistors are small - so small in fact that if you printed the resistance value on them, it would be
        hard to read. To get around this problem, manufacturers print color-coded bands onto the resistors to denote
        their resistance values. Each band has a position and a numeric value.
        The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.
        In this exercise you are going to create a helpful program so that you don't have to remember the values of the
        bands.
    </li>
</ol>
<br>
These colors are encoded as follows: <br>
<ol>
    <li>Black: 0</li>
    <li>Brown: 1</li>
    <li>Red: 2</li>
    <li>Orange: 3</li>
    <li>Yellow: 4</li>
    <li>Green: 5</li>
    <li>Blue: 6</li>
    <li>Violet: 7</li>
    <li>Grey: 8</li>
    <li>White: 9</li>
</ol>
<br>

<h4><strong>Note : </strong> The goal of this exercise is to create a way : </h4>
<ol>
    <li>to look up the numerical value associated with a particular color band</li>
    <li>to list the different band colors</li>
</ol>
Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the
array: Better Be Right Or Your Great Big Values Go Wrong.
Although the color names are capitalised in the description, the function colorCode will always be called with the
lowercase equivalent, e.g brown instead of Brown.
</p>

<h4><strong>Test case : </strong></h4>
<ul>
    <li>colorCode('blue') should return 6.</li>
    <li>colorCode('white') should return 9.</li>
</ul>

<h4><strong>Solution and Logic : </strong></h4>
<ul>
    <li>look in app.js file for solution and logic</li>
</ul>

<strong>
    <p>I request you to try and solve the challenges yourself by taking help from the readme.md files, as I have
        provided solution to all the challenges. I am happy to provide you with my solutions if you are unable to solve
        the problem.</p>
</strong>