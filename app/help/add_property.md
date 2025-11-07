# Adicionar propriedade em um endpoint  

Abra o arquivo do endpoint no local: '`api_yaml_files\paths\<api_name>\<file_name>`' (os nomes de arquivos de endpoint começam com '`public`').  
Na próxima linha após o comentário `# Parâmetros da requisição`, escreva o snippet `'add_property'` ou `'add_property_array'` e pressione `tab` para que seja inserido um template de adição de parâmetro.  

## Snippets  

### add_property  
Snippet para adicionar uma propriedade de tipo primitivo  

### add_property_array  
Snippet para adicionar uma propriedade de tipo array
__________________________________________________________  

### Nota  
Se for o primeiro parâmetro a ser inserido no endpoint, antes do parâmetro deve haver uma linha com o código `parameters: ` e na outra linha o parâmetro.  

### Exemplo
```yaml
# Parâmetros da requisição
parameters:  
  # Exemplo de um parâmetro array
  - name: <nome_do_parametro>
    in: query|path    
    required: false|true
    example: '<valor_de_exemplo>'
    schema:
      type: array
      items: 
        type: integer
  # Exemplo de um parâmetro comum
  - name: <nome_do_parametro>
    in: query|path    
    required: false|true
    example: '<valor_de_exemplo>'
    schema:
      type: string
```