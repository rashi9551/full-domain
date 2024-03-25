function *sample(){
    console.log("aaaarambikkatta");
    yield 10;
    console.log("thudakkam");
    yield 20;
    console.log("odukkam");
}

const gen=sample()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());