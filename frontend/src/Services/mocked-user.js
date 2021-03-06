/**
 * Get user infos
 * @function mockedGetUser
 * @param { object } user data mocked
 * @param { number } id user id
 * @returns { string } every user datas
 */

export const mockedGetUser = (user, id) => { 
    let firstname
    let score
    let todayScore
    let userInfos
        user.forEach(user =>  {
            if(user.id === id) {    
                firstname = user.userInfos.firstName
                score = user.score
                todayScore = user.todayScore
                userInfos = user.keyData
            }
        })
    return {firstname, score, todayScore, userInfos}
}

/**
 * Get datakey of the user
 * @function mockedGetKeyDatas
 * @param { object } user response data from mocked data
 * @param { object } id user id
 * @returns { object } object with every data key (calorieCount, proteinCount...)
 */

export const mockedGetKeyDatas= (user, id) => {
    let calorieCount
    let proteinCount
    let carbohydrateCount
    let lipidCount
        user.forEach(user => {
            if(user.id === id) {
                calorieCount = user.keyData.calorieCount
                proteinCount = user.keyData.proteinCount
                carbohydrateCount = user.keyData.carbohydrateCount
                lipidCount = user.keyData.lipidCount
        }
    })
    return { calorieCount, proteinCount, carbohydrateCount, lipidCount}
}

/**
 * Get the user sessions
 * @function mockedGetSession
 * @param { object } user response data from mocked data
 * @param { number } id user id
 * @returns { array } array with user session
 */

export const mockedGetSession = (user, id) => {
    let session
        user.forEach(user => {
            if(user.userId === id) {
                session = user.sessions
            }
        })
        return session
}

/**
 * Get the user performance
 * @function mockedPerformance
 * @param { object } user response data from mocked data
 * @param { number } id user id
 * @returns { array }
 */

export const mockedPerformance = (user, id) => {  
    let performance
        user.forEach(el => {
            if(el.userId === id)
                performance = el
        })

    let title = performance.kind
    let values = performance.data.map(el => el.value)
    let titles = Object.values(title)
    let array = []
    let i = 0; 

    do {                                   
        array.push({title: titles[i], value: values[i]})
        i +=1  
    } while (i < titles.length)

        return {array}
}