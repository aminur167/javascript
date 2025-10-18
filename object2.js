function MyInfo(YourName,Village,PhoneNo)
{
    this.YourName=YourName;
    this.Village=Village;
    this.PhoneNo=PhoneNo;
}

var NewObj=new MyInfo("Aminur","Bogura",12345678);
var NewObj1=new MyInfo("Momin","Bogura",45678888);
var NewObj2=new MyInfo("Hanif","Bogura",12378888);
console.log(NewObj);
console.log(NewObj1);
console.log(NewObj2);