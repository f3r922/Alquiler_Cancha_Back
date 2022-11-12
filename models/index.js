import {Cancha} from "./cancha.model.js";
import {Deporte} from "./deporte.model.js";
import {Complejo} from "./complejo.model.js";

// Relaciones de cancha
Deporte.hasMany(Cancha);
Cancha.belongsTo(Deporte);

Complejo.hasMany(Cancha);
Cancha.belongsTo(Complejo);


export { Cancha, Deporte, Complejo };
