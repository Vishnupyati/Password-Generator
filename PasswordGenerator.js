//Password generator can be used in Signin web-pages 


class  Password{
    constructor(){
       console.log("Password Generator")
       this.pass=""
    }
 
    generatepassword(len){
       let char="ABCDEFGHIJKLMNOPQRSTWEXYZ"
       let numbers="1234567890"
       let speschar="!@#$%^&*()_+"
 
     if(len<3)
       {
          console.error("Your password should  be atleast 3 Characters")
       }
 
     else{
          let i=0
 
     while(i<len){
       this.pass+=char[Math.floor(Math.random() * char.length)]
       this.pass+=numbers[Math.floor(Math.random() * numbers.length)]
       this.pass+=speschar[Math.floor(Math.random() * speschar.length)]
       i+=3
       // console.log("I is",i)
     }
     this.pass=this.pass.substr(0,len)
     return this.pass
 
       }
    }
    
 }
   let p= new Password()      
   console.log("Generated password : ",p.generatepassword(9))