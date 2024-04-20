This is a seconds counter test for react. The counter doesn't stop even after clicking the stop button but now instead of 2 steps at a time, it takes 1 step at a time. The reason it occurs is that due to strict mode useEffect runs twice and in the absence of a clean up function, it creates two setIntervals and one of whose timerId is overwritten. So, after clicking stop, only one setInterval is cleared.  

It has 3 solutions:   
1. add setInterval cleanup function in useEffect. (the desired)
2. add if(!timerRef.current) before setInterval (the one found after debugging)
3. remove React strict mode (the root cause)  
