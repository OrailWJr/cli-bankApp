import { menuOptions, validateFunds, pauseExecution } from "./utils";
import { setUpNewAccount } from "./accountSetup";

const __main__ = async (owner: any = null) => {
    const welcomeMessage = 'welcome to LBJ Banking. How can we help you today?\n 1. Open Account\n 2. Deposit\n 3. Withdraw\n 4. View Balance\n 5. Exit\n';
    const option = await menuOptions(welcomeMessage);
    
    if (option === 1){
        owner = await setUpNewAccount();
        await pauseExecution(4000);
    }   
    else if (option === 2) {
        if (owner === null) {
            console.log('Please open an account to be able to deposit funds\n');
            await pauseExecution(5000);
        }
        else {
            await owner.depositFunds(await validateFunds('Enter your Deposit amount.'));
            await pauseExecution(5000);
        }
    }   
    else if (option === 3) {
        if (owner === null) {
            console.log('Please open an account to be able to deposit funds\n');
            await pauseExecution(3000);
        }
        else {
            await owner.withdrawFunds( await validateFunds('Enter your Withdrawl amount.'));
            await pauseExecution(3000);
        }
            
    }   
    else if (option === 4) {
        if (owner === null) {
            console.log('Please open an account first\n');
            await pauseExecution(3000);
        }
        else {
            await owner.displayFunds();
            await pauseExecution(3000);
        }
            
    }   
    else if (option === 5) {
            process.exit(1);
        }

    __main__(owner);
};

__main__();
