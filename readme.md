# Node `fs.watch`

Demonstrates `fs.watch`.

## Running

`node .`

## Notes

`fs.watch` only works on macOS and Windows!

`fs.watch` can watch both files and directories. `fs.watchFile` can only watch
files. The difference between them is that `watch` uses the file system change
events whereas `watchFile` uses a timer to determine the changes from looking at
the file stats in specific intervals.
