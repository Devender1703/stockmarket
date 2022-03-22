

export let NiftyTracker = [];
export const Niftyage = 20;
const NiftIndex = 17061;
export const PresentDate = new Date();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genrateDataForYears(years)
{
    for(var i = 1; i <= years; i++) {
        NiftyTracker.push(getRandomInt(0, 20000));
    }

    NiftyTracker.push(NiftIndex);
}

genrateDataForYears(Niftyage);