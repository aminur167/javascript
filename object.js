function MyInfo(YourName,Village,PhoneNo)
{
    this.YourName=YourName;
    this.Village=Village;
    this.PhoneNo=PhoneNo;
    this.ShowMe=function()
    {
        console.log(this.YourName);
        console.log(this.Village);
        console.log(this.PhoneNo);
    }
}

var NewObj=new MyInfo("Aminur","Bogura",12345678);
var NewObj1=new MyInfo("Momin","Bogura",45678888);
var NewObj2=new MyInfo("Hanif","Bogura",12378888);


NewObj.ShowMe();
NewObj1.ShowMe();
NewObj2.ShowMe();


