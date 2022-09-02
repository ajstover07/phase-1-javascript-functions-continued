// code your solution here
function saturdayFun(plans="roller-skate"){
    return (`This Saturday, I want to ${plans}!`)
}

// saturdayFun()
// saturdayFun("bathe my dog!")


function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}

let wrapAdjective = function(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}