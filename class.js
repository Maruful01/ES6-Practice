class student {
    constructor (sId, sName) {
      this.Id = sId;
      this.Name = sName;
      this.Department = "Sociology & Antheopology"
      this.University = "Green University of Bangladesh"
    }
}
const student1 = new student (18, "S.A Sumon");
const student2 = new student (02, "Rafi Uddin");
const student3 = new student (15, "Liman Jannat");

console.log (student1, student2, student3);