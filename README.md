# Phase Generator
A stupid little thing I made because [api.usno.navy.mil](https://api.usno.navy.mil/) has been down for a literal eternity, and [Princess Luna](https://github.com/Thorinair/Princess-Luna) needs her Moon phase data. 

Parses the `phases_src.json` file, outputs `phases.json`, with all Moon phases filled in. The data is calculated by dividing each full Moon segment in 4 segments. May not be as accurate, but close enough. 

The original data is based on [this dataset](https://www.kaggle.com/lsind18/full-moon-calendar-1900-2050).