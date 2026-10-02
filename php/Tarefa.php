<?php

class Tarefa
{
    public string $texto;
    public bool    $feito = false;

    public function __construct(string $texto)
    {
        $this->texto = $texto;
        $this->feito = false;
    }
}
