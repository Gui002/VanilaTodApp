<?php
require 'GestorTarefas.php';
require 'Tarefa.php';


$tarefas = new GestorTarefas();
$task1 = new Tarefa('Lavar Roupa');
$task2 = new Tarefa('Lavar Roupa');
$task3 = new Tarefa('Lavar Roupa');
$task4 = new Tarefa('Lavar Roupa');
$task5 = new Tarefa('Lavar Roupa');
$task6 = new Tarefa('Lavar Roupa');
$tarefas->adicionar($task1);
$tarefas->adicionar($task2);
$tarefas->adicionar($task3);
$tarefas->adicionar($task4);
$tarefas->adicionar($task5);
$tarefas->marcarConcluida(1);
$tarefas->marcarConcluida(4);
$tarefas->listar();