Parsify
=======

Parsify is a framework for customizable parser overlays, running on top of [RainbowMage's ACT Overlay Plugin](https://github.com/RainbowMage/OverlayPlugin).  
It replaces the monolithic `miniparse.html` file shipped with it, and provides:

* **Better, easier customization** - it uses [AngularJS](https://angularjs.org) to build parser UIs out of HTML and directives, rather than generating HTML from messy JS definitions and functions.
* **More accurate, more consistent** - more precise percentages, arbitrary precision, max hits with names and damage separated... and no more inconsistencies (`ParryPct` vs `crithit%`).
* **Reusable components** - Parts of overlays can be shared as plugins and applied to someone else's. No more need to replace whole miniparse.html files to try a different style. Keep your layout and style it how you like.

Sample miniparse.html
---------------------

```html
<!DOCTYPE html>
<!-- The ng-app directive is necessary -->
<html ng-app="parsify">
<head>

	<!-- This does ALL the necessary setup for Parsify -->
    <script src="parsify/bootstrap.js"></script>
    
</head>
<!-- Let ParserController provide data -->
<body ng-controller="ParserController">
    
    <!-- Header -->
    <div>
        <!-- Use {{ brackets }} to print out a value -->
        {{ encounter.title }}
    </div>
    
    <!-- Table of combatants -->
    <table>
        
        <!-- Table header -->
        <thead>
            <!-- tr = Table Row, td = Table Data (a cell) -->
            <tr>
                <td width="45%">Name</td>
                <td width="5%">Job</td>
                <td width="20%" align="right">DPS</td>
                <td>Max Hit</td>
            </tr>
        </thead>
        
        <!-- Table body -->
        <tbody>
            <!-- Add a row for every combatant, accessing data as 'char' -->
            <tr ng-repeat="char in combatants">
                
                <!-- Use {{ brackets }} to print variables -->
                <td>{{ char.name }}</td>
                
                <!-- You can use filters to process output -->
                <td>{{ char.job|uppercase }}</td>
                
                <!-- The 'num' filter prints a number with a set precision (here: 2 decimals) -->
                <td>{{ char.dps|num:2 }}</td>
                
                <!-- You can use default values with {{ expression || "Default" }}-->
                <td>{{ char.maxhit.name || "---" }} ({{ char.maxhit.damage|num:0 }})</td>
                
                <!-- Or you can hide the text if this character hasn't attacked yet: -->
                <!-- <td><span ng-if="char.maxhit.name">{{ char.maxhit.name }} ({{ char.maxhit.damage|num:0 }})</span></td> -->
                
            </tr>
        </tbody>
        
    </table>
    
</body>
</html>
```
