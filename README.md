# Longest Common Subsequence
A program to find the longest common subsequence (LCS) of two strings using JSON

A detailed discussion of this project is available [here](https://richard-burd.github.io/longest_common_subsequence).

## Task & Purpose
The longest common subsequence (LCS) is an intriguing problem that has fascinated me for a while now; I am experimenting with new ways to graphically illustrate specific functions (as opposed to stack architecture) and thought I would use LCS as a case study for developing some new ideas in this area.&nbsp;  I attempted to replicate the capabilities of this algorithm [here](https://rosettacode.org/wiki/Longest_common_subsequence#Dynamic_Programming_4) that is labeled "**Dynamic Programming**."&nbsp;

## Organization
The file labeled `mainProgram.js` in the main directory of this repo contains the actual program whereas all other files are references, outdated examples, and other doodles I've been messing around with.  This program has a live REPL [here](https://repl.it/@Richard_Burd/Longest-Common-Subsequence#index.js) online as well.

## Algorithm Architecture
This single script program is a collection of functions, many of them self-calling, that create a series of JavaScript Object Notation (JSON) objects which in turn represent individual characters in the LCS.&nbsp;  What makes this program unique is that it can be expanded upon to search for the LCS in 3 strings or do other stuff like exclude certain characters because of how the characters are represented inside objects.&nbsp;  I am not yet good enough at programming to understand how the Dynamic Programming algorithm [here](https://rosettacode.org/wiki/Longest_common_subsequence#JavaScript) works so I cam up with my own method that returns the correct LCS most of the time, but now and then something I call the ***multiplier*** needs to be increased in value in order to make the algorithm work properly.&nbsp;  The illustration below has some notes on this in the lower right-hand corner.

## Cool Graphics
Here is an illustration of the program and how it works:
![a matrix with a software diagram](https://i.imgur.com/OYgPdUa.jpg)

