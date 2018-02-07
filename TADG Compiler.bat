echo off
set path=%~dp0
title TADG Compiler
tweego -s Main -o %path%\output\TADG.html %path%\src
start "" "%path%\output\TADG.html"