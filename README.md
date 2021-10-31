# Fintuity Editor
Fintuity's build for CKEditor

## Examples:
```shell
$ npm install @fintuity/fintuity-editor --save 
```

```javascript
import FintuityEditor from '@fintuity/fintuity-editor';

FintuityEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        console.log( 'Editor was initialized', editor );
    })
    .catch( error => {
        console.error( error.stack );
    });
```
