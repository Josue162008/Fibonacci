function enviar(){
    function fibonacci(n) {
        if (n <= 1) return [0];
        if (n === 2) return [0, 1];
      
        var fib = [0, 1];
        
        for (let i = 2; i < n; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
        }
        
        return fib;
      }
      
      var resultado = fibonacci(10);
      console.log(resultado)
      document.getElementById('resultado').innerHTML = `
        <h1>${resultado}</h1>
      `    
}
  