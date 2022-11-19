import {Cancha} from "./cancha.model.js";
import {Deporte} from "./deporte.model.js";
import {Complejo} from "./complejo.model.js";
import {Persona} from "./persona.model.js";
import {Alquiler} from "./alquiler.model.js";

// Relaciones de cancha
Deporte.hasMany(Cancha);
Cancha.belongsTo(Deporte);

Complejo.hasMany(Cancha);
Cancha.belongsTo(Complejo);

Cancha.hasMany(Alquiler);
Alquiler.belongsTo(Cancha);

Persona.hasMany(Alquiler);
Alquiler.belongsTo(Persona);


export { Cancha, Deporte, Complejo };
