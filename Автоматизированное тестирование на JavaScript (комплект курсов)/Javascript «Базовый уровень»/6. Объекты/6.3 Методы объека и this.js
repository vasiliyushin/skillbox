/*
let me = {
    birthDate: {year: 1991, month: 3, day: 14},
    age: 29,// но через год например инфу нужно актуаизировать например
    //..другие свойства
};
*/

let me = {
    birthDate: {year: 1991, month: 3, day: 14},
    //getAge: function()
    getAge() {
        let now = new Date();
        let born = new Date(
            this.birthDate.year,
            this.birthDate.month + 1,
            this.birthDate.day
        );
        let diffInMilliseconds = now.getTime() - this.birthDate.getTime();
        return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 362.25);
    },
    //..другие свойства
};

console.log(me.getAge()); //сейчас мне 29