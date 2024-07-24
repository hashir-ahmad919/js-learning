# JavaScript 

#### JavaScript  is Asynchronous Lnaguage but its default behaviour is is Synchronous and Single threaded 

## Execution context:
###### Execute one line of code at a time.


## Block Code  vs Non-Blocking Code
#### Block Code:
##### It blocks the flow of program e.g: read file sync

#### Block Code:
##### It blocks the flow of program e.g: read file Async


## Which of the method is good to use
##### Its not about which of the method is good to use but rather it depends on the use case e.g: if a user registers and we use Async. So We want that user entry is completed in the database after the success only thn we want the user to know whether it was registered successfully or not. So in this we also need to check blocking code as well. Only non blocking is not a good practice

## Task Queue vs High priority Queue
##### Task queue is basically for register call backs, High priority queue or promise queue handles promises call backs and they have slightly more priority thn task queue