// 90 <= score <= 100 'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60  'F'






function getGrade (s1, s2, s3) {
    // Code here
    var ave = (s1+s2+s3)/3
    var grade = ave >= 90 ? "A" : ave >= 80 ? "B" : ave >= 70 ? "C" : ave >= 60 ? "D" : "F"
    
    return grade;
  }