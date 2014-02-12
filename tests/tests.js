var assert = chai.assert;

suite('Prueba de valores separados por coma', function() {
    test('Devuelve cadena?', function() {
        original.value = "holaaaaaaa, adios";
        calculate();
        assert.isString(finaltable.innerHTML);
    });
    test('Crea y guarda los datos en una tabla?', function() {
        original.value = "juan, pepe";
        calculate();
        assert.deepEqual(finaltable.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>juan</td>                                  <td> pepe</td>              </tr>\n</tbody></table>');
    });
    test('Acepta comillas escapadas?', function() {
        original.value = "Ese \"hey \", adios";
        calculate();
        assert.deepEqual(finaltable.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>Ese "hey </td>                                  <td> adios</td>              </tr>\n</tbody></table>');
    });
});