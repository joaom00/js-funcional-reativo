// Os dois tipos...
// 1. Operadores de Criação
import { of } from "rxjs";

// 2. Operadores Encadeáveis (Pipeable Op.)
import { last, map } from "rxjs/operators";

of(1, 2, "ana", false, "último")
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `A letra encontrada foi: ${v}`)
  )
  .subscribe(console.log);
