
export const LoginStart = (user) => ({

    type:"LoginStart"


});

export const LoginSuccess = (user) => ({

    type:"LoginSuccess",
    res: user,

});


export const LoginFail = (error) => ({

    type:"LoginFail",
    res:error

});

