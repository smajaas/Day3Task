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
  
                 let x = "";
                 for (let key in student) {
                  if (student.hasOwnProperty(key)); {
                    let x = "";
                    console.log(student[key].Id,student[key].name);

                  }
                   }