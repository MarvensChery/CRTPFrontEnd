function toggleteacher(){
    document.getElementById("student-toggle").style.backgroundColor="#fff";
     document.getElementById("student-toggle").style.color="#222";
     document.getElementById("teacher-toggle").style.backgroundColor="#4eb0e9";
     document.getElementById("teacher-toggle").style.color="#fff";
     document.getElementById("student-form").style.display="none";
     document.getElementById("teacher-form").style.display="block";
 }
 
 function togglestudent(){
     document.getElementById("student-toggle").style.backgroundColor="#4eb0e9";
     document.getElementById("student-toggle").style.color="#fff";
     document.getElementById("teacher-toggle").style.backgroundColor="#fff";
     document.getElementById("teacher-toggle").style.color="#222";
     document.getElementById("teacher-form").style.display="none";
     document.getElementById("student-form").style.display="block";
 }