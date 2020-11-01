# Longest Common Subsequence
A program to find the longest common subsequence (LCS) of two strings using JSON

## Task & Purpose
The longest common subsequence (LCS) is an intriguing problem that has fascinated me for a while now; I am experimenting with new ways to graphically illustrate specific functions (as opposed to stack architecture) and thought I would use LCS as a case study for developing some new ideas in this area.&nbsp;  I attempted to replicate the capabilities of this algorithm [here](https://rosettacode.org/wiki/Longest_common_subsequence#Dynamic_Programming_4) that is labeled "**Dynamic Programming**."&nbsp;

## Organization
The file labeled `mainProgram.js` in the main directory of this repo contains the actual program whereas all other files are references, outdated examples, and other doodles I've been messing around with.  This program has a live REPL [here](https://repl.it/@Richard_Burd/Longest-Common-Subsequence#index.js) online as well.

## Algorithm Architecture
This single script program is a collection of functions, many of them self-calling, that create a series of JavaScript Object Notation (JSON) objects which in turn represent individual characters in the LCS.&nbsp;  What makes this program unique is that it can be expanded upon to search for the LCS in 3 strings or do other stuff like exclude certain characters because of how the characters are represented inside objects.&nbsp;  I am not yet good enough at programming to understand how the Dynamic Programming algorithm [here](https://rosettacode.org/wiki/Longest_common_subsequence#JavaScript) works so I cam up with my own method that returns the correct LCS most of the time, but now and then something I call the ***multiplier*** needs to be increased in value in order to make the algorithm work properly.&nbsp;  The illustration below has some notes on this in the lower right-hand corner.

## Cool Graphics
Here is an illustration of the program and how it works:
![a matrix with a software diagram](https://i.imgur.com/pOI0lvk.jpg)

## Notes to Self on GitHub Problems
GitHub is acting funny lately; It looks like I must first create an empty repo online, then clone that empty repo to my local environment without first having created a README or description on the web browser interface.  I think it is relate to this change here because if I follow the process above I end up creating a new repo where I start out in the `(master)` branch whereas if I create a README file or repo description first, then when I clone the repo I see I am inside the  `(main)` branch, and then when I go to push I get an error that says: `src refspec master does not match any`&nbsp;  -this may be related to a [recent change GitHub implemented](https://www.zdnet.com/article/github-to-replace-master-with-main-starting-next-month/) as I haven't had this problem prior to October 2020.
