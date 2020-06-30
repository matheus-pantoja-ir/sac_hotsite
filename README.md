# BASE ACCESSIBLE HOTSITE
template base com 100% de acessibilidade pelo [ASES](http://asesweb.governoeletronico.gov.br/ases/)

## Desenvolvimento
Para iniciar o desenvolvimento, basta seguir os seguintes codigos:
``` shell
$ npm install
$ npm start
```
> Live server http://localhost:1234

## Publicação
para minificar e publicar:
``` shell
$ npm run build
``` 
> Sera gerada um pasta `build` onde estarão todos os arquivos minificados.
> Caso queira trocar o path `/path` basta trocar no package.json a o valor na flag `--public-url`, não esquece de iniciar com `/` e tambem trocar o valor depois depois da barra em `--out-dir build/path`

## Teste
para rodar o teste de acessibilidade:
``` shell
$ npm run test
```
> Sempre fazer um teste prelimidar no site da [ASES](http://asesweb.governoeletronico.gov.br/ases/)
 