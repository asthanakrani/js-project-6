class school {

    constructor(Name,Email,Contact) {
        this.Name = Name;
        this.Email = Email;
        this.Contact = Contact;
    }  
    student() {
        document.getElementById('stu').innerHTML = ( `StudentName: `+ this.Name + `<br> Email: `+ this.Email + ` <br>Contact: `+ this.Contact);
    } 
    faculty() {
    document.getElementById('fac').innerHTML = ( `Faculty Name: `+ this.Name + ` <br> Email: `+ this.Email + `  <br>Contact: `+ this.Contact);
    } 
    peon() {
        document.getElementById('peo').innerHTML = ( ` Peon Name: `+ this.Name + ` <br> Email: `+ this.Email + ` <br> Contact: `+ this.Contact);
    } 
}
let s1 = new school('Astha','astha@gmail.com','45982187952');
s1.student();

let f1 = new school('keyur sir','keyur@gmail.com','45982187952');
f1.faculty();

let p1 = new school('bhavesh','bhavesh@gmail.com','45982187952');
p1.peon();
