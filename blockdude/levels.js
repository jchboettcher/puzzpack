const levels = {
1: `
X                  X
X                  X
X                  X
X                  X
X   X       X      X
XD  X   X B X B R  X
XXXXXXXXXXXXXXXXXXXX
`,
2: `
X    XX        XX     
 X    XX        XX    
 X                X   
XX                 X  
XD                  X 
XX                   X
 X           X  B    X
 X           XB BBL  X
 XXXXX   XXXXXXXXXXXXX
     X  BX            
     XXXXX            
`,
3: `
 X                 
 X   XXXXXXXXXXXXX 
X X X             X
X  X              X
X                BX
X               BBX
X XXX    L   XB XX 
X X X    X  XXXXX  
X X XBB XX  X      
XDX XXXXXX XX      
XXX XX   XXX       
`,
4: `
                  X     
                 X X    
       X        X   X   
      X X      X     X  
   XXX   X    X       X 
  X       X  X         X
 X         XX          X
 X                    BX
 X                   BBX
 X               L   XXX
XX    X          X   X  
XD    X B        XXXXX  
XXXXX X B   B  XXX      
    X X B X XB X        
    X XXXXXXXXXX        
    XXX                 
`,
5: `
     XXX    XXXXXXXXX 
 XXXX   XXXX         X
X                    X
X                    X
X                    X
X     X              X
X     X              X
X     XBBBB          X
XD   XXXXXXXL        X
XX XXX     XX X     BX
 X X        X XX   BBX
 X X        X XX  BBBX
 XXX        X XXXXXXXX
            XXX       
`,
6: `
 XXX             XXXX
 X  XXXXXXXXXXXXX   X
XX                  X
XD                  X
XX                  X
 X                BBX
 XBB        X  B  XXX
 XBBB       XLBBB X  
 XBBBB      XXXXX X  
 XXXXX    XXX   XXX  
     X   BX          
     XX XXX          
      XXX            
`,
7: `
  X   XXXXX   XX   XXX  
 X X X     X X  X X   X 
 X  XX      XX   XX    X
 X   X       X    X    X
 X                    BX
 X                    BX
XX                   BBX
XD   B               XXX
XX   X B     X    XX X  
 X   X B    XX B LXXXX  
 XX  X BBB  XX BBBX     
  X  XXXXXX XXXXXXX     
  XX X    XXX           
   XXX                  
`,
8: `
 XXX       XXXX   XXXXXXX  
X   X     X    X X       X 
X    X   X     XX         X
XB    XXX    X X     XXX  X
XBB         XX      XX X  X
XXXX       XX          XD X
   XX            XX    XX X
  X    B X      X  X      X
  X    BX X    X   X      X
 X   XXX   X    X  X     BX
 X      X X      XX     BBX
X        X           XXXXXX
X            B            X
X    B      XXX          BX
X   XXX                 BBX
X        B       B  L  BBBX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
`,
9: `
        XXX         
       X   X        
      X     X  XXXXX
     X       XX    X
    X     B        X
   X      BB      BX
  X       XXX    BBX
 X            L XXXX
X             B    X
XD           XXX   X
XX    XX   X      BX
 X    XXB  XX   XXXX
 X    XXXXXXX  XX   
 XXX  X     X XX    
   X XX     XXX     
   XXX              
`,
10: `
   XXXXXXXXXXXXXXXXXXXXX   
 XX           X         X  
XXXXB       BBXB   BBB BXX 
X  XX  X   XXXXX  BXXX XX X
X   X  XX        XXX XXX  X
X   XX  XXBBBB            X
XD       XXXXXXX          X
XX        X   XXX        XX
 X     B   X X  XX        X
 X     X    X    XX       X
 XXXX  XX             XXXXX
   XXXXX      L           X
   X          X           X
   X         XX    XXXXXXXX
   X        XX           X 
   X          B         BX 
   XB    XXXXXXXXXXX   BBX 
   XBB  XX         XX BBBX 
   XXXXXX           XXXXXX 
`,
11: `
XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
X  X   X                    X
X     BXBB            XXXXX X
XB   XXX BXX     B  XX  D X X
XBB    XXX   L  B       X X X
XXX  BBX     X B          X X
X   XXXX      X  XXX   XXX  X
XB            X X      X  B X
XBB       XXX X XB    X  XXXX
XXXX B   XXX  X XXB  X B X  X
X           B XXX  BX   X   X
X   B     BB X   XXXX       X
X    XXXXXXXXX        XXXXX X
X              B   BXX    X X
XXXX           B   X    BBX X
XBXX   X    X          XXXX X
XXBXXX X    X   BBB B       X
XBXBXBXX    X        BBB    X
XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
`,
}

levelStarts = {
   1: [0,0],
   2: [0,0],
}