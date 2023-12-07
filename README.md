# Pomodoro Clock

-  Observação:  Anteriormente a função de mudar os segundos era chamada no click do botão iniciar
 entretanto quando um setInterval é chamado em uma função ele vai guardar os valores dos states
 ou seja mesmo que os states estejam sendo mudados do lado de "fora" da função , a função
 vai sempre usar os valores dos states quando ela foi chamada ou seja, Temos um state com valor 10
 e quando a função for chamada a mesma so vai lembrar do valor 10 ou seja mesmo que você altere
 através de um set, dentro da função ele vai continuar sendo 10, então a opção
 foi usar um useEffect e alterar o setInterval para setTimeout para que a cada segundo ele altere
 o segundo e quando ele alterar(quando terminar o tempo de 1sec) ele vai chamar a função de novo 
 pois coloquei o segundo e o minuto como dependencia do useEffect para que cada vez que termine o 
 setTimeout ele pegue os valores mais atuais dos states

