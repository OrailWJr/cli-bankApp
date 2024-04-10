import { BankAccount, Person } from "./person";
import { input } from "@inquirer/prompts";


export async function setUpNewAccount() {
        const newPerson = new Person(await input({ message:'what is your name? '}));
        const newAccount = new BankAccount(newPerson, 0);
        console.log(`Congratulations ${newAccount.getUser()}, welcome to the Big Leagues.\n`);
        return newAccount
    }

