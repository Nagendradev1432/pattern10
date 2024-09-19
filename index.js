let rows=10
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?rows-i:i-rows;
    res=""
    for(k=1;k<=spaces;k++){
        res=res+" "
    }
    for(j=1;j<=cols;j++){
        res=res+"* "
    }
    console.log(res)
}

         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
 * * * * * * * * * 
  * * * * * * * * 
   * * * * * * * 
    * * * * * * 
     * * * * * 
      * * * * 
       * * * 
        * *
         *

let rows=5
for(i=1;i<=rows;i++){
    res=""
    for(k=1;k<=i-1;k++){
        res=res+" "
    }
    for(j=rows-i;j>=0;j--){
        res=res+"* "
    }
   console.log(res)
}
for(i=2;i<=rows;i++){
    res=""
    for(k=1;k<=rows-i;k++){
        res=res+" "
    }
    for(j=1;j<=i;j++){
        res=res+"* "
    }
    console.log(res)
}

* * * * * 
 * * * * 
  * * * 
   * * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 

let rows=5;
for(i=1;i<=2*rows-1;i++){
  cols=(i<=rows)?rows-i+1:i-rows+1;
  spaces=(i<=rows)?i-1:2*rows-i-1;
  res=""
  for(k=1;k<=spaces;k++){
      res=res+" "
  }
  for(j=1;j<=cols;j++){
      res=res+j+" "
  }
  console.log(res)
}

* * * * * 
 * * * * 
  * * * 
   * * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 



let rows=5;
for(i=1;i<=2*rows-1;i++){
  cols=(i<=rows)?rows-i+1:i-rows+1;
  spaces=(i<=rows)?i-1:2*rows-i-1;
 console.log(" ".repeat(spaces)+"* ".repeat(cols))
}

* * * * * 
 * * * * 
  * * * 
   * * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 

for()

let arr1=[1,1,2,3,4,4,5,2]
for(i of arr1){
    emp=[]
    for(!emp.includes(i)){
        emp.push(i)
    }
    
}
console.log(emp)
