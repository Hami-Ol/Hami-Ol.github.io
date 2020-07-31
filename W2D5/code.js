//Q 1
String.prototype.filter = function(banned){

    if(this.includes(banned)){
      let str=this.toString();
      this.toString=str.replace(banned,"");
  
        
    }
  
      return this.toString;
  
      
  }
  const string = "This house is not nice!";
  console.log(string.filter('not'));
  
  
  //Q 2
  
  
  Array.prototype.bubbleSort = function() 
  {
  var is_sorted = false;
   while (!is_sorted) 
   {
      is_sorted = true;
      for (var n = 0; n < this.length - 1; n++) 
      {
        if (this[n] > this[n+1]){
          var x = this[n+1];
          this[n+1] = this[n];
          this[n] = x;
          is_sorted = false;
        }
      }
    }
    return this;
  };
  
  console.log([6,4,0, 3,-2,1].bubbleSort());
  
  //Q 3
  
  var Person = function() {};
  
  Person.prototype.initialize = function(name, age)
  {
      this.name = name;
      this.age = age;
  }

  
  var Teacher=function() {};
  Teacher.prototype = new Person();
  
  Teacher.prototype.teach=function(subject)
  {
  
      console.log(this.name + " is now teaching " + subject);
      return this.name + " is now teaching " + subject;
  }
  
  var t = new Teacher();
  
  t.initialize("Sifa", 25);
  t.teach("Inheritance");
  
  