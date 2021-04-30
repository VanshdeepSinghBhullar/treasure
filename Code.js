//some constant answers to the asked questins 
const accessCode1 = "Variable";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {
    
    //intro
    fill("white");
    textSize(22);
    text("Answer the questions truely to unlock the Genie's secret treasury !!", 80, 480);

    //1st quiz
    fill("white");
    textSize(15);
    text("REVBAILA", 100,50);
    fill("lightblue");
    text("Hint: Always Changing ", 100,70);
    text("not constant !!", 100,85);

    //2nd quiz
    fill("white");
    textSize(15);  
    text("C U T N I F O N", 700,50);
    fill("lightblue");
    text("Hint: A short sections of code written to ", 700,70);
    text("complete a task !! ", 700,85);

    //3rd quiz
    fill("white");
    textSize(15);
    text("ATEDASBA", 400,250);
    fill("lightblue");
    text("Hint: Stores All ", 400,270);  
    text(" Imformation!!", 400,285);  
}