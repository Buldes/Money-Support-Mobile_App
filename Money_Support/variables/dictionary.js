export var currentUserData = []

export const setCurrentUserData = (value) => {
    currentUserData = value
}

export const setToWelcomeData = () => {
    const currentDate = new Date()

    setCurrentUserData([
        {"id":0, "state":"Initialization", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":0, "bankBalance":0},
        {"id":1, "state":"Income", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":1, "bankBalance":0},
        {"id":2, "state":"Expenditures", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":0.5, "bankBalance":0}
    ])
}