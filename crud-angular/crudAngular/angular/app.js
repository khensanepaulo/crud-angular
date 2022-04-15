/**
 * Created by Róger Rezende on 14/06/2017.
 */

var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

    $scope.novoCliente = {};
    $scope.clienteSelecionado = {};

    $scope.clientes = [

    ];

    $scope.salvar = function () {
        $scope.clientes.push($scope.novoCliente);
        $scope.novoCliente = {};
    };

    $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
    };

    $scope.alterarCliente = function () {

    };

    $scope.excluirCliente = function () {
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
    };


    const cep = document.getElementById("CEP");
    cep.addEventListener("blur", (e) => {

        let Cep = document.getElementById("CEP").value;
        let search = CEP.value.replace("-", "")

        fetch('https://viacep.com.br/ws/' + search + '/json/').then((response) => {
            response.json().then(data => {
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("endereco").value = data.logradouro;
                document.getElementById("cidade").value = data.localidade;

                document.setElementById("bairro").value = data.bairro;
                document.setElementById("endereco").value = data.logradouro;
                document.setElementById("cidade").value = data.localidade;


            })
        })
    })



});