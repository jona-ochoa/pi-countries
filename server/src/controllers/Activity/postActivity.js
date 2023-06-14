const {Activity, Country} = require('../../db')

const postActivity = async(name,difficulty,duration,season,countries) => {
    if(!countries) throw Error('You Must Provide a Country')

    if(![name,difficulty,duration,season].every(Boolean)) throw Error('Missing data')
    
    Array.isArray(countries) ? countries : [countries];

    const [newActivity,created] = await Activity.findOrCreate({where:{
        name,
        difficulty,
        season,
        duration
    }})

    await newActivity.addCountries(countries)

    return newActivity

}

module.exports = {
    postActivity
}