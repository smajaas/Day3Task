let student = [ {
    "name" : "Arun",
    "Id" : "2567",
    "dept" : "Computer Science"
  },
   
                 {
    "name" : "Selva",
    "Id" : "2588",
    "dept" : "Mechanical"
                },
                 {
     "name" : "David",              
    "Id" : "25588",
    "dept" : "Civil"
                 }];
  
                 student.forEach(function(x) {
                     console.log("NAME: " + x.name);
                     console.log("ID: " + x.Id);
                     console.log("DEPT: " + x.dept);
                 });