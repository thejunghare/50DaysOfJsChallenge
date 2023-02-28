<h2>#50DaysofJavascriptChallenge - Day 12</h2>

<h3><strong>TODO : </strong> Given a number from 0 to 999,999,999,999, spell out that number in English..</h3>

<h4><strong>Instructions : </strong></h4>
<ul>
 <li><strong>Step 1 : <br> </strong>
        Handle the basic case of 0 through 99. <br>
        If the input to the program is 22, then the output should be 'twenty-two'. <br>
        Your program should complain loudly if given a number outside the blessed range. <br>
        Some good test cases for this program are:
        <ol>
            <li>0</li>
            <li>14</li>
            <li>50</li>
            <li>98</li>
            <li>-1</li>
            <li>100</li>
        </ol>
 </li>

 <li><strong>Step 2 : <br> </strong>
        Implement breaking a number up into chunks of thousands. <br>
        So 1234567890 should yield a list like 1, 234, 567, and 890, while the far simpler 1000 should yield just 1 and
        0. <br>
        The program must also report any values that are out of range.
 </li>

 <li><strong>Step 3 : <br> </strong>
        Now handle inserting the appropriate scale word between those chunks. <br>
        So 1234567890 should yield '1 billion 234 million 567 thousand 890' <br>
        The program must also report any values that are out of range. It's fine to stop at "trillion".
 </li>

 <li><strong>Step 4 : </strong> <br>
        Put it all together to get nothing but plain English. <br>
        12345 should give twelve thousand three hundred forty-five. <br>
        The program must also report any values that are out of range.
</li>
</ul>

<h4><strong>Test case : </strong></h4>
<ul>
    <li>14 becomes "fourteen".</li>
    <li>1323 becomes "one thousand three hundred twenty-three".</li>
</ul>

<!-- <h4><strong>What is fabonaci series? : </strong></h4>
<ul>
    <li>fabonaci series is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, hence next two
        numbers would be 1 and 2 which are sum of 0 and 1 and 1, 1 respectively.</li>
</ul>
 -->
<h4><strong>Solution and Logic : </strong></h4>
<ul>
    <li>look in app.js file for solution and logic</li>
</ul>

<strong>
    <p>I request you to try and solve the challenges yourself by taking help from the readme.md files, as I have
        provided solution to all the challenges. I am happy to provide you with my solutions if you are unable to
        solve
        the problem.</p>
</strong>
</strong>