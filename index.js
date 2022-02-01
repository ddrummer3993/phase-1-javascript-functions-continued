// create function: saturdayFun

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// create function: mondayWork

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

// create function: wrapAdjective

function wrapAdjective(flair = '*') {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`;
    };
};

