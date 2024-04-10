import { input } from "@inquirer/prompts";

export async function menuOptions(question: string): Promise<number> {
    let isValid = false;
    let number: number = 0;
    console.log(question);
    while (!isValid) {
        const answer = await input({ message: ''});
        number = parseInt(answer);

        if (!isNaN(number)) {
            if (number >= 1 && number <= 5){
                isValid = true;
            }else {
                console.log('Please enter a valid number between 1 and 5');
            }
            
        } else {
            console.log('Please enter a valid number.');
        }
    }

    return number;
}

export async function validateFunds(question: string, deposit: boolean = true ): Promise<number> {
    let isValid = false;
    let number: number = 0;
    console.log(question);
    while (!isValid) {
        const answer = await input({ message: ''});
        number = parseInt(answer);

        if (!isNaN(number)) {
            if (number > 0){
                isValid = true;
            }else {
                console.log('Please enter a valid number greater than 1');
            }
            
        } else {
            console.log('Please enter a valid number.');
        }
    }
    deposit ? console.log(`Your total of $${number} has been deposited\n`): 
            console.log(`Your total of $${number} has been withdrawn\n`);
    return number;
};


//Ai produced function as a result of wanting a pause in execution
export function pauseExecution(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
};