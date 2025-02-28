function ticketSystem(){
    let fullName=prompt("Enter your full name : ");
    if(!fullName || !/^[a-zA-Z]+$/.test(fullName)){
        alert("\u274C Ticket Purchase Denied due to invalid name input!");
        return;
    }
    let amount=Number(prompt("Enter amount : "));
    if(amount !== 10000){
        alert("\u26A0 Ticket Purchase Denied due to insufficient amount!"+"\nAmount must be 10,000.");
        return;
    }
    let age=Number(prompt("Enter your age : "));
    if(age<18){
        alert("\u{1F6AB} Ticket Purchase Denied due to age restriction!"+"\nAge must be 18 or above.");
        return;
    }
    let gender=prompt("Specify your gender (male/female)").toLowerCase();
    let isMale=gender==='male';
    let isFemale=gender==='female';
    if(!isMale && !isFemale){
        alert("\u26A0 Invalid gender entered!");
        return;
    }
    if(amount===10000 && age>=18 && gender==='male'){
        alert("\u2705 Congratulations!"+"\nTicket Purchased!\nGo to Male VIP enclosure." +"\nFull Name : " + fullName + "\nAge : " + age + "\nGender : Male" + "\nAmount Received : " + amount);
    }
    else if(amount===10000 && age>=18 && gender==='female'){
        alert("\u2705 Congratulations!"+"\nTicket Purchased!\nGo to Female VIP enclosure." +"\nFull Name : " + fullName + "\nAge : " + age + "\nGender : Female" + "\nAmount Received : " + amount);
    }
}

