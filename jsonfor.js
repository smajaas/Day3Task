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
  
  for (let i=0;i<student.length;i++)
    {
      let result = student[i];
      console.log(result.name,result.Id);
    }
  