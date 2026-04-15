function recursividade(string) {
    if(string.length === 0) {
        return 0; // condição base
    }

    return 1 + recursividade(string.substring(1)); // chamada recursiva com a string menos o primeiro caractere
}

console.log(recursividade("Hello"));
