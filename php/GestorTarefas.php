<?php
class GestorTarefas
{
  public array  $tarefas = [];


  public function adicionar(Tarefa $tarefa): void
  {
    $this->tarefas[] = $tarefa;
  }
  public function remover(int $id): void
  {
    unset($this->tarefas[$id]);
  }

  public function marcarConcluida(int $id): void
  {
    if (!isset($this->tarefas[$id])) return;
    $tarefa = $this->tarefas[$id]; 
    if ($tarefa instanceof Tarefa) {
      $tarefa->feito = true;
    }
  }

  public function listar(): void
  {
    foreach ($this->tarefas as $tarefa) {
      if ($tarefa instanceof Tarefa) {
        echo "Tarefa :", $tarefa->texto, " Estado :", ($tarefa->feito ? "FEITO" : "AINDA POR FAZER"), "\n";
      }
    }
  }
}
