import Chance from 'chance';

const chance=Chance();

//it is a function not a component  
export const fakeUserData=()=>{
    console.log(chance.name({middle:true}));
    return chance.name({middle:true});
}

