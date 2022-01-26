function generateRandomNumber(num){
    // return num from 0 to num-1
    return Math.floor(Math.random()*num)
}
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'great luck'],
    advice : ['go out and eat', 'not read this', 'play more', 'trust no one'],
}
let personalWisdom = [];

for (let prop in collectiveWisdom){
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
    switch (prop){
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        default:
            personalWisdom.push('There is not enough info.')
            break
    }
}

function formatWisdom(wisdom){
    if (wisdom[0].includes('star')){
        let idx = wisdom[0].indexOf('star');
        wisdom[0]= wisdom[0].substring(0,idx+5) + ' ✵ ' + wisdom[0].substring(idx+5)
    }
    if (wisdom[0].includes('moon')){
        let idx = wisdom[0].indexOf('moon');
        wisdom[0]= wisdom[0].substring(0,idx+5) + ' ☾ ' + wisdom[0].substring(idx+5)
    }
    if (wisdom[0].includes('comet')){
        let idx = wisdom[0].indexOf('comet');
        wisdom[0]= wisdom[0].substring(0,idx+6) + ' ☄ ' + wisdom[0].substring(idx+6)
    }
    if (wisdom[0].includes('sun')){
        let idx = wisdom[0].indexOf('sun');
        wisdom[0]= wisdom[0].substring(0,idx+4) + ' ☉ ' + wisdom[0].substring(idx+4)
    }
    if (wisdom[1].includes('terrible luck')){
        wisdom.unshift('😟');
    }
    if (wisdom[1].includes('bad luck')){
        wisdom.unshift('🙁');
    }
    if (wisdom[1].includes('ok luck')){
        wisdom.unshift('😙');
    }
    if(wisdom[1].includes('great luck')){
        wisdom.unshift('🥳');
    }
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);