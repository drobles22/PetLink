
export const LoginStart = (Ucredentials) => ({

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

export const Follow = (userId) => ({
    type: "FOLLOW",
    res: userId,
  });
  
  export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    res: userId,
  });

