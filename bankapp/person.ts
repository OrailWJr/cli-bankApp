/**
 * create a perrson class
 */

export class Person {
    fname: string

    constructor(name: string){
        this.fname = name
    }

    public getUser(){
        return this.fname
    }
};

export class BankAccount extends Person {
    owner: Person
    private balance: number

    constructor(owner: Person, balance: number) {
        super(owner.fname);
        this.owner = owner;
        this.balance = balance;
    };

    public depositFunds(deposit: number){
        this.balance += deposit
        return this.balance
    };
    public withdrawFunds(withdrawl: number){
       if ( this.balance - withdrawl < 0){
            return "Insufficient Funds"
       }
       return this.balance -= withdrawl
    };
    public displayFunds(){
        return console.log(`Your current balance is $${this.balance}.\n\n`)
     };

}

export {}