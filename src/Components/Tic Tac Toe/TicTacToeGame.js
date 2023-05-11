import TicStyles from './TicTacToeGame.module.css';

import { useState } from 'react';


export function GameTicTacToe() {

    const [userInput, setUserInput] = useState(Array(9).fill("")); // user will store data in this state............... 

    const [defaultValue, setDefaultValue] = useState("X");


    //to see the user has clicked on not (initial stage of this project)...................

    function handleRenderOnClick(elementGet) { //unsing this element to check the particular box clicked............... 

        let userTouch = [...userInput];

        // to restrict the change of X to O too many times ..............................................

        if (userInput[elementGet] !== '') {
            alert('Already Clicked Try Again');
            return
        }

        userTouch[elementGet] = defaultValue;
        setUserInput(userTouch);

        // to get the alternate moves we are using if condition............................................. 

        if (defaultValue === "X") {
            setDefaultValue("O");
        }
        else {
            setDefaultValue("X");
        }

        if (WinnerHurrayCheckPart(userTouch)) {
            alert('Winner Player A')
            userTouch.fill(" ");
            setUserInput(userTouch);
        }


        if (DrawMatch(userTouch)) {
            alert('Match Draw Stop The Game');
            userTouch.fill("");
            setUserInput(userTouch);
        }

        // console.log('This box is clicked', elementGet)
    }

    // to check if it draw or not..................................................................


    function DrawMatch(userInput) {
        let count = 0;
        userInput.forEach(drawChecking => {
            if (drawChecking !== "") {
                count++;
            }
        });


        if (count >= 9) {
            return true;
        }
        else {
            return false;
        }
    }

    // to check the winner in this game ....................................................

    function WinnerHurrayCheckPart(userInput) {
        const winningTerms = [

            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];


        let flag = false;
        winningTerms.forEach(inputs => {

            if (userInput[inputs[0]] !== "" && userInput[inputs[1]] !== "" && userInput[inputs[2]] !== "") {

                if (userInput[inputs[0]] === userInput[inputs[1]] && userInput[inputs[1]] === userInput[inputs[2]]) {
                    flag = true;
                }
            }
            // console.log(inputs);
        });
        return flag;
    }


    return (
        <>
            <div className={TicStyles.main_content_1}>
                <h1>Tic Tac Toe Game </h1>
            </div>

            <table>
                <tbody>
                    <tr>
                        <td onClick={() => { handleRenderOnClick(0) }}>{userInput[0]}</td>
                        <td onClick={() => { handleRenderOnClick(1) }} >{userInput[1]}</td>
                        <td onClick={() => { handleRenderOnClick(2) }} >{userInput[2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleRenderOnClick(3) }} >{userInput[3]}</td>
                        <td onClick={() => { handleRenderOnClick(4) }} >{userInput[4]}</td>
                        <td onClick={() => { handleRenderOnClick(5) }} >{userInput[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleRenderOnClick(6) }} >{userInput[6]}</td>
                        <td onClick={() => { handleRenderOnClick(7) }} >{userInput[7]}</td>
                        <td onClick={() => { handleRenderOnClick(8) }} >{userInput[8]}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

