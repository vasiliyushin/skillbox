let motherBoard = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
};

let cpu = {
    coreCount: 8,
    cpuManufacturer:'AMD',
    socket: 'AM4',
};

let videoCard = {
    videoCadModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
};

let ram = {
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency:3200,
};

let computer ={
    price: 10000,
    ...motherBoard,
    //свой-во socket из объекта motherBoard будет заменено на такое же свойство из cpu т.к. cpu идет ниже в описании computer
    ...cpu,
    ...videoCard,
    ...ram, 
}

let computerWithAssign = Object.assign(
    //целевой объект, в котором будет замещены следующие
    {
        price: 1000000000
    },
    //объекты подмешиваются в первый
    motherBoard, cpu, videoCard, ram,
);

console.log(computer);
console.log(computerWithAssign);