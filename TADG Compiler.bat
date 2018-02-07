echo off
set dirTADG=%~dp0
title TADG Compiler
tweego -s Main -o %dirTADG%output\TADG.html %dirTADG%src
start "" "%dirTADG%output\TADG.html"
